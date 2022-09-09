// var filmes1 = "Perfume de Mulher";
// var filmes2 = "Encontro Marcado";
// var filmes3 = "O amor não tira férias";
// var filmes4 = "Mother!";

// document.write("<p>" + filmes1 + "</p>");
// document.write("<p>" + filmes2 + "</p>");
// document.write("<p>" + filmes3 + "</p>");
// document.write("<p>" + filmes4 + "</p>");

// ---var listaFilmes = ["Perfume de Mulher", "Encontro Marcado","O amor não tira férias", "Mother !"];

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2]+ "</p>");
// document.write("<p>" + listaFilmes[3]+ "</p>");

// ---for(var indice = 0; indice <= listaFilmes.length; indice++){
//   document.write("<p>" + listaFilmes[indice] + "</p>");
// }

var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/210/142/21014297_20130620203118349.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/88/38/20167659.jpg",
  "https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/95/48/11/20407384.jpg",
  "https://br.web.img2.acsta.net/pictures/17/08/11/20/15/167783.jpg"
];
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
