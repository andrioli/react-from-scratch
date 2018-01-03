import { TodoAction } from './todo';
import { VisibilityFilterAction } from './visibilityFilter';

export type TodoAppAction = TodoAction |
                            VisibilityFilterAction;
