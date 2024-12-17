import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Alert, Pressable, Text, TextInput, FlatList, Image } from 'react-native';
import { useAudioRecorder, RecordingPresets, AudioModule } from 'expo-audio';
import { Audio } from 'expo-av';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


interface DetailTicketProps {
    closeModal: () => void;
}

interface Recording {
    name: string,
    time: string
}

const landscape = 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732085560/SOS_App/Recording_landscape_ocxm3u.png';

export default function RecordScreen({ closeModal }: DetailTicketProps) {
    const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
    const [isRecording, setIsRecording] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [arrRecording, setArrRecording] = useState<Recording[]>([{
        name: 'Recording 1',
        time: '03:00'
    }]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60); // Lấy số phút
        const secs = totalSeconds % 60; // Lấy số giây còn lại
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    useEffect(() => {
        let timer: any;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer); // Cleanup when component unmounts
    }, [isRunning]);


    // Hàm bắt đầu ghi âm
    const record = () => {
        audioRecorder.record();
        setIsRecording(true);
        setIsRunning(true);
    };

    // Hàm dừng ghi âm
    const stopRecording = async () => {
        await audioRecorder.stop();
        setIsRecording(false);
        setIsRunning(false);
        setSeconds(0);
    };

    // Yêu cầu quyền sử dụng microphone
    useEffect(() => {
        (async () => {
            const status = await AudioModule.requestRecordingPermissionsAsync();
            if (!status.granted) {
                Alert.alert('Permission to access microphone was denied');
            }
        })();
    }, []);

    const SaveRecoding = () => {
        const newRecording: Recording = {
            name: 'Recording ' + (arrRecording.length + 1),
            time: formatTime(seconds)
        }
        setArrRecording((prevSelected: any) =>
            prevSelected.includes(newRecording)
                ? prevSelected.filter((c: any) => c !== newRecording)
                : [...prevSelected, newRecording]
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            {/* <Button
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={isRecording ? stopRecording : record}
            /> */}
            <View style={styles.body}>
                <View style={styles.headerContainer}>
                    <View style={styles.item_header} >
                        <Pressable onPress={() => closeModal()}>
                            <Feather name="chevron-left" size={30} color="black" />
                        </Pressable>
                        <Text style={[
                            {
                                fontWeight: '400',
                                fontSize: 24,
                            }
                        ]}>
                            Record
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>All Recordings</Text>

                    <View style={{
                        marginVertical: 20,
                        justifyContent: 'center'
                    }}>
                        <AntDesign name="search1" size={25} color="black" style={{
                            position: 'absolute',
                            zIndex: 1,
                            left: 10
                        }} />
                        <TextInput style={{
                            backgroundColor: '#D9D9D9',
                            height: 45,
                            borderRadius: 10,
                            paddingHorizontal: 40,
                            fontSize: 17
                        }}
                            placeholder='Search...'
                            placeholderTextColor={'black'} />
                        <Feather name="mic" size={24} color="black"
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                right: 10
                            }} />
                    </View>

                    <FlatList
                        data={arrRecording}
                        style={{
                            height: 440,
                        }}
                        renderItem={({ item }) =>
                        (
                            <View style={styles.itemRecording}>
                                <Text style={{ fontSize: 17, fontWeight: '400' }}>{item.name}</Text>
                                <Text>{item.time}</Text>

                                <View style={{
                                    height: 2,
                                    width: '100%',
                                    backgroundColor: 'black',
                                    justifyContent: 'center',
                                    marginTop: 15,
                                    marginBottom: 5
                                }}>
                                    <Octicons name="dot-fill" size={20} color="black" style={{ position: 'absolute' }} />
                                </View>

                                <View style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row'
                                }}>
                                    <Text>0:00</Text>
                                    <Text>-{item.time}</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: 20,
                                    marginTop: 10,
                                }}>
                                    <Feather name="rotate-ccw" size={24} color="black" />
                                    <Feather name="play" size={24} color="black" />
                                    <Feather name="rotate-cw" size={24} color="black" />
                                </View>
                                <Feather name="more-horizontal" size={20} color="blue" style={{ position: 'absolute', top: 10, right: 0 }} />
                                <Feather name="trash-2" size={20} color="red" style={{ position: 'absolute', bottom: 10, right: 0 }} />
                            </View>
                        )}
                    />
                </View>

                <View style={styles.footerContainer}>
                    {isRecording &&
                        <>
                            <Text style={{ fontSize: 17, fontWeight: '500', marginTop: 20, marginBottom: 10 }}>Recording {arrRecording.length + 1}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', marginBottom: 20 }}>{formatTime(seconds)}</Text>
                            <Image source={{ uri: landscape }} style={{ height: 55, width: 260 }} />
                        </>
                    }
                    <View style={{
                        height: 170,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Pressable
                            onPress={() => {
                                if (isRecording) {
                                    SaveRecoding();
                                    setIsRunning(false);
                                    setSeconds(0);
                                } else {
                                    setIsRunning(true);
                                }
                                setIsRecording(!isRecording)
                            }}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50,
                                borderWidth: 10,
                                borderColor: 'white',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <View style={{
                                height: 55,
                                width: 55,
                                borderRadius: isRecording ? 10 : 55 / 2,
                                backgroundColor: '#EC1111'
                            }} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        height: 100,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    item_header: {
        width: 'auto',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconHeader: {
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyContainer: {
        padding: 20
    },
    itemRecording: {
        height: 'auto',
        width: '100%',
        marginTop: 20,
        borderWidth: 1,
        borderTopColor: 'black',
        borderColor: 'transparent',
        paddingVertical: 10
    },
    footerContainer: {
        width: '100%',
        minHeight: 170,
        backgroundColor: '#D1D1D1',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
