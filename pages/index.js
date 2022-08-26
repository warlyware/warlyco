import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        src="/images/warlyfox.png"
        alt="Vercel Logo"
        width={800}
        height={800}
      />
      <div className="absolute h-screen w-screen top-0 bottom-0 right-0 left-0 overflow-hidden">
        <div className="text-7xl md:text-9xl flex w-full justify-center h-1/3">
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
        <div className="text-7xl md:text-9xl flex w-full justify-around h-1/3 px-32">
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
        <div className="text-7xl md:text-9xl flex w-full justify-between h-1/3">
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">C</div>
            <div className="absolute mt-3 ml-4 text-pink-400">C</div>
            <div className="absolute">C</div>
          </div>
          <div className="relative w-1/3 flex justify-center items-center">
            <div className="absolute -mt-3 -ml-4 text-yellow-500">O</div>
            <div className="absolute mt-3 ml-4 text-pink-400">O</div>
            <div className="absolute">O</div>
          </div>
        </div>
      </div>
      <div className="absolute -top-[5px] left-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -top-[5px] right-[1px] z-10 animate-pulse rotate-180">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] right-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] left-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <div className="absolute -bottom-[5px] left-[1px] z-10 animate-pulse">
        <Image
          src="/images/pentagram.png"
          alt="Vercel Logo"
          width={32}
          height={32}
        />
      </div>
      <a
        href="//warlyware.com"
        target="_blank"
        className="absolute top-0 w-full text-center border border-purple-700 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-pink-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase  opacity-85 tracking-widest leading-8 rotate-180">
          warlyware
        </div>
      </a>
      <a
        href="http://solanastake.house"
        target="_blank"
        className="absolute flex flex-col justify-center left-0 h-screen border border-purple-700 hover:bg-gradient-to-b hover:from-pink-500 hover:to-yellow-500"
        rel="noreferrer"
      >
        <div className="w-full text-4xl font-bold uppercase opacity-85 tracking-widest left-is-bottom-text leading-8">
          stakeh◎use
        </div>
      </a>
      <a
        href="//twitter.com/warly_sol"
        target="_blank"
        className="absolute flex flex-col justify-center right-0 h-screen border border-purple-700 hover:bg-gradient-to-t hover:from-orange-500 hover:to-cyan-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest right-is-bottom-text leading-8 rotate-180">
          twitter
        </div>
      </a>
      <a
        href="//warlyware.com"
        target="_blank"
        className="absolute flex flex-col justify-center bottom-0 w-full text-center border border-purple-700 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500"
        rel="noreferrer"
      >
        <div className="text-4xl font-bold uppercase opacity-85 tracking-widest leading-8 ">
          <span>space</span>
        </div>
      </a>
      {/* <div className="title text-yellow-500 absolute top-0 left-4">W</div>
      <div className="title text-yellow-500 absolute top-0">A</div>
      <div className="title text-yellow-500 absolute top-0 right-4">R</div>
      <div className="title text-yellow-500 absolute left-4">L</div>
      <div className="title text-yellow-500 absolute right-4">Y</div>
      <div className="title text-yellow-500 absolute bottom-0 left-4">C</div>
      <div className="title text-yellow-500 absolute bottom-0 right-4">O</div> */}
      {/* <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 uppercase text-cyan-600 text-9xl text-center">
        <div
          id="title"
          className="flex flex-col justify-around h-full tracking-widest"
        >
          <div>war</div>
          <div>ly</div>
          <div>co</div>
        </div>
      </div> */}
      <style jsx>{`
        html,
        body {
          max-height: 100vh;
          overflow: hidden;
        }
        #__next {
          overflow: hidden;
        }
        .left-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .right-is-bottom-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          translate: ;
        }
      `}</style>
    </div>
  );
}
