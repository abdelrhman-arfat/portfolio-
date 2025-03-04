import { Roboto } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import Context from "./_components/context/Context";
import Navbar from "./_components/navbar/Navbar";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Abdo Yasser",
  description: `Clothes e-commerce website for men , woman and kids,for all categories of clothes high quality
  and good prices; `,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} w-screen overflow-x-hidden antialiased`}
      >
        <Context>
          <Navbar />
          <main className="h-screen w-full">{children}</main>
        </Context>
      </body>
    </html>
  );
}
