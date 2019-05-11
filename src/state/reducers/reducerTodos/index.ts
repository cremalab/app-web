import { TaggedActionTodoAdd } from "../../actions/actionTodoAdd"
import { TaggedActionTodoRemove } from "../../actions/actionTodoRemove"
import { TaggedActionTodoUpdate } from "../../actions/actionTodoUpdate"
import { ActionType } from "../../../types/ActionType"
import { State } from "../../../types/State"
import { reducer } from "../../../utils/reducer"
import { stateCollectionEntityAdd } from "../../../utils/stateCollectionEntityAdd"
import { stateCollectionEntityRemove } from "../../../utils/stateCollectionEntityRemove"
import { stateCollectionEntityUpdate } from "../../../utils/stateCollectionEntityUpdate"

type TaggedAction =
  | TaggedActionTodoAdd
  | TaggedActionTodoRemove
  | TaggedActionTodoUpdate

export const reducerTodos = reducer<State["todos"], TaggedAction>(
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
