import React from "react";      
import { View, Text,  } from "react-native";

function App(){
    return(
        <View style={{flex:1, 
        flexDirection:'row' , 
        alignItems:'center', 
        justifyContent:'center', 

         }}>

            <View style={{height:90, width:90, backgroundColor:'#121212'}}></View>
            <View style={{height:90, width:90, backgroundColor:'red'}}></View>
            <View style={{height:90, width:90, backgroundColor:'green'}}></View>

        </View>
    );
}

export default App;
