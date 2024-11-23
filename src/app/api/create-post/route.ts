import { NextRequest, NextResponse } from "next/server"
import { Post } from "@/types/forum"
import mongodb from "@/lib/mongodb"

export async function POST(req: NextRequest) {
    const body: Post = await req.json();
    const client = await mongodb;
    const db = client.db("the-game-hive");
    const posts = db.collection("posts");

    const res = await posts.insertOne({
        user: body.user,
        post_title: body.post_title,
        post_date: new Date(body.post_date),
        upvotes: 0,
        tags: body.tags,
        related_game: body.related_game? body.related_game : null,
        post_content: body.post_content
    })
    console.log(res);
    return NextResponse.json(res);
}