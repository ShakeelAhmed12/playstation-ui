import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '../ui/icons/search';
import SettingsIcon from '../ui/icons/settings';
import Image from 'next/image';
import BurgerMenu from './nav/burger-menu';

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

    .time{
        font-size: 2rem;
        color: white;
    }
  }
`;

const Header = () => {
    const [time, setTime] = useState('');
    const [activeDeviceMedia, setDeviceMedia] = useState('desktop');

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

    }, []);

    return(
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
          <span className="icon">
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
    )
};

export default Header;