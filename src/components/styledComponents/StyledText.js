import styled from 'styled-components'

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
`

export const Title = styled(Text)`
    color: #CCCCCC;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 2rem;
    max-width: 170px;
    margin-bottom: 0.5rem
`

export const BigTitle = styled(Text)`
    color: #AAAAAA;
    font-weight: 500;
    font-size: 2.3rem;
    display: inline-block;
    padding: 1rem 0;
`

export const LabelText = styled(Text)`
    color: #999999;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.2rem 0.5rem 0.1rem 0;
    display: inline-block;
    line-height: 1.5rem;
`

export const NameText = styled(LabelText)`
    font-size: 1rem;
    font-weight: bold;
`

export const LinkText = styled(Text)`
    color: #777777;
    text-decoration: underline #777777;
    margin-left: 5px;
    display: inline-block;
    font-size: 1.4rem;
`

export const PText = styled(Text)`
    color: #CCCCCC;  
    font-size: 1rem;  
    font-weight: bold;
    line-height: 1.3rem;
    padding-top: 1.7rem;
`

export const MenuButton = styled(Text)`
    color:  #777777;
    display: inline-block;
    padding: 1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
    margin: 1.4rem 0;

    ${props => {
    if (props.active) {
        return `
            background: #F15454;
            border-radius: 1.2rem;
            box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
            color: #FFFFFF;
            padding: 0.6rem 1.3rem;
        `}
    }}

    @media only screen and (max-width: 350px) {
        display: block;
        margin: 1rem;
        border-radius: 3px;
        padding: 0.6rem 1.3rem;
    }
`
