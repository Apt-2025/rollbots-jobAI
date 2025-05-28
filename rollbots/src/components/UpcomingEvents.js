import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl,
} from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";

const Container = tw(ContainerBase)`relative -mx-8 -mt-8`;
const Heading = tw(SectionHeading)`text-center`;
const Subheading = tw(SubheadingBase)`text-center mb-4 text-2xl`;
const Description = tw(SectionDescription)`text-center mb-10 mx-auto max-w-2xl`;

const EventsContainer = tw.div`flex flex-col space-y-6 max-w-screen-lg mx-auto`;
const EventCard = tw.div`flex flex-col md:flex-row justify-between items-center p-6 bg-white text-gray-900 rounded-lg shadow-md`;
const Left = tw.div`flex items-center space-x-4`;
const Avatar = tw.img`w-12 h-12 rounded-full`;
const EventInfo = tw.div``;
const Title = tw.h5`font-semibold text-lg`;
const Meta = tw.p`text-sm text-gray-600`;

const Right = tw.div`flex flex-col items-end`;
const DateText = tw.span`text-sm text-gray-500 mb-2`;
const RegisterButton = tw.a`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300`;

const defaultEvents = [
  {
    title: "RollBots 102: Advanced Training For In-House Hiring Teams",
    date: "Wednesday, April 23rd 2025 - 6:00 PM (WITA)",
    timeInfo: "In 1 day · About 1 hour · In English 🇺🇸",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "#",
  },
  {
    title: "RollBots 103: Advanced Training For Hiring Companies",
    date: "Thursday, April 24th 2025 - 1:00 AM (WITA)",
    timeInfo: "In 1 day · About 1 hour · In English 🇺🇸",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "#",
  },
  {
    title: "RollBots 101: Fundamental For In-House Hiring Teams",
    date: "Friday, April 25th 2025 - 1:00 AM (WITA)",
    timeInfo: "In 3 days · About 1 hour · In English 🇺🇸",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    link: "#",
  },
];

export default ({
  subheading = "Live Webinars",
  heading = "Jump Start Your Bot Building",
  description = "Join our expert-led webinars to learn how to make the most out of our platform.",
  events = defaultEvents,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}

        <EventsContainer>
          {events.map((event, index) => (
            <EventCard key={index}>
              <Left>
                <Avatar src={event.avatar} alt="speaker" />
                <EventInfo>
                  <Title>{event.title}</Title>
                  <Meta>{event.timeInfo}</Meta>
                </EventInfo>
              </Left>
              <Right>
                <DateText>{event.date}</DateText>
                <RegisterButton href={event.link}>Register now</RegisterButton>
              </Right>
            </EventCard>
          ))}
        </EventsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
