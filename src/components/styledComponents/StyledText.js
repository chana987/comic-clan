import styled from 'styled-components'

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    letter-spacing: 0.01rem;
`

export const Title = styled(Text)`
    color: #CCCCCC;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1.25rem;
    max-width: 170px;
`

export const BigTitle = styled(Text)`
    color: #AAAAAA;
    font-weight: 500;
    font-size: 1.4375rem;
    display: inline-block;
    padding-bottom: 1rem;
`

export const LabelText = styled(Text)`
    color: #999999;
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem 0.1rem 0;
    display: inline-block;
`

export const NameText = styled(LabelText)`
    font-size: 0.85rem;
    font-weight: bold;
`

export const LinkText = styled(Text)`
    color: #777777;
    text-decoration: underline #777777;
    margin-left: 0.25px;
    display: inline-block;
`

export const PText = styled(Text)`
    color: #CCCCCC;  
    font-size: 0.8rem;  
    font-weight: bold;
    line-height: 1.1rem;
    padding-top: 1.7rem;
`

export const Button = styled(Text)`
    color:  #777777;
    display: inline-block;
    padding: 0 1.25rem;
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
    margin: 1.4rem 0;
`
