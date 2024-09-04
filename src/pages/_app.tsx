import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${inter.className} w-full text-pf-black  bg-pf-white-v0 `}>
      <div className="w-full  desktop:w-[880px]  mx-auto ">
        <Navbar />
        <div className="px-12">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}
