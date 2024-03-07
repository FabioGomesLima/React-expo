import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

// Função principal da aplicação
function App() {
  // Definindo estados para nome e idade
  const [nome, setNome] = useState("Lima"); // criação de estados
  const [idade, setIdade] = useState(22);



  // Função chamada quando o botão é pressionado para mudar o nome e a idade
  function Entrar(nome,idade) {
    alert('Entrou');
    setNome('nome'); // mudar nome
    setIdade(idade); // mudar idade
    // Não defina estados dentro desta função
  }
  // parânmetros com função anônimas 

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="Mudar nome" onPress={() => Entrar('Gomes lima',33) }  />
      <Text style={{ fontSize: 60 }}>{nome}</Text>
      <Text style={{ fontSize: 60 }}>{idade}</Text>
    </View>
  );
}

// Exporta a função principal para uso externo
export default App;





