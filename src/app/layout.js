import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
        className={`${playfair.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
