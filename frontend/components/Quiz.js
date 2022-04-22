import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function Quiz(props) {
  const {
    fetchQuiz,
    selectAnswer,
    postAnswer,
    postQuiz,
    quiz,
    selectedAnswer,
  } = props;

  const handleSetAnswer = (answerId) => {
    selectAnswer(answerId);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postQuiz(quiz.quiz_id, selectedAnswer);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz === 1 ? (
          "Loading next quiz..."
        ) : (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div
                className={`${
                  selectedAnswer === quiz.answers[0].answer_id
                    ? "answer selected"
                    : "answer"
                }`}
              >
                {quiz.answers[0].text}
                <button
                  onClick={() => handleSetAnswer(quiz.answers[0].answer_id)}
                >
                  {selectedAnswer === quiz.answers[0].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div
                className={`${
                  selectedAnswer === quiz.answers[1].answer_id
                    ? "answer selected"
                    : "answer"
                }`}
                onClick={() => handleSetAnswer(quiz.answers[1].answer_id)}
              >
                {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>
            </div>

            <button
              disabled={selectedAnswer === "empty" ? true : false}
              id="submitAnswerBtn"
              onClick={submitHandler}
            >
              Submit answer
            </button>
          </>
        )
      }
    </div>
  );
}

export default connect((state) => state, actions)(Quiz);
