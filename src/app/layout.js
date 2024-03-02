import "./globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="">
          <div className="flex">
            {/* <LeftBar /> */}
            {children}
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
