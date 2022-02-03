import './App.css';
import {Jumbo}from "./components/Jumbotron"
import { Menu } from './components/SpeedDial';
function App() {
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
  return (
    <>
  <Jumbo/>
  <Menu/>
  </>
  );
}

export default App;
