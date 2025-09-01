// @ts-ignore
// import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm"
interface Character {
  id: string;
  name: string;
  ki: string;
  MaxKi: string;
  race: string;
  gender: string;
  description: string;
  DeletedAt: null | String;
  Affiliation: string;
  image: String;
}
let characters: Character[] = [];
let root = document.getElementById("root") as HTMLElement;
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    // console.log(data); // This is the actual data
    characters = await data;
    console.log(characters[0]);
    createCard(root, characters[0]);
  } catch (error) {
    console.log("Error:", error);
  }
}
// Calling the function
fetchItems();
// console.log("hello");
// console.log(characters);
function noCharacterData(rootElement: HTMLElement, message: string): void {
  rootElement.innerHTML = message;
}
// noCharacterData(root, "No character to display");
function createCard(rootElement: HTMLElement, data: Character): void {
  const card = document.createElement("div") as HTMLDivElement;
  const card70 = document.createElement("div") as HTMLDivElement;
  const card30 = document.createElement("div") as HTMLDivElement;
  const idName = document.createElement("p") as HTMLDivElement;
  const gender = document.createElement("p") as HTMLDivElement;
  const race = document.createElement("p") as HTMLDivElement;
  card.className = "card";
  card70.className = "card70";
  card30.className = "card30";
  idName.textContent = ` Id: ${data.id} | Name: ${data.name}`;
  gender.textContent = `Gander: ${data.gender}`;
  race.textContent = `Race ${data.race}`;
  card.append(card70, card30);
  card30.append(idName, gender, race);
  // const firstDiv = document.createElement("div") as HTMLDivElement;
  // const secDiv = document.createElement("div") as HTMLDivElement;
  // rootElement.appendChild(secDiv);
  card70.style.backgroundImage = `url("https://dragonball-api.com/characters/goku_normal.webp")`;
  rootElement.appendChild(card);
} 
