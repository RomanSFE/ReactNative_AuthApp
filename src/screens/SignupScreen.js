import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import * as firebase from 'firebase'

class SignupScreen extends Component {
    constructor(props){
        super(props) 
            this.state = {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                age: '',
                gender: '',
                emailError: null,
                loading: false,
            }
    }

    handleInput = (key, value) => {
        this.setState({
            [key]: value
        })
        
    }

    signUp = ()=>{
        const {email, password, firstName, lastName, age, gender} = this.state
        this.setState({
            loading: true
        })
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            console.log('user', user)
            const userID = user.user.uid;
            firebase.database().ref('users/' + userID).set({
                email, password, firstName, lastName, age, gender
            })
            this.setState({
                loading: false
            },
                () => {
                    this.props.navigation.navigate('Signin')
                }
            )
            
        })
    }
    checkEmail = () => {
        const {email} = this.state;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = emailRegex.test(String(email).toLowerCase())

        if(!isValid){
            this.setState({
                emailError: 'Invalid Email, please type correct email'
            })  
        } else {
            this.setState({
                emailError: null
            })   
        }
    }

    render() {
        const {emailError, loading} = this.state
        return (
            <View style={{ flex: 1, marginTop: 10, marginHorizontal: 20}}>
                <Text style={{color: '#03050B', fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>Create your account</Text>
                <Input onBlur={this.checkEmail} handleInput={text => this.handleInput('email', text)} placeholder='Enter Your Email' />
                {emailError && <Text style={{fontSize: 22, color: 'red', marginBottom: 12}}>{emailError}</Text>}

                <Input handleInput={text => this.handleInput('password', text)} placeholder='Enter Your Password' secureTextEntry={true} />
                
                <View style={{flexDirection: 'row'}}>
                    <Input customStyle={{ flex: 1}} handleInput={text => this.handleInput('firstName', text)} placeholder='First Name' />
                    <Input customStyle={{ flex: 1}} handleInput={text => this.handleInput('lastName', text)} placeholder='Last Name' />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Input customStyle={{ flex: 1}} handleInput={text => this.handleInput('age', text)} placeholder='Age' />
                    <Input customStyle={{ flex: 1}} handleInput={text => this.handleInput('gender', text)} placeholder='Gender' />
                </View>

                {loading ? <ActivityIndicator size='small'/> : <Button onPressButton={this.signUp} title="Sign Up" style={{ width: 300, borderRadius: 5, marginHorizontal: 10, padding: 14, marginTop: 30, backgroundColor: '#F75B4E'}} /> }
                
            </View>
        )
    }
}
export default SignupScreen
