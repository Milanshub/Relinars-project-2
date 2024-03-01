
const Footer = () => {
    const handleEmailClick = () => {
        const email = 'relinarslimited@gmail.com';
        window.location.href = `mailto:${email}`;
    };

    return (
        <footer className="component footer-center">
            <h3>RELINARS LIMITED</h3>
            <p onClick={handleEmailClick}>Email: relinarslimited@gmail.com</p>
            <p>Phone: +357 890 99 767</p>
            <p>Address: Paphos, 8010, Cyprus</p>
        </footer>
    )
}

export default Footer; 