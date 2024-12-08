import Hero from "@/app/Hero";
import Popular from "./Popular";
import Filter from "@/app/Fitler";

export default function Home() {


  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col justify-between">
      <main className=" w-full flex flex-col gap-10">
        <div className=" h-[40vh]">
          <Hero />
        </div>
        <div className=" flex flex-row m-5 gap-5">
          <Filter />
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