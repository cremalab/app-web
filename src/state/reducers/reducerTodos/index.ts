import { makeReducer } from "../../../utils/makeReducer"
import { State } from "../../../types/State"
import { ActionType } from "../../../types/ActionType"
import { ActionTodoAdd } from "../../actions/actionTodoAdd"

type Action = ActionTodoAdd

export const reducerTodos = makeReducer<State["todos"], Action>(
  state => ({
    [ActionType.TodoAdd]: ({ payload }) => ({
      entities: { ...state.entities, [payload.id]: payload },
      result: [...state.result, payload.id],
    }),
  }),
  {
    entities: {},
    result: [],
  },
)
