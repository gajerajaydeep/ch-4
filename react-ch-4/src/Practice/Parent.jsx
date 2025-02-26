import React, { createContext } from 'react'
import A from './A'

const data = createContext()//data pass

export default function Parent() {
    //create,provide,consume

   
    const name = "jaydeep"
  return (
   <>
   <data.Provider value={name}>
   <A/>
   </data.Provider>
   </>
  )
}
export {data};
