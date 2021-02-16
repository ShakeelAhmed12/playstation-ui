import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import LatestNewsCards from '../latest-news-cards';

it('Latest news cards renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <LatestNewsCards date="27/01/2021" title="News" articleLink="www.google.com" />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});