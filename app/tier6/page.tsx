export const metadata = {
  title: "Tier-6 | Autonomous Crypto Futures Trading",
  description: "Tier-6 is a fully autonomous crypto futures trading system running 24/7 on Binance. Now open to external accounts.",
  openGraph: {
    title: "Tier-6 | Autonomous Crypto Futures Trading",
    description: "Tier-6 is a fully autonomous crypto futures trading system running 24/7 on Binance. Now open to external accounts.",
    url: "https://tier6.simcolgroup.com",
    siteName: "Tier-6",
    images: [{ url: "https://tier6.simcolgroup.com/tier6/og-image.jpg", width: 1200, height: 630, alt: "Tier-6 Autonomous Trading System" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tier-6 | Autonomous Crypto Futures Trading",
    description: "Tier-6 is a fully autonomous crypto futures trading system running 24/7 on Binance. Now open to external accounts.",
    images: ["https://tier6.simcolgroup.com/tier6/og-image.jpg"],
  },
};

export default function Tier6Page() {
  return (
    <iframe
      src="/tier6/index.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999
      }}
    />
  );
}
