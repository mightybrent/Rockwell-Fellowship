import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Montserrat = close match for Proxima Nova
const proximaNovaFallback = Montserrat({
  variable: "--font-proxima-nova",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

// Nunito Sans = close match for Avenir
const avenirFallback = Nunito_Sans({
  variable: "--font-avenir",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Rockwell Fellowship — Leadership Coaching · Washington D.C.",
  description:
    "Executive coaching for founders and senior leaders at scaling companies. The Coaching Sprint: 5 sessions, one focused challenge.",
  openGraph: {
    title: "Rockwell Fellowship",
    description: "Executive coaching for founders and senior leaders.",
    url: "https://rockwellfellowship.com",
    siteName: "Rockwell Fellowship",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${proximaNovaFallback.variable} ${avenirFallback.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
