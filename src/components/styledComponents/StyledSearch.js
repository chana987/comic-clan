import styled from 'styled-components'

export const SearchForm = styled.div`
    display: grid;
    grid-template-columns: 3.4rem 1fr;
    border: 3px solid #777777;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0.8rem;
    outline: none;

    @media(max-width: ) {
        
    }
`

export const SearchInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.3rem;
    background: #303030;
    border: none;
    color: #5A5A5A;
    outline: none;
    max-width: 95%;
`

export const SearchButton = styled.button`
    background: #303030;
    border: none;
    // padding: 0.5rem;
    margin: 0.3rem;
    width: 1.6rem;
    outline: none;
    cursor: pointer;
`
