import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full  min-h-screen bg-[#161513]  ">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
