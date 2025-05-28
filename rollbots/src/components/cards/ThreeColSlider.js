import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;

// Replaces CardVideo with smart video + iframe logic
const CardMediaContainer = tw.div`w-full h-56 sm:h-64 overflow-hidden sm:rounded-tl-4xl relative`;
const Iframe = tw.iframe`w-full h-full`;
const CardVideo = tw.video`w-full h-full object-cover`;

const CardMedia = ({ videoSrc, isIframe }) => (
  <CardMediaContainer>
    {isIframe ? (
      <Iframe
        src={videoSrc}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Embedded Media"
      />
    ) : (
      <CardVideo src={videoSrc} autoPlay loop muted playsInline controls />
    )}
  </CardMediaContainer>
);

export default () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      videoSrc: "https://www.youtube.com/embed/push9DLuX4c?si=6mgh9VE0nrVJL8wA",
      isIframe: true,
      title: "Bespoke Product Presenter",
      description:
        "Custom video presenter using Japanese, Korean, and Mandarin voiceovers to boost international conversions.",
      locationText: "Multilingual",
      pricingText: "$$$",
      rating: "4.9",
    },
    {
      videoSrc: "https://www.youtube.com/embed/tIJA9--D8bw",
      isIframe: true,
      title: "Lead Generation",
      description:
        "Auto-post to 1000+ groups with your event lead video to attract high-intent traffic and grow awareness fast.",
      locationText: "Facebook, Telegram",
      pricingText: "$$",
      rating: "4.8",
    },
    {
      videoSrc: "https://www.youtube.com/embed/yPeeWjaXitQ",
      isIframe: true,
      title: "Lead Qualifying",
      description:
        "Xia AI qualifies leads automatically and flags quality prospects for manual follow-up. Custom logic available.",
      locationText: "WhatsApp, Telegram",
      pricingText: "$$",
      rating: "4.7",
    },
    {
      videoSrc: "https://www.youtube.com/watch?v=gcHtbv_j37g",
      isIframe: true,
      title: "Lead Conversion",
      description:
        "Boost closing rates with interactive tools like Wheel of Fortune. Personalize offers to convert warm leads.",
      locationText: "Web, Mobile",
      pricingText: "$$",
      rating: "5.0",
    },
    {
      videoSrc: "https://www.youtube.com/embed/TrDfJWkiNXM",
      isIframe: true,
      title: "Dynamic mini apps",
      description:
        "Example lead generation w awduihawldiahujwdoia wuhdawoi duhawoiduna woiduah ",
      locationText: "Web, Mobile",
      pricingText: "$$",
      rating: "5.0",
    },
    {
      videoSrc: "https://www.youtube.com/embed/fGSXYuhOsT0",
      isIframe: true,
      title: "Social-Media Auto Poster",
      description:
        "Example lead generation w awduihawldiahujwdoia wuhdawoi duhawoiduna woiduah ",
      locationText: "Web, Mobile",
      pricingText: "$$",
      rating: "5.0",
    },
  ];

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Our Inteligent Product</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardMedia videoSrc={card.videoSrc} isIframe={card.isIframe} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
