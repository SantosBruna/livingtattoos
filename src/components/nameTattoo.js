import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
    }
})


export default props =>
    <View >
        <Text style={styles.name}>
            {props.value}
        </Text>
    </View>
