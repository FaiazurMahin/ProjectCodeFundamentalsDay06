// How can you add a new paragraph (<p>) inside a <div> with an ID of content using JavaScript? 

const getid = document.getElementById("testpara");

const createpara = document.createElement("p");
createpara.textContent = "New paragraph Added";

getid.appendChild(createpara);

// getid.removeChild(createpara);

const removeele = document.getElementById("Y");
removeele.remove();



