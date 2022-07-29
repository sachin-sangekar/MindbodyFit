import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function MBButton(props: { onPress: any; title: string; active: boolean; }) {
    const { onPress, title, active } = props;
    return (
        <Pressable style={[styles.button, active ? styles.orange : styles.gray]} onPress={onPress}>
            <Text style={[styles.text, active ? styles.white : styles.black]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        alignSelf: 'stretch',
        height: 50
    },
    text: {
        fontStyle: 'normal',
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
    gray: {
        backgroundColor: '#FFFFFF'
    },
    black: {
        color: '#696C74'
    },
    orange: {
        backgroundColor: '#E85815'
    },
    white: {
        color: '#FFFFFF'
    }
});