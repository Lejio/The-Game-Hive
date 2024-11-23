'use client'
import { Button } from "@/components/ui/button";

export default function Home() {

  // const handleClick = async () => {
    
  //   const res = await fetch("/api/games");

  //   if (res.ok) {
  //     const data = await res.json();
  //     console.log(data);
  //   } else {
  //     console.log("error");
  //   }
  // };

  const handleClick = async () => {
    const res = await fetch("/api/create-index")
    .then((res) => res.json())
    .catch((err) => console.log(err));

    console.log(res);
  }


  return (
    <div className=" h-[100vh] w-[100vw] flex">
      <main className=" w-full flex flex-col justify-center align-middle items-center">
        <Button onClick={handleClick}>Authenticate</Button>
      </main>
      <footer></footer>
    </div>
  );
}