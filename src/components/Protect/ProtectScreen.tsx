import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Animated, View, StyleSheet, Button, Dimensions, Alert, FlatList, Text } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

const { width, height } = Dimensions.get('window');

interface ObjectVideo {
    name: string
    idVideo: string
}

export default function UrgentScreen() {
    // Khởi tạo giá trị Animated
    const [playing, setPlaying] = useState(false);
    const [arrVideo, setArVideo] = useState<ObjectVideo[]>([]);

    useEffect(() => {
        setArVideo(
            [
                {
                    name: 'Bố mẹ độc hại, không thể tha thứ.',
                    idVideo: 'S2dPZ0V0pCs'
                },
                {
                    name: 'Phổ biến luật về phòng, chống bạo lực gia đình',
                    idVideo: 'rmz6zCz-2WE'
                },
                {
                    name: 'Bảo vệ bản thân khỏi bảo lực gia đình',
                    idVideo: 'pghgLtNteyg'
                }
            ]
        );
    }, []);

    const onStateChange = useCallback((state: any) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FlatList
                    data={arrVideo}
                    keyExtractor={(item, index) => index.toString()}
                    // keyExtractor={(item) => item.id.toString()} 
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                    renderItem={({ item }) =>
                        <View style={styles.item_video}>
                            <View style={styles.video}>
                                <YoutubePlayer
                                    width={width}
                                    height={230}
                                    play={playing}
                                    videoId={item.idVideo}
                                    onChangeState={onStateChange}
                                />
                            </View>
                            <View style={styles.view_text_item}>
                                <Text style={styles.text_item}>{item.name}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginHorizontal: 10,
        paddingVertical: 10,
        marginTop: 120,
    },
    item_video: {
        width: '100%',
        marginBottom: 20,
    },
    video: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: '100%',
        height: 230,
        backgroundColor: '#343434',
        overflow: 'hidden'
    },
    view_text_item: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#343434',
        padding: 10,
    },
    text_item: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        width: '100%'
    }
});
