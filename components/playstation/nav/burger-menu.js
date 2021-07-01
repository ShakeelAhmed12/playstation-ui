import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const StyledMenu = styled.nav(({ open }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,0.65);
    backdrop-filter: blur(10px);
    transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    color: white;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.25s ease-in-out;
    width: 50%;
    z-index: 98;

    a{
        font-size: 1.5rem;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        font-weight: 100;
        color: #8f97aa;
        text-decoration: none;
        border-bottom: 1px solid #676767;

        &:last-of-type{
            border: 0;
        }
    
        &.active{
          font-weight: 700;
          color: white;
        }
    }
`);

const StyledBurger = styled.button`
    width: 60px;
    border-radius: 50%;
    border: none;
    z-index: 99;
    transition: right 0.3s ease-in-out;
    overflow: hidden;
`;

const BurgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
        <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)}>
            <Image src="/playstation/profile.jpg" alt="User profile avatar" layout="responsive" width={60} height={60} />
        </StyledBurger>
        <StyledMenu open={isOpen}>
        <a href="#" className="active">
            Games
          </a>
          <a href="#">
            Media
          </a>
          <a href="#">
            Settings
          </a>
          <a href="#">
            Profile
          </a>
        </StyledMenu>
      </>
    )
}

export default BurgerMenu;