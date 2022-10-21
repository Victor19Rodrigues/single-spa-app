import { Wrapper } from './styles'
import { IconProps } from './types'

export function Icon({ children, cursorPointer }: IconProps) {
  return (
    <Wrapper
      as={cursorPointer ? 'button' : 'span'}
      cursorPointer={cursorPointer}
    >
      {children}
    </Wrapper>
  )
}
