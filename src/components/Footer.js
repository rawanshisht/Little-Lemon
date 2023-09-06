import imageSrc from '../Assets/Asset 18@4x.png';
const Footer = ()=>{
    return (
    <footer>
          <div>
                <img src={imageSrc}  alt="Little Lemon Restaurant" height="140rem" width="80rem"/>
                </div>
                <div>
                    <hr/>
                    <p>Copyright Little Lemon</p>
                </div>
    </footer>);
}

export default Footer;