import { BehaviorSubject } from 'rxjs'

export const auth$ = new BehaviorSubject({
  sessionToken: localStorage.getItem('@single-spa-app:sessionToken-1.0.0'),
  error: false,
  pending: false,
})

const GET_LOGGED_IN = (username: string, password: string) =>
  new Promise((resolve, _) => {
    auth$.next({
      sessionToken: null,
      error: false,
      pending: true,
    })

    setTimeout(() => {
      if (username === 'exampleuser' && password === 'examplepassword') {
        const sessionToken = 'abc123def456'

        localStorage.setItem('@single-spa-app:sessionToken-1.0.0', sessionToken)
        
        resolve({
          sessionToken,
          error: false,
          pending: false,
        })
      } else {
        resolve({
          sessionToken: null,
          error: 'Invalid user or password',
          pending: false,
        })
      }
    }, 2500)
  })

export function login(username: string, password: string) {
  if (!auth$.value.pending) {
    GET_LOGGED_IN(username, password).then((user: any) => {
      auth$.next(user)
    })
  }
}

export function logout() {
  localStorage.removeItem('@single-spa-app:sessionToken-1.0.0')

  auth$.next({
    sessionToken: null,
    error: false,
    pending: false,
  })
}
