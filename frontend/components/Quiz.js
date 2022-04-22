import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../state/action-creators";

function Quiz(props) {
  const { fetchQuiz, selectAnswer, postAnswer, quiz, selectedAnswer } = props;

  useEffect(() => {
    props.fetchQuiz();
  }, []);

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
              <div className="answer selected">
                {quiz.answers[0].text}
                <button>SELECTED</button>
              </div>

              <div className="answer">
                {quiz.answers[1].text}
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        )
      }
    </div>
  );
}

export default connect((state) => state, actions)(Quiz);
