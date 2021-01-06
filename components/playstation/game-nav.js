import { useContext } from 'react';
import styled from 'styled-components';
import GAMES from '../../configuration/games';
import GameItem from './game-item';
import LocationIcon from '../ui/icons/location';
import { BackgroundContext } from './context/background-context';

const StyleGameNav = styled.section(({ gameTitle }) => `
  position: relative;
  display: flex;
  margin-bottom: 10rem;
  min-height: 150px;

  .game{
    background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgba(0,0,0,1) 50%, rgba(16,25,37,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 20%;
    margin-right: 1rem;
    cursor: pointer;
    border: 0px solid #576170;
    transition: all 0.15s ease-in-out;

    &:hover{
      border: 2px solid #576170;
    }

    &.active{
      overflow: visible;
      width: 150px;
      height: 150px;
      border: 2px solid #576170;
      position: relative;
      transition: all 0.15s ease-in-out;

      &::after{
        content: '${gameTitle}';
        position: absolute;
        width: 130%;
        bottom: 10px;
        left: 160px;
        color: white;
        font-size: 1.5rem;
        font-weight: 100;
        text-transform: capitalize;
      }
    }
  }
`);

const GameNav = () => {
  const { activeGame, setActiveGame } = useContext(BackgroundContext);

  return(
    <StyleGameNav gameTitle={activeGame}>
        <div className={`game ${activeGame === 'explore' ? 'active' : ''}`} onClick={() => setActiveGame('explore')}>
          <LocationIcon />
        </div>
        {GAMES.map((game, i) => (
          <div className={`game ${activeGame === game.title ? 'active' : ''}`} key={i}>
            <GameItem gameImg={game.img} title={game.title} />
          </div>
        ))}
    </StyleGameNav>
  )
};

export default GameNav;