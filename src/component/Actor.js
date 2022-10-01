import { ActorAction } from "./ActorAction";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Actor() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const actorData = useSelector((state) => state.actorData);

  const add = () => {
    dispatch(ActorAction(user));
  };

  return (
    <>
      <h1> welcome in Actor serach</h1>
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
        {actorData.map((item, i) => {
          return (
            <div className="details-style" key={i}>
              <h4> {item.person.name} </h4>
              <img src={item.person.image.medium} alt="actor-show" />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Actor;
