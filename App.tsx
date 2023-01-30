import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, ToastAndroid, Touchable, TouchableHighlight, TouchableWithoutFeedback, useColorScheme, View } from 'react-native';

export default function App() {
  const [color, setColor] = useState('red');
  const [text, setText] = useState('red');
  const [punkty, setPunkty] = useState(0);
  const generateColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const random = Math.floor(Math.random() * 4);
    const randomCompromise = Math.floor(Math.random() * 4);
    const randomColor = colors[random];
    const randomCompromiseColor = colors[randomCompromise];
    setColor(randomCompromiseColor);
    setText(randomColor);
  };
  const handlePress = (color: string) => {
    if (color === text) {
      setPunkty(punkty + 1);
      generateColor();
    } else {
      ToastAndroid.show('Przegrałeś', ToastAndroid.SHORT);
      setPunkty(0);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar  />
      <Text className='text-gray-100 text-4xl mb-4'>Masz {punkty} pkt.</Text>
      <Text className='text-6xl text-white'>Dotknij <Text style={{color}}>{text}</Text> </Text>
      <View className='w-96 h-96 bg-white flex flex-wrap rounded-md mt-4'>
        <TouchableHighlight children={<></>}  onPress={()=>handlePress("red")}  className='rounded-tl-md bg-red-500 w-1/2 h-1/2'/>
        <TouchableHighlight children={<></>}  onPress={()=>handlePress("blue")}  className='rounded-bl-md bg-blue-500 w-1/2 h-1/2'/>
        <TouchableHighlight children={<></>}  onPress={()=>handlePress("green")}  className='rounded-tr-md bg-green-500 w-1/2 h-1/2'/>
        <TouchableHighlight children={<></>}  onPress={()=>handlePress("yellow")}  className='rounded-br-md bg-yellow-500 w-1/2 h-1/2'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
