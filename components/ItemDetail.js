import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import blue from '../assets/blue.png';
import star from '../assets/star.png';
import question from '../assets/question.png';
import vector from '../assets/Vector.png';
import vs_red from '../assets/vs_red.png'
import vs_silver from '../assets/vs_silver.png'
import vs_black from '../assets/vs_black.png'
export default function ItemDetail( {navigation, route} ) {
  const color = route.params?.color ?? 'darkblue';
  
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
  return (
    <View style={styles.container}>
      <Image source={getImages(color)} style={styles.img} />
      <Text style={styles.text}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.rating}>
        <View style={styles.starContainer}>
          <Image source={star} />
          <Image source={star} />
          <Image source={star} />
          <Image source={star} />
          <Image source={star} />
        </View>
        <Text style={styles.text}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.price}>
          1.790.000 đ
        </Text>
        <Text style={styles.oldprice}>
          1.790.000 đ
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
        }}>
        <Text>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={question} style={{marginRight: 100}} />
      </View>
      <View>
        <TouchableOpacity style={styles.colorSelect} 
            onPress={() => navigation.navigate('Color Page')}>
          <Text style={{paddingLeft: 120}}>4 MÀU-CHỌN MÀU</Text>
          <Image source={vector} style={{marginLeft: 90}}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buyButton} >
          <Text style={{color:'white', fontSize:20}}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    //flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img:{
    width: 300,
    height: 300,
    marginLeft: 50
  ,
  marginBottom: 30
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 40,
    marginLeft: 20
  },
  text: {
    fontSize: 15, 
    lineHeight: 17, 
    fontWeight: '400',
    marginLeft: 20,
    marginBottom: 20
  },
  price:{
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21,
    marginLeft: 20,
    marginBottom: 20
  },
  oldprice:{
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    marginRight: 40,
    color: 'gray',
    textDecorationLine:'line-through',
    marginBottom: 20
  },
  colorSelect:{
    flexDirection: 'row', 
    borderColor: 'black', 
    borderWidth: 2,
    borderRadius: 4,
    height: 40,
    margin: 20,
    alignItems:'center'
  },
  buyButton:{
    flexDirection: 'row', 
    borderRadius: 4,
    height: 40,
    margin: 20,
    alignItems:'center',
    backgroundColor: 'red',
    justifyContent:'center'
  }
});
