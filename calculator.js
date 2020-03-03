import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {TextInput,Appbar,Button } from 'react-native-paper';
import Display from './display';


export default class calculator extends Component{

    state={
        fname:'',
        sname:'',
        text:'loading'
    }

    submitit(){
        console.log('call or not')
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
            headers:{
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
	            "x-rapidapi-key": "f829ed2bd4mshed52ee2f3d1132bp19f295jsn5f7ebaf138ad"
            }
        })
        .then(data=>data.json())
        .then(data2=>{
            console.log(data2)
            this.setState({
                text:data2
            })
        })

    }
    render(){
        return(
            <View>
                <Text>Hey calc</Text>
                <Appbar.Header>
                    <Appbar.BackAction
                    onPress={this._goBack}
                    />
                    <Appbar.Content
                    title="L-Calc"
                   
                    />
                    
                </Appbar.Header>
                <TextInput
                style={styles.text}
                label='f-name'
                onChangeText={(fname)=>this.setState({fname})}
                value={this.state.fname}
                />
                <TextInput
                style={styles.text}
                label='sname'
                onChangeText={(sname)=>this.setState({sname})}
                value={this.state.sname}
                />
                <Button icon=""
                 style={styles.btn}
                 mode="contained" 
                 onPress={() => this.submitit()}>
                   calculate
                </Button>
                <Display result={this.state.text}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        width:'100%',
        // height:'100%',
        margin:10,
        alignItems:'center',
        alignContent:'center',
        marginLeft:-2
    }
})

