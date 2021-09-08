"use strict";

const time = document.querySelector(".time");
const userName = document.querySelector(".userName");

const name = prompt("type your name here");
const toLower = name.toLowerCase();
const proper = toLower[0].toUpperCase() + toLower.slice(1);
userName.textContent = `Hello! ${proper}`;

// Show Date Funtion
const getDate = function () {
  const nowDate = new Date();

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const dateFormate = Intl.DateTimeFormat("GMT", options).format(nowDate);
  time.textContent = dateFormate;
};

setInterval(() => {
  getDate();
}, 1000);
