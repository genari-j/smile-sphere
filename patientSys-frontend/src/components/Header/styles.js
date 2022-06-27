import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const TitlesBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
`

export const CompanyNameAndLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    h1 {
        font-size: 1.5rem;
        font-weight: 600;

        @media (max-width: 445px) {
            font-size: 2rem;
        }
    }

    span {
        font-size: 2rem;
        animation: movingicon 1.5s infinite;

        color: rgba(255,0,0,0.6);

    @keyframes movingicon {

        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.1);
        }

    }
}
`

export const AvatarAndUser = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: 600;
    }

    img {
        width: 100%;
        max-width: 5rem;

        border-radius: 50%;
    }
`