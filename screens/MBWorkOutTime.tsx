import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import CustomSwitch from '../components/CustomSwitch';

export default function MBWorkOutTime() {
    const navigation = useNavigation();
    const [morning, setMorning] = useState(true);
    const [afternoon, setAfternoon] = useState(true);
    const [evening, setEvening] = useState(true);
    const [remind, setReminder] = useState(true);

    const onPressMorning = () => {
        setMorning(true)
        setAfternoon(false)
        setEvening(false)
    };

    const onPressAfternoon = () => {
        setAfternoon(true)
        setMorning(false)
        setEvening(false)
    };

    const onPressEvening = () => {
        setEvening(true)
        setMorning(false)
        setAfternoon(false)
    };

    const toggleReminder = () => setReminder(previousState => !previousState);

    const postWorkoutTime = () => {
        let workoutTime = {
            morning: morning,
            afternoon: afternoon,
            evening: evening,
            remind: remind
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>When do you like to work out?</Text>
            </View>
            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={onPressMorning}>
                    <View>
                        {morning ?
                            <ImageBackground
                                source={require('../assets/images/site-images/Morning.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Morning </Text>
                            </ImageBackground>
                            :
                            <ImageBackground
                                source={require('../assets/images/site-images/Morning-Un_Selected.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Morning </Text>
                            </ImageBackground>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={onPressAfternoon}>
                    <View>
                        {afternoon ?
                            <ImageBackground
                                source={require('../assets/images/site-images/Afternoon.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Afternoon </Text>
                            </ImageBackground>
                            :
                            <ImageBackground
                                source={require('../assets/images/site-images/Afternoon-Un-Selected.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Afternoon </Text>
                            </ImageBackground>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 100, flexDirection: 'row' }}>
                <TouchableWithoutFeedback onPress={onPressEvening}>
                    <View>
                        {evening ?
                            <ImageBackground
                                source={require('../assets/images/site-images/Evening.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Evening </Text>
                            </ImageBackground>
                            :
                            <ImageBackground
                                source={require('../assets/images/site-images/Evening-Un-Selected.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Evening </Text>
                            </ImageBackground>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {!morning || !afternoon || !evening ?
                <>
                    <View style={{ top: 30, marginBottom: 50 }}>
                        <Text style={styles.text}>Great way to start the day! Do you want us to remind you? </Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', margin: 20 }}>
                            <CustomSwitch
                                selectionMode={remind}
                                roundCorner={true}
                                option1={'No Thanks'}
                                option2={'Yes Please'}
                                onSelectSwitch={toggleReminder}
                                selectionColor={'white'} />
                        </View>
                    </View>

                    <MBButton title='Next' active={true} onPress={() => navigation.navigate("MBWorkOutStyle")}></MBButton></>
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
    }
});