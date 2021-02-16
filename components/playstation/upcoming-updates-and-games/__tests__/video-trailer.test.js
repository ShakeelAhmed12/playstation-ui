import React from 'react';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import VideoTrailers from '../video-trailers';

it('Video trailers renders correctly', () => {
    const tree = renderer
        .create(
            <GameBackground>
                <VideoTrailers />
            </GameBackground>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});