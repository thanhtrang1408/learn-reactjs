import React from "react";
import Grandchild from "./Grandchild";

const Child = (props) => {
  // truyề props từ cha sang con
  const listData = props.arrayProps;
  const stringProps = props.stringProps;
  // viết gọn lại theo ES6 là
  // const {stringProps} = props ;
  const { propsFunc } = props;

  // truyền sự kiện để gọi từ con lên cha
  // tạo 1 datacon
  const dataCon = " này là dữ liệu của con nha";
  const handelEvent = () => {
    propsFunc(dataCon);
  };

  return (
    <div>
      {/* render props tu cha truyen sang con ra UI */}
      {listData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {stringProps}
      {/*  truyền qua cháu */}
      <Grandchild childParam={props} />

      {/* truyền sự kiện button  */}
      <button onClick={handelEvent}> Click me</button>
    </div>
  );
};

export default Child;
