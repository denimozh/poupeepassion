import Image from 'next/image'
import React from 'react'

type Props = {
  text: string,
  width: number,
  height: number,
}
const DarkModeLogo = (props: Props) => {
  return (
    <div className='flex flex-row items-center'>
        <Image src='/DarkModeLogo.png' width={props.width} height={props.height} alt='logo'/>
        <p className={`${props.text} font-medium`}>PoupeePassion</p>
    </div>
  )
}

export default DarkModeLogo