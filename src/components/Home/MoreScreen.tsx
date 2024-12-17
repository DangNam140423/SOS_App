import { Alert, Dimensions, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import RecordScreen from "./RecordScreen";
import CameraScreen from "./CameraScreen";

interface DetailTicketProps {
    closeModal: () => void;
    handleLockApp: () => void
}

const { width, height } = Dimensions.get('window');

const background_More = 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732079949/SOS_App/backmore_liw3ih.png';
const background_camera = 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732079859/SOS_App/camera_sp2nxh.png';
const background_record = 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732079859/SOS_App/recording_sqpx0r.png';


export default function MoreScreen({ closeModal, handleLockApp }: DetailTicketProps) {
    const [modalVisibleRecord, setModalVisibleRecord] = useState(false);
    const [modalVisibleCamera, setModalVisibleCamera] = useState(false);

    const closeModalRecord = () => {
        setModalVisibleRecord(false);
    }

    const closeModalCamera = () => {
        setModalVisibleCamera(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ImageBackground resizeMode='stretch' source={{ uri: background_More }} style={{
                    height: 350,
                    width: '100%',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    shadowColor: 'black'
                }}>
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
                                More
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
                </ImageBackground>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisibleRecord}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisibleRecord(!modalVisibleRecord);
                    }}>
                    <RecordScreen closeModal={closeModalRecord} />
                </Modal>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisibleCamera}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisibleRecord(!modalVisibleRecord);
                    }}>
                    <CameraScreen closeModal={closeModalCamera} />
                </Modal>

                <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Pressable
                        onPress={() => setModalVisibleCamera(true)}>
                        <ImageBackground resizeMode="stretch" source={{ uri: background_camera }} style={styles.item_image} />
                    </Pressable>

                    <Pressable
                        onPress={() => setModalVisibleRecord(true)}>
                        <ImageBackground resizeMode="stretch" source={{ uri: background_record }} style={styles.item_image} />
                    </Pressable>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        height: height - 80,
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
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
    item_image: {
        height: 170,
        width: 350
    }
})