import { useReducer } from "react";
import LaptopView from './laptop/laptop'
import SciFiGirl from './sciFi-girl'
import Shoes from './shoes'
import { Overlay } from './shoes/Overlay'

const initialTodos = [
  {
    id: 1,
    title: "Laptop",
    complete: false,
    ArView: <LaptopView />
  },
  {
    id: 2,
    title: "Sci-fi Girl",
    complete: false,
    ArView: <SciFiGirl />
  },
  {
    id: 3,
    title: "Shoes",
    complete: false,
    ArView: <>
      <Shoes />
      <Overlay />
    </>
  },
];

const reducer = (state, action) => {
  console.log(state,"state")
  console.log(action)
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return { ...todo, complete: false };
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    console.log(todo)
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>

      {/* <div style={{ display: "flex",justifyContent:"center",alignItems:"center",height:"80%",width:"100%" }}>

      {todos.map((todo) => (
        todo.complete?<div key={todo.id} style={{height:"80%",width:"100%" }}>
           {todo.complete?todo.ArView:null}
        </div>:null
      ))}
      </div>  */}
      <div style={{ display: "flex",flexDirection:"row" }}>


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "90%", padding: "20px" }}>

          {/* <Shoes />
    <Overlay /> */}
          {todos.map((todo) => (
            todo.complete ? <div key={todo.id} style={{ height: "100%", width: "100%" }}>
              {todo.complete ? todo.ArView : null}
            </div> : null
          ))}
        </div>
    
      <div style={{width:"10%",marginLeft:'10px'}}>
        {todos.map((todo) => (
          <div style={{display:'flex',}} key={todo.id}>
            <label style={{display:'flex',justifyContent:'flex-end',}}>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              <h1 style={{ color: "white",marginLeft:'10px' }}>
                {todo.title}
                </h1>
            </label>
          </div>
        ))}
  </div>
      </div>
    </>
  );
}

export default Todos;