import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

//Recebendo dados //#F048 

function App(){
    const [nome,setNome] = useState('');


    function pegaNome(texto){
        //alert(texto);
        if(texto.length > 0){
            setNome('Bem vindo'+texto);

        }else{

            setNome('');

        }
         
       
    }



    return(
<View style={styles.container}>     
    <TextInput style={styles.input}

    placeholder="Digite seu nome aqui"
    onChangeText={(text)=> pegaNome(text)}
    
    
    />
    <Text style={styles.texto}>{nome}</Text>



 </View>
    );
}

const styles = StyleSheet.create({
   container:{
      flex:1
   },
   input:{
    height:50,
    borderWidth:1,
    margin:10, // tratar dos espaçamentos dos lados
    padding:17, // tratar da parte interna do campo 
    fontSize: 20,
    
   
   },
   texto:{
    textAlign:'center',
    fontSize:25,
    
   }
});

export default App;
