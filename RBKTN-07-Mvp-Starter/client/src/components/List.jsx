import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div id= "container">
    {props.rents.map((rent, index) => (
      <div className="cards" key={index}>
        <ListItem className="infos" rent={rent} deleted={props.deleted} updated={props.updated}/>
      </div>
    ))}
  </div>
);

export default List;
