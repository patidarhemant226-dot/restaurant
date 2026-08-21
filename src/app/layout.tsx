import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediterra | A world of flavours",
  description: "Modern Indian, Asian, Italian and cafe dining, gathered around one table in the heart of the city.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
