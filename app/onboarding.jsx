import { useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboarding from 'react-native-onboarding-swiper'
import { Image } from 'expo-image'
import { grayColor, primaryColor } from '../constants/Colors'

// Hooks
import { useColorScheme } from '@/hooks/useColorScheme';
// Components
import LottieComponent from '@/components/LottieComponent'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ThemedButtom from '@/components/ThemedButtom'
// Animaciones JSON
const imgAnimationHello = require('../assets/animations/AnimationHello.json')
const imgAnimationGestion = require('../assets/animations/AnimationGestionTareas.json')
const imgAnimationCalendar = require('../assets/animations/AnimationCalendar.json')
const imgAnimationAsynData = require('../assets/animations/AnimationSyncData.json')
const logoImg = require('../assets/images/logo.png')
const logoImgWhite = require('../assets/images/logoWhite.png')

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get("window")

// Componente para el indicador de onboarding
export const OnboardingIndicator = ({ select }) => {
    return (
        <ThemedView style={styles.containerIndicator}>
            {select.map(item => (
                // Renderizar un indicador para cada página, cambiando el color según la selección
                <ThemedView key={item.pages} style={item.selected ? { ...styles.item, backgroundColor: primaryColor } : styles.item}></ThemedView>
            ))}
        </ThemedView>
    )
}

// Componente principal de onboarding
export default function onboarding() {

    const colorSheme = useColorScheme() // Obtener el esquema de color actual (claro/oscuro)
    const onboardingRef = useRef(null); // Referencia para controlar el componente de onboarding
    const [pages, setPages] = useState(0) // Estado para rastrear el índice de la página actual

    // Array de elementos de página para el indicador
    const pagesItems = [
        { "pages": 0, "selected": false },
        { "pages": 1, "selected": false },
        { "pages": 2, "selected": false },
        { "pages": 3, "selected": false },
    ]
    // Actualizar el estado seleccionado de la página actual
    const pagesSelect = pagesItems.map(item => item.pages === pages ? { ...item, selected: true } : item)

    return (
        <SafeAreaView style={styles.viewContainer}>
            <Onboarding
                ref={onboardingRef}
                // Callback para actualizar el índice de la página actual
                pageIndexCallback={(index) => {
                    setPages(index)
                }}
                // Botón personalizado para siguiente
                nextLabel={<ThemedButtom text="Siguiente" onNext={() => onboardingRef.current.goNext()} />}
                // Botón personalizado para omitir usando el indicador de onboarding
                skipLabel={<OnboardingIndicator select={pagesSelect} />}
                // Ocultar los puntos predeterminados
                DotComponent={() => <></>}
                // Establecer el color de fondo de la barra inferior según el esquema de color
                bottomBarColor={colorSheme == 'dark' ? 'transparent' : 'white'}
                // Estilos para el contenedor de onboarding
                containerStyles={{ paddingHorizontal: 20, alignItems: 'flex-start' }}
                // Definir las páginas del onboarding
                pages={[
                    {
                        backgroundColor: `${colorSheme == 'dark' ? '#151718' : '#fff'}`,
                        image:
                            <ThemedView style={styles.containerImg}>
                                <Image source={colorSheme === 'dark' ? logoImgWhite : logoImg} style={styles.imgLogo} contentFit='cover' transition={1000} />
                                <LottieComponent source={imgAnimationHello} width={250} height={250} />
                            </ThemedView>,
                        title: <ThemedText type="title">¡Organiza tu vida académica como nunca antes!.</ThemedText>,
                        subtitle: '',
                    },
                    {
                        backgroundColor: `${colorSheme == 'dark' ? '#151718' : '#fff'}`,
                        image:
                            <ThemedView>
                                <Image source={colorSheme === 'dark' ? logoImgWhite : logoImg} style={styles.imgLogo} contentFit='cover' transition={1000} />
                                <LottieComponent source={imgAnimationGestion} width={250} height={250} />
                            </ThemedView>,
                        title: <ThemedText type="title">Gestión de Tareas y Exámenes</ThemedText>,
                        subtitle: <ThemedText type="default">Mantén el control de tus tareas y exámenes. Añade, edita y organiza tus actividades diarias para no perderte nada importante.</ThemedText>,
                    },
                    {
                        backgroundColor: `${colorSheme == 'dark' ? '#151718' : '#fff'}`,
                        image:
                            <ThemedView>
                                <Image source={colorSheme === 'dark' ? logoImgWhite : logoImg} style={styles.imgLogo} contentFit='cover' transition={1000} />
                                <LottieComponent source={imgAnimationCalendar} width={250} height={250} />
                            </ThemedView>,
                        title: <ThemedText type="title">Calendario y Recordatorios</ThemedText>,
                        subtitle: <ThemedText type="default">Visualiza tu agenda con nuestro calendario integrado. Configura recordatorios personalizados para nunca olvidar una fecha límite.</ThemedText>,
                    },
                    {
                        backgroundColor: `${colorSheme == 'dark' ? '#151718' : '#fff'}`,
                        image:
                            <ThemedView>
                                <Image source={colorSheme === 'dark' ? logoImgWhite : logoImg} style={styles.imgLogo} contentFit='cover' transition={1000} />
                                <LottieComponent source={imgAnimationAsynData} width={250} height={250} />
                            </ThemedView>,
                        title: <ThemedText type="title">Sincronización y Personalización</ThemedText>,
                        subtitle: <ThemedText type="default">Accede a tu información desde cualquier dispositivo con la sincronización en la nube. Personaliza DiaryApp para que se ajuste a tu estilo.</ThemedText>,
                    },
                ]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    containerImg: {
        width: width * 0.9,
        alignItems: 'center'
    },
    imgLogo: {
        width: 250,
        height: 70,
        marginBottom: 50
    },
    containerIndicator: {
        flexDirection: 'row'
    },
    item: {
        backgroundColor: grayColor,
        width: 25,
        height: 7,
        borderRadius: 100,
        marginHorizontal: 3,
    },
})
