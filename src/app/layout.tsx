import "./globals.css";
import TopHeader from "@/components/layout/TopHeader";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}