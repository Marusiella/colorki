import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [max, setMax] = useState(0);
  const [color, setColor] = useState('');
  const [text, setText] = useState('');
  const [punkty, setPunkty] = useState(0);
  const generateColor = () => {
    const colorsAng = ['red', 'blue', 'green', 'yellow'];
    const colors = ['czerwony', 'niebieski', 'zielony', 'żółty'];
    const random = Math.floor(Math.random() * 4);
    const randomCompromise = Math.floor(Math.random() * 4);
    const randomColor = colors[random];
    const randomCompromiseColor = colorsAng[randomCompromise];
    setColor(randomCompromiseColor);
    setText(randomColor);
  };
  const handlePress = (color: string) => {
    if (color === text) {
      setPunkty(punkty + 1);
      generateColor();
    } else {
      ToastAndroid.show('Przegrałeś', ToastAndroid.SHORT);
      if (punkty > max) {
        setMax(punkty);
      }
      setPunkty(0);
    }
  };
  useEffect(() => {
    generateColor();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar  />
      <Text className='text-4xl text-white'>Twój rekord to {max}!</Text>
      <Text className='text-gray-100 text-4xl mb-4'>Masz {punkty} pkt.</Text>
      <Text className='text-5xl text-white'>Dotknij <Text style={{color}}>{text}</Text> </Text>
      <View className='w-96 h-96 bg-white flex flex-wrap rounded-md mt-4'>
        <TouchableOpacity children={<></>}  onPress={()=>handlePress("czerwony")}  className='rounded-tl-md bg-red-500 w-1/2 h-1/2'/>
        <TouchableOpacity children={<></>}  onPress={()=>handlePress("niebieski")}  className='rounded-bl-md bg-blue-500 w-1/2 h-1/2'/>
        <TouchableOpacity children={<></>}  onPress={()=>handlePress("zielony")}  className='rounded-tr-md bg-green-500 w-1/2 h-1/2'/>
        <TouchableOpacity children={<></>}  onPress={()=>handlePress("żółty")}  className='rounded-br-md bg-yellow-500 w-1/2 h-1/2'/>
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
