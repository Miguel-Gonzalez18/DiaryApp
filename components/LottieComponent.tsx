import React from 'react'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

interface LottieComponentProps {
    source: any;
    width: number;
    height: number;
}

export default function LottieComponent({source, width, height}: LottieComponentProps) {
    return (
        <LottieView
            source={source}
            style={[styles.animatedContainer, {width, height}]}
            autoPlay 
            loop 
        />
    )
}

const styles = StyleSheet.create({
    animatedContainer: {
        width: 200,
        height: 200
    }
})