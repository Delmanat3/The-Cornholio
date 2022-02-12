import React from "react";
import truck from "../img/truck.jpg";
import cool from "../img/cool.jpg";
import { Work } from "../works/index1";

import LazyLoad from 'react-lazyload';
import { Copyright } from "../Copyright";

// @lazyload({
//   height: 200,
//   once: true,
//   offset: 100
// })

export const Jumbo = () => {
console.log(window.innerWidth)
const [isDesktop, setDesktop] = React.useState(window.innerWidth > 500);
  
const updateMedia = () => {
  setDesktop(window.innerWidth > 500);
};

React.useEffect(() => {
  window.addEventListener("resize", updateMedia);
  return () => window.removeEventListener("resize", updateMedia);
});     

  console.log(process.env.PUBLIC_URL);
  return (
    <>
    <LazyLoad>
      <div
        id="Bg1"
        style={{
          backgroundImage: `url(${cool})`,
        }}
      >
          {isDesktop ?(
                    <h1>
                    <div
                    style={{fontSize:"40px"}}
                    >Welcome To</div>
                    <div className="message">
                      <div className="word1">Nathan</div>
                      <div className="word2">Me</div>
                      <div className="word3">CSS</div>
                    </div>
                  </h1>
          ):(
              <>
            <h1>
            A bit about me 
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
      <Copyright/>
      </LazyLoad>
    </>
  );
};
