import styled from 'styled-components'

export const IconDiv = styled.div`
    cursor: pointer;
    padding: 5px;
    float: right;
`

export const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #999999;
    margin: 6px 0;
    transition: 0.4s;

    ${props => {
    if (props.change) {
        if (props.num === "1") {
            return `
                -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
                transform: rotate(-45deg) translate(-9px, 6px) ;
            `
        } else if (props.num === "2") {
            return `
                opacity: 0;
            `
        } else if (props.num === "3") {
            return `
                -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
                transform: rotate(45deg) translate(-8px, -8px) ;
            `
        }
    }
}}
`