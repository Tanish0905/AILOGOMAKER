'use client'
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft,ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPalette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'

function CreateLogo () {
  const [ step, setStep ] = useState( 1 );
  const [ formData, setFormData ] = useState();
  const onHandleInputChange = ( field, value ) => {
    setFormData( prev => ( {
      ...prev,
      [ field ]: value
    }))
  }
  console.log(formData);
  
  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'> 
      { step === 1 ?
        <LogoTitle onHandleInputChange={ ( value ) => onHandleInputChange( 'title', value ) } />
        : step === 2 ? (
          <LogoDesc  onHandleInputChange={(value)=>onHandleInputChange('desc',value)} />
        ) : step === 3 ? (
          <LogoPalette  onHandleInputChange={(value)=>onHandleInputChange('palette',value)} />
        ) : step === 4 ? (
          <LogoDesigns  onHandleInputChange={(value)=>onHandleInputChange('design',value)}/>
        ) : step === 5 ? (
          <LogoIdea  onHandleInputChange={(value)=>onHandleInputChange('idea',value)}/>
        ) : null
      }
      <div className='flex items-center justify-between mt-10' >
        {step !== 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              <ArrowLeft /> Previous
            </Button>
        ) }
          <Button onClick={()=>setStep(step+1)}><ArrowRight/> Cotinue</Button>
      </div>
    </div>
  )
}

export default CreateLogo