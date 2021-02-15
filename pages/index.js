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

export default function Home() {
  return (
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
  )
}
