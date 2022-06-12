const data = null;
const xhr = new XMLHttpRequest();
var superheroe="spiderman";// si el nombre contiene espacios escribir %20 en lugar del espacio
							// ejemplo: Doctor%20Strange

xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const datax =JSON.parse(this.response);//set array obtenido desde la api
		const HTMLResponse=document.querySelector("#app");//menciona la dirección de la pagina en donde se mostrará los contenidos
		var name="<h1 class='tm-home-title text-uppercase'>"+datax.name+" </h1><h2 class='tm-home-subtitle tm-orange-text text-uppercase'>"+datax.biography.fullName+"</h2>";
		var superpoderes="<h4>Estadisticas: </h4><h5>Combate: "+datax.powerstats.combat+"<br>Durabilidad: "+datax.powerstats.durability+"<br>Inteligencia: "+datax.powerstats.intelligence+"<br>Poder: "+datax.powerstats.power+"<br>Velocidad: "+datax.powerstats.speed+"<br> Fuerza: "+datax.powerstats.strength+"</h5>";
		var apariencia="<h4>Apariencia: </h4><h5>Color de Ojos:  "+datax.appearance.eyeColor+"<br> Género:  "+datax.appearance.gender+"<br> Altura:  "+datax.appearance.height+"<br> Raza:  "+datax.appearance.race+"<br> Peso:  "+datax.appearance.weight+"</h5><br>";
		var conexiones="<h4>Afiliacion de grupo: </h4><p>"+datax.connections.groupAffiliation+"</p><h4>Familiares: </h4><p>"+datax.connections.relatives+"<br>";
		var imagen="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><img src='"+datax.images.md+"'alt='Banner' class='img-responsive center-block'></div>";
		switch(datax.biography.publisher){// para asignar un icono
			case "Marvel Comics":
				var icon="images/marvel.ico";
			break;
			case "DC Comics":
				var icon="images/DC_Comics_logo.ico";
			break;
			//para más editora, agregar un case y su ruta
		}
		var biografia="<h4>Biografía: </h4><h5>Alias: "+datax.biography.aliases+"<br> Alineación: "+datax.biography.alignment+"<br> Primera Aparición: "+datax.biography.firstAppearance+"<br> Lugar de Nacimiento:"+datax.biography.placeOfBirth+"<br> Editora:  <img src='"+icon+"' width='40px'> </h5>";
		HTMLResponse.innerHTML=imagen+name+"<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'><div class='tm-home-description'>"+biografia+superpoderes+apariencia+conexiones+"</div></div>";
		console.log();
	}
});

xhr.open("GET", "https://superhero-search.p.rapidapi.com/api/?hero="+superheroe);
xhr.setRequestHeader("X-RapidAPI-Key", "779c7629b4msh896596721bb3fecp1fc284jsn87caab62100c");
xhr.setRequestHeader("X-RapidAPI-Host", "superhero-search.p.rapidapi.com");
xhr.send(data);
