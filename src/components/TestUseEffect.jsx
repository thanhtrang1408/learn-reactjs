import React,{useEffect,useState} from 'react'


export const TestUseEffect =() => {
    const [state, setState] = useState(0)
    console.log(state)

    // case1: k dependency(render 1 lan duy nhat)

    // dau tien cho state =0
    //useEffect chay sau UI
    // sd setTimeout sau 2s se hien ra console
    //  useEffect (()=>{
    //     setTimeout(() =>{
    //         console.log('tiep theo laf useEffect')
    //     },2000)
    // });

    //case 2: co dependency(gia tri trong denpency thay doi thi render lai)
    useEffect (()=>{
        setTimeout(() =>{
            console.log('tiep theo la setTimeout trong useEffect')
        },2000)
    },[state]);


  return (
    <div>
        <p>{state}</p>
        <div>useEffect</div>
        <button onClick={()=> {
            setState(state +1)
        }}> click me</button>

    </div>
  )
}
