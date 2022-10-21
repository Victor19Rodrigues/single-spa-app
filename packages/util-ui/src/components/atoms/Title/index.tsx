import { TitleProps } from './types'
import { Content } from './styles'

export function Title({ children, as, ...props }: TitleProps) {
  return (
    <Content as={as || 'h1'} {...props}>
      {children}
    </Content>
  )
}
