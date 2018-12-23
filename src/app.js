import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import LoadingPage from './components/LoadingPage';
import { setCategories, setQuestion, setMessage,} from './actions/game';
import { addPlayer, removePlayer, setStroke, setScore, resetStroke } from './actions/players';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

export const socket = io();
const store = configureStore();

socket.on("categories", (data) => {
   //console.log(data);
   store.dispatch(setCategories(data));
});

socket.on("PLAYER-CONNECTED", (player) => {
   store.dispatch(addPlayer(player));
});

socket.on("PLAYER-DISCONNECT", (player) => {
   store.dispatch(removePlayer(player.name));
});

socket.on("correctAnswer", (data) => {
   store.dispatch(setScore(data.name, data.score));
   store.dispatch(setStroke(data.name, "green"));
});

socket.on("incorrectAnswer", (player) => {
   store.dispatch(setStroke(player, "red"));
});


socket.on("newQuestion", (res) => {
   
   if(res.wait === true) {
      setTimeout(() => {
         store.dispatch(setMessage(""));
         store.dispatch(resetStroke());
         store.dispatch(setQuestion(res.question));
         history.push("/play");
         console.log(res.question);
      }, 2000);
   } else {
      store.dispatch(setMessage(""));
      store.dispatch(setQuestion(res.question));
      history.push("/play");
      console.log(res.question);
   }

   

});

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));
