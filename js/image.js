"use strict";
let introduction = document.querySelector(".c_introduction");

const lists = [
  {
    img: "animal_01.png",
  },
  {
    img: "animal_02.png",
  },
  {
    img: "animal_03.png",
  },
  {
    img: "animal_04.png",
  },
];

for (let i = 0; i < lists.length; i++) {
  const { img } = lists[i];
  const content = `<li class="c_introduction__item" role="listitem"><a class="c_introduction__link" href="#"><img class="c_introduction__image" src="img/${img}" alt=""/></a></li>`;
  introduction.insertAdjacentHTML("beforeend", content);
}
