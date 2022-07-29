import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import CustomSwitch from '../components/CustomSwitch';
import axios from 'axios';

export default function MBMeasurements() {
    const navigation = useNavigation();
    const [yes, setYes] = useState(false);
    const [no, setNo] = useState(false);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [weightGoal, setWeightGoal] = useState('');

    const onPressYes = () => {
        setYes(true)
        setNo(false)
    };

    const onPressNo = () => {
        setYes(false)
        setNo(true)
    };

    const PostMeasurements = () => {
        let measurements = {
            height: height,
            weight: weight,
            weightGoal: weightGoal
        };
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Help us fill in the details</Text>
            </View>
            <View>
                <Text style={styles.text}>Current Measurements</Text>
            </View>
            <View style={{ alignSelf: 'stretch', top: 10 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={value => setHeight(!/^[0-9]+$/.test(value.toString()) ? '' : value)}
                    value={height}
                    placeholder="Height in inch"
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
            <View style={{ alignSelf: 'stretch', top: 20 }}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setWeight(!/^[0-9]+$/.test(value.toString()) ? '' : value)}
                    value={weight}
                    placeholder="Weight in kg"
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>

            <View style={{ top: 40, marginBottom: 10 }}>
                <View>
                    <Text style={{ fontSize: 15 }}>Do you have a goal weight?</Text>
                </View>
            </View>
            <View style={{ top: 40, marginBottom: 20, flexDirection: 'row' }}>
                <Pressable style={[styles.button, styles.marginRight]} onPress={onPressYes}>
                    <Text style={[styles.buttonText]}>Yes</Text>
                </Pressable>

                <Pressable style={[styles.button]} onPress={onPressNo}>
                    <Text style={[styles.buttonText]}>No</Text>
                </Pressable>
            </View>

            {
                yes && !no ?
                    <>
                        <View style={{ alignSelf: 'stretch', top: 40 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => setWeightGoal(!/^[0-9]+$/.test(value.toString()) ? '' : value)}
                                value={weightGoal}
                                placeholder="Weight in kg"
                                keyboardType="numeric"
                                maxLength={3}
                            />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <Text style={[styles.text, styles.green]}>Great, we'll help you to get there! </Text>
                        </View>
                    </>
                    :
                    null
            }

            {yes || no ?
                <View style={{ marginTop: no ? 274 : 150 }}>
                    <MBButton title='Next' active={true} onPress={() => navigation.navigate("PersonalDetails")}></MBButton>
                </View>
                :
                null
            }
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
        // textAlign: 'center',
        fontSize: 18,
        marginTop: 30
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
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