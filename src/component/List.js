import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListAction } from "./Action";

function List() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const add = () => {
    dispatch(ListAction(user));
    setUser("");
  };
  return (
    <>
      <h1> welcome in show serach</h1>
      <input
        type="text"
        placeholder="add your item"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>

      <div className="data-style">
        {userData.map((item, i) => {
          return (
            <div className="details-style" key={i}>
              <img src={item.show.image.medium} alt="episode" />
              <h4> {item.show.name} </h4>
              <p> {item.show.summary} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
