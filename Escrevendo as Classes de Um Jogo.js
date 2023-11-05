// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método de ataque
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = ' magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 1000, 'mago');
  
  heroi1.atacar(); // Saída esperada: "O guerreiro atacou usando espada"
  heroi2.atacar(); // Saída esperada: "O mago atacou usando magia"
  