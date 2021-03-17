
import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Header from './components/Header';
import Home from './components/Home';
import FriendsList from './components/FriendsList';


function Feed({ navigation }) {
  return (
    <View style={styles.header}>
      <Header/>
    <View>
      <Button
        title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
    <Home/>
    </View>
  );
}

function Friends( {navigation} ) {
  return (
    <View>
    <Header/>
    <View>
      <Button
        title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
      <FriendsList/>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Friends List" component={Friends} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: -30,
    backgroundColor: '#003679'
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
