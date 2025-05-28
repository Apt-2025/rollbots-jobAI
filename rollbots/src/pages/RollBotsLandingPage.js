import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import Testimonial2 from "components/testimonials/TwoColumnWithImageAndProfilePictureReview2.js";
import FAQ from "components/faqs/SingleCol.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Features2 from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import UpcomingEvents from "components/UpcomingEvents.js";
import TrustedSection from "components/TrustedSection.js";
import ConnectedChatWidget from "components/chat-widget/ConnectedChatWidget.js";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <ConnectedChatWidget />
    <UpcomingEvents />
    <TrustedSection />
    <Features />
    <Features2 />
    <MainFeature />
    <SliderCard />
    <Testimonial textOnLeft={true} />
    <Testimonial2 textOnLeft={false} />
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer />
    {/* <TrendingCard />
    <Blog /> */}
  </AnimationRevealPage>
);
