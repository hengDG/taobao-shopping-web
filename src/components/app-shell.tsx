"use client";

import { useEffect, useState } from "react";
import {
  Bell,
  Camera,
  Heart,
  Search,
  Smartphone,
  HelpCircle,
  Phone,
} from "lucide-react";
import { AppSidebar, type SidebarItem } from "@/components/app-sidebar";
import Image from "next/image";

const sidebarItems: SidebarItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Products", href: "/products", icon: "products" },
  { label: "Cart", href: "/cart", icon: "cart" },
  { label: "Checkout", href: "/checkout", icon: "checkout" },
  { label: "Account", href: "/register", icon: "account" },
];

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const [showUtilityBar, setShowUtilityBar] = useState(true);

  useEffect(() => {
    const updateBarVisibility = () => {
      setShowUtilityBar(window.scrollY < 24);
    };

    updateBarVisibility();
    window.addEventListener("scroll", updateBarVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateBarVisibility);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <AppSidebar items={sidebarItems} />

      <header className="fixed top-0 right-0 left-0 z-20 border-b border-border bg-white/95 backdrop-blur lg:left-20">
        <div
          className={`overflow-hidden border-b border-border/70 bg-muted transition-all duration-300 ease-out ${
            showUtilityBar ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mx-auto flex w-[98%] items-center justify-between gap-3 text-xs text-muted-foreground transition-all duration-300 ${
              showUtilityBar ? "py-2" : "py-0"
            }`}
          >
            <div className="flex items-center gap-4 whitespace-nowrap">
              <span className="hidden items-center gap-1.5 md:inline-flex">
                Welcome to E-Taobao from VTS Company
              </span>

              <span className="hidden items-center gap-1.5 md:inline-flex">
                <HelpCircle className="size-3.5" />
                Support
              </span>
            </div>

            <div className="hidden items-center gap-4 whitespace-nowrap sm:flex">
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-4" />
                Contact Us
              </span>

              <span>EN</span>

              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="size-3.5" />
                Get App
              </span>
            </div>
          </div>
        </div>

        <div className="py-3 cursor-pointer ">
          <div className="mx-auto flex w-[95%] items-center gap-2 sm:gap-3">
            <Image
              src="https://play-lh.googleusercontent.com/5uVmNR71LD6-LHspJgdI4JGymI3qovFxlVtYHdPbSrJRPiRHyQkIxwYd_1bZqR8u5-5KJs3DE6NKJGMj6xSS"
              alt="Logo"
              width={40}
              height={40}
              className="shrink-0 rounded-xl lg:hidden"
            />

            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-muted px-3 py-3 sm:px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search products, brands, categories"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            <button
              type="button"
              className="flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl lg:border bg-white px-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-muted hover:shadow active:scale-95 md:px-4"
              aria-label="Search by image"
              title="Search by image"
            >
              <Camera className="size-5 shrink-0" />

              <span className="hidden whitespace-nowrap md:inline">
                Search by image
              </span>
            </button>

            <button
              type="button"
              className="grid size-10 shrink-0 place-items-center rounded-xl transition-colors hover:bg-muted cursor-pointer"
              aria-label="Wishlist"
            >
              <Heart className="size-5" />
            </button>

            <button
              type="button"
              className="grid size-10 shrink-0 place-items-center rounded-xl transition-colors hover:bg-muted cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="pt-28 lg:pl-20">{children}</div>
    </div>
  );
}
