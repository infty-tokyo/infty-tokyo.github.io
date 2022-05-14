import * as React from "react";

import { TextScramble, TypingStringInfo } from "lib/typing";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import PaintedText from "components/Typography/PaintedText";

const Home: NextPage = () => {
  const emClassName: string = "text-white text-xl mx-1";
  const ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const phrases: TypingStringInfo[] = [
      { text: "私からあなたへ。", code: 0b10011100 },
      { text: '"学び"を共有し、', code: 0b111101100 },
      { text: "可能性を無限大にする。", code: 0b11101110000 },
    ];
    if (ref.current) {
      const fx = new TextScramble({
        el: ref.current!,
        emClassName: emClassName,
        weakClassName: "text-winered-dark",
      });
      let counter: number = 0;
      const next: Function = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Infty LP</title>
      </Head>
      <div className="bg-winered-light text-white font-serif py-4">
        <div className="flex flex-col w-full object-center mt-10">
          <PaintedText delay={1} className="flex px-2 py-4 mx-auto text-4xl text-white">
            あらゆる学びを共有する、
            <div className="relative inline-block mb-6 md:mb-0">
              東大生限定ＳＮＳ
              <div className="absolute left-8 md:bottom-12">
                <PaintedText delay={3} className="flex px-2 py-0 mx-auto text-white text-lg">
                  東大生の、東大生による
                </PaintedText>
              </div>
            </div>
          </PaintedText>
          <div className="flex flex-row mx-auto object-center items-center mb-4">
            <div className="text-9xl text-white dashed-shadow relative">
              <Link href="https://infty.tokyo">
                <a>
                  <span className="text-shadow text-shadow-white" data-text="I">
                    I
                  </span>
                  <span className="text-shadow text-shadow-black" data-text="nft">
                    nft
                  </span>
                  <span className="text-shadow text-shadow-white" data-text="y">
                    y
                  </span>
                </a>
              </Link>
              <div className="absolute text-xl z-50 left-0 -bottom-7" ref={ref}>
                <span className={emClassName}>私</span>から、
                <span className={emClassName}>あなた</span>へ。
              </div>
            </div>
            <Link href="https://infty.tokyo">
              <a>
                <div className="relative h-40 w-40 ml-4">
                  <Image src="/icon.png" layout="fill" objectFit="contain" alt="logo" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
