// Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFoundPage.css';

// Components
import Button from '../../components/button/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const renderHomepage = () => navigate("/");

  return (
    <div className="not-found-page">
      <h1 data-testid="oops">Oops!</h1>
      <h2>We had trouble finding that repository</h2>
      <Button 
        label="Return Home" 
        testId="home-button"
        onClick={renderHomepage} 
      />
    </div>
  )
}

export default NotFoundPage;