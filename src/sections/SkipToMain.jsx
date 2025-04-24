import styled from "styled-components";

const SkipToMain = styled.a`

  position: absolute;
  top: -40px;
  left: 0;
  background: #434040;  
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
  text-align: left;

  &:focus {
  top: 0;
  outline: #434040;
  outline-offset: 2px;
  }
`;

export const SkipToMainContent = () => <SkipToMain href="#main-content">Skip to main content</SkipToMain>
  