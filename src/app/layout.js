import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watch-It website",
  description: "Movie review and recommandation website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
        {children}</body>
    </html>
  );
}
