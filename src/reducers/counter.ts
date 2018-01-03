import { CounterAction, DECREMENT, INCREMENT } from '../actions/counter';

const counter = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
