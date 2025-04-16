import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Min Sida',
  description: 'Exempelsida med layout',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
