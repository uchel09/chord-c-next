import { Inter } from "next/font/google";
import "./globals.css";
import connectDb from "@/lib/database";
import { Toaster } from "react-hot-toast";
import { TransposeProvider } from "@/Context/TransposeContext";
import { ChordLyricProvider } from "@/Context/ChordLiricContext";

const inter = Inter({ subsets: ["latin"] });
connectDb();
export const metadata = {
  title: "Chell Chord",
  description: "Find Your Song Chord",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransposeProvider>
          <ChordLyricProvider>
            <Toaster position="top center" />
            {children}
          </ChordLyricProvider>
        </TransposeProvider>
      </body>
    </html>
  );
}
