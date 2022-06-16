import React from 'react'
import Image from 'next/image'

import menuImg from './../../../public/menu.svg'

export default function WrapperMenu() {
  return (
    <Image
      src={menuImg}
      alt="Icone do wrapper menu"
      width={100}
      height={100}
      quality={75}
    />
  )
}
