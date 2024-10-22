import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SendJob | Envie seus curriculos automaticos",
  description: "Enviar curriculos automaticos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <main className="bg-gray-900">
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html >
  );
}
