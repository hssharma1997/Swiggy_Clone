import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {HomeProductCard,SmallHomeProductCard} from './HomeProductCard'
import { HomeItems } from '../Common/common'

const HomeOptions = () => {
  return (
    <View style={styles.container}>
        {HomeItems.slice(0,2).map((item)=> <HomeProductCard item={item} key={item.id.toString()}/>)}

        <View style={styles.bottomSubContainer}>
        {HomeItems.slice(2,4).map((item)=> <SmallHomeProductCard item={item} key={item.id.toString()}/>)}
        </View>
 
    </View>
  )
}

export default HomeOptions

const styles = StyleSheet.create({
    container:{
        padding: 16 
    },
    bottomSubContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})