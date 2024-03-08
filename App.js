import React,{useState, useEffect} from "react";
import { View, KeyboardAvoidingView, Image , TextInput, TouchableOpacity,Text,StyleSheet, Animated, Keyboard } from "react-native";

export default function App() {
 const[ offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
 const[ opacity] = useState(new Animated.Value(0));
 const [logo] = useState(new Animated.ValueXY({ x: 800, y: 400 }));

 useEffect(()=>{
  const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
  const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);





  Animated.parallel([
    Animated.spring(offset.y,{
      toValue:0,
      speed:4,
      bounciness:20
    }),
    Animated.timing(opacity,{
      toValue: 1,
      duration: 500,
      
    })
    
  ]).start();
 
 }, []);


 function keyboardDidShow(){
  Animated.parallel([

    Animated.timing(logo. x,{
      toValue: 55,
      duration: 100,
    }),

    Animated.timing(logo. y,{
      toValue: 65,
      duration: 100,
    }),
    
  ]).start();

 }

 function keyboardDidHide(){
  Animated.parallel([

    Animated.timing(logo. x,{
      toValue: 140,
      duration: 100,
    }),

    Animated.timing(logo. y,{
      toValue: 65,
      duration: 100,
    }),
    
  ]).start();

  
 
 }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
        style={{
          width:logo.x,
          height:logo.y,
        }}
          source={require('./assets/logo.png.png')}
        />
      </View>

      <Animated.View
       style={[
        styles.container,
        {
          opacity:opacity,
          transform:[
            { translateY: offset.y}
          ]
        }
        ]}>
        <TextInput
        style={styles.input} // estilos dos inputs
        placeholder="Email"
        autoCorrect={false} // não corrir nada quando for digitar o email
        onChangeText={()=> {}} //função anônima
        />

        <TextInput
      style={styles.input} // estilos dos inputs
      placeholder="Senha"
      autoCorrect={false} // não corrigir nada quando for digitar o email
      onChangeText={()=> {}} //função anônima
      />

      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.btnSubmitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}>Criar conta gratuita</Text>
      </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background:{ // vai pegar o tamanho todo da tela
    flex:1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor:'#19191919',


  },
 containerLogo:{
  flex:1,
  justifyContent:'center',
  

 },
 container:{
  flex:1, // ambos vão se dividir no tamando da tela
  alignItems:'center',
  justifyContent:'center',
  width:'90%', // largura maxima
  paddingBottom:50
 },
 input:{
  backgroundColor:'#FFF',
  width:'90%',
  marginBottom:15,
  color: '#222',
  fontSize:17,
  borderRadius:7,
  padding:10,


 },
 btnSubmit:{
  backgroundColor:'#35AAFF', // cor do botão azul
  width:'90%',
  height:45,
  alignItems:'center',
  justifyContent:'center',
  borderRadius:7
 },
 btnSubmitText:{
  color:'#FFF', // branco
  fontSize:18
 },

 btnRegister:{

  marginTop:10,
 },

 registerText:{
  color:'black'
 }
 

});



