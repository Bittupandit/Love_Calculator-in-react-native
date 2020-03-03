import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

const display = (prop)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Percent=  {prop.result.percentage}</Text>
            <Text style = {styles.text}>Result = {prop.result.result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',

    },
    text:{
        fontFamily:'vardana',
        fontSize:20,
        margin:10
    }
})

export default display;

