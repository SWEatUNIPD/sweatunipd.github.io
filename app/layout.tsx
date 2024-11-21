import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SWE@",
  description: "Every line of code is worth the SWEat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='it' className='bg-background dark:dark'>
      {/* <head>
        <script
          src='https://unpkg.com/react-scan/dist/auto.global.js'
          async
        ></script>
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1024px] m-auto`}
      >
        {children}
      </body>
    </html>
  );
}
