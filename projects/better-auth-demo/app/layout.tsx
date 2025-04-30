export const metadata = {
  title: 'Better Auth Demo',
  description: 'Demoapp med autentisering via Better Auth',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
