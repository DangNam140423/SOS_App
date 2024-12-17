import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, Text, View, Keyboard, TouchableWithoutFeedback, Button, ScrollView, FlatList, Pressable, Alert, Image, Modal, Animated, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import HeaderHome from './HeaderHome';
import { BlurView } from 'expo-blur';
import { AntDesign, Feather } from '@expo/vector-icons';
import ButtonSOS from './ButtonSOS';
import { useDispatch } from 'react-redux';
import { setRoute } from '../../store/slices/appSlice';
import MoreScreen from './MoreScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MyHeader from '../CustomTabBar/CustomHeader';
import SOSMapScreen from './SOSMapScreen';


const { width, height } = Dimensions.get('window');

const SubStack = createStackNavigator();


const HomeMain = ({ navigation }: any) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const botttomAnim = useRef(new Animated.Value(-200)).current;
    const [isBack, setIsBack] = useState(false);



    const hanldeSOS = () => {
        Animated.timing(botttomAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setIsBack(true);
    }


    const moveProfileScreen = () => {
        dispatch(setRoute('user'));
        navigation.navigate('user');
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const handleLockApp = () => {
        navigation.navigate('FakeScreen');
    }

    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> </TouchableWithoutFeedback>
        <View style={styles.container}>
            <HeaderHome />

            <ScrollView
                scrollEnabled={false}
                style={styles.body}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.viewUserName}>
                    <Text style={styles.userName}>Hi, DangNam !</Text>
                    <Pressable onPress={moveProfileScreen}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: 'https://i.pinimg.com/originals/5e/ad/08/5ead0820c0bbc083abfb7ea99a55a8ae.jpg' }}
                        />
                    </Pressable>
                </View>
                <View style={styles.viewButtonSOS}>
                    <ButtonSOS
                        onButtonClick={hanldeSOS}
                    />
                    <BlurView intensity={0} style={styles.viewSendTo} >
                        <View style={styles.listFreind}>
                            <Image
                                style={styles.itemFriend}
                                source={{ uri: 'https://i.pinimg.com/originals/90/d9/06/90d906e6d1dc7b21aa5ffe011e57c3ff.jpg' }}
                            />
                            <Image
                                style={styles.itemFriendMore}
                                source={{ uri: 'https://i.pinimg.com/originals/44/f4/08/44f408f2f83f4902f8cdae1e7e5f830c.jpg' }}
                            />
                            <Image
                                style={styles.itemFriendMore}
                                source={{ uri: 'https://i.pinimg.com/originals/1f/3e/87/1f3e875bc42f9e36b7c9922a2ff0a422.jpg' }}
                            />
                            {/* <Image
                                style={styles.itemFriendMore}
                                source={{ uri: 'https://i.pinimg.com/originals/01/c6/6b/01c66ba35366731308ede577b2f0dd82.jpg' }}
                            /> */}
                            <View style={styles.itemFriendMore}>
                                <Text style={styles.textPlus}>+1</Text>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'medium',
                            letterSpacing: 1.5,

                        }}>
                            Your SOS will be sent to 4 people
                        </Text>
                    </BlurView>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <MoreScreen closeModal={closeModal} handleLockApp={handleLockApp} />
                </Modal>
                <View style={styles.more}>
                    <Pressable
                        onPress={() => setModalVisible(true)}
                        style={{
                            backgroundColor: '#DCD5D5',
                            flexDirection: 'row',
                            gap: 5,
                            height: 35,
                            width: 110,
                            borderRadius: 12,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>More</Text>
                        <AntDesign name="down" size={20} color="black" />
                    </Pressable>
                </View>
            </ScrollView >

            <Animated.View
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    display: !isBack ? 'none' : 'flex',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    height: height,
                    width: width
                }}
            ></Animated.View>

            <Animated.View
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    backgroundColor: 'white',
                    bottom: botttomAnim,
                    height: 200,
                    width: width,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 20,
                    paddingHorizontal: 30,
                }}
            >
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Are you sure you want to send a distress signal or make an emergency call?</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        gap: 20,
                        marginTop: 20,
                    }}>
                    <TouchableOpacity
                        style={[styles.buttonSOS, { backgroundColor: '#EA3B16' }]}
                        onPress={() => {
                            Animated.timing(botttomAnim, {
                                toValue: -200,
                                duration: 200,
                                useNativeDriver: false,
                            }).start();
                            setIsBack(false);
                            navigation.navigate('sosMap');
                        }}
                    >
                        <Text style={{ color: 'white' }}>
                            SEND
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonSOS, { backgroundColor: '#32A34B' }]}
                        onPress={() => {
                            Linking.openURL(`tel:${'111'}`);
                        }}
                    >
                        <Text style={{ color: 'white' }}>
                            CALL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonSOS, { backgroundColor: '#9C9EA1' }]}
                        onPress={() => {
                            Animated.timing(botttomAnim, {
                                toValue: -200,
                                duration: 200,
                                useNativeDriver: false,
                            }).start();
                            setIsBack(false);
                        }}
                    >
                        <Text style={{ color: 'white' }}>
                            NO
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View >
    );
}


export default function HomeScreen() {
    return (
        <SubStack.Navigator
            initialRouteName='main'
            screenOptions={{
                headerShown: true,
                header: (props) => (
                    <MyHeader {...props} />
                ),
            }}
        >
            <SubStack.Screen
                name="main"
                component={HomeMain}
                options={{ headerShown: false }}
            />
            <SubStack.Screen
                name="sosMap"
                component={SOSMapScreen}
                options={{ title: 'Map' }}
            />
        </SubStack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginHorizontal: 0,
        marginTop: 120,
        // marginBottom: 80
    },
    viewUserName: {
        paddingHorizontal: 20,
        height: 80,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userName: {
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 1.5,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },
    viewButtonSOS: {
        marginTop: 20,
        height: 490,
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    viewSendTo: {
        overflow: 'hidden',
        padding: 5,
        width: 'auto',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    listFreind: {
        flexDirection: 'row',
        gap: -10
    },
    itemFriend: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
    },
    itemFriendMore: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: -15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343434',
    },
    textPlus: {
        fontSize: 20,
        color: 'white'
    },
    more: {
        // height: height - 120 - 80,
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    buttonSOS: {
        height: 30,
        width: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
