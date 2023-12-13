import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeTopText = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}> Welcome to Swiggy! </Text>
  </View>
  )
}

export default HomeTopText

const styles = StyleSheet.create({
    container:{
        padding: 16 
    },
    textStyle:{
        fontSize: 24, color: '#FC8019'
    }
})