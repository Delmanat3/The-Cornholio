
import React from "react";
import cur from "../img/cur.png";
import pro from "../img/projectOne.png";
import five from "../img/fiveStar.png";
import feed from "../img/h2.avif"
export const Work = () => {
  // 1323 x 1099
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
    <>
    {isDesktop ? (
      <div id="workBox1">
        <div id="item">
          <div id="itemTitle">Cosmozcurrency</div>
          <br />
          <div id="itemDetail">
            Coin tracker. First project post bootcamp, Rebuilding initial idea
            into a react application.
            <strong>Technologies Used:</strong> <br/>
             Back-End=[ PHP, MongoDb, Mongoose, GraphQl, Apollo, Express.js, Axios ]<br/>
             Front-End=[ React, ApolloClient, MUI, Chart.js, react-fast-marquee ]<br/>
             API/s=[ CoinGecko, NYtimes, marketaux ]<br/>
          </div>
        </div>

  <div>
          <img 
            onClick={(e) => {
              window.location = "http://cosmozcurrency.com/";
            }}
          id="currency" src={cur} alt="project 1"></img>
        </div>
  </div>
):(
<>
<div id="workBox1">
        <div
          onClick={(e) => {
            window.location = "http://cosmozcurrency.com/";
          }}
          id="item"
        >
          <div id="itemTitle">CryptoCosmos</div>
          <br />
          <div id="itemDetail">
          <strong>Technologies Used:</strong> <br/>
             {/* Back-End=[ SQL, jQuery, Axios ]<br/> */}
             Front-End=[ jQuery, Materialize ]<br/>
             API/s=[ CoinGecko ]

          </div>
        </div>
  </div>
</>

)}
</>   
      
      <>
{isDesktop ? (
      <div id="workBox2">
        <div
        
          id="item"
        >
          <div id="itemTitle">CryptoCosmos</div>
          <br />
          <div id="itemDetail">
          <strong>Technologies Used:</strong> <br/>
             {/* Back-End=[ SQL, jQuery, Axios ]<br/> */}
             Front-End=[ jQuery, Materialize ]<br/>
             API/s=[ CoinGecko ]

          </div>
        </div>
      
  <div>
          <img 
            onClick={(e) => {
              window.location = "https://cole-cochran.github.io/crypto-cosmos/";
            }}
          
          id="currency" src={pro} alt="project 1"></img>
        </div>
        </div>
):(
<>
<div id="workBox2">
        <div
          onClick={(e) => {
            window.location = "https://cole-cochran.github.io/crypto-cosmos/";
          }}
          id="item"
        >
          <div id="itemTitle">CryptoCosmos</div>
          <br />
          <div id="itemDetail">
          <strong>Technologies Used:</strong> <br/>
             {/* Back-End=[ SQL, jQuery, Axios ]<br/> */}
             Front-End=[ jQuery, Materialize ]<br/>
             API/s=[ CoinGecko ]

          </div>
        </div>
  </div>
</>
)}

      
</>
<>
{isDesktop ? (
      <div id="workBox3">
        <div
          id="item"
        >
          <div id="itemTitle">Feed Your Lifestyle</div>
          <br />
          <div id="itemDetail">
            -Second collaborative Work A diet app that will recommend recipes
            based on the users profile. Backend built on SQL, while using
            HANDLEBARS for the frontend.
            <strong>Technologies Used:</strong> <br/>
             Back-End=[ SQL, jQuery, Axios ]<br/>
             Front-End=[ Handlebars, jQuery,Materialize ]<br/>
             API/s=[ EDAMAME, twitter v2 ]
          </div>
        </div>
        
  <div>
          <img
          
          onClick={(e) => {
            window.location = "https://feed-your-lifestyle.herokuapp.com/";
          }}
          id="currency" src={feed} alt="project 1"></img>
        </div>
        </div>
):(
<>
<div id="workBox3">
        <div
          onClick={(e) => {
            window.location = "https://feed-your-lifestyle.herokuapp.com/";
          }}
          id="item"
        >
          <div id="itemTitle">CryptoCosmos</div>
          <br />
          <div id="itemDetail">
          <strong>Technologies Used:</strong> <br/>
             {/* Back-End=[ SQL, jQuery, Axios ]<br/> */}
             Front-End=[ jQuery, Materialize ]<br/>
             API/s=[ CoinGecko ]

          </div>
        </div>
  </div>
</>
)}
</>
    
<>
{isDesktop ? (
      <div id="workBox4">
        <div
        
          id="item"
        >
          <div id="itemTitle">fiveStar</div>
          <br />
          <div id="itemDetail">
            
            <strong>Technologies Used:</strong> <br/>
             Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js, Axios ]<br/>
             Front-End=[ React, ApolloClient, MUI ]
          </div>
        </div>
       
  <div>
          <img 
           onClick={(e) => {
            window.location = "https://fivestardrinks.herokuapp.com/";
          }}
          id="currency" src={five} alt="project 1" ></img>
        </div>
        </div>
):(
  <>
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
      
      <strong>Technologies Used:</strong> <br/>
       Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js, Axios ]<br/>
       Front-End=[ React, ApolloClient, MUI ]
    </div>
  </div>
  </div>
  </>
)}
</>
    <>
    {isDesktop ? (
      <div id="workBox5">
        <div
         
          id="item"
        >
          <div id="itemTitle">Coffee Crew</div>
          <br />
          <div id="itemDetail">
            -First Freelance Work. fully functioning E-Commerce platform using stripe for payment processing.
             <strong>Technologies Used:</strong> <br/>
             Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js ]<br/>
             Front-End=[ React, ApolloClient, MUI, Stripe ]<br/>
             <small>** actually gonna use this as a template, so i've written the backend Using Sequelize/MySQL as well</small>
          </div>
        </div>
        
  <div>
          <img 
           onClick={(e) => {
            window.location = "https://coffee-crew.herokuapp.com/";
          }}
          id="currency" src={pro} alt="project 1"></img>
        </div>
          </div>
):(
<>
<div id="workBox5">
        <div
          onClick={(e) => {
            window.location = "https://coffee-crew.herokuapp.com/";
          }}
          id="item"
        >
          <div id="itemTitle">Coffee Crew</div>
          <br />
          <div id="itemDetail">
            -First Freelance Work. fully functioning E-Commerce platform using stripe for payment processing.
             <strong>Technologies Used:</strong> <br/>
             Back-End=[ MongoDb, Mongoose, GraphQl, Apollo, Express.js ]<br/>
             Front-End=[ React, ApolloClient, MUI, Stripe ]<br/>
             <small>** actually gonna use this as a template, so i've written the backend Using Sequelize/MySQL as well</small>
          </div>
        </div>
        </div>
</>
)}
</>
    
    </>
  );
};
