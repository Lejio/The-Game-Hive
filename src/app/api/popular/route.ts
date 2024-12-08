import { NextResponse } from "next/server";
import redis from "@/lib/redis";

const getToken = async () => {
    const cachedToken = await redis.get("igdb_access_token");
    if (!cachedToken) {
        const req = await fetch(`${process.env.BASE_URL}/api/auth`)
        const data = await req.json()
        return data.access_token
    }
    return cachedToken
}

const getPopular = async (token: string) => {
    const res = await fetch('https://api.igdb.com/v4/popularity_primitives', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.TWITCH_CLIENT_ID as string,
            'Authorization': `Bearer ${token}`,
        },
        body: 'fields game_id,value,popularity_type; sort value desc; limit 10; where popularity_type = 1;'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });

    return res;
}

export async function GET() {

    const token = await getToken();
    const game_ids = await getPopular(token);
    const game_information = [];
    for (let i = 0; i < game_ids.length; i++) {
        await sleep(500);
        game_information.push(await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_id: game_ids[i].game_id,
            })
        }).then(response => response.json()).catch(err => console.error(err)));
    }

    console.log(game_information);

    return NextResponse.json(game_information);
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}