import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar/NavBar";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Abdo Yasser",
  description: `Clothes e-commerce website for men , woman and kids,for all categories of clothes high quality
  and good prices; `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} $ bg-[#0C0C0C]  antialiased`}>
        <NavBar />
        <main className="h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
