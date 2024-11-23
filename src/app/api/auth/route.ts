import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    console.log(process.env.TWITCH_CLIENT_ID);
    console.log(process.env.TWITCH_CLIENT_SECRET);
    
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
    
    const data = await res.json();
    return NextResponse.json(data);
}