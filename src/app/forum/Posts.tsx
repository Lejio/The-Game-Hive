"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Post from "./Post";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Posts() {
  const [createPost, setCreatePost] = React.useState(false);

//   const Posts = [
//     {
//       title: "New Pokemon Speedrun World Record!",
//       upvotes: 123,
//     },
//     {
//       title: "Thoughts about new Path of Exile 2 Game?",
//       upvotes: 111,
//     },
//     {
//       title: "Switch 2 Rumors",
//       upvotes: 99,
//     },
//   ];

  const Posts = [
    {
      title: "New Pokemon Speedrun World Record!",
      upvotes: 123,
    },
    {
      title: "Thoughts about new upcoming Pokemon Game?",
      upvotes: 111,
    },
    {
      title: "Switch 2 Rumors and what we know so far",
      upvotes: 99,
    },
    {
        title: "Effects of the new Pokemon DLC on the competitive scene",
        upvotes: 85,
    },
    {
        title: "Pokemon Unite: Thoughts and Opinions",
        upvotes: 72,
    },
    {
        title: "Pokemon Legends: Arceus: What we know so far",
        upvotes: 65,
    }
  ];

  const handleCreatePost = () => {
    setCreatePost(!createPost);
  };

  return (
    <div className=" flex flex-col gap-5">
      <div className=" flex flex-row gap-5">
        <Input className=" w-[50vw]" type="search" placeholder="Search Posts" />
        <Button onMouseDown={handleCreatePost}>Search</Button>
      </div>

      {createPost ? (
        <Card className="w-[60vw]">
          <CardHeader>
            <CardTitle>Create a Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-col gap-5">
              <Input type="text" placeholder="Title" />
              <Input
                className="h-[10vh] pt-2 text-left leading-none placeholder:text-left"
                type="text"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Post</Button>
            <Button variant="destructive" onMouseDown={handleCreatePost}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Button variant="secondary" onClick={handleCreatePost}>
          Create Post
        </Button>
      )}
      {Posts.map((post, index) => (
        <Post key={index} title={post.title} upvotes={post.upvotes} />
      ))}
    </div>
  );
}
