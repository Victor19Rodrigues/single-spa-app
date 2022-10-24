import { Container, ContainerHeader, Wrapper, Title } from './styles'
// @ts-ignore
import { Home } from '@mfe/util-ui'

export default function Root() {
  return (
    <Wrapper>
      <ContainerHeader>
        <Title>App React</Title>
      </ContainerHeader>
      <Container>
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </Container>
    </Wrapper>
  )
}
