import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {/* Mobile Nav */}
      <nav className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Icons.menu className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm w-full",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <DropdownMenuItem className="w-full">
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      {/* Logo */}
      <Link href="/" className="items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold md:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {/* Desktop Nav */}
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
