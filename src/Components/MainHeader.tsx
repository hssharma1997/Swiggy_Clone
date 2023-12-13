/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { CustomIcons } from '../Common/Icons';

const MainHeader = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <View style={styles.container}>
      <View style={styles.userSection}>
        <TouchableOpacity style={styles.locationContainer} onPress={() => null}>
          <CustomIcons
            name="location-arrow"
            size={25}
            color={'orange'}
            type="FontAwesome"
          />
          <Text style={styles.addressNameTitle}>Home</Text>
          <CustomIcons
            name="chevron-small-down"
            size={25}
            color={'gray'}
            type="Entypo"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <CustomIcons
            name="user-circle"
            size={25}
            color={'black'}
            type="FontAwesome5"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={txt => setSearchTerm(txt)}
          placeholder='Dishes,restaurants,groceries & ...'
          style={{paddingHorizontal:18 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    padding:16
  },
  userSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:14
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  addressNameTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 6
  },
  searchContainer:{
    borderWidth:1,
    borderColor:'gray',
    borderRadius:6
  }
});
