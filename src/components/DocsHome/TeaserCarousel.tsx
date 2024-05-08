import React, { useRef } from "react";
import LinkArrowRight from "@site/src/components/Common/Icons/LinkArrowRight";
import Link from "@docusaurus/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperClass } from "swiper/types";
import {
  CarouselCard,
  TeaserCard,
} from "@site/src/components/DocsHome/TeaserCard";

const CARDS: Array<CarouselCard> = [
  {
    title: (
      <h2 className={"text-white"}>ICP Demystified: Learn the Essentials</h2>
    ),
    subtitle: (
      <p className={"text-white"}>
        Explore the Protocol and Its Features with Our "Zero to dApp Educate
        Series".
      </p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-2.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://youtube.com/playlist?list=PLuhDt1vhGcrcRcHvSKmxIgJAh1b3rcR7N&si=sIElj5bAkJeMqDoA"
      >
        Watch now!
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-zero-to-dapp.webp",
  },
  {
    title: (
      <h2 className={"text-white"}>Follow @DFINITYDev on X for tech news</h2>
    ),
    subtitle: (
      <p className={"text-white"}>All devs, geeks, & tech fans welcome</p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-0.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://twitter.com/DFINITYDev"
      >
        Follow now
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-0.svg",
  },
  {
    title: <h2 className={"text-white"}>Developer office hours on Discord</h2>,
    subtitle: (
      <p className={"text-white"}>Every Wednesday 9AM CEST and 10:30AM PST</p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-2.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://discord.com/invite/5PJMmmETQB"
      >
        RSVP at #event channel
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-2.svg",
  },
  {
    title: (
      <h2 className={"text-white"}>Bi-weekly developer SNS office hours</h2>
    ),
    subtitle: (
      <p className={"text-white"}>Every other Wednesday 5PM CEST / 8AM PST</p>
    ),
    backgroundImage: "/img/docs/teaser-cards/bg-3.svg",
    cta: (
      <Link
        className="button-transparent button-with-icon pl-0"
        href="https://dfinity.zoom.us/j/99550279424?pwd=SFlDbkRVVTV2bm1XSjFYMWJjanZmdz09"
      >
        Join on Zoom
        <LinkArrowRight />
      </Link>
    ),
    mainImage: "/img/docs/teaser-cards/main-3.svg",
  },
];

export function TeaserCarousel({ cards = CARDS }: { cards: CarouselCard[] }) {
  const swiperRef = useRef<SwiperClass>();

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
      className={"w-full h-full rounded-lg"}
    >
      {cards.map((card, index) => {
        const backgroundStyles = card.backgroundImage
          ? {
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {};

        return (
          <SwiperSlide
            style={{
              ...backgroundStyles,
            }}
            className={
              "min-w-full w-full h-full relative py-8 px-8 justify-between flex flex-col rounded-lg"
            }
          >
            <TeaserCard
              card={card}
              key={index}
              className={
                "grid sm:grid-cols-2 grid-cols-1 gap-2 justify-between flex-1 h-full"
              }
              paginationEnabled={true}
              paginationLabel={
                <span>
                  {index + 1} of {cards.length}
                </span>
              }
              onClickLeftArrow={() => {
                if (index === 0) {
                  swiperRef.current?.slideTo(CARDS.length - 1);
                } else {
                  swiperRef.current?.slideTo(index - 1);
                }
              }}
              onClickRightArrow={() => {
                swiperRef.current?.slideTo((index + 1) % CARDS.length);
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
