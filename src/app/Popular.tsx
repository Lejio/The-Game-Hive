"use client";
import { useState, useEffect } from "react";
import React from "react";
import { type Popular } from "@/types/game";

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
    <div>
        <h1>Popular Games</h1>
        <ul>
            {popular.map((game, index) => (
            <li key={index}>{game.name}</li>
            ))}
        </ul>
    </div>
  );
}
