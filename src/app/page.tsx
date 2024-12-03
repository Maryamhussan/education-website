import Image from "next/image";
import Searchbar from "./components/searchbar";
import Feature from "./components/feature";
import Card from "./components/cards";
import Testimonial from "./components/testimonial";
import Team from "./components/team";

export default function Home() {
  return (
    <>
      <div className="main">
        <img src="/homebg.png" alt="" className="homebg" />
        <img src="/OBJECTS.png" alt="" className="object" />
        <h1 className="mainheading">
          The <span className="orange">Smart</span>
          <br></br> Choice For <span className="orange">Future</span>
        </h1>
        <p className="mainpara">
          Elearn is a global training provider based across the UK that
          <br />
          specialises in accredited and bespoke training courses. We crush
          <br />
          the...
        </p>
        <Searchbar />
      </div>
      <div className="secpage">
        <Feature />
        <h2 className="sechead">Our Tracks</h2>
        <p className="secpara">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <img src="/lightbulb.png" alt="" className="light" />
        <img src="/arrow.png" alt="" className="arrow" />
        <Card />
      </div>
      <div className="thp">
        <img src="/girl.png" alt="" className="girl" />
        <img src="/page2bg.png" alt="" className="page2bg" />
        <h1 className="mainheading thphead">
          Premium <span className="orange">Learning</span>
          <br /> Experience
        </h1>
        <div className="bg1">
          <img
            src="/hrt.png
          "
            alt=""
            className="hrt"
          />
        </div>
        <h3 className="heading3">Easily Accessible</h3>
        <p className="para3">
          Learning Will fell Very Comfortable With Courslab.
        </p>
        <div className="bg2">
          <img src="/jigsaw.png" alt="" className="hrt" />
        </div>
        <h3 className="heading4">Fun Learning Experience</h3>
        <p className="para4">
          Learning Will fell Very Comfortable With Courslab.
        </p>
      </div>
      <div className="page4">
        <h2 className="sechead pg1">What Students Say?</h2>
        <p className="secpara pg2">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <img src="/pinkbrush.png" alt="" className="pinkbrush" />
        <img src="/pinkbrush2.png" alt="" className="pinkbrush2" />
        <Testimonial />
        <h2 className="sechead pg3">Our Tracks</h2>
        <p className="secpara pg4">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <Team />
        <div className="purple">
          <img src="/last.png" alt="" className="last" />
          <h2 className="sechead pur1">Our Tracks</h2>
          <p className="secpara pur2">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <div className="searchbar">
            {" "}
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  );
}
