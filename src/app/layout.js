import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edu Brains",
  description: "Edu Brains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head><Script src="https://cdn.tailwindcss.com" defer ></Script></head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
