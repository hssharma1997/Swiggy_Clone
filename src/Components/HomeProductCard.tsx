import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const HomeProductCard = ({item}) => {
  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
      <Text style={styles.heading}>{item.title}</Text>
      <Text>{item.desc}</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image
        style={styles.imageStyle}
        source={item.img}
      />
      </View>
    </View>
  )
}

export const SmallHomeProductCard = ({item}) => {
    return (
      <View style={styles.smallCard}>
          <View style={styles.smallTextContainer}>
        <Text style={styles.heading}>{item.title}</Text>
        <Text>{item.desc}</Text>
        </View>
        <View style={styles.smallImageContainer}>
        <Image
          style={styles.smallImageStyle}
          source={item.img}
        />
        </View>
      </View>
    )
  }



const styles = StyleSheet.create({
    card:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        padding:16,
        borderRadius:16,
        backgroundColor:'#fff',
        elevation:1,
        marginVertical:8
    },
    smallCard:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        padding:16,
        borderRadius:16,
        backgroundColor:'#fff',
        elevation:1,
        marginVertical:8,
        width:'48%'
    },
    heading:{
        fontWeight:'bold',
        fontSize:20,
        color:'#000'
    },
    imageStyle:{
        height:100,
        width:100
    },
    smallImageStyle:{
        height:50,
        width:50
    },
    textContainer:{
        width:'60%',
        alignItems:'flex-start'
    },
    imageContainer:{
        width:'40%',
        alignItems:'flex-end'
    },
    smallTextContainer:{
        width:'60%',
        alignItems:'flex-start'
    },
    smallImageContainer:{
        width:'40%',
        alignItems:'flex-end'
    }
})