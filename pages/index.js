import Head from 'next/head';
import styled from 'styled-components';
import { GameBackground } from '../components/playstation/context/game-background';
import BackgroundWrapper from '../components/playstation/background';
import Header from '../components/playstation/nav/header';
import GameNav from '../components/playstation/game-library/game-nav';
import Info from '../components/playstation/game-summary/info';
import VideoTrailers from '../components/playstation/upcoming-updates-and-games/video-trailers';

const StyledContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

const Homepage = () => (
  <>
    <Head>
      <title>PS5 Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GameBackground>
      <BackgroundWrapper>
        <Header />
        <StyledContainer>
          <GameNav />
          <Info /> 
          <VideoTrailers />
        </StyledContainer>
      </BackgroundWrapper>
    </GameBackground>
  </>
);

export default Homepage;
