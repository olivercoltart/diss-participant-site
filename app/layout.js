import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Dissertation Web App",
  description: "Simple multi-page Next.js app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
