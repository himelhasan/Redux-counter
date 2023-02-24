import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actionsIdentifier";

const initialState = {
  value: 100,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DYNAMIC_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default dynamicCounterReducer;
