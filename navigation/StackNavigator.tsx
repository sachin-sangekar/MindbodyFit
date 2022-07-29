import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MBWelcomeScreen from '../screens/MBWelcomeScreen';
import MBExperienceFitness from "../screens/MBExperienceFitness";
import MBFitnessGoals from "../screens/MBFitnessGoals";
import MBWorkOutTime from "../screens/MBWorkOutTime";
import MBWorkOutStyle from "../screens/MBWorkOutStyle";
import MBMeasurements from "../screens/MBMeasurements";
import PersonalDetails from "../screens/PersonalDetails";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MBWelcomeScreen'>
            <Stack.Group>
                <Stack.Screen name="MBWelcomeScreen" component={MBWelcomeScreen} />
                <Stack.Screen name="MBMeasurements" component={MBMeasurements} />
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
                <Stack.Screen name="MBExperienceFitness" component={MBExperienceFitness} />
                <Stack.Screen name="MBFitnessGoals" component={MBFitnessGoals} />
                <Stack.Screen name="MBWorkOutTime" component={MBWorkOutTime} />
                <Stack.Screen name="MBWorkOutStyle" component={MBWorkOutStyle} />                
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default StackNavigator;