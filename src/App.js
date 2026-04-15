import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
<<<<<<< HEAD
import IQAssessment from "./Pages/IQAssessment/IQAssessment";
=======
import Quiz from "./Pages/Quiz/Quiz";
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
<<<<<<< HEAD
      `https://opentdb.com/api.php?amount=10${
=======
      `https://opentdb.com/api.php?amount=10&encode=none${
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
<<<<<<< HEAD
    return data.results;
=======
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
<<<<<<< HEAD
          <Route path="/iq-assessment">
            <IQAssessment
=======
          <Route path="/quiz">
            <Quiz
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
