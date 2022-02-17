import React from 'react';
import { View, Text, Button } from 'react-native';


function Home({navigation}){
    return(
<View>
    <Text> Home Screen</Text>
    <Button
    title="Add an Item"
    onPress={() => navigation.navigate('AddItem')}
    />
    <Button
    title="List of Items"
    onPress={() => navigation.navigate('List')}
    />
</View>
    );
}

export default Home;