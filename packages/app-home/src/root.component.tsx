import { Container, ContainerHeader } from './styles'
// @ts-ignore
import { Home } from '@mfe/util-ui'

export default function Root() {
  return (
    <>
      <ContainerHeader>
        <h1>App React</h1>
      </ContainerHeader>
      <Container>
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </Container>
    </>
  )
}
