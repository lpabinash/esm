import logo from './logo.svg';
import './App.css';
import header from "./images/Header.jpg";
import border from "./images/Border.png";
import presenting from "./images/Presenting.png";
import top from "./images/Top.png";
import left from "./images/Left.png";
import bandland from "./images/Bandland.png";
import banner from "./images/Banner.png"
import footer from "./images/Footer.png"
import star1 from "./images/Star.png"
import star2 from "./images/Star2.png"
import bird from "./images/Bird.png"
import snake from "./images/Snake.png"
import navigation from "./images/Navigation.png"
import bandland2 from "./images/Bandland2.png"
function App() {
const bannerimg={
  backgroundImage: `url(${banner})`,
}
  return (
    <div className="App">
      {/* <div style={myHeader} className="header"></div>
      <div style={myBorder} className="border"></div>
      <div style={myPresent} className="present"></div>
      <div style={myTop} className="top"></div> */}
      <header>
        <img src={header} className="header"/>
        <img src={navigation} className="navigation"/>
      </header>

<section>
  <img src={border} className="border"/>
  <img src={bird} className="bird"/>
  <img src={snake} className="snake"/>
  {/* <img src={banner} className="presentation"/> */}
  {/* <img src={top} className="top"/>
  <img src={left} className="left"/>
  <img src={right} className="right"/> */}
  <div style={bannerimg}>
  <img src={bandland} className="left"/>
  </div>
</section>

<footer>
  {/* <img src={star1} className="star1"/> */}
  {/* <div style={leftStar} className="leftS"></div> */}
  {/* <div style={rightStar} className="rightS"></div> */}
  <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
    <img src={star1}  className="star1"/>
    <img src={star2}  className="star2"/>
  </div>
  <img src={footer} className="footer"/>
  <img src={bandland2} className="bandland2"/>
  <img src={navigation} className="navigationFooter"/>

</footer>
    </div>
  );
}

export default App;
