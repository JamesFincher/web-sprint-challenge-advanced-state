import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const { inputChange, resetForm, postAnswer } = props;
  const onChange = (evt) => {
    const { value, id } = evt.target;
    const change = { [id]: value };
    console.log(change);
    inputChange(id, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const payload = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer,
    };
    const tempPayload = {
      question_text: "Love JS?",
      true_answer_text: "yes",
      false_answer_text: "nah",
    };
    console.log(payload);
    postAnswer(payload);
    resetForm();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        value={props.form.newQuestion}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        value={props.form.newTrueAnswer}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        value={props.form.newFalseAnswer}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        onClick={onSubmit}
        disabled={
          props.form.newQuestion.trim() === "" ||
          props.form.newTrueAnswer.trim() === "" ||
          props.form.newFalseAnswer.trim() === ""
            ? true
            : false
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
