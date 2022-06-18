import React from "react";
import Child from "./Child";
const Parent = () => {
  const data1 = [1, 2, 3, 4, 5];
  const data2 = "dữ liệu kiểu String";

  // tạo hàm callback để chứa data con
  const callBackData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <p> Parent</p>
      <Child
        // truyền data vào props
        arrayProps={data1}
        stringProps={data2}
        //* truyền sự kiện vào cha để goi từ CON lên CHA */
        // tạo 1 hàm func để gọi callback
        propsFunc={callBackData}
      />
    </div>
  );
};

export default Parent;
