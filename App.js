import { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      frase: 'Abra o biscoito da sorte :)',
      img: require('./assets/biscoito.png'),
    }
    this.gerarFrase = this.gerarFrase.bind(this)
    this.frase = [
      '"Siga os bons e aprenda com eles."',
      '"O bom-senso vale mais do que muito conhecimento."',
      '"O riso é a menor distância entre duas pessoas."',
      '"Deixe de lado as preocupações e seja feliz."',
      '"Realize o óbvio, pense no improvável e conquiste o impossível."',
      '"Acredite em milagres, mas não dependa deles."',
      '"A maior barreira para o sucesso é o medo do fracasso."'
    ]
  }

  gerarFrase() {
    let gerarNumero = Math.floor(Math.random() * this.frase.length)
    this.setState({frase: this.frase[gerarNumero], img: require('./assets/biscoitoAberto.png')})
  }

  render() {

    return (
      <View style={styles.conteiner}>

        <Image style={styles.img} source={this.state.img} />

        <Text style={styles.textoFrase}>{this.state.frase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.gerarFrase}>

          <View style={styles.btnArea}>

            <Text style={styles.btnTexto}>Abrir Biscoito </Text>

          </View>

        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    backgroundColor: '#dd7b22',
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }

})

export default App;