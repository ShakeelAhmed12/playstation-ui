import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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

  input{
    background: transparent;
    color: white;
    border: 1px solid #404040;
    border-radius: 6px;
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


const SearchModal = () => (

)