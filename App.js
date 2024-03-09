import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

function App() {

    // flexbox parte 02 simulando uma tela de app

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>


            <SafeAreaView style={{ height: 65, backgroundColor: '#121212' }}></SafeAreaView>



            <SafeAreaView style={{ flex: 1, backgroundColor: '#ddd' }}>
                <Text>Sou um texto</Text>
            </SafeAreaView>

            <SafeAreaView style={{ height: 65, backgroundColor: '#121212' }}></SafeAreaView>


        </SafeAreaView>
    );
}

export default App;


