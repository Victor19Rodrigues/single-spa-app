import { BehaviorSubject } from 'rxjs'

export const auth$ = new BehaviorSubject({
  sessionToken: localStorage.getItem('@single-spa-app:sessionToken-1.0.0'),
  error: false,
  pending: false,
})

const GET_LOGGED_IN = (email: string, password: string) =>
  new Promise((resolve, _) => {
    auth$.next({
      sessionToken: null,
      error: false,
      pending: true,
    })

    setTimeout(() => {
      if (email === 'victor@gmail.com' && password === 'victor123') {
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
          error: 'Invalid email or password',
          pending: false,
        })
      }
    }, 2500)
  })

export function login(email: string, password: string) {
  if (!auth$.value.pending) {
    GET_LOGGED_IN(email, password).then((user: any) => {
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
