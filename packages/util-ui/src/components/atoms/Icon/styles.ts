import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IconProps } from './types'

export const Wrapper = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid transparent;
  background-color: #121214;
  border-radius: 0.4rem;
  padding: 0.2rem;
  color: #c4c4cc;

  ${({ cursorPointer }) => css`
    ${cursorPointer &&
    css`
      cursor: pointer;

      &:focus {
        border: 0.2rem solid #c4c4cc;
      }
    `}
  `}
`
