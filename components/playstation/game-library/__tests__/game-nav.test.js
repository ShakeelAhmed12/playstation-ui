import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import GameNav from '../game-nav';

it('Game nav renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <GameNav />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});