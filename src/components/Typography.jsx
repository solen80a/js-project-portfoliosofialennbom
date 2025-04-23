import styled from "styled-components";
import { Media } from "./Media";

export const H1 = styled.h1`
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media ${Media.desktop} {
  font-size: 100px;  
}
`

export const H2 = styled.h2`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;

@media ${Media.desktop} {
  font-size: 80px;
}
`
export const H3 = styled.h3`
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;

@media ${Media.desktop} {
    font-size: 30px;
}
`
export const Body = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

@media ${Media.desktop} {
    font-size: 18px;
  }
`

