import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import ThemeWrapper from "../components/ThemeWrapper";
import { AuthProvider } from "../context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carry-On Car Rental - Affordable Car Rentals",
  description:
    "Your trusted partner for affordable and reliable car rentals. Daily, weekly, and monthly rental options available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">
        <AuthProvider>
          <ThemeWrapper>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
