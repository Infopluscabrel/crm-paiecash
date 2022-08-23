const path = "http://localhost:5000";

//function pour remplir le select option
const selectArticle_url =
	"http://localhost:5000/article/all";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(selectArticle_url);

// Function to hide the loader
function hideloader() {
	
}
// Function to define innerHTML for HTML table
function show(data) {
    console.log(data);

    
	let select =
		`<option>
    selectionnez le nom de l'article
    </option>`;
	
	// Loop to access name row
	 for (let r of data.data) {
		select += `<option>      
	    ${r.NOM_PRODUIT}    
    </option>`;
	}
  
	// Setting innerHTML as select variable
	document.getElementById("entree").innerHTML = select;
}


//fonction pour enregistrer un stock
$('#saveStock').livequery('submit',   function(e){ e.preventDefault() ; 
    var nom = document.getElementById("nom").value;
    var quantite = document.getElementById("quantite").value;
    
    var formData = new FormData();
    formData.append('nom', nom);
    formData.append('prix', prix);
    formData.append('quantite', quantite);
    formData.append('proprietaire', "1");
    
  
 var data  = {nom: nom, quantite: quantite};
  console.log(data);

  $.post("http://localhost:5000/article/update", data, function(puerto){

   console.log(puerto) ;
  }, 'json');

  return false;

});

//fonctionpour lister tout les articles en stock
const getArticle_url =
	"http://localhost:5000/article/all";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(getArticle_url);

// Function to hide the loader
function hideloader() {
	
}
// Function to define innerHTML for HTML table
function show(data) {
    console.log(data);

    
	let tab =
		`<tr>
        <th>#</th>
		<th>Nom</th>
        <th>Quantite</th>
        <th>Date</th>
        <th>Options</th>
		</tr>`;
	
	// Loop to access all rows
	 for (let r of data.data) {
		tab += `<tr>
    <td>${r.ID_PRODUIT} </td>      
	<td>${r.NOM_PRODUIT} </td>
	<td>${r.QUANTITE}</td>
	<td>${r.CREATED_AT} </td>
       
    <td><ul class="list-inline m-0">
                      
    <li class="list-inline-item">
      <button class="btn btn-success btn-sm " type="button" data-toggle="modal" data-target="#ajoutRevendeur" data-placement="top" title="Edit"
        style="margin-bottom: 10px; vertical-align: baseline;"><i class="bi bi-pencil-square"></i>Editer</button>
    </li>
    <li class="list-inline-item">
      <button class="btn btn-danger btn-sm " type="button" data-toggle="tooltip" data-placement="top"
        title="Delete"><i class="bi bi-trash"></i>Supprimer</button>
    </li>
    <li class="list-inline-item" data-toggle="modal" data-target="#plusinfo"  >
      <button type="button" class="btn btn-warning btn-sm">Voire plus</button>
    </li>
  </ul></td>  
    </tr>`;
	}
  
	// Setting innerHTML as tab variable
	document.getElementById("stock").innerHTML = tab;
}