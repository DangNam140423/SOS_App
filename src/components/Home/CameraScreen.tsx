import axios from 'axios';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Alert, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


interface DetailTicketProps {
    closeModal: () => void;
}

export default function CameraScreen({ closeModal }: DetailTicketProps) {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [isCamera, setIsCamera] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const requestPermissionCam = async () => {
        const { status } = await requestPermission();
        if (status !== 'granted') {
            alert('Quyền truy cập camera bị từ chối, vào cài đặt để cấp quyền!');
        }
    };

    useEffect(() => {
        requestPermissionCam();
    }, []);


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

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermissionCam} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            <CameraView
                style={styles.camera}
                facing={facing}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr", 'aztec', 'ean13', 'ean8', 'qr', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93', 'itf14', 'codabar', 'code128', 'upc_a'],
                }}
            >
                <View style={styles.headerContainer}>
                    <View style={styles.item_header} >
                        <Pressable onPress={() => closeModal()}>
                            <Feather name="chevron-left" size={30} color="white" />
                        </Pressable>
                        <Text style={[
                            {
                                fontWeight: '400',
                                fontSize: 24,
                                color: 'white'
                            }
                        ]}>
                            Camera
                        </Text>
                    </View>
                </View>
                <View style={{
                    height: 170,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <Pressable style={styles.item_bottom} onPress={toggleCameraFacing}>
                        <Feather name="refresh-cw" size={30} color="white" />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            if (isCamera) {
                                setIsRunning(false);
                                setSeconds(0);
                            } else {
                                setIsRunning(true);
                            }
                            setIsCamera(!isCamera)
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
                            borderRadius: isCamera ? 10 : 55 / 2,
                            backgroundColor: '#EC1111'
                        }} />
                    </Pressable>
                    <View style={styles.item_bottom}>
                        <Text style={{ fontSize: 15, fontWeight: '400', backgroundColor: 'white', padding: 2 }}>{formatTime(seconds)}</Text>
                    </View>
                </View>
            </CameraView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
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
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    item_bottom: {
        height: 100,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
