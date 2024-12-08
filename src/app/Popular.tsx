"use client";
import { useState, useEffect } from "react";
import React from "react";
import { type Popular } from "@/types/game";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Popular() {
  const [popular, setPopular] = useState<Popular[]>([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await fetch("/api/popular");
        setPopular(await response.json());
        console.log(popular);
      } catch (err) {
        console.error("Error fetching popular:", err);
      }
    };

    fetchPopular();
  }, []);

  return (
    <div className=" flex flex-row gap-5">
      <div className=" flex flex-col gap-5">
      <h1 className=" text-3xl">Popular Games</h1>
      <Carousel className="w-[50vw]"
      opts={
        {
          loop: true,
        }
      }
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      >
        <CarouselContent>
          {popular.map((game, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{game.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
    </div>
  );
}
