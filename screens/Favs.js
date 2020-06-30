import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({ navigation }) => {
    console.log( navigation )
    return (
        <View>
            <Text>Favs</Text>
            <Button
                onPress={() => navigation.navigate('Detail')}
                title="Go to Detail"></Button>
        </View>
    )
}