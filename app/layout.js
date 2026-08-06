import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Kisan BK",
  description: "Portfolio Website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}