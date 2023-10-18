import React from 'react'
import './button.css'
import Image from 'next/image';

type Props = {
  className : string
  , children ?: string,
  image:string,
  w:number,
  h:number,
  gap:number;
}
function ButtonImage({className, children,image,w,h,gap }: Props) { 
  return (
    <div className='container-icon'>
        <Image  src={image} width={w} height={h} alt='asdasd'/>
        <div  className={className}>{children}</div>
    </div>
   
  )
}

export default ButtonImage