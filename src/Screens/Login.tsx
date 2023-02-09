//importing Libraries
import React from "react";
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    TextInput,
    Button,

} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "../../App";
import { useNavigation } from '@react-navigation/native';


type authScreenProp = StackNavigationProp<AppStackParamList, "Login">

export const Login = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        // parent view
        <View style={styles.parent}>
            {/* Welcome Text */}
            <Text style={styles.text}>
                {"Welcome to Login Page"}
            </Text>
            {/* Input container */}
            <View style={styles.input}>
                <View style={styles.username}>
                    {/* username container */}
                    <TextInput
                        style={{ textAlign: 'center' }}
                        placeholder="username or email"
                        placeholderTextColor={"darkgrey"}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.password} >
                    {/* password container */}
                    <TextInput
                        style={{ textAlign: 'center' }}
                        placeholder="password"
                        placeholderTextColor={"darkgrey"}
                        secureTextEntry

                    />
                </View>
            </View>
            {/* container of login or signup */}
            <View style={styles.loginBtn}>
                <Pressable
                    style={styles.login}
                    onPress={() => navigation.navigate("Home")}>
                    <Text >
                        {"Login"}
                    </Text>
                </Pressable>
                <Text>
                    {"/"}
                </Text>
                <Pressable
                    onPress={() => navigation.navigate("SignUp")}
                    style={styles.signUp}>
                    <Text>
                        {"SignUp"}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        // alignContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
        flex: 1,

    },
    text: {
        fontSize: 32,
        fontWeight: '600',

        // alignItems : 'center',
        // alignContent: 'center',
        alignSelf: 'center'
    },
    loginBtn: {
        flex: 1,
        flexDirection: 'row',
        // marginVertical : 130,
        // marginBottom :240,
        // alignContent : 'center',
        // alignSelf : 'center',
        alignItems: "center",

    },
    login: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 12,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'


    },
    signUp: {
        flex: 1,
        backgroundColor: 'red',
        padding: 12,
        // marginHorizontal: 12,
        // marginVertical : 11,
    },
    password: {
        borderWidth: 1,
        borderRadius: 12,
        width: 250,        // padding : 1,
    },
    username: {
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 18,
        width: 250,
        textAlign: 'center'
    },
    input: {
        // alignContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center'
    }

})

