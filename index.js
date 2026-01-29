const URL = "https://api.thecatapi.com/v1/images/search";

const catFact=document.querySelector(".fact");
const btn=document.querySelector(".btn");



const getFacts = async () => {
  console.log("Getting data....");

  let response = await fetch(URL);
  let data = await response.json(); 

  catFact.innerText=data[0].url;

};

btn.addEventListener("click",getFacts);





async function user() {

  try{
    let response=await fetch("https://jsonplaceholder.typicode.om/users/1");
    let data=await response.json();
    console.log(data.name,"-",data.id)

  }
  catch(error)
  {
    console.log("Error has been displyed",error);
  }
  
}

user();