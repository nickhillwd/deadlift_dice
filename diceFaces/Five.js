import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Five extends React.Component {

    render(){

        return(
            <View style={StyleSheet.flatten([styles.diceFace, styles.stack])}>
                <View style={styles.left}>
                    <View style={styles.doubleDot}/>
                    <View style={styles.doubleDot}/>
                </View>
                <View style={styles.left}>
                    <View style={styles.dot}/>
                </View>
                <View style={styles.stack}>
                    <View style={styles.doubleDot}/>
                    <View style={styles.doubleDot}/>
                </View>
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
        padding: 20,
        flexDirection: 'row',
    },
    dot: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 50
    },
    doubleDot: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 35
    },
    stack: {
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
