import { Inter } from "next/font/google";
import "./globals.sass";
import BackToTop from './components/back-to-top'
import Cursor from "./components/cursor";

// import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Zoio Brands - Design Studio",
  description: "Full Stack Brand Design",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Cursor/>
        <BackToTop/>
        {children}
      </body>
    </html>
  );
}
