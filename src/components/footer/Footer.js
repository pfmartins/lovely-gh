const Footer = ({fixed}) => {
    return (
        <footer className={`footer ${fixed ? 'footer--fixed' : ''}`}>All rights reserved Github Finder {new Date().getFullYear()} ©</footer>
    )
}

export default Footer;