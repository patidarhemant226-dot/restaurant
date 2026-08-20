import type { Metadata } from "next";
import { RestaurantExperience } from "./RestaurantExperience";

export const metadata: Metadata = {
  title: "Mediterra | A world of flavours",
  description: "Modern Indian, Asian, Italian and cafe dining, gathered around one table in the heart of the city.",
  metadataBase: new URL("https://mediterra.example"),
  alternates: { canonical: "/" },
  openGraph: { title: "Mediterra | One table. Many flavours.", description: "A modern multi-cuisine cafe and restaurant.", type: "website", url: "https://mediterra.example" },
};

export default function Home() { return <RestaurantExperience />; }
