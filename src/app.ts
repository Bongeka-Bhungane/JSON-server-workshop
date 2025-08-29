// import axios from "axios";

// const response = axios
fetch("http://localhost:3000/items")
.then((response) => {
  // handle success
  console.log(response);
})
.catch(function (error) {
    // handle error
    console.log(error);
  });