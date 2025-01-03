"use client";

import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  PROJECTS_ROUTE,
  SKILLS_ROUTE,
} from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const getClasses = (route: string) =>
    pathname === route ? "text-secondary" : "";

  return (
    <nav>
      <ul className="flex justify-center gap-3 font-medium">
        <Link href={HOME_ROUTE} className={getClasses(HOME_ROUTE)}>
          Home
        </Link>
        <Link href={ABOUT_ROUTE} className={getClasses(ABOUT_ROUTE)}>
          About
        </Link>
        <Link href={SKILLS_ROUTE} className={getClasses(SKILLS_ROUTE)}>
          Skills
        </Link>
        <Link href={PROJECTS_ROUTE} className={getClasses(PROJECTS_ROUTE)}>
          Projects
        </Link>
        <Link href={CONTACT_ROUTE} className={getClasses(CONTACT_ROUTE)}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
