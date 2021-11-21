import Leaderboard from './leaderboard.js';
import UI from './ui.js';
import './style.css';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');

const leaderboard = new Leaderboard();
const ui = new UI();

let gameId;
const startGame = () => {
  leaderboard
    .startGame('Term Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    });
};

const getScores = () => {
  leaderboard.getScores(gameId).then((response) => ui.addToUI(response.result));
};

const postScore = (e) => {
  leaderboard.postScore(gameId, nameInput.value, scoreInput.value);
  ui.cleanInputs();

  e.preventDefault();
};

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);