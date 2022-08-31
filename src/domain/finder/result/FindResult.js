import {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {Card, CardHeader, CardBody} from '../../../components/card/Card';
import Header from "../../../components/header/Header";
import Footer from '../../../components/footer/Footer';

const FindResult = () => {
    const {state} = useLocation();
    const {user} = state;
    const [githubUser] = useState(user);
    const [githubUserRepos] = useState(user?.repositories);

    return (
        <div className="find-result">
            <Header />

            <div className="find-result__content">
                <Link className="find-result__back-btn" to="/find">Back to search</Link>

                {githubUser &&
                    <>
                        <Card>
                            <CardHeader>
                                <div className="card__img">
                                    <img src={githubUser.photo} alt={githubUser.name} width={100} />
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div className="card__label">{githubUser.name || githubUser.login}</div>
                                <div className="card__label card__label--small">{githubUser.location}</div>
                                <div className="card__label card__label--small">This user has {githubUser.totalRepos} repos</div>

                                <a className="card__link" rel="noreferrer" target="_blank" href={githubUser.link}>
                                    <FontAwesomeIcon icon={faLink} />
                                    Visit profile
                                </a>
                            </CardBody>
                        </Card>

                        {githubUserRepos.length > 0 && <div className="card__subtitle">Repositories ({githubUserRepos.length})</div>}

                        <div className="find-result__cards">
                            {
                                githubUserRepos.map((repo, index) => {
                                    return (
                                        <Card key={index}>
                                            <CardHeader blank>
                                                <div className="card__title card__title--dark">{repo.name}</div>
                                            </CardHeader>
                                            <CardBody>
                                                <div className="card__label">{repo.description}</div>
                                                <div className="card__label card__label--small">
                                                    This repo is <b>{repo.visibility}</b> for all.
                                                </div>
                                                <div className="card__label card__label--small">
                                                    Main language: <b>{repo.language}</b>
                                                </div>
                                                <div className="card__label card__label--small">
                                                    Created at&nbsp;
                                                    {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(repo.created_at))}
                                                </div>

                                                <a className="card__link" rel="noreferrer" target="_blank" href={repo.html_url}>
                                                    <FontAwesomeIcon icon={faLink} />
                                                    Project link
                                                </a>
                                            </CardBody>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </div>
            <Footer fixed={githubUserRepos.length < 5 ? true : false} />
        </div>
    )
}

export default FindResult;