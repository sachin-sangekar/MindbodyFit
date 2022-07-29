import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import NumericInput from 'react-native-numeric-input'

export default function MBExperienceFitness() {
    const navigation = useNavigation();
    const [isActiveZeroToThree, setActiveZeroToThree] = useState(true);
    const [isActiveFourToFive, setActiveFourToFive] = useState(true);
    const [isActiveSixToSeven, setActiveSixToSeven] = useState(true);
    const [workOutDays, onChangeworkOutDays] = React.useState();

    const onPressZeroToThree = () => {
        setActiveZeroToThree(true)
        setActiveFourToFive(false)
        setActiveSixToSeven(false)
    };

    const onPressFourToFive = () => {
        setActiveFourToFive(true)
        setActiveZeroToThree(false)
        setActiveSixToSeven(false)
    };

    const onPressSixToSeven = () => {
        setActiveSixToSeven(true)
        setActiveFourToFive(false)
        setActiveZeroToThree(false)
    };

    const postFitnessExperiance = () => {
        let fitnessExperiance = {
            isActiveZeroToThree: isActiveZeroToThree,
            isActiveFourToFive: isActiveFourToFive,
            isActiveSixToSeven: isActiveSixToSeven,
            workOutDays: workOutDays
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Hi Sylvia</Text>
                <Text style={styles.text}>How much experience do you have with fitness and wellness?</Text>
            </View>
            <View style={{ alignSelf: 'center', top: 20, marginBottom: 30, flexDirection: 'row' }}>

                <TouchableWithoutFeedback onPress={onPressZeroToThree}>
                    <ImageBackground
                        source={require('../assets/images/site-images/Group-2.png')}
                        imageStyle={[styles.imageStyle, isActiveZeroToThree ? styles.opacity0 : styles.opacity]}
                        style={[styles.imageBackground, styles.marginRight]}>
                        <Text style={styles.imageTextStyle}> 0 - 3 </Text>
                    </ImageBackground>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={onPressFourToFive}>
                    <ImageBackground
                        source={require('../assets/images/site-images/Group-3.png')}
                        imageStyle={[styles.imageStyle, isActiveFourToFive ? styles.opacity0 : styles.opacity]}
                        style={[styles.imageBackground, styles.marginRight]}>
                        <Text style={styles.imageTextStyle}> 4 - 5 </Text>
                    </ImageBackground>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={onPressSixToSeven}>
                    <ImageBackground
                        source={require('../assets/images/site-images/Group-4.png')}
                        imageStyle={[styles.imageStyle, isActiveSixToSeven ? styles.opacity0 : styles.opacity]}
                        style={[styles.imageBackground]}>
                        <Text style={styles.imageTextStyle}> 6 - 7+ </Text>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
            {!isActiveZeroToThree || !isActiveFourToFive || !isActiveSixToSeven ?
                <><View style={{ marginTop: 20 }}>
                    <Text style={styles.text}>Good foundation is a great start!
                        How often do you typically work out?</Text>
                    <View style={{ marginTop: 20, marginBottom: 170, alignItems: 'center' }}>
                        <NumericInput
                            value={workOutDays}
                            onChange={() => onChangeworkOutDays(workOutDays)}
                            totalWidth={180}
                            totalHeight={45}
                            iconSize={25}
                            maxValue={8}
                            minValue={0}
                            step={1}
                            valueType='real'
                            rounded
                            textColor='#696C74'
                            // inputStyle={{ borderRadius: 0, marginLeft: 5, marginRight: 5 }}
                            iconStyle={{ borderColor: '#D5D9DE' }}
                            containerStyle={{ borderRadius: 0 }}
                            rightButtonBackgroundColor='#FFF7F4'
                            leftButtonBackgroundColor='#FFF7F4' />
                    </View>
                </View>
                    <MBButton title='Next' active={true} onPress={() => navigation.navigate("MBFitnessGoals")}></MBButton></>
                :
                null
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        // textAlign: 'center',
        fontSize: 20,
        // fontWeight: 'bold',
        marginTop: 50,
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        // fontWeight: 'bold',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        // fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 14,
        // fontWeight: 'bold',
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
        height: 115,
        width: 105
    },
    marginRight: {
        marginRight: 10
    },
    imageTextStyle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        top: 45
    },
    opacity: {
        opacity: .21
    },
    opacity0: {
        opacity: 1
    },
});