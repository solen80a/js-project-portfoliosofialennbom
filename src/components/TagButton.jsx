import styled from "styled-components";

export const TagButton =styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
border: ${props => (props.$projtag ? "1px solid #434040" : "1px solid white")};
border-radius: 4px;
background-color: ${props => (props.$projtag ? "white" : "#434040")} ;
color: ${props => (props.$projtag ? "#434040" : "white")} ;
font-size: 16px;
width: ${props => (props.$projtag ? "85px" : "165px")} ;
height: 24px;
`