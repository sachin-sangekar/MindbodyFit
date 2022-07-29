import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import React, { useState } from "react";
import MBButton from '../components/MBButtons';
import { useNavigation } from '@react-navigation/native';


export default function MBWelcomeScreen() {
    const [isBegin, setIsBegin] = useState(true);
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={{marginBottom: 30}}>
                <Text style={styles.title}>Hi Sylvia</Text>
                <Text style={styles.text}>Tell us a bit more about your fitness goals so we can support you achieving them! Ready?</Text>
            </View>

            <MBButton title='Begin' active={true} onPress={() => navigation.navigate("MBMeasurements")}></MBButton>
            <MBButton title='Maybe Later' active={false} onPress={() => setIsBegin(false)}></MBButton>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 22,
        fontStyle: 'normal',
        // fontWeight: 'bold',
        marginTop: 50,
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#2D2D2D'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        // fontFamily: 'AvertaDemoPECuttedDemo',
        // fontWeight: 'bold',
        color: '#2D2D2D'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    stretchButton: {
        alignSelf: 'stretch',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button1: {
        marginVertical: 20,
    },
    grayButton: {
        // backgroundColor: "#007AFF",
    }
});