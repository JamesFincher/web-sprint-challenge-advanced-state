// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import * as types from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_COUNTERCLOCKWISE: {
      console.log("testing");
      if (state === 0) {
        return 5;
      } else {
        return state - 1;
      }
    }
    case types.MOVE_CLOCKWISE: {
      if (state === 5) {
        return 0;
      } else {
        return state + 1;
      }
    }
    default:
      return state;
  }
}

const initialQuizState = 1;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE: {
      const newState = action.payload;
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}

const initialSelectedAnswerState = "empty";
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER: {
      const newState = action.payload;
      return newState;
    }
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE: {
      return action.payload;
    }
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE: {
      return { ...state, [action.payload.name]: action.payload.value };
    }
    case types.RESET_FORM: {
      return initialFormState;
    }
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
