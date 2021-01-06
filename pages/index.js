import styled from 'styled-components';
import { BackgroundProvider } from '../components/playstation/context/background-context';
import BackgroundWrapper from '../components/playstation/background';
import Header from '../components/playstation/header';
import GameNav from '../components/playstation/game-nav';
import Info from '../components/playstation/info';
import VideoTrailers from '../components/playstation/video-trailers';

const StyledContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <BackgroundProvider>
      <BackgroundWrapper>
        <Header />
        <StyledContainer>
          <GameNav />
          <Info /> 
          <VideoTrailers />
        </StyledContainer>
      </BackgroundWrapper>
    </BackgroundProvider>
  )
}
