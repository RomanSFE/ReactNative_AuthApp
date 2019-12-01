import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import * as firebase from 'firebase'

class SignupScreen extends Component {
    constructor(props){
        super(props) 
            this.state = {
                email: '',
                password: '',
            }
    }

    onChangeEmail = text =>{
        this.setState({
            email: text
        })    
    }
    onChangePassword = text =>{
        this.setState({
            password: text
        })  
    }
    signUp = ()=>{
        const {email, password} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => console.log('user', user))
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 10, marginHorizontal: 20}}>
                <Text style={{color: '#03050B', fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>Create your account</Text>
                <Input handleInput={text => this.onChangeEmail(text)} placeholder='Enter Your Email' />
                <Input handleInput={text => this.onChangePassword(text)} placeholder='Enter Your Password' secureTextEntry={true} />

                <Button onPressButton={this.signUp} title="Submit" style={{ width: 300, borderRadius: 5, marginHorizontal: 10, padding: 14, marginTop: 30, backgroundColor: '#F75B4E'}} />
            </View>
        )
    }
}
export default SignupScreen
