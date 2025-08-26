import type { Metadata } from "next";
import { Plus_Jakarta_Sans  } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500"], 
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Gray Pham - Software Engineer",
  description: "Gray Pham's Profile",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
