import Navbar from "@/sections/Navbar";
import "./globals.css";
import Footer from "@/sections/Footer";


export const metadata = {
  title: "Ali Malik",
  description: "Created by Ali Malik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <main className="max-w-7xl flex flex-col gap-10 md:gap-28 mx-auto relative bg-black">
        <Navbar />
          {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
