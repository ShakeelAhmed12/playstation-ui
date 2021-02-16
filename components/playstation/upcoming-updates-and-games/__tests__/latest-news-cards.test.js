import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import GameTrailerCards from '../game-trailer-cards';

it('Trailer cards renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <GameTrailerCards title="Grand Theft Auto 5" thumbnail="/playstation/video-thumbnails/gta-5.jpg" videoID="P20ASB1MdnI" />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});