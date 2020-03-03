import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default  class api_fetch extends Component{


    state = {
        text:'loading'
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(data=>data.json())
        .then(data2=>{
            console.log(data2)
            this.setState({
                text:data2[1].email
            })
        })
    }

    render(){
        console.log('render from the main function')
        return(
            <View style={styles.container}>
                <Text>Hey this is api fetching page..!</Text>
                <Text>{this.state.text}</Text>
            </View>
            
            
            
        )
    }

}

 const styles = StyleSheet.create({
     container:{
        //  flex:1,
         justifyContent:'center',
         alignItems:'center'
     }
 })