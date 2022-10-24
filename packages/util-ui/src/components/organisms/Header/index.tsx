import { Container, Wrapper, GroupMenu } from './styles'
import { Navigate, Separator, Icon } from '../../atoms'
import { LogoutOutlined } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
// @ts-ignore
import { logout } from '@mfe/util-auth'

export function Header() {
  function handleLogout() {
    logout()
  }

  return (
    <Container>
      <Wrapper>
        <GroupMenu>
          <Navigate path='/home' children='Home' />

          <Separator maxHeight='1.7rem' />

          <Icon cursorPointer>
            <Tooltip onClick={handleLogout} arrow title='Logout' role='button'>
              <LogoutOutlined fontSize='large' />
            </Tooltip>
          </Icon>
        </GroupMenu>
      </Wrapper>
    </Container>
  )
}
