import axios from 'axios';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Dimensions, View, Keyboard, TouchableWithoutFeedback, ScrollView, TextInput, FlatList, Text, Animated, Button, Image, Pressable } from 'react-native';
import BoxFriend from '../BoxFriend/BoxFriend';
import PersonalScreen from './PersonalScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TipsAndTricksScreen from './TipsAndTricksScreen';
import MyHeader from '../CustomTabBar/CustomHeader';
import AddressScreen from './AddressScreen';
import NotificationScreen from './NotificationScreen';
import FAQsScreen from './FAQsScreen';
import ForumScreen from './ForumScreen';
import SettingScreen from './SettingScreen';
import AddNewAddress from './AddNewAddressScreen';
import DiaryScreen from './DiaryScreen';
import AddDiaryScreen from './AddDiaryScreen';
const { width, height } = Dimensions.get('window');


const Stack = createNativeStackNavigator();

function Profile({ navigation }: any) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.body}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.profileContainer}>
                    <Image
                        source={{
                            uri: 'https://i.pinimg.com/originals/5e/ad/08/5ead0820c0bbc083abfb7ea99a55a8ae.jpg', // Thay bằng đường dẫn avatar thực tế
                        }}
                        style={styles.avatar}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>DangNam</Text>
                        <View style={styles.locationContainer}>
                            {/* <Icon name="location-on" size={20} color="#777" /> */}
                            <Text style={styles.locationText}>Hoa Xuan, Cam Le, Da Nang</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('personal')}
                        style={styles.infoRow}>
                        <Feather name="user" size={24} color="#FFA500" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Persional information</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                    <Pressable
                        onPress={() => navigation.navigate('address')}
                        style={styles.infoRow}>
                        <Ionicons name="map-outline" size={24} color="#1E90FF" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Address</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                </View>

                <View style={styles.infoContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('notification')}
                        style={styles.infoRow}>
                        <Feather name="bell" size={24} color="#238600" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Notification</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                    <Pressable
                        onPress={() => navigation.navigate('tipandtrick')}
                        style={styles.infoRow}
                    >
                        <Feather name="credit-card" size={24} color="#B33DFB" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Tip and tricks</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                    <Pressable
                        onPress={() => navigation.navigate('diary')}
                        style={styles.infoRow}
                    >
                        <FontAwesome5 name="sticky-note" size={24} color="#ad7019" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Diary</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >
                </View>


                <View style={styles.infoContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('faqs')}
                        style={styles.infoRow}>
                        <Ionicons name="help-circle-outline" size={24} color="#238600" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>FAQs</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                    <Pressable
                        onPress={() => navigation.navigate('forum')}
                        style={styles.infoRow}>
                        <Feather name="command" size={24} color="#2AE1E1" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Forum</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >

                    <Pressable
                        onPress={() => navigation.navigate('setting')}
                        style={styles.infoRow}>
                        <Feather name="settings" size={24} color="#413DFB" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>Setting</Text>
                        </View>
                        <Feather name="chevron-right" size={24} color="#747783" style={styles.arrowright} />
                    </Pressable >
                </View>
            </ScrollView>
        </View >
    )
}

export default function UserScreen() {
    return (
        <Stack.Navigator
            initialRouteName="profile"
            screenOptions={{
                headerShown: true,
                header: (props) => (
                    <MyHeader {...props} />
                ),
            }}
        >
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{ headerShown: true, title: 'Profile' }}
            />
            <Stack.Screen
                name="personal"
                component={PersonalScreen}
                options={{ headerShown: true, title: 'Personal' }}
            />
            <Stack.Screen
                name="address"
                component={AddressScreen}
                options={{ headerShown: true, title: 'Address' }}
            />
            <Stack.Screen
                name="addnewaddress"
                component={AddNewAddress}
                options={{ headerShown: true, title: 'NewAddress' }}
            />
            <Stack.Screen
                name="notification"
                component={NotificationScreen}
                options={{ headerShown: true, title: 'Notification' }}
            />
            <Stack.Screen
                name="tipandtrick"
                component={TipsAndTricksScreen}
                options={{ headerShown: true, title: 'Tips and Tricks' }}
            />

            <Stack.Screen
                name="diary"
                component={DiaryScreen}
                options={{ headerShown: true, title: 'Diary' }}
            />

            <Stack.Screen
                name="adddiary"
                component={AddDiaryScreen}
                options={{ headerShown: true, title: 'Add Diary' }}
            />

            <Stack.Screen
                name="faqs"
                component={FAQsScreen}
                options={{ headerShown: true, title: 'FAQs' }}
            />

            <Stack.Screen
                name="forum"
                component={ForumScreen}
                options={{ headerShown: true, title: 'Forum' }}
            />

            <Stack.Screen
                name="setting"
                component={SettingScreen}
                options={{ headerShown: true, title: 'Setting' }}
            />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        marginTop: 120,
        marginHorizontal: 20,
    },

    profileContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#000',
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    locationText: {
        fontSize: 14,
        color: '#AAAAAA',
    },


    infoContainer: {
        backgroundColor: '#E4E0E0',
        borderRadius: 10,
        padding: 16,
        gap: 20,
        marginBottom: 30
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        marginRight: 16,
    },
    infoLabel: {
        fontSize: 17,
        color: '#32343E',
    },
    arrowright: {
        position: 'absolute',
        right: 0
    }
});
