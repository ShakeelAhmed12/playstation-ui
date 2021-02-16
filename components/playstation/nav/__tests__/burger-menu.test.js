import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import BurgerMenu from '../burger-menu';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <BurgerMenu />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});