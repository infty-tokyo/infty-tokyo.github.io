import * as React from "react";

import { TextScramble, TypingStringInfo } from "lib/typing";
import { UseCaseDegree, useCaseDegrees } from "data/usecase";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import DivImage from "components/Image/DivImage";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "components/Button/LoginButton";
import LogoImage from "components/Image/LogoImage";
import { META_DESCRIPTION } from "data/const";
import type { NextPage } from "next";
import PaintedText from "components/Typography/PaintedText";
import UseCaseCard from "components/Card/UseCaseCard";

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
    <div className="w-full">
      <Head>
        <title>Infty LP</title>
      </Head>
      {/* <--- Header --- */}
      <div className="bg-winered-light text-white font-serif py-4 w-full">
        <div className="flex flex-col w-full object-center mt-10">
          {/* <--- Title --- */}
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
          {/* --- Title ---> */}

          {/* <--- Logo Images --- */}
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
                <LogoImage className="h-40 w-40 ml-4" />
              </a>
            </Link>
          </div>
          {/* --- Logo Images */}
        </div>
      </div>
      {/* --- Header --> */}

      {/* <--- Device Image --- */}
      <div className="flex flex-col w-full my-14">
        <Grid container className="w-full px-4">
          <Grid item xs={0} md={1} lg={2} xl={3}></Grid>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <DivImage
              src="/desktop.png"
              alt="Webアプリでお使いいただけます"
              className="w-96 h-48 mx-auto"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
            <div className="flex font-bold mt-4">{META_DESCRIPTION}</div>
            <div className="flex w-full justify-center mt-4 mb-2">
              <LoginButton className="mx-auto" label="Inftyを使ってみる" />
            </div>
          </Grid>
          <Grid item xs={0} md={1} lg={2} xl={3}></Grid>
        </Grid>
      </div>
      {/* --- Device Image ---> */}

      {/* <--- UseCase --- */}
      <div className="w-full flex flex-col">
        <div className="flex w-full mt-12">
          <span className="mx-auto my-3 font-bold text-2xl">こんなお悩みありませんか？</span>
        </div>
        <div className="w-11/12 overflow-y-visible overflow-x-scroll mx-auto">
          <div className="w-full flex flex-row mx-auto items-center justify-center mt-4">
            {useCaseDegrees.map((degree: UseCaseDegree) => (
              <div className="mx-4" key={degree}>
                <UseCaseCard degree={degree} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- UseCase ---> */}

      {/* <--- Last Message --- */}
      <div className="flex flex-col w-full mt-20 mb-8">
        <div className="flex w-full justify-center">
          <LoginButton className="mx-auto" label="Inftyで可能性を広げる" />
        </div>
      </div>
      {/* --- END Last Message ---> */}
    </div>
  );
};

export default Home;
