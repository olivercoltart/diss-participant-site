import "./globals.css";

export const metadata = {
  title: "Dissertation Web App",
  description: "Simple multi-page Next.js app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
