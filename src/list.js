import React, { useState, useRef } from "react";
import Edit from "./edit";
import Item from "./item";
import './List.css';

function List() {
  const [list, setList] = useState(["item1", "item2", "item3"]);
  const editpopup = useRef();

  function del(item){
    var newList = list.filter((e) => e != item );
    setList(newList);
  }
  function openPopup(item){
    editpopup.current.open(item);
}
    function editItem(oldItem, newItem){
        var newList = list.map((item) => item == oldItem ? newItem : item);
        setList(newList);
    }
  return (
    <div className="list-container">
      <ul className="list">
        {list.map((item) => {
          return <Item item = {item} del = {del} openPopup = {openPopup} ></Item>;
        })}
      </ul>
      <Edit ref={editpopup}  editItem={editItem}></Edit>
    </div>
  );
}
export default List;
