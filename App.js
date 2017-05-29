import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import One from './diceFaces/One';
import Two from './diceFaces/Two';
import Three from './diceFaces/Three';
import Four from './diceFaces/Four';
import Five from './diceFaces/Five';
import Six from './diceFaces/Six';

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
            diceFace: 5,
            fullReps: true,
            timeLeft: 60,
            timerRunning: false
        }
    }

    componentDidUpdate(){
        if(!this.state.fullReps && this.state.diceFace > 3){
            this.rollDice();
        }
    }

    rollDice(){

        const multiplier = this.state.fullReps ? 6 : 3;

        this.setState({
            diceFace: Math.floor(Math.random() * multiplier) + 1
        });
    }

    stratTimer(){

        if(this.state.timerRunning){
            return;
        }

        let i = this.state.timeLeft;

        const timer = () => {
            i--;
            this.setState({
                timeLeft: i,
                timerRunning: true
            });
            if(i > 0){
                setTimeout(timer, 1000);
            }else{
                this.setState({
                    timeLeft: 60,
                    timerRunning: false
                });
                return;
            }
        }
        timer();

    }

    reduceReps(){
        this.setState(function(prevState){
            return {fullReps: !prevState.fullReps};
        });
    }

    getDiceFace(){

        if(!this.state.diceFace){
            return null;
        }

        switch(this.state.diceFace){
            case 1: return <One/>;
            case 2: return <Two/>;
            case 3: return <Three/>;
            case 4: return <Four/>;
            case 5: return <Five/>;
            case 6: return <Six/>;
        }

    }

    render() {

        return (
            <View style={styles.container}>
                {this.getDiceFace()}
                <Text style={styles.timerText}>{this.state.timeLeft}</Text>
                <Button
                    title='roll the dice'
                    onPress={() => this.rollDice()}
                    color='grey'
                />
                <Button
                    title={!this.state.timerRunning ? 'start timer' : ' '}
                    onPress={() => this.stratTimer()}
                    color='grey'
                />
                <Button
                    title={this.state.fullReps ? 'reduce reps' : 'increase reps'}
                    onPress={() => this.reduceReps()}
                    color='grey'
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    timerText: {
        fontSize: 100,
        color: 'grey'
    }
});
