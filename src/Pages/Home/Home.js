import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
<<<<<<< HEAD
  const [loadError, setLoadError] = useState(false);

  const history = useHistory();

  const handleSubmit = async () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    }
    setError(false);
    setLoadError(false);
    try {
      await fetchQuestions(category, difficulty);
      history.push("/iq-assessment");
    } catch (e) {
      setLoadError(true);
=======

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/quiz");
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
    }
  };

  return (
    <div className="content">
      <div className="settings">
<<<<<<< HEAD
        <span style={{ fontSize: 30 }}>Configure your IQ 
        </span>
        <div className="settings__select">
          {error && <ErrorMessage>Please fill in all fields</ErrorMessage>}
          {loadError && (
            <ErrorMessage>
              Could not load questions. Check your connection and try again.
            </ErrorMessage>
          )}
=======
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
<<<<<<< HEAD
            Calculate your IQ
          </Button>
        </div>
      </div>
      <img src="/hero-illustration.svg" className="banner" alt="IQ illustration" />
=======
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
>>>>>>> 4c28be561f7c01757f89ef5e77b01c87cb636430
    </div>
  );
};

export default Home;
