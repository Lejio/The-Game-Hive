'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Genre } from "@/types/genre"

export default function GenreBar() {

    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
      const fetchGenres = async () => {
        try {
          const response = await fetch('/api/genres');
          setGenres(await response.json());
          console.log(genres);
        } catch (err) {
          console.error("Error fetching genres:", err);
        }
      };
    
      fetchGenres();
    }, []);

  return (
    <div className=' flex flex-col'>
        {genres.map((genre) => (
        <Link key={genre.id} href={`/genres/${genre.slug}`}>
            {genre.name}
        </Link>
        ))}
    </div>
  )
}
