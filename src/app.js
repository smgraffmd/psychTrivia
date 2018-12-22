import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import LoadingPage from './components/LoadingPage';
import { setCategories } from './actions/game';
import { addPlayer, removePlayer } from './actions/players';


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

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));
