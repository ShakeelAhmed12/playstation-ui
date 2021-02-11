import styled from 'styled-components';

const StyledCard = styled.a`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: break-spaces;
    width: 350px;
    height: 200px;
    background: rgba(0,0,0,0.5);
    padding: 1rem;
    margin-right: 1.25rem;
    transition: background 0.15s ease-in-out;
    text-decoration: none;

    &:hover{
        background: rgba(0,0,0,1);
    }

    h1{
        font-size: 1.5rem;
        color: white;
    }

    span{
        font-size: 0.875rem;
        color: white;
        margin-nottom: 1.125rem;
    }

    p{
        font-size: 1.25rem;
        color: white;
    }
`;

const LatestNewsCards = ({ date, title, articleLink,  }) => {
    return(
        <StyledCard href={articleLink} target="_blank">
            <span>
                {date}
            </span>
            <h1>
                {title}
            </h1>
            <p>
                Find out more
            </p>
        </StyledCard>
    )
};

export default LatestNewsCards;