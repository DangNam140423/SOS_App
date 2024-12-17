import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface objectUser {
    id: number;
    name: string;
    phone: string;
}

interface Parameter {
    valueFriend: objectUser;
    isFriend: boolean;
    moveChat: () => void;
}

export default function BoxFriend({ valueFriend, isFriend, moveChat }: Parameter) {
    return (
        <View style={styles.viewBoxUser} >
            <View style={{
                flexDirection: 'row',
                gap: 5
            }}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://i.pinimg.com/originals/01/c6/6b/01c66ba35366731308ede577b2f0dd82.jpg'
                    }}
                />
                <View style={{
                    gap: 5
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '500'
                    }}>{valueFriend.name}</Text>
                    <Text style={{
                        fontSize: 15,
                        color: '#B2B0B0',
                        fontWeight: '400'
                    }}>
                        <Feather name="phone" size={15} color="#B2B0B0" /> {valueFriend.phone}
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        color: '#B2B0B0',
                        fontWeight: '400'
                    }}>
                        <Feather name="map-pin" size={15} color="#B2B0B0" /> Hoa Xuan - Da Nang
                    </Text>
                </View>
            </View>
            {isFriend &&
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{
                        marginTop: 10,
                        backgroundColor: '#DCD5D5',
                        width: 150,
                        height: 40,
                        borderRadius: 15,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Feather name="check" size={25} color="black" />
                        <Text style={{
                            fontSize: 15,
                            fontWeight: '500'
                        }}>Friend</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            moveChat();
                        }}
                        style={{
                            marginTop: 10,
                            backgroundColor: '#DCD5D5',
                            width: 50,
                            height: 40,
                            borderRadius: 15,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10
                        }}>
                        <Feather name="message-circle" size={24} color="black" />
                    </Pressable>
                </View>
            }
            <Pressable style={{
                // marginTop: 30,
                position: 'absolute',
                bottom: 15,
                left: 30,
                width: '100%',
                backgroundColor: '#343434',
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '400'
                }}>{isFriend ? 'Unfiend' : 'Add Friend'}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBoxUser: {
        width: width,
        height: 240,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 150 / 2,
        marginTop: -150 / 2
    },
    info_User: {
        backgroundColor: 'red'
    }
});