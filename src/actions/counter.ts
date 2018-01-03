import * as Redux from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export type INCREMENT = typeof INCREMENT;
export type DECREMENT = typeof DECREMENT;

export interface IncrementAction {
  type: INCREMENT;
}

export interface DecrementAction {
  type: DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;

export const incrementAction: () => IncrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction: () => DecrementAction = () => ({
  type: DECREMENT,
});

export const increment = (dispatch: Redux.Dispatch<number>) => {
  dispatch(incrementAction());
};

export const decrement = (dispatch: Redux.Dispatch<number>) => {
  dispatch(decrementAction());
};
