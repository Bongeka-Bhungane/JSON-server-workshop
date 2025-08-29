// @ts-ignore
// import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";
let characters: any[] = [];
async function fetchItems() {
  try {
    const response = await fetch("http://localhost:3000/items");
    const data = await response.json();
    //assign characters into data
    characters = data;
    console.log(characters[2]); // This is your actual data
  } catch (error) {
    console.log("Error:", error);
  }
}
// Calling the function
fetchItems();
