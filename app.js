let amigos = [ ];
let text = '';


function adicionarAmigo(){
  let novoNome = document.querySelector('input').value;
  if (novoNome == 0){
    alert ('digite um nome valido');
  } else {
        amigos.push(novoNome);
        for (let i = 0; i < amigos.length; i++) {
          text += '<li>' + amigos[i];
          amigos = [];
        }
        document.getElementById('listaAmigos').innerHTML = text;
        limparCampo();
  }
}

function limparCampo(){
    novoNome = document.querySelector('input');
    novoNome.value = '';
}