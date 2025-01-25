let amigos = [];
let text = '';

function adicionarAmigo(){
  let novoNome = document.querySelector('input').value;
  if (novoNome == 0){
    alert ('digite um nome valido');
  } else {
        text = '';
        amigos.push(novoNome);
        for (let i = 0; i < amigos.length; i++) {
          text += '<br>' + amigos[i];
        }
        document.getElementById('listaAmigos').innerHTML = text;
      }
      limparCampo();
}




function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

function limparCampo(){
    novoNome = document.querySelector('input');
    novoNome.value = '';
}