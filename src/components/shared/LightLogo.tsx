import React from 'react'

type Props = {
  text: string,
  width: string,
  height: string,
}
const LightLogo = (props: Props) => {
  return (
    <div className='flex flex-row items-center'>
        <img src='/assets/iconLight.png' className={`${props.width} ${props.height}`}/>
        <p className={`${props.text} font-medium`}>PoupeePassion</p>
    </div>
  )
}

export default LightLogo