import { HeaderBackButton } from '@react-navigation/elements';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyHeader({ options, route, navigation }: any) {
    // const handleBack = () => {
    //     navigation.goBack();
    // }

    const handleLockApp = () => {
        navigation.navigate('FakeScreen');
    }

    const moveBack = () => {
        navigation.goBack();
    }

    const arrTitleBack = ['Map', 'Search', 'Personal', 'Tips and Tricks', 'Address', 'Notification', 'FAQs', 'Forum', 'Setting', 'NewAddress', 'Diary', 'Add Diary'];

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.headerBackground, {
                borderBottomWidth: arrTitleBack.includes(options.title) ? 0 : 2,
            }]}>
                <View style={styles.item_header}>
                    {arrTitleBack.includes(options.title) &&
                        <Pressable onPress={moveBack}>
                            <Feather name="chevron-left" size={30} color="black" />
                        </Pressable>
                    }
                    <Text style={[styles.title,
                    {
                        fontWeight: '400',
                        fontSize: 24,
                        height: 30
                    }
                    ]}>
                        {options.title === 'NewAddress' ? '' : options.title}
                    </Text>
                </View>
                <View style={styles.item_header} >
                    <Pressable onPress={() => handleLockApp()}>
                        <View style={styles.iconHeader}>
                            <Feather name="lock" size={24} color="black" />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: 120,
        width: '100%',
    },
    headerBackground: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderBottomColor: '#eae9e9',
        borderBottomWidth: 2,
    },
    item_header: {
        width: 'auto',
        height: 60,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    title: {
        color: 'black',
    },
    iconHeader: {
        // backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }

    // headerHome: {
    //     position: 'absolute',
    //     top: 0,
    //     backgroundColor: 'rgb(255, 255, 255, 0.9)',
    //     height: 100
    // },
    // header: {
    //     backgroundColor: '#3b4e91',
    //     height: 100
    // },

    // backHeader: {
    // },
    // icon: {
    // },
    // headerHomeLeft: {
    //     marginHorizontal: 20,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 5
    // },
    // avatar: {
    //     height: 50,
    //     width: 50,
    //     borderRadius: 50
    // },
    // userName: {
    //     fontSize: 15,
    //     fontFamily: 'OpenSans_Regular'
    // },
    // rightHeader: {
    //     marginHorizontal: 20,
    // }
});