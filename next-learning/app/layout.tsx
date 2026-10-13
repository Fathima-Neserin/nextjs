import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Next.js Learning App",
  description: "Learning Next.js step by step",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>My Website</h2>
          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/about">About</Link>
            {" | "}
            <Link href="/counter">Counter</Link>
          </nav>
        </header>

        <hr />
        <main>{children}</main>
        <hr />

        <footer>
          <p>© 2026 My Website</p>
        </footer>
      </body>
    </html>
  );
}
