import { useState } from 'react';
import data from "../../content/quizzes/firmenform.json";

function Quiz(props) {

    const { title, link, description, image, category } = props

    const quiz = data.quiz;

    const [id, setId] = useState(0);
    const [question, setQuestion] = useState(quiz[0].question);
    const [answers, setAnswers] = useState(quiz[0].answers);
    const [selected, setSelected] = useState(0);

    return (
        <article class="box post" style={{ maxWidth: "750px", margin: "auto" }}>
            <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
            <header>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </header>
            <h3 className="question">Frage {id}: {question}</h3>
            {answers.map(answer =>
                <button className="quiz selected">{answer.text}</button>)
            }
            <button className="continue">Weiter</button>
        </article>
    );
}

export default Quiz;