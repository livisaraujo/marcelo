import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./components/menu";
import Footer from "./components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
