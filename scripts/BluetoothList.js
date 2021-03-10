import React,{ useState, useMemo } from 'react';
import { connect, subscribe,publish, addOnErrorListener,
		 NearbyConfig, useNearbyPublication,
		 useNearbySubscription, checkBluetoothAvailability } 
	from 'react-native-google-nearby-messages';

import {
  Text,
  FlatList,
} from 'react-native';

export default function BluetoothList() {
  async()=>{
    const isBluetoothAvailable = await checkBluetoothAvailability();
  }
  const nearbyConfig = useMemo<NearbyConfig>(() => ({ apiKey: GOOGLE_API_KEY }), []);
  const nearbyStatus1 = useNearbyPublication(nearbyConfig, 'BlueBuddy: 1234567890');
  
  const { nearbyMessages, nearbyStatus } = useNearbySubscription(nearbyConfig);
 // ndata=[];
  //for (const value of nearbyMessages){
  //  temp=value.split(' ');
//	if (temp[0]=="Bluebuddy:"){
//		data.push(temp[1])
//	}
  }
  return (
    <FlatList
      data={nearbyMessages}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  );
}