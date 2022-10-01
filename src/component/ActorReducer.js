const ActorReducer = (state = [], action) => {
  switch (action.type) {
    case "actor_data":
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
};
export default ActorReducer;
