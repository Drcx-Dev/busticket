import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
