// importing Libraries 

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Button,
    ScrollView,
    Alert
} from "react-native";
import { RadioButton } from 'react-native-paper';
import { AppStackParamList } from "../../App";
import { useNavigation } from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';



export const SignUp: React.FC = () => {
    const navigation = useNavigation();
    // const [value, setValue] = React.useState('first');
    const radio_props = [
        {label: 'Male  ', value: 0 },
        {label: 'Female', value: 1 }
      ];
    return (
        <ScrollView>
            {/* Header Text */}
            <Text style={styles.header}>
                {"New User..."}
            </Text>
            {/* Input container */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                />
                <View style = {styles.radioBtn}>
                <RadioForm 
                    radio_props={radio_props}
                    initial={-1}
                    formHorizontal = {true}
                    labelHorizontal={true}
                    animation={true}
                    // idSeparator=','
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                      }}
                      buttonColor=" #acf3fa"
                />
                </View>
                {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                    <RadioButton
                        value="Male"
                        

                    />
                    <RadioButton
                        value="Female"
                    />
                </View> */}
                {/* <View style ={{flex: 1 ,flexDirection : 'row', backgroundColor : 'red'}}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View>
                        <Text>First</Text>
                        <RadioButton value="first" />
                    </View>
                    <View>
                        <Text>Second</Text>
                        <RadioButton value="second" />
                    </View>
                </RadioButton.Group>
                </View> */}
                <TextInput
                    style={styles.input}
                    placeholder="Mail"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone-Number"
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date-of-Birth"
                />
                <Text>
                    {"Address"}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Address Line 1"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address Line 2"
                />
                <TextInput
                    style={styles.input}
                    placeholder="PIN "
                    keyboardType="number-pad"
                />
            </View>

            <View style={styles.submitView}>
                <Pressable 
                onPress={() => {
                    console.log('Submitted')
                }}
                >
                    <Text style={styles.submitText}>
                        {"Submit"}
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        alignSelf: 'center',
        fontWeight: '800',
        color: 'black'
    },
    input: {
        borderWidth: 1,
        borderRadius: 11,
        marginVertical: 13,
    },
    inputContainer: {
        flex: 1,
        // alignItems: 'center'
        alignContent: 'space-around',
        paddingHorizontal: 12

    },
    submitText: {
        alignContent: 'center',
        // paddingHorizontal : 12,
        backgroundColor: 'red',
        width: 100,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20
    },
    submitView: {
        // alignContent :'center',
        alignSelf: 'center'
    },
    radioBtn :{
        backgroundColor : 'yellow',

    }
})