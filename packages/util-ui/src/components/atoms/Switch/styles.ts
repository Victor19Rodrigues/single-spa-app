import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #121214;
  border-radius: 8px;
  height: 6rem;
  padding: 5px;
  column-gap: 5px;
  margin-bottom: 2.4rem;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 6.4rem;
  }
`

export const SwitchButton = styled.button<{ isActiveSwitchButton: boolean }>`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 8px;
  cursor: pointer;
  ${({ isActiveSwitchButton }) => css`
    background-color: ${isActiveSwitchButton ? '#7C7C8A' : '#121214'};
    box-shadow: ${isActiveSwitchButton
      ? '1px 1px 4px rgba(0, 0, 0, 0.1)'
      : 'none'};
    border: 2px solid ${isActiveSwitchButton ? '#000' : '#202024'};
    color: ${isActiveSwitchButton ? '#eee' : '#C4C4CC'};
  `}

  &:focus {
    border: 2px solid #C4C4CC;
  }
`
