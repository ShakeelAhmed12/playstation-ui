import { useContext } from 'react';
import { BackgroundContext } from '../../context/game-background';
import styled from 'styled-components';

const GameImage = styled.div(({ gameImg }) => `
    background: url('${gameImg}') no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 20%;
`);

const GameItem = ({ gameImg, title }) => {
    const { setActiveGame } = useContext(BackgroundContext);
    return(
        <GameImage gameImg={gameImg} onClick={() => setActiveGame(title)} />
    )
};

export default GameItem;