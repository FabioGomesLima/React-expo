import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {

   const [img, setImg] = useState(require('./src/biscoito.png'));
   const [textofrase, setTextoFrase] = useState('');

   let frases = [
      "Seja tão bom que eles não consigam te ignorar." ,
      "Não permita que a negatividade alheia obscureça sua luz.",
      "Acredite na sua força interior e nada poderá te deter.",
      "Você é capaz de mais do que imagina.",
      "Persista, mesmo quando tudo parecer difícil.",
     "Seja sua própria inspiração.",
     "Não deixe que palavras vazias te definam.",
    "Confie no seu potencial, mesmo quando ninguém mais o fizer.",
    "Você é único, e isso é sua maior força.",
   "Crie sua própria definição de sucesso e siga em frente.",




  

   ];



   function quebraBiscoito() {

      let numeroAleatorio = Math.floor(Math.random() * frases.length)
      
      setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
      // alterando o biscoito, biscoito quebrado

      setImg(require('./src/biscoitoAberto.png'));
   }


   function reiniciar(){
      setImg(require('./src/biscoito.png'));
      setTextoFrase('');

   }






   return (
      <View style={styles.container}>
         <Image

            source={img}
            style={styles.img}




         />

         <Text style={styles.textofrase}>{textofrase}</Text>

         <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}  >

            <View style={styles.btnArea}>

               <Text style={styles.btnTexto}  >Quebrar biscoito</Text>
            </View>

         </TouchableOpacity>






         <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212'   }]}  onPress={reiniciar}  >

            <View style={styles.btnArea}>

               <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar biscoito</Text>
            </View>

         </TouchableOpacity>

      </View>
   );


}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'

   },

   img: {

      width: 230,
      height: 230,
   },

   textofrase: {
      fontSize: 20,
      color: '#dd7b22',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
   },
   botao: {
      width: 230,
      height: 50,
      borderColor: '#dd7b22',
      borderWidth: 2,
      borderRadius: 25, // arredondamento 
   },
   // cetralizar texto
   btnArea: {
      flex: 1, // vai oculpar toda a largura que tem disponivel
      justifyContent: 'center',
      alignItems: 'center'
   },
   btnTexto: {
      fontSize: 18, // tamanho do texto
      fontWeight: 'bold', // fonte do testo negrito
      color: '#dd7b22'
   }



})
export default App;
