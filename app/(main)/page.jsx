'use client';

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Portfolio from "../../components/portfolio";
import Link from "next/link";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const [showPortfolio, setShowPortfolio] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setShowPortfolio(pathname === '/portfolio');
  }, [pathname]);

  const closePortfolio = () => router.push('/');

  return (
    <div className="flex justify-center items-end bg-cyan-200 max-h-screen min-h-screen relative text-purple-700 overflow-hidden">
      <Head>
        <title>warlyco</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Image
        src="/images/smb3-9677-transparent.png"
        alt="SMB3 #9677"
        width={800}
        height={800}
        className={`
        transition-all duration-1000
        ${mounted
            ? 'opacity-100 translate-y-0 animate-slide-up'
            : 'opacity-0 translate-y-full pointer-events-none'}
      `}
        style={{ animationDelay: mounted ? '0.3s' : '0s' }}
      />
      <div className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 overflow-hidden">
        <div className="text-6xl md:text-8xl lg:text-9xl flex w-full justify-center h-1/3">
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">W</div>
            <div className="absolute mt-3 ml-4 text-pink-400">W</div>
            <div className="absolute">W</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">A</div>
            <div className="absolute mt-3 ml-4 text-pink-400">A</div>
            <div className="absolute">A</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">R</div>
            <div className="absolute mt-3 ml-4 text-pink-400">R</div>
            <div className="absolute">R</div>
          </div>
        </div>
        <div className="text-6xl md:text-8xl lg:text-9xl flex w-full justify-around h-1/3 px-32 -mt-2">
          <div className="relative w-1/2 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">L</div>
            <div className="absolute mt-3 ml-4 text-pink-400">L</div>
            <div className="absolute">L</div>
          </div>
          <div className="relative w-1/2 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">Y</div>
            <div className="absolute mt-3 ml-4 text-pink-400">Y</div>
            <div className="absolute">Y</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2px] left-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/smb3-9677-transparent.png"
          alt="#9677"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute top-[2px] right-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/smb3-9677-transparent.png"
          alt="#9677"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute bottom-[2px] right-[1px] z-10 animate-pulse">
        <Image
          src="/images/smb3-9677-transparent.png"
          alt="#9677"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute bottom-[2px] left-[1px] z-10 animate-pulse">
        <Image
          src="/images/smb3-9677-transparent.png"
          alt="#9677"
          width={40}
          height={40}
        />
      </div>
      <div
        className="absolute top-0 w-full text-center border border-purple-700 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-pink-500"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 rotate-180 py-1 h-[40px]" />
      </div>
      <div
        className="absolute flex flex-col justify-center left-0 h-screen border border-purple-700 hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest writing-mode-vertical-rl text-orientation-mixed leading-8 px-1 w-[40px]" />
      </div>
      <div
        className="absolute flex flex-col justify-center right-0 h-screen border border-purple-700 hover:bg-gradient-to-t hover:from-orange-500 hover:to-cyan-500"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest writing-mode-vertical-rl text-orientation-mixed leading-8 rotate-180 px-1 w-[40px]" />
      </div>
      <div className="absolute flex flex-col justify-center bottom-0 w-full text-center border border-purple-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 h-[40px]">
        <div className="text-base md:text-2xl lg:text-3xl font-bold uppercase opacity-85 tracking-widest leading-8 py-1 h-[40px] space-x-4 md:space-x-8 lg:space-x-16">
          <a
            href="https://github.com/warlyware"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            github
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            resume
          </a>
          <Link
            className="hover:underline uppercase"
            href="/portfolio"
          >
            portfolio
          </Link>
          <a
            href="https://x.com/warly_sol"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            twitter
          </a>
        </div>
      </div>
      {showPortfolio && (
        <Portfolio
          onClose={closePortfolio}
        />
      )}
    </div>
  );
}
