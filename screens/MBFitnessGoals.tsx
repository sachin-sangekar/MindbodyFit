import { StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import MBButton from '../components/MBButtons';
import { Card } from 'react-native-paper';

export default function MBFitnessGoals() {
    const navigation = useNavigation();
    const [isActiveBuildMuscle, setActiveBuildMuscle] = useState(false);
    const [isActiveGetToned, setActiveGetToned] = useState(false);
    const [isAllAroundHealthier, setAllAroundHealthier] = useState(false);
    const [isFocusedOnWellness, setFocusedOnWellness] = useState(false);
    const [isIncreasedEndurance, setIncreasedEndurance] = useState(false);
    const [isJustBrowsing, setJustBrowsing] = useState(false);
    const [isImproveOverallAppearance, setImproveOverallAppearance] = useState(false);
    const [isGettingBackRhythm, setGettingBackRhythm] = useState(false);

    const postFitnessGoals = () => {
        let fitnessGoals = {
            isActiveBuildMuscle: isActiveBuildMuscle,
            isActiveGetToned: isActiveGetToned,
            isAllAroundHealthier: isAllAroundHealthier,
            isFocusedOnWellness: isFocusedOnWellness,
            isIncreasedEndurance: isIncreasedEndurance,
            isJustBrowsing: isJustBrowsing,
            isImproveOverallAppearance: isImproveOverallAppearance,
            isGettingBackRhyth: isGettingBackRhythm
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    What do you want to achieve?
                </Text>
            </View>
            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>
                {isActiveBuildMuscle ?
                    <TouchableWithoutFeedback onPress={() => setActiveBuildMuscle(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Build Muscle </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setActiveBuildMuscle(true)}>
                        <Text style={styles.cardTextStyle}> Build Muscle </Text>
                    </Card>
                }

                {isActiveGetToned ?
                    <TouchableWithoutFeedback onPress={() => setActiveGetToned(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Get-Toned.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Get Toned </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setActiveGetToned(true)}>
                        <Text style={styles.cardTextStyle}> Get Toned </Text>
                    </Card>
                }
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>

                {isAllAroundHealthier ?
                    <TouchableWithoutFeedback onPress={() => setAllAroundHealthier(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/All-Around-Hhealthier.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> All around healthier </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setAllAroundHealthier(true)}>
                        <Text style={styles.cardTextStyle}> All around healthier </Text>
                    </Card>
                }

                {isFocusedOnWellness ?
                    <TouchableWithoutFeedback onPress={() => setFocusedOnWellness(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Focused on wellness </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setFocusedOnWellness(true)}>
                        <Text style={styles.cardTextStyle}> Focused on wellness </Text>
                    </Card>
                }
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 10, flexDirection: 'row' }}>

                {isIncreasedEndurance ?
                    <TouchableWithoutFeedback onPress={() => setIncreasedEndurance(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Increased-Endurance.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Increased endurance </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setIncreasedEndurance(true)}>
                        <Text style={styles.cardTextStyle}> Increased endurance </Text>
                    </Card>
                }
                {isJustBrowsing ?
                    <TouchableWithoutFeedback onPress={() => setJustBrowsing(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Just Browsing </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setJustBrowsing(true)}>
                        <Text style={styles.cardTextStyle}> Just Browsing </Text>
                    </Card>
                }
            </View>

            <View style={{ alignSelf: 'center', top: 20, marginBottom: 80, flexDirection: 'row' }}>

                {isImproveOverallAppearance ?
                    <TouchableWithoutFeedback onPress={() => setImproveOverallAppearance(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground, styles.marginRight]}>
                                <Text style={styles.imageTextStyle}> Improve overall appearance </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.marginRight, styles.gray]} onPress={() => setImproveOverallAppearance(true)}>
                        <Text style={styles.cardTextStyle}> Improve overall appearance </Text>
                    </Card>
                }

                {isGettingBackRhythm ?
                    <TouchableWithoutFeedback onPress={() => setGettingBackRhythm(false)}>
                        <View>
                            <ImageBackground
                                source={require('../assets/images/site-images/Mask.png')}
                                imageStyle={[styles.imageStyle]}
                                style={[styles.imageBackground]}>
                                <Text style={styles.imageTextStyle}> Getting back in the rhythm </Text>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    :
                    <Card style={[styles.imageBackground, styles.gray]} onPress={() => setGettingBackRhythm(true)}>
                        <Text style={styles.cardTextStyle}> Getting back in the rhythm </Text>
                    </Card>
                }
            </View>

            {isActiveBuildMuscle || isActiveGetToned || isAllAroundHealthier || isFocusedOnWellness || isIncreasedEndurance || isJustBrowsing || isImproveOverallAppearance || isGettingBackRhythm ?
                <MBButton title='Next' active={true} onPress={() => navigation.navigate("MBWorkOutTime")}></MBButton>
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