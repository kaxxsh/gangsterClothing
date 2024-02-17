import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "./wrapper";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gangster Clothing",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Wrapper>{children}</Wrapper>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
