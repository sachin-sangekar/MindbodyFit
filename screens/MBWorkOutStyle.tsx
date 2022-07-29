import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import { Card } from 'react-native-paper';

export default function MBWorkOutStyle() {
    const navigation = useNavigation();
    const [isCreatureOfHabit, setCreatureOfHabit] = useState(false);
    const [isLoveNewThings, setLoveNewThings] = useState(false);
    const [isGoalSetter, setGoalSetter] = useState(false);
    const [isOkWithChange, setOkWithChange] = useState(false);
    const [isJustEnough, setJustEnough] = useState(false);
    const [isCasual, setCasual] = useState(false);

    const PostWorkOutStyle = () => {
        let workoutStyle = {
            isCreatureOfHabit: isCreatureOfHabit,
            isLoveNewThings: isLoveNewThings,
            isGoalSetter: isGoalSetter,
            isOkWithChange: isOkWithChange,
            isJustEnough: isJustEnough,
            isCasual: isCasual
        }
    }

    const PopupMessage = () => {
        alert("Thank you for your inputs...!");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    What’s your style of work out?
                </Text>
            </View>
            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>
                {isCreatureOfHabit ?
                    <TouchableWithoutFeedback onPress={() => setCreatureOfHabit(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Creature of Habit </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setCreatureOfHabit(true)}>
                        <Text style={styles.cardTextStyle}> Creature of Habit </Text>
                    </Card>
                }

                {isLoveNewThings ?
                    <TouchableWithoutFeedback disabled={isLoveNewThings} onPress={() => setLoveNewThings(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Love-New-Things.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Love new things </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setLoveNewThings(true)}>
                        <Text style={styles.cardTextStyle}> Love new things </Text>
                    </Card>
                }
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>

                {isGoalSetter ?
                    <TouchableWithoutFeedback onPress={() => setGoalSetter(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Goalsetter </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setGoalSetter(true)}>
                        <Text style={styles.cardTextStyle}> Goalsetter </Text>
                    </Card>
                }

                {isOkWithChange ?
                    <TouchableWithoutFeedback onPress={() => setOkWithChange(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Ok with change </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setOkWithChange(true)}>
                        <Text style={styles.cardTextStyle}> Ok with change </Text>
                    </Card>
                }
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 200, flexDirection: 'row' }}>

                {isJustEnough ?
                    <TouchableWithoutFeedback onPress={() => setJustEnough(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Just enough </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setJustEnough(true)}>
                        <Text style={styles.cardTextStyle}> Just enough </Text>
                    </Card>
                }
                {isCasual ?
                    <TouchableWithoutFeedback onPress={() => setCasual(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Casual </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setCasual(true)}>
                        <Text style={styles.cardTextStyle}> Casual </Text>
                    </Card>
                }
            </View>

            {isCreatureOfHabit || isLoveNewThings || isGoalSetter || isOkWithChange || isJustEnough || isCasual ?
                <MBButton title='Next' active={true} onPress={PopupMessage}></MBButton>
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
        textAlign: 'center',
        fontSize: 18,
    },
    title: {
        fontSize: 45,
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
        height: 105,
        width: 150
    },
    marginRight: {
        marginRight: 10
    },
    imageTextStyle: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 17,
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        top: 45,
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
    gray: {
        backgroundColor: '#C0C0C0'
    }
});