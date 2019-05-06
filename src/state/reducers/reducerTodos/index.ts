import { ActionTodoAdd } from "../../actions/actionTodoAdd"
import { ActionTodoRemove } from "../../actions/actionTodoRemove"
import { ActionTodoUpdate } from "../../actions/actionTodoUpdate"
import { ActionType } from "../../../types/ActionType"
import { State } from "../../../types/State"
import { makeReducer } from "../../../utils/makeReducer"
import { stateCollectionEntityAdd } from "../../../utils/stateCollectionEntityAdd"
import { stateCollectionEntityRemove } from "../../../utils/stateCollectionEntityRemove"
import { stateCollectionEntityUpdate } from "../../../utils/stateCollectionEntityUpdate"

type Action = ActionTodoAdd | ActionTodoRemove | ActionTodoUpdate

export const reducerTodos = makeReducer<State["todos"], Action>(
  state => ({
    [ActionType.TodoAdd]: stateCollectionEntityAdd(state),
    [ActionType.TodoRemove]: stateCollectionEntityRemove(state),
    [ActionType.TodoUpdate]: stateCollectionEntityUpdate(state),
  }),
  {
    entities: {},
    result: [],
  },
)
