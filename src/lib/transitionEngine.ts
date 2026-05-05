import { flowGraph, Context } from "./flowGraph";
import { UserState } from "./types";

export function getNextState(
  currentState: UserState,
  context: Context
): UserState {
  const transitions = flowGraph[currentState];

  for (const transition of transitions) {
    if (!transition.condition) {
      return transition.target;
    }

    if (transition.condition(context)) {
      return transition.target;
    }
  }

  return currentState; 
}