import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Six extends React.Component {

    render(){

        return(
            <View style={StyleSheet.flatten([styles.diceFace, styles.stack])}>
                <View style={styles.left}>
                    <View style={styles.doubleDot}/>
                    <View style={styles.doubleDot}/>
                </View>
                <View style={styles.left}>
                    <View style={styles.doubleDot}/>
                    <View style={styles.doubleDot}/>
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
    doubleDot: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 20
    },
    stack: {
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
