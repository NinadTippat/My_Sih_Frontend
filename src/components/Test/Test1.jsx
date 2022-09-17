import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";



function Test() {

    const questions = [
        {
            questionText: "Do you like number games like sudoku?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Is Math easy for you?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are Mathematics and natural subjects your favorite school subjects?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Can you do calculating operations in your mind?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you look for patterns, regularity, or logical sequences in things?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you quick at adding and subtracting?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you like to carry out tasks in a logical and orderly way?",
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
    const [score1, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score1 + 5);
        } else if (isCorrect === 4) {
            setScore(score1 + 4);
        } else if (isCorrect === 3) {
            setScore(score1 + 3);
        } else if (isCorrect === 2) {
            setScore(score1 + 2);
        } else if (isCorrect === 1) {
            setScore(score1 + 1);
        }


        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const per1 = (score1 * 100 / 35);
    const res1 = per1.toPrecision(4);

    const Render_Score1 = () => {
        if (res1 > 75.10) {
            return <>
                <br />
                Your score is {res1}% Based on your score,  here are some recommended careers

                <br />
                <br />
                Accountant
                <br />
                Computer analyst
                <br />
                Computer technician
                <br />
                Computer programmer
                <br />
                Database designer
                <br />
                Economist
                <br />
                Engineer
                <br />
                Lawyer
                <br />
                Mathematician
                <br />
                Network analyst
                <br />
                Pharmacist
                <br />
                Physician
                <br />
                Physicist
                <br />
                Researcher
                <br />
                Statistician
                <div >
                    <Link to="/test2"><button className="next_btn" >Next</button></Link>
                </div>
            </>
        }
        else if ((score1 * 100 / 35) < 80) {
            return <>
                <div className="score-section">
                    <h2>Your score is {res1} for Logical-Mathematical Test.</h2>
                    <div >
                        <Link to="/test2"><button className="next_btn" >Next</button></Link>
                    </div>
                </div>
            </>
        }
    }

    return (

        <div className="test">
            <h1 className='test_heading'>Logical-Mathematical Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section"  >
                        <Render_Score1 />
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
                        </div >
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
                )
                }
            </div >
        </div >
    )
}

export default Test