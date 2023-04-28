import { ReactElement } from 'react'

type HandleType = ( event : React.ChangeEvent<HTMLInputElement>) => void
type HandleClick = () => void
type Component = () => ReactElement

export type { Component, HandleType, HandleClick }