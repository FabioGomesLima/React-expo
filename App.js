import React from 'react';
import { View, Text,SafeAreaView  } from 'react-native';

function App(){
    // flex 1, todos ocupam o tamanho da tela.
    // cada um tem flex 1 , então cada ficar com parte da tela
    //  <SafeAreaView style={{flex:2,  backgroundColor:'yellow'}}></SafeAreaView>...
    // também posso pegar aumentar o flex ele pegar mais um pouco da metade da tela
    
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}> 


        <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
            
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        <Text>EU SOU UM TEXTO!</Text>
        </SafeAreaView>
        
     

        <SafeAreaView style={{flex:2,  backgroundColor:'green'}}></SafeAreaView>

        <SafeAreaView style={{flex:2,  backgroundColor:'yellow'}}></SafeAreaView>
    
    
        </SafeAreaView>
    );
}

export default App;


