import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "./actionsIdentifier";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DYNAMIC_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    case DYNAMIC_DECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };
    default:
      return state;
  }
};

export default counterReducer;
