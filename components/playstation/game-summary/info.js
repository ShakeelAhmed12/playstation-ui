import { useContext } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from '../context/game-background';
import GAMEINFO from '../../../configuration/game-info';

const StyledInfo = styled.section`
  margin-bottom: 3rem;

  .sub-title{
      font-size: 1.2rem;
      font-weight: 300;
      color: #e6e6e6;
  }

  h1{
    font-size: 3rem;
    font-weight: 300;
    color: white;
    margin: 2rem 0;
  }

  p{
    font-weight: 300;
    color: #e6e6e6;
    font-size: 1.25rem;
  }

  img{
    max-width: 300px;
    margin: 0 0 1rem;
  }

  @media (min-width: 1200px){
    width: 50%;
    min-height: 250px;

    p{
      font-size: 2rem;
    }
  }
`;

const Info = () => {

  const { activeGame } = useContext(BackgroundContext);

  return(
    <StyledInfo>
      { activeGame === 'explore' ? (
        <>
          <span className="sub-title">
            Offical news from Playstation | 11/28/2020
          </span>
          <h1>
            Ready for a PS5 Adventure?
          </h1>
          <p>
            ASTRO's PLAYROOM is pre-loaded and waiting for you!
            {' '}
            <br />
            explore the new capabilities of PS5 and feel the world...
          </p>
        </>
      ):(
        <>
          {GAMEINFO[activeGame].logo && (
            <img src={GAMEINFO[activeGame].logo} loading="lazy" alt={activeGame} />
          )}
          {GAMEINFO[activeGame].title && (
            <h1>
              {GAMEINFO[activeGame].title}
            </h1>
          )}
          {GAMEINFO[activeGame].caption && (
            <p>
              {GAMEINFO[activeGame].caption}
            </p>
          )}
        </>
      )}      
    </StyledInfo>
  )
}

export default Info;