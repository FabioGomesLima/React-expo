import React from "react";
import { View, Text, Image } from 'react-native';

// Função principal da aplicação
function App() {
  
    return (
        <View>
            <Text>Olá mundo </Text>
            <Text style={{ color:'red', fontSize:30, margin:25 }}>Meu app</Text>
            <Text style={{ fontSize:20, color:'green' }}>
              Gomes tv
            </Text>

            {/* Renderiza o componente Logo com propriedades específicas */}
            <Logo largura={350} altura={350} funalo="Fabio Gomes"/>
        </View>
    );
}

// Exporta a função principal para uso externo
export default App;

// Define o componente Logo
function Logo(props){
    // URL da imagem
    let img ='http://sujeitoprogramador.com/reactlogo.png';

    // Retorna um componente com a imagem e o texto passados como propriedades
    return(
      <View>
        <Image source={{uri:img}} style={{width:props.largura, height: props.altura}}/>
        <Text>{props.funalo}</Text>
      </View>
    );
}


