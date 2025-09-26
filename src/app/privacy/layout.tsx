import Footer from "@/components/footer/Footer";
import { Theme } from "@radix-ui/themes";

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Privacy Policy | Nomadeer</title>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Theme appearance={"light"} accentColor={"amber"} radius={"full"}>
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
