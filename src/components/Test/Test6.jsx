import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "Do you  like jigsaw puzzles, labyrinths, and other visual games ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you have no problem visualizing in 3D when I see a map?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you have no trouble imagining what things would look like seen from above ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you  prefer to draw a sketch rather than explain it to them in words?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you good at interpreting maps?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Can you see clear visual images on closing your eyes?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you able to orient yourself in an unknown place ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score6, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score6 + 5);
        } else if (isCorrect === 4) {
            setScore(score6 + 4);
        } else if (isCorrect === 3) {
            setScore(score6 + 3);
        } else if (isCorrect === 2) {
            setScore(score6 + 2);
        } else if (isCorrect === 1) {
            setScore(score6 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };




    return (
        <div className="test">
            <h1 className='test_heading'>Visual-Spatial Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section"  >
                        {/* You scored {(score1 * 100) / 35}% out of {(questions.length * 5 * 100) / 35}% */}
                        Your scored {score6}
                        <div >
                            <Link to="/test7"><button className="next_btn" >Next</button></Link>
                        </div>
                    </div>

                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].questionText}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='ans_btn'
                                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                                >
                                    {answerOption.answerText}
                                </button>
                            ))}
                        </div>


                    </>
                )}
            </div>
        </div>


    )
}

export default Test