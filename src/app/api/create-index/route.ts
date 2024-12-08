import { NextResponse } from "next/server"
import mongodb from "@/lib/mongodb"

export async function GET() {
    const client = await mongodb;
    const db = client.db("the-game-hive");
    const posts = db.collection("posts");

    const res = await posts.createIndex({ user: 1, post_title: 1, post_date: 1, upvotes: -1, tags: 1, related_game: 1, post_content: 1 });

    console.log(res);
    return NextResponse.json(res);
}