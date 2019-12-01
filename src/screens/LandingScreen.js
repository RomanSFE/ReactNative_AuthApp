import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native'
import Button from '../components/common/Button'

class LandingScreen extends Component {
    static navigationOptions = {
        title: " Welcome to our App ",
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
        },   
    }

    signIn = () => {
        this.props.navigation.navigate('Signin')
    }
    signUp = () => {
        this.props.navigation.navigate('Signup')
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../components/images/bbg1.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button onPressButton={this.signIn} title= "Sign In" style={{ width: 300, borderRadius: 5, padding: 14, marginBottom: 20, backgroundColor: 'blue'}} />
                    <Button onPressButton={this.signUp} title= "Sign Up" style={{ width: 300, borderRadius: 5, padding: 14, backgroundColor: 'orange'}}/>
                </View>
                </ImageBackground>
                {/* <Image style={{height: 500, width: '100%', flex: 1, borderRadius: 5}} resizeMode="cover" source={require('../components/images/bbg1.jpg')}/> */}
                
            </View>
        )
    }
}
export default LandingScreen
