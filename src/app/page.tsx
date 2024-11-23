'use client'
import { Button } from "@/components/ui/button";

export default function Home() {

  const handleClick = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "admin", password: "admin" }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log("error");
    }
  };

  return (
    <div className=" h-[100vh] w-[100vw] flex">
      <main className=" w-full flex flex-col justify-center align-middle items-center">
        <Button onClick={handleClick}>Click me</Button>
      </main>
      <footer></footer>
    </div>
  );
}
