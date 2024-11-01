import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/Navbar/page";
import "../styles/css/main.css";

export const metadata = {
  title: "Portfolio Website",
  description: "Sagar Sharma's portfolio website, web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/assets/images/s.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keyword"
          content="Sagar Sharma, sagar-io, portfolio Website, Web Developer, frontend developer"
        />
        <meta property="og:title" content="Sagar Sharma | Web Developer" />
        <meta
          property="og:description"
          content="Portfolio Website, Multiple Projects"
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D5603AQGqFhu038acLA/profile-displayphoto-shrink_400_400/0/1684656491531?e=1690416000&v=beta&t=mEN7cIRMo7wSf2UXGMd7sEOwAKE5xtMyBSpnTaxT7UU"
        />
        <meta property="og:url" content="https://sagars.me" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </head>
      <body>
        <div id="root">
          <Navbar />
          {children}
        </div>
        <script
          src="https://kit.fontawesome.com/8e9a2a9fdd.js"
          crossorigin="anonymous"
        ></script>
        <Analytics />
      </body>
    </html>
  );
}
