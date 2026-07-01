import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pakej Makassar 5 Hari 4 Malam | Nusatravel",
  description:
    "Jelajah Sulawesi bersama Nusatravel. Pakej Makassar 5 Hari 4 Malam dari RM2,680. Itinerary tersusun, sunset Phinisi Ghinayah & lawatan menarik.",
  keywords: [
    "Makassar",
    "Nusatravel",
    "Pakej Pelancongan",
    "Sulawesi",
    "Phinisi Ghinayah",
  ],
  openGraph: {
    title: "Pakej Makassar 5 Hari 4 Malam | Nusatravel",
    description:
      "Percutian santai ke Makassar dengan itinerary tersusun dari RM2,680.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
