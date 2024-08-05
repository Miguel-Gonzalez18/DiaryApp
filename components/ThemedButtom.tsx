import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import { ThemedText } from '../components/ThemedText'
import { primaryColor } from '../constants/Colors'
//Hooks
import { useColorScheme } from '../hooks/useColorScheme';

interface ThemedButtom {
    text: string,
    themed?: "primary" | "secondary" | "tertiary" | "cancel"
    onNext?: any 
}

export default function ThemedButtom({text="Name", themed="primary", onNext}: ThemedButtom) {
    const colorScheme = useColorScheme()
    return (
        <TouchableOpacity onPress={() => onNext()} style={themed === "primary"? styles.primary: styles.primary}>
            <ThemedText style={colorScheme == 'light' ? {color: 'white'}: {color: 'black'}} type='defaultSemiBold'>Siguiente</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primary: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: primaryColor,
    },
})