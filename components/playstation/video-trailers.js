import { useContext } from 'react';
import styled from 'styled-components';
import VIDEOS from '../../configuration/videos';
import GAMEUPDATES from '../../configuration/game-updates';
import VideoItem from './video-item';
import LatestNewsItem from './latest-news-items';
import { BackgroundContext } from './context/background-context';

const StyledVideoTrailers = styled.section`
  white-space: nowrap;
  overflow-x: scroll;
  padding-bottom: 2rem;
  min-height: 200px;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #9c9c9c61;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background: #006bc7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #005196;
  }
`;

const VideoTrailers = () => {

  const { activeGame } = useContext(BackgroundContext);

  return(
    <StyledVideoTrailers>
      { activeGame === 'explore' ? (
        VIDEOS.map((video, i) => (
          <VideoItem key={i} thumbnail={video.thumbnail} title={video.title} videoID={video.videoID} />
        ))
      ):(
        GAMEUPDATES[activeGame].map((update, i) => (
          <LatestNewsItem key={i} date={update.patchRelease} title={update.title} articleLink={update.articleLink} />
        ))
      )}
      
    </StyledVideoTrailers>
  )
}

export default VideoTrailers;