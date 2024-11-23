import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";

type TwitchToken = {
    access_token: string;
    expires_in: number;
    token_type: string;
}

export async function GET(req: NextRequest) {
    
    const res = await fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: "client_credentials",
        }),
    })
    
    const data: TwitchToken = await res.json();
    redis.set("igdb_access_token", data.access_token);
    return NextResponse.json(data);
}