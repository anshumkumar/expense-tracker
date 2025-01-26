import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';


function header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm' >
        <Image src="/logo.svg" alt="logo" width={160} height={100} />
        <Button>Get Started</Button>
    </div>
  )
}

export default header