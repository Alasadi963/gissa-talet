import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Min Webbsida",
  description: "En enkel Next.js-app med layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-6 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
