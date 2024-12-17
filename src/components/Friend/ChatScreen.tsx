import { Dimensions, FlatList, Image, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from "react";


const { width, height } = Dimensions.get('window');

export default function ChatScreen({ navigation }: any) {
    const [dataChat, setDataChat] = useState([
        {
            type: 0,
            message: 'Are you Ok',
            time: '08:30 am'
        },
        {
            type: 1,
            message: "I'm Okey",
            time: '08:31 am'
        }
    ]);
    const [message, setMessage] = useState('');


    const changeMess = (value: string) => {
        setMessage(value);
    }

    const sendMess = () => {
        const newMessage = {
            type: 1,
            message,
            time: '08:32 am'
        }
        setDataChat((prevSelected: any) =>
            [...prevSelected, newMessage]
        );
        setMessage('');
    }
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={true}
            style={styles.container}>
            <View style={styles.body}>
                <View style={styles.headerChat}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5
                    }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Feather name="chevron-left" size={30} color="black" />
                        </Pressable>
                        <Text style={{
                            fontSize: 25
                        }}>Kageyama</Text>
                    </View>
                </View>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        width: '100%',
                    }}
                    behavior={'padding'}
                >
                    <View style={styles.viewChat}>
                        <FlatList
                            data={dataChat}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        flexDirection: !item.type ? 'row' : 'row-reverse',
                                        width: '100%',
                                        gap: 10,
                                        marginBottom: 40
                                    }}
                                    key={index}>
                                    <Image source={{
                                        uri: !item.type
                                            ?
                                            'https://i.pinimg.com/originals/90/d9/06/90d906e6d1dc7b21aa5ffe011e57c3ff.jpg'
                                            :
                                            'https://i.pinimg.com/originals/5e/ad/08/5ead0820c0bbc083abfb7ea99a55a8ae.jpg'

                                    }} style={{
                                        height: 50,
                                        width: 50,
                                        borderRadius: 25,
                                        borderWidth: 1
                                    }} />
                                    <Text style={{
                                        backgroundColor: !item.type ? '#A9ADB1' : '#F37E44',
                                        borderRadius: 12,
                                        minWidth: 150,
                                        maxWidth: 250,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                        fontSize: 15,
                                    }}>{item.message}</Text>
                                    <Text style={{ color: 'grey' }}>{item.time}</Text>
                                </View>
                            )}
                        />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: 10,
                        }}>
                            <TextInput
                                onChangeText={(value) => changeMess(value)}
                                value={message}
                                style={{
                                    backgroundColor: '#DDE0E3',
                                    borderRadius: 12,
                                    height: 50,
                                    width: '100%',
                                    paddingHorizontal: 20,
                                    color: 'black',
                                    fontSize: 15
                                }}
                                placeholder="Enter message" />
                            <Pressable
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                }}
                                onPress={sendMess}>
                                <Ionicons name="send" size={24} color={'#F37E44'} />
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        marginHorizontal: 20,
        flex: 1
    },
    headerChat: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    viewChat: {
        flex: 1,
        paddingTop: 40
    }
});