import tw from "twin.macro";
import styled from "styled-components";
import Clogo1 from "images/Clogo1.jpg";
import Clogo2 from "images/Clogo2.jpg";
import Clogo3 from "images/Clogo3.png";
import Clogo4 from "images/Clogo4.png";
import Clogo5 from "images/Clogo5.png";
import Clogo6 from "images/Clogo6.svg";

const TrustedSection = tw.div`py-16`;
const Title = tw.h2`text-center text-3xl font-bold text-gray-800 mb-6`;
const Subtitle = tw.p`text-center text-lg text-gray-600 mb-10`;

const LogosGrid = styled.div`
  ${tw`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center max-w-6xl mx-auto`}
  img {
    ${tw`mx-auto h-10 md:h-12 object-contain`}
  }
`;

// You can add more imported logos if needed
const brands = [Clogo1, Clogo2, Clogo3, Clogo4, Clogo5, Clogo6];

export default function TrustedBySection() {
  return (
    <TrustedSection>
      <Title>Trusted by many teams in across Malaysia</Title>
      <Subtitle>Our software powers global leaders across industries</Subtitle>
      <LogosGrid>
        {brands.map((logo, index) => (
          <img src={logo} alt={`Brand ${index + 1}`} key={index} />
        ))}
      </LogosGrid>
    </TrustedSection>
  );
}
