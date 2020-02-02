import styled from 'styled-components'

export const BookDiv = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: min-content 1fr;
    border-bottom: 1px solid #535353;
    padding: 3rem 0;
`

export const StyledGrid = styled.div`
    margin: 0.8rem auto 3rem auto;
    padding-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap: 6.5rem;
    border-bottom: 1px solid #535353;

    @media only screen and (max-width: 600px) {
        grid-gap: 3rem;
    }
    @media only screen and (max-width: 250px) {
        grid-template-columns: 1fr;
    }
`

export const StarGrid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.4rem;
    padding-left: 2rem;
`