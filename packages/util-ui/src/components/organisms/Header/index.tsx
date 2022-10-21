import { Container, Wrapper, GroupMenu } from './styles'
import { Navigate, Separator, Icon } from '../../atoms'
import { LogoutOutlined } from '@mui/icons-material'
import { Tooltip } from '@mui/material'

export function Header() {
  return (
    <Container>
      <Wrapper>
        <GroupMenu>
          <Navigate path='/home' children='Home' />

          <Separator dark maxHeight='1.7rem' />

          <Icon cursorPointer>
            <Tooltip title="Logout">
              <LogoutOutlined fontSize='large' />
            </Tooltip>
          </Icon>
        </GroupMenu>
      </Wrapper>
    </Container>
  )
}
