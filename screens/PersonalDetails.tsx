import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import CustomSwitch from '../components/CustomSwitch';
import DropDownPicker from 'react-native-dropdown-picker';

export default function PersonalDetails() {
    const navigation = useNavigation();
    const [age, setAge] = useState('');

    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ]);

    const postPersonalDetails = () => {
        let personalDetails = {
            age: age,
            gender: gender
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>More about you,</Text>
            </View>
            <View>
                <Text style={styles.text}>This information help us connect you to wellness businesses and activities you might like. Not comfortable sharing? no problem, skip ahead. </Text>
            </View>
            <View style={{ alignSelf: 'stretch', top: 10 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setAge(!/^[0-9]+$/.test(value.toString()) ? '' : value)}
                    value={age}
                    placeholder="Age"
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
            <View style={{ alignSelf: 'stretch', top: 20 }}>
                <DropDownPicker
                    open={open}
                    value={gender}
                    items={items}
                    setOpen={setOpen}
                    setValue={setGender}
                    setItems={setItems}
                />
            </View>

            <View style={{ marginTop: 340 }}>
                <MBButton title='Next' active={true} onPress={() => navigation.navigate("MBExperienceFitness")}></MBButton>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        fontSize: 20,
        marginTop: 40,
        padding: 20,
    },
    text: {
        fontSize: 14,
        marginTop: 30
    },
    title: {
        fontSize: 24,
        // textAlign: 'center',
    },
    paragraph: {
        fontSize: 14,
        textAlign: 'center',
        padding: 20,
        color: '#FFFFFF',
        top: 40
    },
    imageStyle:
    {
        borderRadius: 3
    },
    imageBackground: {
        height: 76,
        width: 340
    },
    marginRight: {
        marginRight: 10
    },
    imageTextStyle: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 17,
        color: 'white',
        top: 25,
        left: 10
    },
    cardTextStyle: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 17,
        color: '#2D2D2D',
        textAlign: 'center',
        alignContent: 'center',
        top: 45,
    },
    input: {
        height: 50,
        margin: 0,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: 'gray',
        backgroundColor: 'white'
    },
    button: {
        borderRadius: 4,
        height: 40,
        width: 60,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',

    },
    buttonText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
        color: '#E85815'
    },
    green: {
        color: 'green'
    }
});