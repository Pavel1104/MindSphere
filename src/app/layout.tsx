import I18nProvider from '@/components/I18nProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className="bg-gray-50">
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
