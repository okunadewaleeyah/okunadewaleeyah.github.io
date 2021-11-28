import styled from "styled-components";

export const ChallengesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1000px) {
        height: 800px;
    }

    @media screen and (max-width: 768px) {
        height: 1250px;
    }

    @media screen and (max-width: 540px) {
        height: 1350px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

    @media screen and (max-width: 320px) {
        height: 1420px;
    }

    @media screen and (max-width: 280px) {
        height: 1500px;
    }
`

export const ChallengesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 40px;

    @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ChallengesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba( 0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    s
`

export const ChalllengesIcon = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`

export const ChallengesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 1000px) {
        margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        
    }
`

export const ChallengesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ChallengesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
`