import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <div className=" w-full m-10">
      <Card className="w-[60vw]">
        <CardHeader>
          <CardTitle className=" text-3xl">Your Recommended Game: Hollow Knight</CardTitle>
        </CardHeader>
        <CardContent>
          <h2>
            Based on your preferences for Breath of the Wild, Doom Eternal, and
            Pokemon Sword and Shield
          </h2>
          <p>
            Why You&apos;ll Like It: Exploration: Like Breath of the Wild, it offers
            a vast, interconnected world filled with secrets, lore, and
            beautiful art design.
            <br /><br />
            Combat: While not as fast-paced as Doom Eternal, its challenging
            combat requires precision and timing, offering a rewarding
            experience.
            <br /><br />
            Progression: Similar to Pokémon, you&apos;ll acquire abilities and
            upgrades that allow you to explore more of the map and grow
            stronger.
          </p><br />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
