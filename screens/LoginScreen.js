import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useAuth from './../hooks/useAuth'

const LoginScreen = () => {
    const {user} =  useAuth()
    console.log('user:', user)
    return (
        <View>
            <Text>Login screen</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
