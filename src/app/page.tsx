'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { Genre } from "@/types/genre";
import { NavMenu } from "@/app/NavMenu";
import Hero from "@/app/Hero";

export default function Home() {

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
    <div className=" h-[100vh] w-[100vw] flex flex-col justify-between">
      <nav className=" w-full flex justify-between align-middle mt-5 px-5">
        <FaGamepad className=" w-10 h-10" />
        <NavMenu />
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </nav>
      <main className=" w-full h-full flex flex-col gap-10">
        <Hero />
        <div>
          <div className=" flex flex-col">
            {genres.map((genre) => (
              <Link key={genre.id} href={`/genres/${genre.slug}`}>
                {genre.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className=" w-full flex justify-center mb-5">
        <div>
          <p>&copy; 2024 The Game Hive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}