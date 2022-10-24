import styled from '@emotion/styled'

export const Container = styled.button`
  background-color: #121214;
  color: #c4c4cc;
  position: relative;
  cursor: pointer;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  border: 0.2rem solid transparent;

  &:hover {
    transition: color 0.1s linear;
    color: #8D8D99;
  }

  &:focus {
    border: 0.2rem solid #c4c4cc;
  }
`
