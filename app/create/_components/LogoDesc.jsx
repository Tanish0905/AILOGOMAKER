import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation';

function LogoDesc () {
  const searchParam = useSearchParams();
  const [title,setTitle]=useState(searchParam?.get( 'title' ) ?? '')
  
  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup?.LogoDescTitle}
        description={Lookup?.LogoDescDesc}
      />
      <input
        type='text'
        placeholder={ Lookup?.InputTitlePlaceholder }
        className='p-4 border rounded-lg mt-5 w-full'
        defaultValue={ title }
        onChange={(e)=>onHandleInputChange('desc',e.target.value)}
      />
    </div>
  )
}

export default LogoDesc