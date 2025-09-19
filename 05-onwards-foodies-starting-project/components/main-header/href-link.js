'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HrefLink({ href, classes, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
