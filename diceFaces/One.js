import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class One extends React.Component {

    render(){

        return(
            <View style={StyleSheet.flatten([styles.diceFace, styles.one])}>
                <View style={styles.dot}/>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    diceFace: {
        marginTop: 50,
        backgroundColor: '#000',
        height: 300,
        width: 300,
        borderRadius: 15,
        padding: 20
    },
    dot: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 50
    },
    one: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
