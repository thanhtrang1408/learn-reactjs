import { useState } from "react"
import React from 'react'

export const TestUseState = () => {
    const [state, setState] =useState(0)
    // muon xem gia tri sau khi setState thi de log o day( chắc là do render từ trên xuống dưới)
    // vì để đso nó hiện cái state trước rồi sau khi click thì nó hiện ra sétstate
    console.log(state);
    
    const btnsetState =() =>{
        setState(state +1);
        // còn để dưới đây thì sau khi click nó hiện state
        // console.log(state);
}


  return (
    <div>
        {/* hien ra so 0 */}
        <p>{state}</p>
        <button onClick ={btnsetState}>Click me</button>

    </div>
  )
}
