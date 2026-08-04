"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  House,
  ShoppingBag,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const iconMap = {
  home: House,
  products: ShoppingBag,
  cart: ShoppingCart,
  checkout: CreditCard,
  account: UserRound,
} as const;

type SidebarIcon = keyof typeof iconMap;

export type SidebarItem = {
  label: string;
  href: string;
  icon: SidebarIcon;
};

type AppSidebarProps = {
  items: SidebarItem[];
};

export function AppSidebar({ items }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-20 border-r border-border bg-white lg:flex lg:flex-col lg:items-center lg:py-4">
        <div className="mb-6 grid size-10 place-items-center rounded-full bg-red-600 text-lg font-bold text-white">
          <Image
            src="https://play-lh.googleusercontent.com/5uVmNR71LD6-LHspJgdI4JGymI3qovFxlVtYHdPbSrJRPiRHyQkIxwYd_1bZqR8u5-5KJs3DE6NKJGMj6xSS"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
        </div>

        <nav className="flex w-full flex-1 flex-col items-center gap-2">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = iconMap[item.icon];

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={cn(
                  "group flex w-14 items-center justify-center rounded-2xl py-3 transition-colors",
                  isActive
                    ? "bg-[#194891]  text-white"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <Icon className="size-5" />
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white px-4 py-2 lg:hidden">
        <ul
          className="mx-auto grid max-w-md gap-2"
          style={{
            gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          }}
        >
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = iconMap[item.icon];

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-center rounded-xl py-3",
                    isActive
                      ? "bg-[#194891] text-white"
                      : "text-foreground hover:bg-muted",
                  )}
                  aria-label={item.label}
                >
                  <Icon className="size-5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
