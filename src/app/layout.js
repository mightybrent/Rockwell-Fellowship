import "./globals.css";

export const metadata = {
  title: "Rockwell Fellowship — Leadership Coaching for Founders & Senior Leaders",
  description:
    "Leadership coaching for founders and senior leaders at scaling companies. Andrew Smith helps leaders grow ahead of the pace of their organization. Georgetown-trained executive coach based in Northern Virginia.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rockwellfellowship.com/",
  },
  openGraph: {
    title: "Rockwell Fellowship — Leadership Coaching for Founders & Senior Leaders",
    description:
      "I work with founders and senior leaders navigating the moment when their business changes faster than their skills or sense of self can keep up.",
    url: "https://rockwellfellowship.com/",
    type: "website",
    images: [
      {
        url: "https://rockwellfellowship.com/images/rockwell-fellowship-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockwell Fellowship — Leadership Coaching for Founders & Senior Leaders",
    description:
      "I work with founders and senior leaders navigating the moment when their business changes faster than their skills or sense of self can keep up.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Rockwell Fellowship",
              "description":
                "Leadership coaching for founders and senior leaders at scaling companies. Specializing in the VP cohort navigating the gap between what got them here and what the next stage requires.",
              "founder": {
                "@type": "Person",
                "name": "Andrew Smith",
                "jobTitle": "Executive Coach & Founder",
                "alumniOf": {
                  "@type": "Organization",
                  "name": "Georgetown University",
                },
                "knowsAbout": [
                  "Executive Coaching",
                  "Leadership Development",
                  "Talent Management",
                  "Organizational Design",
                  "Founder Coaching",
                ],
              },
              "url": "https://rockwellfellowship.com",
              "sameAs": ["https://www.linkedin.com/in/andrew-smith-7b86663/"],
              "areaServed": "United States",
              "serviceType": ["Executive Coaching", "Leadership Coaching", "Talent Advisory"],
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Northern Virginia",
                "addressRegion": "VA",
                "addressCountry": "US",
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Coaching Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "The Coaching Sprint",
                      "description":
                        "Five sessions over six weeks. One focused leadership challenge. For founders and senior leaders who need concentrated movement on a specific problem.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Leadership Retainer",
                      "description":
                        "Ongoing 1:1 coaching on a regular cadence for executives navigating sustained complexity: scale, role change, identity, leadership growth.",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Leadership Advising for Teams",
                      "description":
                        "Brought in by a board, CEO, or VP of People to work directly with a leader or small team. Results-forward, not soft.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
