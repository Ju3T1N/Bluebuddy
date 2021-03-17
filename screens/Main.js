import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Bluebuddy',
  };

  state = {
    name: '',
  };

  // onPress = () =>
  //   this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View >
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeText}
          value={this.state.name}   // replaced by google name thru google oauth
        />
        
          <Button title="Chat"  onPress={() =>
    this.props.navigation.navigate('Chat', { name: this.state.name })} />
        
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  container: {
    backgroundColor: '#008b8b'
  },
  
});

export default Main;
