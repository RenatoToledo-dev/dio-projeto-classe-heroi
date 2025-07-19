//Classe que representa o herói
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome // varaiável para nome
        this.idade = idade // variável para idade
        this.tipo = tipo // variável para tipo(mago, guerreiro, ninja, etc)
    }

// Função que executa o ataque do herói
    atacar(){
        let ataque; // variável que vai guardar o tipo de ataque.

        // Estrutura de descisão que defne o tipo de ataque baseado no tipo de herói.

        if (this.tipo === "mago"){
            ataque = "magia"

        }else if (this.tipo === "guerreiro"){
            ataque = "espada"

        }else if (this.tipo === "ninja"){
            ataque = "adagas"

        }else if (this.tipo === "arqueiro"){
            ataque = "arco e flecha"

        }else if (this.tipo === "monge"){
            ataque = "artes marciais"

        }

        // Exibir a mensagem no terminal.
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
            
    }
}

//Criando Heróis com diferentes tipos
const heroi1 = new heroi("Gandalf", 150, "mago")
const heroi2 = new heroi("Aragorn", 45, "guerreiro")
const heroi3 = new heroi("Kakashi", 33, "ninja")
const heroi4 = new heroi("Legolas", 250, "arqueiro")
const heroi5 = new heroi("Abu", 20, "monge")

// Executando os ataques
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
heroi5.atacar()
