import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import database from '@react-native-firebase/database';


let itemRef = database().ref('/Items');


function List(){
    const [itemArray, setItemArray] = useState([]);
    useEffect(() => {
itemRef.on('value', snapshot => {
    let data = snapshot.val();
    const items = Object.values(data);
    setItemArray(items);
})
    }, [])
    return(
<View style={styles.container}>
    {(itemArray.length > 0) 
    ?  <View style={styles.list}>
        {itemArray.map((item, index) => {
        return (
            <Text>{item.name}</Text>
        )
    })}
    </View>
    : <Text>No Items</Text>
    
    } 
</View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default List;