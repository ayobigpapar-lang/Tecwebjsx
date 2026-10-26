function Footer(){
    const añoActual=new Date().getFullYear();
    return(
        <footer>
            <p>{añoActual} Club de Videos</p>
        </footer>
    )
}
export default Footer;