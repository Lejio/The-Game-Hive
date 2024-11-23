import React from 'react'
import localFont from 'next/font/local'

const montserrat_bold = localFont({
    src: "./fonts/Montserrat-Bold.otf",
    weight: "100 900",
});

const montserrat_alt = localFont({
    src: "./fonts/MontserratAlternates-Medium.otf",
    weight: "100 900",
});

export default function Hero() {
  return (
    <div className=' h-full flex flex-col justify-center align-middle items-center gap-5'>
      <h1 className={`${montserrat_bold.className} text-9xl`}>The Game Hive.</h1>
      <p className={`${montserrat_alt.className} text-4xl`}>Where Gamers Gather</p>
    </div>
  )
}
