import { HTMLProps, PropsWithChildren } from 'react'
import './_table.scss'

export const Table = ({ children, className }: PropsWithChildren<HTMLProps<HTMLTableElement>>) => {
  return <table className={`atom-table self-center shadow-lg shadow-black ${className}`}>{children}</table>
}
