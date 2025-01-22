"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        {/* Trigger Button */}
        <SheetTrigger aria-label="Open Mobile Navigation Menu">
          <Image
            src="/icons/hamburger.svg"
            width={35}
            height={35}
            alt="Menu"
            className="cursor-pointer"
          />
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            {/* Logo */}
            <Link href="/" className="mb-12 flex items-center gap-2" aria-label="Navigate to Home">
              <Image
                src="/icons/logo.svg"
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full"
              />
              <h2 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Money Mentor
              </h2>
            </Link>

            {/* Sidebar Links */}
            {sidebarLinks.map((item) => {
              const isActive = pathname.startsWith(item.route);

              return (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.route}
                    className={cn(
                      "sidebar-link flex items-center py-2 px-4 rounded hover:bg-gray-200",
                      { "bg-bank-gradient": isActive }
                    )}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <div className="relative w-6 h-6 mr-3 flex-shrink-0">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn({ "brightness-[3] invert-0": isActive })}
                      />
                    </div>
                    <p
                      className={cn("text-16", {
                        "!text-white": isActive,
                        "text-black-2": !isActive,
                      })}
                    >
                      {item.label}
                    </p>
                  </Link>
                </SheetClose>
              );
            })}

            {/* User Section */}
            <div className="mt-4 text-left" aria-label="User Information">
              <p className="text-gray-700">{`Welcome, ${user.firstName} ${user.lastName}!`}</p>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
