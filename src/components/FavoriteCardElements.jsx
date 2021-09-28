import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #111;
  }
`

export const Title = styled.h1`
  margin-left: 40px; 
  margin-bottom: 1rem;
  color: #fff;
`

export const CardContainer = styled.div`
    margin-bottom: 4rem;
    margin-left: 40px; 
    display: inline-block;
    flex-wrap: wrap;
`

export const CardMovie = styled.div`
    margin-bottom: 2rem;
    width: 240px;
    height: 350px;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.09);
    }
`

export const CardImage = styled.img`
    width: 100%;
`

export const CardTitle = styled.h1`
    justify-content: center;
    display: flex;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
`

export const Button = styled.button`
    position: relative;
    left: 12.5rem;
    top: 2.4rem;
    cursor: pointer;
    overflow: hidden;
    color: #f44336;
    outline: none;
    border: none;
    // border-radius: 0.5vw;
    // padding-left: 2rem;
    // padding-right: 2rem;
    // margin-right: 1rem;
    // padding-top: 0.9rem;
    background-color: transparent;
    // transition: transform 450ms;
    // padding-bottom: 0.5rem;

    &:hover {
        transition: all 1s;
        transform: scale(1.3)
      }
`