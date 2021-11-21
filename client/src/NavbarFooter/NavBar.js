import style from "./NavBar.module.css";
import nu_logo from "../assets/nu_logo.png";
import shop from "../assets/shop.png";
import innovator from "../assets/innovator.png";
import exhibits from "../assets/exhibits.png";
import about_us from "../assets/about_us.png";
import contact_us from "../assets/contact_us.png";
import cart from "../assets/cart.png";
function NavBar() {
  return (
    <>
      <div className={style.container}>
        <div className="container">
          <nav className={style.nav}>
            <img className={style.nav_logo} src={nu_logo} alt="" />
            <div className={style.nav_title}>
              <h1>NU Innovation Tech Hub</h1>
              <h3>Center for Innovation &amp; Entrepreneurship</h3>
            </div>
            <ul className={style.nav_links}>
              <li>
                <a href="/products/innovations">products</a>
                {/* products href landing page */}
              </li>
              <li>
                <a href="/innovator">innovators</a>
                {/* innovator href landing page */}
              </li>
              <li>
                <a href="/innovation">innovations</a>
                {/* innovator href landing page */}
              </li>
              <li>
                <a href="/exhibit">exhibits</a>
                {/* exhibits href landing page */}
              </li>
              <li>
                <a href="#!">about us</a>
                {/* about us href landing page */}
              </li>
              <li>
                <a href="/contactus">contact us</a>
                {/* contact us href landing page */}
              </li>
              <li>
                <a href="/newsletter">Newsletter</a>
                {/* newslleter us href landing page */}
              </li>
              <li>
                <a href="/library">library</a>
                {/* Library href landing page */}
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
                {/* Privacy Policy href landing page */}
              </li>
              <li>
                <a href="/FAQs">FAQs</a>
                {/* Privacy Policy href landing page */}
              </li>
            </ul>
            <a href="/cart">
              <img src={cart} alt="" className={style.cart}></img>
            </a>
          </nav>
        </div>
      </div>
      <div className={style.nav_mobile}>
        <div>
          <img src={shop} alt="" />
          <a href="/products/innovations">products</a>
          {/* products href landing page */}
        </div>
        <div>
          <img src={innovator} alt="" />
          <a href="/innovator">innovators</a>
          {/* innovators href landing page */}
        </div>
        <div>
          <img src={innovator} alt="" />
          <a href="/innovation">innovation</a>
          {/* innovators href landing page */}
        </div>
        <div>
          <img src={exhibits} alt="" />
          <a href="/exhibit">exhibits</a>
          {/* exhibits href landing page */}
        </div>
        <div>
          <img src={about_us} alt="" />
          <a href="#!">about us</a>
          {/* about us href landing page */}
        </div>
        <div>
          <img src={contact_us} alt="" />
          <a href="#!">contact us</a>
          {/* contact us href landing page */}
        </div>
      </div>
    </>
  );
}

export default NavBar;
