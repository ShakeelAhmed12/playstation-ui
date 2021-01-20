import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody, Row, Col, Input } from 'reactstrap';
import SearchIcon from '../ui/icons/search';
import SettingsIcon from '../ui/icons/settings';
import Image from 'next/image';
import BurgerMenu from './nav/burger-menu';
import ControllerIcon from '../ui/icons/controller';

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2.5rem 1.5rem;

  @media (min-width: 768px){
    padding: 2.5rem 2rem;
  }

  @media (min-width: 992px){
    padding: 2.5rem;
  }
`;

const StyledNav = styled.section`
  display: flex;
  justify-content: space-between;
  width: 250px;

  a{
    font-size: 2rem;
    font-weight: 100;
    color: #8f97aa;
    text-decoration: none;

    &.active{
      font-weight: 700;
      color: white;
    }
  }

  &.settings{
    width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.icon{
        width: 36px;
        height: 36px;
    }

    .profile{
      width: 50px;
      height: 50px;

      img{
        border-radius: 50%;
      }
    }

    .search{
      position: relative;
      border-radius: 50%;
      height: 55px;
      width: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      transition: all 0.2s ease-in-out;

      :hover{
        background-color: white;
        border: 2px solid #576170;
        padding: 0.3rem;
        cursor: pointer;

        #magnifier{
          fill: #47474b;
        }

        transition: all 0.2s ease-in-out;
      }
    }

    .time{
        font-size: 2rem;
        color: white;
    }
  }
`;

const StyledModal = styled(Modal)`
  position: relative;

  @media (min-width: 768px){
    max-width: 90%;
    margin: 0 auto;
  }

  .modal-content{
    background: linear-gradient(360deg, #1C1C1C 10%, #494949 360%);

    .close{
      color: white;
      opacity: 1;
      text-shadow: 0 0;
    }
  }
`;

const StyledModalHeader = styled(ModalHeader)`
  position: absolute;
  top: -10px;
  right: 20px;
  border-bottom: 0;
`;

const StyledModalBody = styled(ModalBody)`
    overflow-y: scroll;

    @media (min-width: 1200px){
      height: 90vh;
    }

    p{
      color: white;
      font-size: 1.5rem;
      margin: 1.5rem 0;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
  
    ::-webkit-scrollbar-track {
      background: #38383861;
      border-radius: 16px;
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 16px;
      background: #423f3f;

    }
  
    ::-webkit-scrollbar-thumb:hover {
      background: #5a5a5a;
    }
`;

const GameCard = styled.div`
    height: 350px;
    margin: 1rem 0.5rem;
    position: relative;
    overflow: hidden;

    img{
      height: 100%;
      max-width: 100%;
      object-fit: cover;
    }
`;

const GameCardFooter = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    padding: 1.5rem;
    position: absolute;
    bottom: 0;
    color: white;
    width: 100%;

    h5{
      margin-bottom: 2rem;
    }

    a{
      color: white;
      text-decoration: none;
    }

    p{
      font-size: 0.875rem;
      margin: 0;
    }
`;

const Header = () => {
    const [time, setTime] = useState('');
    const [activeDeviceMedia, setDeviceMedia] = useState('desktop');
    const [searchModal, setSearchModal] = useState(false);
    const [gameData, setGameData] = useState([]);

    const revealSearch = () => setSearchModal(!searchModal);

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        setTime(`${hours}:${minutes}`);

        if(window.matchMedia('(min-width: 992px)').matches){
          setDeviceMedia('desktop');
        }else{
          setDeviceMedia('mobile');
        }
        fetchFromApi('');
    }, []);

    async function fetchFromApi (query) {
      fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_KEY}&platforms=187,18&parent_platforms=2${query && `&search=${query}`}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(response => response.json())
        .then(data => {
          setGameData(data.results);
        })
      .catch((error) => {
          console.error('Error:', error);
      });
   };

    return(
      <>
    <StyledHeader>
        {activeDeviceMedia === 'desktop' ? (
          <>
          <StyledNav>
          <a href="#" className="active">
            Games
          </a>
          <a href="#">
            Media
          </a>
        </StyledNav>
        <StyledNav className="settings">
          <span className="icon search" onClick={revealSearch}>
            <SearchIcon />
          </span>
          <span className="icon">
            <SettingsIcon />
          </span>
          <span className="profile">
            <Image src="/playstation/profile.jpg" alt="User profile avatar" layout="responsive" width={50} height={50} />
          </span>
          <span className="time">
            {time}
          </span>
        </StyledNav>
          </>
        ):(
          <>
            <StyledNav className="settings">
            <span className="time">
              {time}
            </span>
            </StyledNav>
            <BurgerMenu />
          </>
        )}
      </StyledHeader>
      {searchModal && (
          <StyledModal isOpen={searchModal} toggle={revealSearch} centered>
            <StyledModalHeader toggle={revealSearch} />
            <div className="mt-3 pl-3 pr-5 mr-5 pb-3">
              <Row>
                <Col xs="12">
                  <Input type="email" placeholder="Search for game..." onKeyDown={(e) => fetchFromApi(e.currentTarget.value)} />
                </Col>
              </Row>
            </div>
            <StyledModalBody>
              <Row>
                <Col xs="12">
                  <p>
                    Trending
                  </p>
                </Col>
              {gameData.length > 0 ? gameData.map((game, i) => (
                <Col lg="3" md="6" xs="12" key={i}>
                  <GameCard>
                    <img src={game.background_image} loading="lazy" alt={game.name} />
                    <GameCardFooter>
                    <h5>
                        {game.name}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <p>Release Date: {game.released}</p>
                        <ControllerIcon />
                      </div>
                    </GameCardFooter>
                  </GameCard>
                </Col>
              )):(
                <Col xs="12">
                  <p className="text-center">
                    Couldn't find any games
                  </p>
                </Col>
              )}
              </Row>
            </StyledModalBody>
          </StyledModal>
        )}
      </>
    )
};

export default Header;