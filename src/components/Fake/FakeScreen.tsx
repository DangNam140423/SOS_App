import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, Pressable, ImageBackground } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';

const FakeScreen = ({ navigation }: any) => {
    const arrNew = [
        {
            image: 'https://i1-vnexpress.vnecdn.net/2024/10/10/F231216NRF60-1632-1728535622.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=eeLjQt4cOL0KnCLv5GmKYg',
            name: 'Bất đồng nội bộ có thể cản trở Iserael trả đũa Iran'
        },
        {
            image: 'https://i1-giaitri.vnecdn.net/2024/10/10/Han-kang-5199-1728575559.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=dIscE-ZfjAvZmWJDZOrXZw',
            name: 'Người Hàn Quốc vỡ òa khi Han Kang đoạt giải Nobel Văn Học'
        },
        {
            image: 'https://i1-vnexpress.vnecdn.net/2024/11/21/To-ng-Bi-thu-tha-m-Malaysia-2-2123-2175-1732152488.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=p8h6GNfgWLdnzNOe3rmuWg',
            name: 'Tổng Bí thư Tô Lâm thăm chính thức Malaysia'
        },
        {
            image: 'https://i1-vnexpress.vnecdn.net/2024/11/21/Gc1vTNSWMAAEBy4-9803-1732154617.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=8Ve9Kgckr-mDBlRNThTS6g',
            name: 'UAE đúc thỏi vàng lớn nhất thế giới, nặng hơn 300 kg'
        },
        {
            image: 'https://i1-thethao.vnecdn.net/2024/11/21/trung-quoc-nhat-ban-vong-loai-9381-5251-1732130487.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=f1obTusN_le20Fe8Ek3GLg',
            name: 'Trung Quốc dùng chiêu trò đấu Nhật Bản ở vòng loại World Cup'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.itemHeader}>
                    <Feather name="search" size={25} color="white" style={{ backgroundColor: '#343434', padding: 10, borderRadius: 100 }} />
                </View>
                <View style={styles.itemHeader}>
                    <Text style={{ fontSize: 30, fontWeight: '600' }}>News</Text>
                </View>
                <View style={styles.itemHeader}>
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732088265/designuxui/llpy9ixjqjwhqaujevja.png', // Thay bằng đường dẫn avatar thực tế
                        }}
                        style={styles.avatar}
                    />
                </View>
            </View>
            <FlatList
                data={arrNew}
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 20, marginTop: 20 }}
                renderItem={({ item }) =>
                (
                    <View style={styles.itemNews}>
                        <Image source={{
                            uri: item.image,
                        }}
                            style={styles.imagenew} />
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Image source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DGZRzZ9V_9CXOufbOZQoD4cjwErl00TFlw&s',
                            }}
                                style={styles.logoNew} />
                            <Text style={{ color: '#828282' }}>
                                Tin tức 24h
                            </Text>
                        </View>
                        <Text style={{ fontSize: 17, fontWeight: '400' }}
                            numberOfLines={1}
                        >
                            {item.name}
                        </Text>
                    </View>
                )
                } />
            <Pressable
                style={{
                    height: 80,
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: 'white',
                    bottom: 30
                }}
                onPress={() => navigation.navigate('MainApp')}>
                <ImageBackground
                    source={{
                        uri: 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732165896/SOS_App/backadd_mu7wmu.png',
                    }}
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20
                    }}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 7,
                            zIndex: 1,
                            color: '#828282'
                        }}>Quảng cáo</Text>
                    <AntDesign name="close" size={20} color="black" style={{
                        position: 'absolute',
                        top: 0,
                        right: 7,
                        zIndex: 1,
                    }} />
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732166248/SOS_App/ButtonSOS_gg5bhv.png',
                        }}
                        style={{
                            height: 70,
                            width: 70
                        }}
                    />
                    <View style={{ alignItems: 'center', gap: 2 }}>
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>SAFE HAVEN</Text>
                        <View style={{ height: 2, width: 150, backgroundColor: '#EB3F1B' }}></View>
                        <Text style={{ fontStyle: 'italic' }}>App that adds value to life</Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1732165747/SOS_App/logo_r36ugs.png',
                        }}
                        style={{
                            height: 70,
                            width: 70
                        }}
                    />
                </ImageBackground>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: 'grey'
    },
    itemHeader: {
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemNews: {
        width: '100%',
        gap: 10,
        marginBottom: 30
    },
    imagenew: {
        width: '100%',
        height: 200,
        borderRadius: 12
    },
    logoNew: {
        height: 20,
        width: 20,
        borderRadius: 10
    }
});

export default FakeScreen;
