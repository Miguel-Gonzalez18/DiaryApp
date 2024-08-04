import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'

//Animation JSON

export default function onboarding() {
    return (
        <SafeAreaView>
            <View style={styles.viewContainer}>
                <LottieView
                    source={require('../assets/animations/AnimationHello.json')}
                    style={{ width: 100, height: 100 }}
                    autoPlay 
                    loop 
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})