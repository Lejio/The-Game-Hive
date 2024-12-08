import { NextResponse } from "next/server";
import redis from "@/lib/redis";

const getToken = async () => {
    const cachedToken = await redis.get("igdb_access_token");
    if (!cachedToken) {
        const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`)
        const data = await req.json()
        return data.access_token
    }
    return cachedToken
}

export async function GET() {

    const token = await getToken();

    const res = await fetch('https://api.igdb.com/v4/games', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.TWITCH_CLIENT_ID as string,
            'Authorization': `Bearer ${token}`,
        },
        body: 'fields name, rating, storyline;'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });

    return NextResponse.json(res);
}