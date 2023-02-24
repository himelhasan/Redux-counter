import rootReducer from "../rootReducer";

// first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(JSON.stringify(action));
  console.log(`before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`upcoming action: ${JSON.stringify(upcomingState)}`);
  console.log(action);
  return next(action);
};

export default myLogger;
