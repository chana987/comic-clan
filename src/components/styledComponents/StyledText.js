import styled from 'styled-components'

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
`

export const Title = styled(Text)`
    color: #CCCCCC;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    max-width: 170px;
`

export const BigTitle = styled(Text)`
    color: #AAAAAA;
    font-weight: 500;
    font-size: 23px;
    display: inline-block;
`

export const LabelText = styled(Text)`
    color: #999999;
    font-weight: 500;
    font-size: 10px;
    line-height: 9px;
    padding-right: 5px;
    display: inline-block;
`

export const NameText = styled(LabelText)`
    font-size: 11px;
    font-weight: bold;
`

export const LinkText = styled(Text)`
    color: #777777;
    text-decoration: underline #777777;
    margin-left: 5px;
    display: inline-block;
`

export const PText = styled(Text)`
    display: inline-block;
    color: #777777;
    text-decoration: underline #777777;
    margin-left: 5px;
`

