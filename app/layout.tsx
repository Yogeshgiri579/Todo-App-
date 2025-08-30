import './globals.css'
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}