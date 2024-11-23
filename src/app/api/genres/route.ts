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

const getGenres = async (token: string) => {
    const res = await fetch('https://api.igdb.com/v4/genres', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': process.env.TWITCH_CLIENT_ID as string,
            'Authorization': `Bearer ${token}`,
        },
        body: 'fields name, slug, url; limit 50;'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });

    return res;
}

export async function GET(req: NextRequest) {

    const token = await getToken();
    let genres = await getGenres(token);
    if (!genres) {
        const refreshToken: string = await fetch('/api/auth').then(res => res.json()).then(data => data.access_token)
        genres = await getGenres(refreshToken)
    }

    return NextResponse.json(genres);
}