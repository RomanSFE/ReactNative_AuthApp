import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import * as firebase from 'firebase'

class SigninScreen extends Component {
    static navigationOptions = {
        title: " Sign in your account ",
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#333',
        headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'left'
        },   
    }

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    signIn = () =>{
        const {email, password} = this.state
        this.setState({
            loading: true
        })
        

        firebase.auth().signInWithEmailAndPassword(email, password).then(user =>{
            this.setState({
                loading: false
            })
            this.props.navigation.navigate('Profile')
        })
    }

    handleInput = (key, value) => {
        this.setState({
            [key]: value
        })  
    }
    render() {
        const{loading} = this.state
        return (
            <View style={{ flex: 1, marginTop: 10, marginHorizontal: 20}}>
                <Input onBlur={this.checkEmail} handleInput={text => this.handleInput('email', text)} placeholder='Enter Your Email' />
                <Input handleInput={text => this.handleInput('password', text)} placeholder='Enter Your Password' secureTextEntry={true} />

                {loading ? <ActivityIndicator size='small'/> : <Button onPressButton={this.signIn} title="Sign In" style={{ width: 300, borderRadius: 5, marginHorizontal: 10, padding: 14, marginTop: 30, backgroundColor: '#F75B4E'}} /> }
            </View>
        )
    }
}
export default SigninScreen
