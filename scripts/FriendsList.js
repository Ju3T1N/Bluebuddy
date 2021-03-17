import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';

export default function FriendsList(){
    return (
      <View>
      <Text style={styles.info}>Friends</Text>
      <Text style={styles.list}>JeonJK</Text>
      <Text style={styles.list}>Sun89</Text>
      <Text style={styles.list}>CNS05</Text>
      </View>
    );
}

  const styles = StyleSheet.create({
    info: {
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    },
    list: {
    fontSize: 15,
    textAlign: 'left',
    padding: 20,
    }

});