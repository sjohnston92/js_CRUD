
//Hard coding list in

let dog = {name:"Sam", age: "4"};
let dog1 = {name:"Reggie", age: "11"};
let dog2 = {name:"Sally", age: "2"};


let dogs = [dog,dog1,dog2];


let state = {
  pageHeader: "Dog Pound",
  dogs: dogs,
};
// Dogs render 

function renderDogs(){
  dogString = "";
  dogs.forEach(function(dog){
    dogString +=`<div>Dog: ${dog.name}  Age: ${dog.age}
     </div>`;
  });
  return dogString
}

//html elements in the page

function render(){
  htmlString = `<div>
                <h1>${state.pageHeader}</h1>
                ${renderDogs()}
                </div>`;
  renderDogs();

  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
}

render();