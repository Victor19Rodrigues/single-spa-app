import { ReactNode } from 'react'

interface NavigateProps {
  path: string
  children?: ReactNode
}

export function Navigate({ children, path }: NavigateProps) {
  return <button>{children}</button>
}
