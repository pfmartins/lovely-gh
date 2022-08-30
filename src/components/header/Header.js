import octocatImg from '../../assets/octocat.png';

const Header = () => {
    return (
        <header className="header">
            Github Finder
            <img src={octocatImg} alt="octocat" width={100} />
        </header>
    )
}

export default Header;