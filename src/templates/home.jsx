import React from 'react'
import WrapperMenu from '../components/WrapperMenu'

export default function Home({children}) {
  return (
    <>
      <WrapperMenu />

      {children}
    </>
  )
}
