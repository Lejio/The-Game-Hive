import { NextRequest, NextResponse } from "next/server";
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

const getGameById = async (gameId: number, token: string) => {
    try {
        const res = await fetch('https://api.igdb.com/v4/games', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': process.env.TWITCH_CLIENT_ID as string,
                'Authorization': `Bearer ${token}`,
            },
            body: `
                fields *;
                where id = ${gameId};
            `
        });

        // Ensure the response is valid
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data[0]; // Return the first result (should be the game with the specified ID)
    } catch (err) {
        console.error('Error fetching game by ID:', err);
        return null; // Handle error gracefully
    }
};


export async function POST(req: NextRequest) {
    const { game_id } = await req.json();
    const token = await getToken();
    let game_ids = await getGameById(game_id, token);

    return NextResponse.json(game_ids);
}