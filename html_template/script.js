//

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state

const initialState = {
  value: 0,
};

// create reducer function  ... it takes current state and action as parameters

const counterReducer = (state = initialState, action) => {
  // increment

  //     action = {
  //     type: 'increment',
  // }

  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return { ...state, value: state.value - 1 };
  } else {
    return state;
  }
};

// create store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update ui initally

render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
