import axios from "axios";
import * as types from "./action-types";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return { type: types.MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: types.MOVE_COUNTERCLOCKWISE, payload: {} };
}

export function selectAnswer(answer_id) {
  const id = answer_id;
  return { type: types.SET_SELECTED_ANSWER, payload: id };
}

export function setMessage() {}

export function setQuiz() {}

export function inputChange(name, value) {
  const change = { [name]: value };
  return { type: types.INPUT_CHANGE, payload: { name, value } };
}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: 1 });

    axios
      .get("http://localhost:9000/api/quiz/next")
      .then((response) =>
        dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: response.data })
      )
      .catch((error) => console.log(error));

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz(quiz_id, selectedAnswer) {
  return function (dispatch) {
    axios
      .post("http://localhost:9000/api/quiz/answer", {
        quiz_id: quiz_id,
        answer_id: selectedAnswer,
      })
      .then((response) => {
        dispatch({
          type: types.SET_INFO_MESSAGE,
          payload: response.data.message,
        });
      })
      .then(() => dispatch(fetchQuiz()))
      .catch((error) => console.log(error));
  };

  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
