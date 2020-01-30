import styled from 'styled-components'

export const Image = styled.img`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 150px;
    height: 220px;
    border-radius: 3px;
    display: block;
    margin-bottom: 10px;
`

export const BigImage = styled(Image)`
    width: 250px;
    height: 400px;
`
