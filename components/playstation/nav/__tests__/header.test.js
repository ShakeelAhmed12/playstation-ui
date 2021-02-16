import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import Header from '../header';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <Header />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});