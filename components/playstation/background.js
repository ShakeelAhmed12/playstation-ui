import { useContext } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from './context/background-context';
import BACKGROUNDS from '../../configuration/background';

const StyledWrapper = styled.div(({ bgImage }) => `
  background: url('${bgImage}') no-repeat;
  background-position: inherit;
  background-size: cover;
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
  transition: all 0.25s ease-in-out;
    position: relative;
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