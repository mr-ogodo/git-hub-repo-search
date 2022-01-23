// Dependencies
import React, { useEffect, useState, createRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import './resultsPage.css';

// Components
import Button from '../../components/button/Button';

const ResultsPage = () => {
  const navigate = useNavigate();
  const focusElement = createRef();
  const { name, repo } = useParams();

  const [state, setState] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    if (repo) getResources(); // eslint-disable-next-line
  },[name, repo]);

  const scrollToTop = () => {
    if (focusElement.current) {
      focusElement.current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
  
  const getResources = async (url) => {
    const response = await fetch(url || `https://api.github.com/repos/${name}/${repo}/commits`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer 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`
      }
    });

    if (!response.ok) return navigate('/does/not/exist');

    const linkHeader = response.headers.get('Link');
    const pageLinks = linkHeader.split(',');

    setNextPage(getLink(pageLinks, 0));

    if (!lastPage) setLastPage(getLink(pageLinks, 1));

    const responseJson = await response.json();
    const result = responseJson.map((entry) => {
      const { commit, author, html_url } = entry;

      return {
        id: author.id,
        url: html_url,
        date: moment(commit?.author?.date).format('MMMM Do yyyy - h:mm:ss a'),
        author: commit?.author?.name,
        message: commit?.message,
      }
    });
    setState([...state, ...result]);
  }

  const getLink = (links, index) => {
    const link = links[index]
      .split('; ')[0]
      .replace('<', '')
      .replace('>', '');
    
    return link;
  }

  const loadMore = () => getResources(nextPage);

  const renderHomePage = () => navigate("/");

  return (
    <div className="results-page" ref={focusElement} data-testid="results-page">
      {state.length > 0  &&
        <React.Fragment>
          <h2>Commit Feed &#x1F389;</h2>
          <h3>{`/${name}/${repo}`}</h3>
          <Button 
            label="New Search" 
            onClick={renderHomePage}
            class={"results-page__search-button"}
          />
          <ul className="results-page__entry-container">
            {
              state.map((entry, index) => {
                return (
                  <li key={`${entry.id}-${index}`} className="results-page__entry">
                    <strong>{entry.date}</strong>
                    <a href={entry.url} target="_blank" rel="noreferrer">
                      <span className="results-page__entry-email">{entry.message}</span>
                    </a>
                    <strong className="results-page__entry-author">{entry.author}</strong>
                  </li>
                )
              })
            } 
          </ul>
          {nextPage !== lastPage &&
            <Button 
              label="Load More" 
              onClick={loadMore}
              class="results-page__more-button"
            />
          }
          <p className="results-page__back-to-top" onClick={scrollToTop}>
            BACK TO TOP
          </p>
        </React.Fragment>
      }
    </div>
  )
}

export default ResultsPage;