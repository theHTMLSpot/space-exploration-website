// app/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState(pathname);

  useEffect(() => {
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
    <div className="navbar">
      
        <Link href='/' id="logo">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48">

<g fill="none" fillRule="evenodd">
  <circle cx="24" cy="24" r="24" fill="#FFF" />
  <path
    fill="#0B0D17"
    d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
  />
</g>
</svg>

        </Link>
      
      <ul>
        <li className={currentRoute === "/" ? "current" : ""}>
          <Link href="/">00 Home</Link>
        </li>
        <li className={currentRoute === "/about" ? "current" : ""}>
          <Link href="/about">01 About</Link>
        </li>
        <li className={currentRoute === "/crew" ? "current" : ""}>
          <Link href="/crew">02 Crew</Link>
        </li>
        <li className={currentRoute === "/technology" ? "current" : ""}>
          <Link href="/technology">04 Technology</Link>
        </li>
      </ul>
    </div>
  );
}