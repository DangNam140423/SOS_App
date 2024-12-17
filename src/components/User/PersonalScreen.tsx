import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

const PersonalScreen = ({ navigation }: any) => {
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
                    <View style={styles.infoRow}>
                        <Feather name="user" size={24} color="#FFA500" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>NAME</Text>
                            <Text style={styles.infoValue}>DangNam</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="email-outline" size={24} color="#1E90FF" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>EMAIL</Text>
                            <Text style={styles.infoValue}>namtd.21it@vku.udn.vn</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <Feather name="phone" size={24} color="#32CD32" style={styles.infoIcon} />
                        <View>
                            <Text style={styles.infoLabel}>PHONE NUMBER</Text>
                            <Text style={styles.infoValue}>094252342</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
};

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
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        marginRight: 16,
    },
    infoLabel: {
        fontSize: 12,
        color: '#777777',
    },
    infoValue: {
        fontSize: 16,
        color: '#333333',
        fontWeight: 'bold',
    },
});

export default PersonalScreen;
