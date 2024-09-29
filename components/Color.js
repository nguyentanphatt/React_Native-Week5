import {
  Image,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import blue from '../assets/blue.png';
import vs_red from '../assets/vs_red.png'
import vs_silver from '../assets/vs_silver.png'
import vs_black from '../assets/vs_black.png'
import { useState } from 'react';
export default function Color({ navigation }) {
  const [color, setColor] = useState('darkblue');
  const handleColor = (colors) => {
    setColor(colors);
  };
  const getImages = (colors) => {
    switch(colors){
      case 'lightblue':
        return vs_silver;
      case 'red':
        return vs_red;
      case 'black':
        return vs_black;
      case 'darkblue':
        return blue;
      default:
        return blue;
    }
  }
  const getColorName = (colors) => {
    switch(colors){
      case 'lightblue':
        return "Bạc";
      case 'red':
        return "Đỏ";
      case 'black':
        return "Đen";
      case 'darkblue':
        return "Xanh";
      default:
        return "Xanh";
    }
  }
  
  return (
    <View style={{ display: 'flex' }}>
      <View style={{ flexDirection: 'row' }}>
        {color ? (<Image source={getImages(color)} style={styles.img}/>): null}
        <View style={{ flexDirection: 'column' }}>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          {color ? (
            <View style={{ flexDirection: 'column'}}>
              <Text style={{marginTop: 10}}>Màu: {getColorName(color)}</Text>
              <Text style={{marginVertical: 10}}>Cung cấp bởi <Text style={{fontWeight: '700'}}>Tiki Tradding</Text></Text>
              <Text style={{fontWeight: '700'}}>1.790.000</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={{backgroundColor:'#C4C4C4'}}>
        <Text style={{fontSize: 18}}>Chọn 1 màu bên dưới:</Text>
        <View style={{alignItems:'center', padding: 20}}>
          <TouchableOpacity
              style={{ backgroundColor: 'lightblue', width: 80, height: 80, marginBottom: 20 }}
              onPress={() => handleColor('lightblue')}></TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'red', width: 80, height: 80, marginBottom: 20 }}
              onPress={() => handleColor('red')}></TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'black', width: 80, height: 80, marginBottom: 20 }}
              onPress={() => handleColor('black')}></TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'darkblue', width: 80, height: 80, marginBottom: 20 }}
              onPress={() => handleColor('darkblue')}></TouchableOpacity>
        </View>
      </View>
      <Button title="Xong" onPress={() => navigation.navigate('Item Page', {color})} />
    </View>
  );
}

const styles = StyleSheet.create({
  img:{
    width:100,
    height:100,
  }
})
