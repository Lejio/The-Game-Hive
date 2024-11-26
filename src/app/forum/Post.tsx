import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Post({
  title,
  upvotes,
}: {
  title: string;
  upvotes: number;
}) {
  return (
    <Card className="w-[60vw]">
      <CardHeader>
        <div className=" flex flex-row gap-5">
          <div className=" flex flex-row gap-3">
            <FaArrowAltCircleUp size={25} />
            <p>{upvotes}</p>
          </div>
          <Separator orientation="vertical" />
          <CardTitle className=" align-middle text-center items-center text-xl">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
    </Card>
  );
}
