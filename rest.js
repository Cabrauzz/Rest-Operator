function cadastrar(usuario, ...novosusuarios){

    let totalusuario = [
        ...usuario,
        ...novosusuarios
    ];

    return console.log(totalusuario);
}

let usuario = ["Matheus", "João"];

let novosusuarios = cadastrar(usuario, "Vitor", "Vettel");