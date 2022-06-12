import React,{useState} from 'react'

 const TestMap = () => {
    // tao 1 cai lisst
    const [list, setList] =useState([
        {name: 'trang1', age:18},
        {name: 'trang2', age:19},
        {name: 'trang3', age:20},
        {name: 'trang4', age:21},
    ]);
    // tao nut delete de xoa phan tu
    //truyen index vao function de nhan biet vi tri nao can xoa
    const btnDelete = (index) =>{
        //  console.log(index);
        // tao 1 newArray moi chua list cu
        const newArray =[...list]
        // sd ham splice de xoa phan tu voi (index la vi tri bat dau, so phan tu muon xoa)
        newArray.splice(index,1)
        setList(newArray)

    }





  return (
    <div>
        {/*  map: lay phan tu cua mang va tra ve phan tu do(trang1 18) */}
        {list.map((item, index) => {
            return <p key={index}> {item.name} {item.age} <button onClick={btnDelete}>Delete</button>
            </p>
        }) 
        }
    </div>
  )
}
export default TestMap
