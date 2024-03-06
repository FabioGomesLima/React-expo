import React from "react";
import { View, Text, Image } from 'react-native';

function App() {
    let nome ='Hungry House';
    let img ='http://sujeitoprogramador.com/reactlogo.png';

    return (
        <View>
            <Text>Olá mundo</Text>
            <Text style={{ color:'red', fontSize:30, margin:25 }}>Meu app</Text>
            <Text style={{ fontSize:20, color:'green' }}>Gomes tv</Text>
            <Image
                source={{ uri: img }}
                style={{ width: 300, height: 300 }}
            />
            <Text style={{ fontSize:19 }}>{nome}</Text>
        </View>
    );
}

export default App;



