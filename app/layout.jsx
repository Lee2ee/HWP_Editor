import { jsx, jsxs } from "react/jsx-runtime";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({ children }) {
  return jsxs("html", {
    lang: "en",
    children: [
      
      jsx("body", {
        children: children
      })
    ]
  });
}
