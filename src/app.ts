// @ts-ignore
// import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";
let characters: any[] = [];
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    //assign characters into data
    characters = data;
    console.log(characters[3]); // This is your actual data
  } catch (error) {
    console.log("Error:", error);
  }
}
// Calling the function
fetchItems();

let root = document.getElementById("root") as HTMLElement;
function noCharacterData(rootElement: HTMLElement, message: string): void {
  rootElement.innerHTML = message;
};
noCharacterData(root, "No character to display.");