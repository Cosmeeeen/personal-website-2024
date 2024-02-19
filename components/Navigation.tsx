'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-around">
      {
        PAGES.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className={`hover:underline underline-offset-4 ${pathname === page.href ? "font-semibold" : ""}`}
          >{page.label}</Link>
        ))
      }
    </div>
  );
};

export default Navigation;
