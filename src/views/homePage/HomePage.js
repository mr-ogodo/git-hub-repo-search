// Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homePage.css';

// Components
import TextInput from '../../components/textInput/TextInput';
import Button from '../../components/button/Button';

const HomePage = () => {
  const [state, setState] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${state.name}/${state.repo}`);
  }

  const handleBlur = (event) => {
    const name = event.target.getAttribute('name');
    const value = event.target.value;

    setState({ ...state, [name]: value });
  }

  return (
    <form className="home-page" onSubmit={handleSubmit}>
     <TextInput
      name="name"
      id="user-name"
      label="Github User"
      testId="user-input"
      blurHandler={(event) => handleBlur(event)}
     />
     <TextInput
      name="repo"
      id="repo-name"
      label="Github Repo"
      testId="repo-input"
      blurHandler={(event) => handleBlur(event)}
     />
    <Button
      label="Search"
      disabled={!state.name && !state.repo}
      testId="search-button"
    />
    </form>
  )
}

export default HomePage;