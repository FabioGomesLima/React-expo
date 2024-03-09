import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet , Button} from "react-native";




//Trabalhando com botões #F049 



// Definindo o componente principal 


function App(){
    const [nome,setNome] = useState('');
    const [input,setInput] = useState('');



    function entrar(){
        //alert('Entrou!')

          // Verifica se o campo de entrada está vazio

         if(input === ''){
            alert('Digite seu nome!')
            return; // Retorna se o campo estiver vazio


            
         }
           setNome('Bem vindo:'+ input);
    }




    return(
<View style={styles.container}>     
    <TextInput style={styles.input}

    placeholder="Digite seu nome aqui"
    onChangeText={(texto)=>setInput(texto)} // pegar o texto que digitamos e colocar dentro useState
    
    
    />
    {/* Botão para entrar, chama a função 'entrar' quando pressionado */}
    <Button title="Entrar" onPress={entrar}/> 

    <Text style={styles.texto}>{nome}</Text>



 </View>
    );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
   
   
   },
   input:{
    height:50,
    borderWidth:1,
    margin:10, // tratar dos espaçamentos dos lados
    padding:10, // tratar da parte interna do campo 
    fontSize: 20,
    marginTop:80, // Adicionando margem superior para descer o campo de entrada

   
   
   },
   texto:{
    textAlign:'center',
    fontSize:25,
    marginTop:19,
    
   }
});

export default App;
