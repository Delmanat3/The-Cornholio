import React from "react";
import truck from "../img/truck.jpg";
import cool from "../img/cool.jpg";
import { Work } from "../works";

export const Jumbo = () => {
console.log(window.innerWidth)
const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1450);
  
const updateMedia = () => {
  setDesktop(window.innerWidth > 1450);
};

React.useEffect(() => {
  window.addEventListener("resize", updateMedia);
  return () => window.removeEventListener("resize", updateMedia);
});     

  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <div
        id="Bg1"
        style={{
          backgroundImage: `url(${cool})`,
        }}
      >
          {isDesktop ?(
                    <h1>
                    <span>Welcome To</span>
                    <div className="message">
                      <div className="word1">Nathan</div>
                      <div className="word2">Me</div>
                      <div className="word3">CSS</div>
                    </div>
                  </h1>
          ):(
              <>
            <h1>
            Me
            </h1>
                  </>
          )}
    
      </div>
      <div
        style={{
          backgroundImage: `url(${truck})`,
          minHeight: "300px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: "0.65",
        }}
      ></div>
      <div id="Bg2" style={{ backgroundImage: `url(${cool})` }}>
        <Work />
      </div>
    </>
  );
};
