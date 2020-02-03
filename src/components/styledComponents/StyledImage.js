import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    border-radius: 3px;
    display: block;
    margin-bottom: 0.8rem;
    border: 0;
`

export const BigImage = styled(Image)`
    width: 20rem;
    min-width: 100%;
    
    @media only screen and (max-width: 450px) {
        max-height: 20rem;
    }
`
