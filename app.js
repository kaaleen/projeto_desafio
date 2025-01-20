let amigos = ["joao", "caze", "tulio"];

function adicionarAmigo(){
  let novoNome = document.querySelector('input').value;
  if (novoNome == 0){
    alert ('digite um nome valido');
  } else {
        amigos.push(novoNome);
  }
  console.log(amigos[amigos.length - 1]);
}