import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { GameBackground } from '../../context/game-background';

import GameItem from '../component/game-item';

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
    React.useContext = realUseContext;
});

describe('Game Item tests', () => {
    it('Game item renders correctly', () => {
        const tree = renderer
            .create(
                <GameBackground>
                    <GameItem gameImg="/playstation/wallpapers/explore-bg.jpg" title="News" />
                </GameBackground>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})