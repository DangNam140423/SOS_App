import axios from 'axios';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, View, Keyboard, TouchableWithoutFeedback, ScrollView, TextInput, FlatList, Text, Image, Pressable, Animated } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import MyHeader from '../CustomTabBar/CustomHeader';
import BoxFriend from '../BoxFriend/BoxFriend';
import ChatScreen from './ChatScreen';

interface objectUser {
    id: number;
    name: string;
    phone: string;
}

const MainScreen = ({ navigation }: any) => {
    const [arrUser, setArrUser] = useState<objectUser[]>([]);
    const slideAnim = useRef(new Animated.Value(500)).current;
    const [haveBack, setHaveBack] = useState(false);
    const [valueFriend, setValueFriend] = useState<objectUser>({
        id: 0,
        name: '',
        phone: ''
    });

    const startSlideUp = (item: objectUser) => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setHaveBack(true);
        setValueFriend(item);
    };

    const endSlideUp = () => {
        Animated.timing(slideAnim, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setHaveBack(false);
    }

    const moveChat = () => {
        Animated.timing(slideAnim, {
            toValue: 500,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setHaveBack(false);
        navigation.navigate('chat');
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setArrUser(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
            });
    }, []);

    const moveSearchScreen = () => {
        navigation.navigate('search');
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewListMyFriend}>
                    <View style={styles.viewMyFriend}>
                        <Text style={styles.myFriend}>My Friend ({arrUser.length})</Text>
                        {/* <Pressable>
                      <Text style={styles.viewAll}>View all</Text>
                      </Pressable> */}
                    </View>
                    <FlatList
                        data={arrUser}
                        // keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
                        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={styles.viewListFriend}

                        renderItem={({ item }) =>
                            <Pressable style={styles.item_user} onPress={() => { startSlideUp(item) }}>
                                <View style={styles.viewInfo}>
                                    <Image
                                        style={styles.avatar_user}
                                        source={{
                                            uri: item.id === 1
                                                ?
                                                'https://i.pinimg.com/originals/90/d9/06/90d906e6d1dc7b21aa5ffe011e57c3ff.jpg'
                                                : item.id === 2
                                                    ?
                                                    'https://i.pinimg.com/originals/44/f4/08/44f408f2f83f4902f8cdae1e7e5f830c.jpg'
                                                    :
                                                    item.id === 3
                                                        ?
                                                        'https://i.pinimg.com/originals/1f/3e/87/1f3e875bc42f9e36b7c9922a2ff0a422.jpg'
                                                        :
                                                        'https://i.pinimg.com/originals/01/c6/6b/01c66ba35366731308ede577b2f0dd82.jpg'
                                        }}
                                    />
                                    <View>
                                        <Text style={styles.nameUser}>{item.name}</Text>
                                        <Text style={styles.phoneUser}>{item.phone}</Text>
                                    </View>
                                </View>
                                <Feather name="more-vertical" size={24} color="#B2B0B0" />
                            </Pressable>
                        }
                    />
                </View>

                <View style={styles.viewListSOS}>
                    <View style={styles.viewMyCommunities}>
                        <Text style={styles.myCommunities}>My Communities</Text>
                    </View>
                    <View style={styles.view_user_SOS}>
                        <View style={{
                            flexDirection: 'column',
                            gap: 5,
                            alignItems: 'flex-start'
                        }}>
                            <Image
                                style={styles.imageCommunities}
                                source={{ uri: 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1726043509/SOS_App/community-icon_ti5zpi.png' }}
                            />
                            <Text style={styles.textImportent}>Share location with them</Text>
                        </View>
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
                            <View style={styles.plusMore}>
                                <Text style={styles.textPlusMore}>
                                    +1
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Pressable style={styles.viewPlus} onPress={moveSearchScreen}>
                        <Feather name="plus" size={40} color="white" />
                    </Pressable>
                </View>
            </View>
            <Pressable onPress={endSlideUp} style={[{ display: haveBack ? 'flex' : 'none' }, styles.background, StyleSheet.absoluteFill]} />
            <Animated.View
                style={[
                    styles.animatedView,
                    {
                        transform: [{ translateY: slideAnim }]
                    },
                ]}
            >
                <BoxFriend valueFriend={valueFriend} isFriend={true} moveChat={moveChat} />
            </Animated.View>
        </View >
    );
}


const SubStack = createStackNavigator();

export default function FriendScreen() {
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
                component={MainScreen}
                options={{ title: 'Friend' }}
            />
            <SubStack.Screen
                name="search"
                component={SearchScreen}
                options={{ title: 'Search' }}
            />
            <SubStack.Screen
                name="chat"
                component={ChatScreen}
                options={{ title: 'Chat', headerShown: false }}
            />
        </SubStack.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        marginHorizontal: 0,
        marginTop: 120,
        // marginBottom: 80,
        paddingHorizontal: 20
    },

    viewListMyFriend: {
        flex: 3,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    viewMyFriend: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    myFriend: {
        fontSize: 20,
        fontWeight: 'regular',
    },
    viewAll: {
        fontSize: 15,
        fontWeight: 'regular',
    },

    viewListFriend: {
        width: '100%',
        flexDirection: 'column',
        maxHeight: 80 * 3 + 15 * 6
    },
    item_user: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        marginVertical: 15,
        borderRadius: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    viewInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    avatar_user: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        borderColor: '#B2B0B0',
        borderWidth: 1
    },
    nameUser: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    phoneUser: {
        fontSize: 15,
        fontWeight: 'medium',
        color: '#B2B0B0'
    },



    viewListSOS: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
    },
    viewMyCommunities: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    myCommunities: {
        fontSize: 20,
        fontWeight: 'regular',
    },
    view_user_SOS: {
        width: 230,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 24,
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 10,
    },
    imageCommunities: {
        width: 70,
        height: 70,
        borderRadius: 25,
        // backgroundColor: '#d2d1d1'
    },
    textImportent: {
        fontSize: 15,
        fontWeight: '300',
        color: 'black'
    },
    listFreind: {
        flexDirection: 'row',
    },
    itemFriend: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },
    itemFriendMore: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: -15
    },
    plusMore: {
        height: 45,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPlusMore: {
        fontSize: 20,
        fontWeight: 'medium'
    },
    viewPlus: {
        backgroundColor: '#343434',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    background: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1
    },
    animatedView: {
        position: 'absolute',
        bottom: 0,
        zIndex: 3
    }
});
