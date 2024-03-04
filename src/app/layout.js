import "./globals.css";
import { MenubarDemo } from "@/components/MenuBar";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="">
          <div className="">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <MenubarDemo />
              {/* <LeftBar /> */}
              {children}{" "}
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
