"use client";

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils'; // Ensure `cn` is implemented as described
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Update SidebarProps to match the user structure
interface SidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar p-4">
      <nav className="flex flex-col gap-4">
        {/* Logo */}
        <Link href="/" className="mb-12 flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={100}
            height={100}
            alt="Logo"
            className="rounded-full"
          /> 
          <h2 className='font-bold text-2xl text-black-1'>Money Mentor</h2>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map((item) => {
          const isActive = pathname.startsWith(item.route);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'sidebar-link py-2 px-4 rounded hover:bg-gray-200',
                { 'bg-bank-gradient': isActive }
              )}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn('sidebar-label',{
                '!text-white':isActive})}>
                {item.label}
              </p>
            </Link>
          );
        })}

        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
