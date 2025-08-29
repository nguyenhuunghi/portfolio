import type { Metadata } from "next";
import "@/styles/globals.css";
import { interFont } from './fonts';
import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import("@/features/shared/components/Navigation"), {
  ssr: true
});

const ScrollProgress = dynamic(() => import("@/features/shared/components/ScrollProgress"), {
  ssr: false
});

export const metadata: Metadata = {
  title: "Nghi Nguyen - Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Creating scalable applications with React, Node.js, and cutting-edge tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interFont.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <ScrollProgress />
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
