import { ActionTypes } from "../constants"

export default interface Action<P> {
    type: ActionTypes
    payload: P
  }

//   export default interface Action {
//     type: string
//   }