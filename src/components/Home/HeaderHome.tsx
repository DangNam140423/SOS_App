import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from "../../navigation/routes";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HeaderHome() {
    const navigation = useNavigation<NavigationProp>();

    const handleLockApp = () => {
        navigation.navigate('FakeScreen');
    }

    // const handlePress = () => {
    //     navigation.navigate('user');
    // }
    return (
        <View style={[styles.headerHome, StyleSheet.absoluteFill]}>
            <Pressable style={styles.headerHomeLeft}>
                {/* <Image
                    style={styles.avatar}
                    source={{ uri: 'https://i.pinimg.com/1200x/6b/1d/29/6b1d29e56272cb69b7f8a2d17bb19fce.jpg' }}
                /> */}
                <View>
                    <Text style={styles.nameApp}>SafeS</Text>
                </View>
            </Pressable>
            <View style={styles.headerHomeRight}>
                {/* <Pressable
                    onPress={() => navigation.navigate('notification')}
                >
                    <View style={styles.iconHeader}>
                        <Feather name="bell" size={24} color="black" />
                    </View>
                </Pressable> */}
                <Pressable onPress={() => handleLockApp()}>
                    <View style={styles.iconHeader}>
                        <Feather name="lock" size={24} color="black" />
                    </View>
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    headerHome: {
        height: 120,
        paddingHorizontal: 20,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        zIndex: 1,
        borderBottomColor: '#eae9e9',
        borderBottomWidth: 2,
    },
    headerHomeLeft: {
        height: 60,
        width: 60,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    },
    nameApp: {
        fontSize: 25,
        color: 'black',
        // fontFamily: 'Inter',
        fontWeight: 'bold'
    },
    headerHomeRight: {
        height: 60,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1,
        gap: 14

    },
    iconHeader: {
        // backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});