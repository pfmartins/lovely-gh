import {useId, useState} from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';
import Header from '../../../components/header/Header';
import FindUserService from './FindUser.service';
import Footer from '../../../components/footer/Footer';

const FindUser = () => {
  const inputId = useId();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [notFoundErrorMessage, setNotFoundErrorMessage] = useState(null);

  const handleInputChange = (evt) => {
    setSearchInput(evt.target.value)
    if(evt.key === 'Enter') handleOnSearch();
  }

  const searchTermIsEmpty = (searchInput) => {
    if(searchInput !== '' || loading) return false;
    return true;
  }

  const handleOnSearch = async () => {
    if(searchTermIsEmpty(searchInput)) return;

    setNotFoundErrorMessage(null);
    setLoading(true);

    try {
      const {name, location, avatar_url, public_repos, html_url, repos_url, login} = await FindUserService.getUserByName(searchInput);

      let userData = {
        photo: avatar_url,
        name: name,
        location: location,
        totalRepos: public_repos,
        link: html_url,
        login: login,
        reposUrl: repos_url,
        repositories: []
      }

      const repoList = await FindUserService.getRepoByUser(repos_url);

      setTimeout(() => {
        setLoading(false);
        navigate('/result', {state: {user: {...userData, repositories: repoList}}})
      }, 1000);
    } catch {
      setLoading(false);
      setNotFoundErrorMessage(<div>User <b>{searchInput}</b> not found</div>)
    }
  }

  return (
    <div className="find-user">
      <Header />

      <div className="find-user__body">
        <div className="find-user__input-field">
          <input className="find-user__input-text" autoFocus name="username" id={inputId} value={searchInput} onChange={handleInputChange} autoComplete="off" type="text" maxLength="200" placeholder="Type any github username.." onKeyDown={handleInputChange} />
          <div className="find-user__input-icon" onClick={handleOnSearch}>
            {!loading && <FontAwesomeIcon icon={faSearch} />}
            {loading && <FontAwesomeIcon icon={faSpinner} className="find-user__spin" />}
          </div>
        </div>

        <div className="find-user__content">
          {notFoundErrorMessage && <div className="find-user__error-message">{notFoundErrorMessage}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FindUser;

