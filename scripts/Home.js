import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home (){
    return (
       <View>
      <Text style={styles.info}>People Around You</Text>
      <Text style={styles.users}>NJoon94</Text>
      <Text style={styles.users}>PParker</Text>
      </View>
    );
}

  const styles = StyleSheet.create({
    info: {
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    },

    users: {
    fontSize: 15,
    textAlign: "center",
    padding: 20,
    paddingLeft: 30,
    },
});