// your components will all go in this `component` directory.

//map through each item 

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log(props)
    return (
        <div>
             {props.tasks.map(item => {
        return (
                <Todo item={item} key={item.id} toggleItem={props.toggleItem} />
        );
      })}
        </div>
    )
}

export default TodoList;