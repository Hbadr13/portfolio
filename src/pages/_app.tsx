import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()
  return (
    pathname == '/contact' ?
      <Component {...pageProps} />
      :
      <div className={`  flex flex-col justify-between ${inter.className} w-full text-pf-black min-h-screen bg-pf-white-v0 `}>
        <div className="w-full">
          <div className="w-full max-w-4xl mx-auto overflow-hidden">

            <Navbar />
          </div>
          <div className="">
            <Component {...pageProps} />
          </div>
        </div>
        <div className=" relative   ">
          <Footer />
        </div>
      </div>
  )
}
{/* <div
  className="fixed w-screen h-screen inset-0"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
  }}
>
</div> */}