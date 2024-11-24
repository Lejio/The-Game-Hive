"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { FaReact } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Video Games",
    href: "/docs/primitives/alert-dialog",
    description:
      "Database of all video games.",
  },
  {
    title: "Publishers",
    href: "/docs/primitives/hover-card",
    description:
      "List of all registered publishers.",
  },
  {
    title: "Calendar",
    href: "/docs/primitives/progress",
    description:
      "Displays a calendar of all upcoming titles, dlcs and events.",
  },
  {
    title: "Recommendations",
    href: "/docs/primitives/scroll-area",
    description: "Don't know what to play? Let us recommend you a game.",
  },
  {
    title: "Genres",
    href: "/docs/primitives/tabs",
    description:
      "List all genres.",
  },
  {
    title: "Platforms",
    href: "/docs/primitives/tooltip",
    description:
      "List of all currently tracked platforms.",
  },
]

export function NavMenu() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                    >
                        <FaReact className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                        The Game Hive
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                        Find your next favorite game.
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Forum">
                    Chat with other gamers.
                </ListItem>
                <ListItem href="/docs/installation" title="How it works">
                    How does the recommendation engine work?
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Development">
                    See the development process.
                </ListItem>
                </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
