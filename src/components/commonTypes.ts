
export type PropsWithChild = {
  className?: string
  children: React.ReactNode
}

export type StandartProps = Omit<PropsWithChild, 'children'>
