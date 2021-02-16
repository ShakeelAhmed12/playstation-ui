import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import Info from '../info';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <Info />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});