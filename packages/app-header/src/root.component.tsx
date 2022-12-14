// @ts-ignore
import { Header } from '@mfe/util-ui'
// @ts-ignore
import { auth$ as auth } from '@mfe/util-auth'
import { useEffect, useState } from 'react'
import { navigateToUrl } from 'single-spa'

const ROUTES = {
  LOGIN: '/login',
  HOME: '/home',
}

export default function Root() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const subs = auth.subscribe(({ sessionToken }) => {
      const needsLogin = !sessionToken

      if (needsLogin) {
        setLogged(false)
        navigateToUrl(ROUTES.LOGIN)
      }

      if(!needsLogin) {
        setLogged(true)
      }

      if (!needsLogin && window.location.pathname === ROUTES.LOGIN) {
        navigateToUrl(ROUTES.HOME)
        setLogged(true)
      }
    })

    return () => {
      subs.unsubscribe()
    }
  }, [logged])

  return logged ? <Header /> : null
}
