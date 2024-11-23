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

export async function GET(req: NextRequest) {

    const token = await getToken();
    return NextResponse.json({ token: token });
}