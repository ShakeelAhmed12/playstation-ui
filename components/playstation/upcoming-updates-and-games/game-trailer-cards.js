import { useState } from 'react';
import { Modal } from 'reactstrap';
import styled from 'styled-components';
import Image from 'next/image';
import PlayIcon from '../../ui/icons/play';

const StyledVideoItem = styled.div`
    position: relative;
    display: inline-block;
    white-space: nowrap;
    width: 350px;
    height: 200px;
    background: linear-gradient(60deg, rgba(16,25,37,1) 0%, rgba(0,0,0,1) 50%, rgba(16,25,37,1) 100%);
    margin-right: 1.25rem;
    opacity: 1;
    cursor: pointer;
    
    &:hover{
      img{
        opacity: 1;
      }
    }

    img{
      transition: opacity 0.4s ease-in-out;
      opacity: 0.5;
      width: 350px;
      height: 200px;
      object-fit: cover;
    }

    .video-info{
      position: absolute;
      width: 100%;
      bottom: 0;
      color: white;
      padding: 1rem;
    }

    .circle-player{
      background: white;
      color: #001111;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
`;

const StyledModal = styled(Modal)`
    max-width: 1080px;

    *{
        background: none;
        border: none;    
    }
`;

const StyledVideoWrapper = styled.div`
    padding-bottom: 59.65%;
    position: relative;

    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const GameTrailerCards = ({ thumbnail, title, videoID }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <>
            <StyledVideoItem onClick={toggle}>
                <Image src={thumbnail} alt={title} layout="responsive" width={350} height={200} />
                <div className="video-info">
                <div className="circle-player">
                    <PlayIcon />
                </div>
                <span className="title">
                    {title}
                </span>
                </div>
            </StyledVideoItem>
            <StyledModal centered={true} isOpen={modal} toggle={toggle}>
                <StyledVideoWrapper>
                    <iframe
                        loading="lazy"
                        src={`https://www.youtube.com/embed/${videoID}?rel=0&autoplay=1&fs=1`}
                        frameborder="0"
                        allow="autoplay; fullscreen;"
                        allowFullScreen />
                </StyledVideoWrapper>
            </StyledModal>
        </>
    )
};

export default GameTrailerCards;