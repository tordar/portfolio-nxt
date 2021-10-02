import style from "../styles/Footer.module.css"

const Footer = () => {

      function changeAgain(e) {
        e.target.style.visibility = 'visible';
      }

    return (
        <footer onMouseLeave={changeAgain} className="footer" className={style.footer}>
                <div>Footer goes here</div>
            </footer>
    )
}

export default Footer;