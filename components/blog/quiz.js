import { useState } from 'react';
import data from "../../content/quizzes/firmenform.json";

function Quiz(props) {

    const { title, link, description, image, category } = props

    const quiz = data.quiz;

    const [id, setId] = useState(0);
    const [question, setQuestion] = useState(quiz[0].question);
    const [answers, setAnswers] = useState(quiz[0].answers);
    const [selected, setSelected] = useState(0);
    const [finished, setFinished] = useState(false);

    function handleContinue() {
        setSelected(0);
        setId(id + 1);
        setQuestion(id);
        setAnswers(quiz[id].answers);
    }

    function handleSelection(id) {
        setSelected(id);
    }

    return (
        <article className="box post" style={{ maxWidth: "750px", margin: "auto" }}>
            <a href="#" className="image featured"><img src={image} alt="" /></a>
            <header>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </header>
            <h3 className="question">Frage {id + 1}: {question}</h3>
            {answers.map(answer =>
                <button className={"quiz " + (selected == answer.id ? "selected" : "")}
                    onClick={handleSelection.bind(this, answer.id)}>
                    {answer.text}
                </button>)
            }
            <button className="continue" onClick={handleContinue.bind(this)}>Weiter</button>
        </article>
    );
}

export default Quiz;