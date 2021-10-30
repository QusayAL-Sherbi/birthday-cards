const person = [
  {
    name: "Sahar",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 29,
    dop: "13 jan 1992",
  },
  {
    name: "Reem",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 27,
    dop: "15 feb 1994",
  },
  {
    name: "Dania",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 22,
    dop: "29 jan 1997",
  },
  {
    name: "Ghoson",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 21,
    dop: "14 Oct 1998",
  },
  {
    name: "Hazem",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 23,
    dop: "17 Oct 1998",
  },
  {
    name: "Ahamad",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 23,
    dop: "17 Oct 1998",
  },
  {
    name: "Qusay",
    img: "https://www.shareicon.net/data/512x512/2016/07/26/802001_man_512x512.png",
    age: 21,
    dop: "17 oct 2000",
  }
];

var date = new Date();
var month = date.toLocaleString("en-US", { month: "short" });
var day = date.getDate();
var today = day + " " + month;
var counter = 0;
var clearBtn = document.getElementById("clear-btn");
var cardsContainer = document.querySelector(".cards-container");

for (let i = 0; i < person.length; i++) {
  if (person[i].dop.includes(today)) {
    var divElement = document.createElement("div");
    //divElement.id=i;
    divElement.setAttribute("class", "card");
    cardsContainer.appendChild(divElement);
    //img
    var img = document.createElement("img");
    divElement.appendChild(img);
    img.src = person[i].img;
    //div text
    var textDiv = document.createElement("div");
    divElement.appendChild(textDiv);
    var pargraph = document.createElement("p");
    textDiv.appendChild(pargraph);
    pargraph.innerHTML = person[i].name + "<br>" + person[i].age;

    counter++;
  }
}

var header = document.querySelector("#header");
header.innerHTML = `${counter} Birthdays Today`;

clearBtn.onclick = function () {
  cardsContainer.innerHTML = "";
  counter = 0;
  header.innerHTML = `${counter} Birthdays Today`;
};

let colorOption = document.querySelectorAll('.color-option li');

console.log(colorOption)

colorOption.forEach(color => {
    color.addEventListener('click', function() {
        document.body.style.backgroundColor = color.getAttribute('data-color');
    })
})