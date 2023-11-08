import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "../providers/providers";

import Header from "../components/Header/Header";
import ContentContainer from "@/components/Container/ContentContainer";

export const metadata: Metadata = {
  title: "Lojinha",
  description: "Serviço de Vendas - Fundamentos de Desenvolvimento de Software",
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
            <ContentContainer>
              {children}
            </ContentContainer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
