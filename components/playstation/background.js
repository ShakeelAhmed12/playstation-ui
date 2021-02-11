import { useContext } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from './context/game-background';
import BACKGROUNDS from '../../configuration/background';

const StyledWrapper = styled.div(({ bgImage }) => `
  position: relative;
  background: url('${bgImage}') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
  transition: all 0.25s ease-in-out;

  @media (min-width: 992px){
    background-position: inherit;
  }
`);

const BackgroundWrapper = ({ children }) => {

    const { activeGame } = useContext(BackgroundContext);

    return(
        <StyledWrapper bgImage={BACKGROUNDS[activeGame] && BACKGROUNDS[activeGame].img}>
            {children}
        </StyledWrapper>
    )
};

export default BackgroundWrapper;