import { NextRequest, NextResponse } from "next/server"
import { Reply } from "@/types/forum"
import mongodb from "@/lib/mongodb"
// import { UUID } from "mongodb";

export async function POST(req: NextRequest) {
    const body: Reply = await req.json();
    const client = await mongodb;
    const db = client.db("the-game-hive");
    const replies = db.collection("replies");

    const res = await replies.insertOne({
        user: body.user,
        post_id: body.original_post_id,
        post_date: body.post_date,
        upvotes: body.upvotes,
        reply_content: body.reply_content
    })
    console.log(res);
    return NextResponse.json(res);
}