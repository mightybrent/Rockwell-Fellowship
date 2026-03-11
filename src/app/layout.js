import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Using Montserrat as a close fallback for Proxima Nova
const proximaNovaFallback = Montserrat({
  variable: "--font-proxima-nova",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

// Using Nunito Sans as a close fallback for Avenir
const avenirFallback = Nunito_Sans({
  variable: "--font-avenir",
  subsets: ["latin"],
  weight: ["400", "800", "900"],
});

export const metadata = {
  title: "Rockwell Fellowship",
  description: "Building communities and transforming lives.",
  openGraph: {
    title: "Rockwell Fellowship",
    description: "Building communities and transforming lives.",
    url: "https://rockwell-fellowship.vercel.app",
    siteName: "Rockwell Fellowship",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${proximaNovaFallback.variable} ${avenirFallback.variable}`}>
        {children}
      </body>
    </html>
  );
}
