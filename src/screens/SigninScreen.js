import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'

class SigninScreen extends Component {
    signIn = () =>{
        const {email, password} = this.this.state

        firebase.auth().signInWithEmailAndPassword(email, password).then(user =>{
            this.props.navigation.navigate('Profile')
        })
    }
    render() {
        return (
            <View>
                <Text> Sign In Screen </Text>
            </View>
        )
    }
}
export default SigninScreen
