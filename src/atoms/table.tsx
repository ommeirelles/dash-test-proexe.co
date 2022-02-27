import { HTMLProps, PropsWithChildren } from 'react'
import style from './_table.scss'

interface TableProps extends HTMLProps<HTMLTableElement> {}

export const Table = ({ children, className }: PropsWithChildren<TableProps>) => {
  return <table className={`atom-table self-center shadow-lg shadow-black ${className}`}>{children}</table>
}
