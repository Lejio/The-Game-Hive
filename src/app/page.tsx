import { FaGamepad } from "react-icons/fa";;
import { NavMenu } from "@/app/NavMenu";
import Hero from "@/app/Hero";
import Login from "@/app/Login";
import GenreBar from "./GenreBar";
import Popular from "./Popular";

export default function Home() {


  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col justify-between">
      <nav className=" w-full flex justify-between align-middle mt-5 px-5">
        <FaGamepad className=" w-10 h-10" />
        <NavMenu />
        <Login />
      </nav>
      <main className=" w-full flex flex-col gap-10">
        <div className=" h-[40vh]">
          <Hero />
        </div>
        <div className=" flex flex-row">
          <GenreBar />
          <Popular />
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