import React, { useState } from 'react'
import "./Test.css"
import { Link } from "react-router-dom";


function Test() {

    const questions = [
        {
            questionText: "When a device is broken, do you try to disassemble it and fix it ?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you do many gestures or body movements when you are talking with someone?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you dance?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you enjoy sports?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you a person with good coordination?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Are you overwhelmed when you sit for too long?",
            answerOptions: [
                { answerText: "Strongly agree", isCorrect: 5 },
                { answerText: "Agree", isCorrect: 4 },
                { answerText: "Neutral", isCorrect: 3 },
                { answerText: "Disagree", isCorrect: 2 },
                { answerText: "Strongly disagree", isCorrect: 1 },
            ],
        },
        {
            questionText: "Do you practice at least one sport or some type of physical activity on a regular basis ?",
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
    const [score5, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect === 5) {
            setScore(score5 + 5);
        } else if (isCorrect === 4) {
            setScore(score5 + 4);
        } else if (isCorrect === 3) {
            setScore(score5 + 3);
        } else if (isCorrect === 2) {
            setScore(score5 + 2);
        } else if (isCorrect === 1) {
            setScore(score5 + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    const per5 = (score5 * 100 / 35);
    const res5 = per5.toPrecision(4);
    const Render_Score5 = () => {
        if ((score5 * 100 / 35) > 85) {
            return <>
                Based on your answers,  here are some recommended careers
                <br />
                <br />
                Athlete
                <br />
                Dancer
                <br />
                Mechanic
                <br />
                Actor / Actress
                <br />
                Performer
                <br />
                Physical Education Instructor
                <br />
                Craftsman
                <br />
                Physical Therapist
                <br />
                Farmer
                <br />
                Carpenter
                <br />
                Builder
                <br />
                Park Ranger
                <br />
                Firefighter
                <br />
                Paramedic
                <br />
                <div >
                    <Link to="/test6"><button className="next_btn" >Next</button></Link>
                </div>
            </>
        }
        else if ((score5 * 100 / 35) < 85) {
            return <>
                <div className="score-section">
                    <h2> Based on your answers,  we request you to go for next test.</h2>
                    <div >
                        <Link to="/test6"><button className="next_btn" >Next</button></Link>
                    </div>
                </div>
            </>
        }
    }



    return (
        <div className="test">
            <h1 className='test_heading'>Kinaesthetic Test</h1>
            <div className="app">
                {showScore ? (
                    <div className="score-section">
                        <Render_Score5 />
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