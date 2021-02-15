import { useContext } from 'react';
import styled from 'styled-components';
import GAMES from '../../../configuration/games';
import GameItem from './component/game-item';
import LocationIcon from '../../ui/icons/location';
import { BackgroundContext } from '../context/game-background';

const StyleGameNav = styled.section(({ gameTitle }) => `
  position: relative;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  overflow-x: scroll;

  ::-webkit-scrollbar-track {
    background: #38383861;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: #423f3f;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5a5a5a;
  }

  .game{
    background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgba(0,0,0,1) 50%, rgba(16,25,37,1) 100%);
    display: inline-flex;
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

    &.explore{
      position: relative;
      top: -20px;
    }

    &:hover{
      border: 2px solid #576170;
    }
  }

  @media (min-width: 992px){
    display: flex;
    margin-bottom: 5rem;
    padding: 0;
    min-height: 150px;
    overflow-x: visible;

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
      border: 0;
      transition: all 0.15s ease-in-out;

      &.explore{
        top: 0;
      }

      &.active{
        overflow: visible;
        width: 150px;
        height: 150px;
        border: 2px solid #576170;
        position: relative;
        transition: all 0.15s ease-in-out;
      }

      &.active{
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