import React from 'react';
import {View, Text, Button} from 'react-native';

export default ({ navigation }) => {
    return (
        <View>
            <Text>Tv</Text>
            <Button
                onPress={() => navigation.navigate('Detail')}
                title="Go to Detail"></Button>
        </View>
    )
}