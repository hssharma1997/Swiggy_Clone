import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CustomIcons } from '../Common/Icons'

const HomeBottomText = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.bigTextStyle}>{"Live \nit up! "}</Text>
    <Text style={styles.smallTextStyle}>Crafted with
      <CustomIcons
        name="heart"
        size={25}
        color={'red'}
        type="Entypo"
      />
      in Faridabad,India
    </Text>
  </View>
  )
}

export default HomeBottomText

const styles = StyleSheet.create({
    container:{
        padding: 16 
    },
    bigTextStyle:{ 
        fontSize: 80, 
        color: '#808080',
         fontWeight: 'bold' 
        },
        smallTextStyle:{
            fontSize: 16,
             color: '#808080'
        }
})