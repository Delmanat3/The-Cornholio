import React from "react";
import image from "../img/cardy.jpg";
import card2 from "../img/cardy2.jpg";
import card3 from "../img/cardy3.jpg";

export const Work = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 970);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <div>
          <div id="workBox1">
            <div
              onClick={(e) => {
                window.location = "https://cosmoscurrency.netlify.app/";
              }}
              id="item"
            >
              <div id="itemTitle">Cosmozcurrency</div>
              <br />
              <div id="itemDetail">
                <span>
                  A dashboard to monitor cryptocurrency and their shifting
                  values so that you can manage your crypto assets. Our project
                  includes graphs designed to display the top 7 markets total
                  value of cryptocurrency. We also provide a search feature that
                  allows you to choose from the top 20 crypto currencies and
                  compare them. Our site also provides real time news on crypto
                  currency and related stock market information.
                </span>
                <br/>
                <strong>
                  <div> Technologies Used:</div>
                  </strong>
               <span>Front-End=[ jQuery, Materialize ]</span> <br />
               <span>API/s=[ CoinGecko ]</span>
                
              </div>
            </div>
          </div>
          <div id="workBox2">
            <div
              onClick={(e) => {
                window.location = "https://coffee-crew.herokuapp.com/";
              }}
              id="item"
            >
              <div id="itemTitle">Coffee Crew</div>
              <br />
              <div id="itemDetail">
                -First Freelance Work. fully functioning E-Commerce platform
                using stripe for payment processing.
                <br/>
                <strong>
                  <div> Technologies Used:</div>
                  </strong>
                Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js ]
                <br />
                Front-End=[ React, ApolloClient, MUI, Stripe ]<br />
                <small>
                  ** actually gonna use this as a template, so i've written the
                  backend Using Sequelize/MySQL as well
                </small>
              </div>
            </div>
          </div>

          <div id="workBox3">
            <div
              id="item"
              onClick={(e) => {
                window.location = "https://feed-your-lifestyle.herokuapp.com/";
              }}
            >
              <div id="itemTitle">Feed Your Lifestyle</div>
              <br />
              <div id="itemDetail">
                -Second collaborative Work A diet app that will recommend
                recipes based on the users profile. Backend built on SQL, while
                using HANDLEBARS for the frontend.
                <br/>
                <strong>
                  <div> Technologies Used:</div>
                  </strong>
                  
                Back-End=[ SQL, jQuery, Axios ]
                Front-End=[ Handlebars, jQuery,Materialize ]
                API/s=[ EDAMAME, twitter v2 ]
              </div>
            </div>
          </div>

          <div id="workBox4">
            <div
              onClick={(e) => {
                window.location = "https://fivestardrinks.herokuapp.com/";
              }}
              id="item"
            >
              <div id="itemTitle">fiveStar</div>
              <br />
              <div id="itemDetail">
              <br/>
                <strong>
                  <div> Technologies Used:</div>
                  </strong>
                Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js, Axios
                ]
                Front-End=[ React, ApolloClient, MUI ]
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h style={{ color: "white" }}>Cosmozcurrency</h>
              </div>
              <div className="flip-card-back">
                <span style={{ color: "white" }}>
                  A dashboard to monitor cryptocurrency and their shifting
                  values so that you can manage your crypto assets. Our project
                  includes graphs designed to display the top 7 markets total
                  value of cryptocurrency. We also provide a search feature that
                  allows you to choose from the top 20 crypto currencies and
                  compare them. Our site also provides real time news on crypto
                  currency and related stock market information.
                </span>
                <br />
                <strong>
                  <h> TECHS:</h>
                </strong>
                <ul>
                  <li id="meee">Front-End [ jQuery, Materialize ]</li>
                  <li id="meee">API/s=[ CoinGecko ]</li>
                </ul>
                <a href="https://cosmoscurrency.netlify.app/">Demo </a>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${card2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <strong>
                  {" "}
                  <div style={{ color: "white" }}>Coffee Crew</div>
                </strong>
              </div>
              <div className="flip-card-back">
                <span style={{ color: "white" }}>
                  {" "}
                  -First Freelance Work. fully functioning E-Commerce platform
                  using stripe for payment processing.
                </span>
                <br />
                <strong>
                  <h> TECHS:</h>
                </strong>
                <ul>
                  <li id="meee">
                    Front-End=[ React, ApolloClient, MUI, Stripe ]<br />
                  </li>
                  <li id="meee">
                    Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js ]
                    <br />
                  </li>
                </ul>
                <small>
                  ** actually gonna use this as a template, so i've written the
                  backend Using Sequelize/MySQL as well
                </small>
                <br />
                <br /> <a href="https://coffee-crew.herokuapp.com/">Demo </a>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${card3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <strong>
                  {" "}
                  <div style={{ color: "white" }}>Feed Your Lifestyle</div>
                </strong>
              </div>
              <div className="flip-card-back">
                <span style={{ color: "white" }}>
                  {" "}
                  -Second collaborative Work A diet app that will recommend
                  recipes based on the users profile. Backend built on SQL,
                  while using HANDLEBARS for the frontend.
                </span>
                <br />
                <strong>
                  <h> TECHS:</h>
                </strong>
                <ul>
                  <li id="meee">
                    Front-End=[ Handlebars, jQuery,Materialize ]<br />
                  </li>
                  <li id="meee">
                    Back-End=[ SQL, jQuery, Axios ]<br />
                  </li>
                  <li id="meee">API/s=[ EDAMAME, twitter v2 ]</li>
                </ul>
                <a href="https://feed-your-lifestyle.herokuapp.com/">Demo </a>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${card2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <strong>
                  {" "}
                  <div style={{ color: "white" }}>Five Star</div>
                </strong>
              </div>
              <div className="flip-card-back">
                <span style={{ color: "white" }}>
                  A dashboard to monitor cryptocurrency and their shifting
                  values so that you can manage your crypto assets. Our project
                  includes graphs designed to display the top 7 markets total
                  value of cryptocurrency. We also provide a search feature that
                  allows you to choose from the top 20 crypto currencies and
                  compare them. Our site also provides real time news on crypto
                  currency and related stock market information.
                </span>
                <br />
                <strong>
                  <h> TECHS:</h>
                </strong>
                <ul>
                  <li id="meee">Front-End=[ React, ApolloClient, MUI ]</li>
                  <li id="meee">
                    Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js,
                    Axios ]<br />
                  </li>
                </ul>
                <a href="https://fivestardrinks.herokuapp.com/">Demo </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
