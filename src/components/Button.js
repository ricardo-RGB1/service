import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#79A7D3" : '#678FB5')};
  border-radius: ${({ round }) => (round ? "4px" : "50px")};
  padding: ${({ big }) => (big ? "12px 44px" : "10px 22px")};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-2px);
    background: #678FB5;
  }
`
