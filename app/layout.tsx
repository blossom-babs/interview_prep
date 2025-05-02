import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import "./globals.css";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Prep",
  description: "Hey, I will help you prepare for your interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // className="dark"
    <html lang="en">
      <body
        className={`${MonaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
