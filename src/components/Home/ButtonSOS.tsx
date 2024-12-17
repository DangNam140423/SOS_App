import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const NeuMorph = ({ children }: any) => {
    return (
        <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
                <LinearGradient
                    colors={['#EA3B16', '#FFEEEA']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.inner}
                >
                    {children}
                </LinearGradient>
            </View>
        </View>
    )
}



export default function ButtonSOS({ onButtonClick }: any) {

    return (
        <View style={styles.viewButtonSOS_1}>
            <View style={styles.viewButtonSOS_2}>
                <View style={styles.viewButtonSOS_3}>
                    <LinearGradient
                        colors={['#fcd1d1', '#ffecec', '#ffffff', '#ffffff']}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.viewButtonSOS_4}
                    >
                        <Pressable onPress={onButtonClick} >
                            <NeuMorph>
                                <LinearGradient
                                    colors={['#F7A18E', '#EA3B16']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.viewButtonSOS_5}
                                >
                                    <Feather name="wifi" size={24} color="white" />
                                    <Text style={styles.textSOS}>
                                        SOS
                                    </Text>
                                </LinearGradient>
                            </NeuMorph>
                        </Pressable>
                    </LinearGradient>
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    viewButtonSOS_1: {
        height: 450,
        width: 450,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 225,
        borderWidth: 2,
        borderColor: 'white',
    },
    viewButtonSOS_2: {
        height: 400,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'white'
    },
    viewButtonSOS_3: {
        height: 350,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 175,
        borderWidth: 2,
        borderColor: 'white'
    },
    viewButtonSOS_4: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300 / 2
    },
    viewUrgent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    inner: {
        backgroundColor: '#DEE9F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 30,
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    topShadow: {
        shadowOffset: {
            width: -25,
            height: -6
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowColor: 'white'
    },
    bottomShadow: {
        shadowOffset: {
            width: 20,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        shadowColor: 'rgba(226, 8, 8, 0.3)',
    },
    viewButtonSOS_5: {
        height: 170,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 270 / 2,
    },
    textSOS: {
        letterSpacing: 2,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
});