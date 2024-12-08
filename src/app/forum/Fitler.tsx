import React from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { type Genre } from "@/types/genre";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default async function Fitler() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/genres`);
  const genres: Genre[] = await response.json();

  const extraFilters = [
    {
      name: "ESRB Rating",
      options: [
        "Everyone",
        "Everyone 10+",
        "Teen",
        "Mature 17+",
        "Adults Only 18+",
        "Rating Pending",
      ],
    },
    {
      name: "Platform",
      options: ["PC", "PlayStation", "Xbox", "Nintendo", "Mobile", "VR"],
    },
    {
      name: "Release Year",
      options: [
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",
        "1991",
        "1990",
        "1989",
        "1988",
        "1987",
        "1986",
        "1985",
        "1984",
        "1983",
        "1982",
        "1981",
        "1980",
      ],
    },
  ];

  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle>Sort & Filter</CardTitle>
      </CardHeader>
      <CardContent className=" text-xs ">
        <div className=" flex flex-col gap-5">
          <RadioGroup defaultValue="popular">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="popular" id="r1" />
              <Label className=" text-xs" htmlFor="r1">
                Popular Today
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upcoming" id="r2" />
              <Label className=" text-xs" htmlFor="r2">
                Upcoming
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="r3" />
              <Label className=" text-xs" htmlFor="r3">
                Newest
              </Label>
            </div>
          </RadioGroup>
          <Separator orientation="horizontal" />
          <div className=" flex flex-col gap-2">
            {genres.map((genre, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={genre.slug} />
                <label
                  htmlFor={genre.slug}
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {genre.name}
                </label>
              </div>
            ))}
          </div>
          <Separator orientation="horizontal" />
          {extraFilters.map((filter, index) => (
            <div key={index} className=" flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-medium">{filter.name}</p>
                {filter.options.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Checkbox id={option} />
                    <label
                      htmlFor={option}
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <Separator orientation="horizontal" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
