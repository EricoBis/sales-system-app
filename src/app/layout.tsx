import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";

import Header from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <main className="text-foreground bg-background">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
