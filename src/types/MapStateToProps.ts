import { State } from "./State"

export type MapStateToProps<Props, PropsOuter = {}> = (
  state: State,
  propsOuter: PropsOuter,
) => Props
