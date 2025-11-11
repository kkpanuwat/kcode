import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morg | Designer Portfolio",
  description: "Personal portfolio landing page for designers and creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
