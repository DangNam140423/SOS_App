import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'; // Nhớ định nghĩa RootState
import { setRoute } from '../../store/slices/appSlice';

const CustomTabBar = (props: BottomTabBarProps) => {
    const { state, descriptors, navigation } = props;
    const routeRedux = useSelector((state: RootState) => state.app.route);
    const dispatch = useDispatch();
    const [activeItem, setActiveItem] = useState<string>(routeRedux);

    useEffect(() => {
        setActiveItem(routeRedux);
    }, [routeRedux]);


    return (
        <View style={styles.menu}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const nameIcon =
                    label === 'Home'
                        ? 'home'
                        : (label === 'Friend')
                            ? 'users'
                            : (label === 'Protect')
                                ? 'shield'
                                : 'user';

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                        dispatch(setRoute(route.name));
                        setActiveItem(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const getIconStyle = (item: string) => {
                    return item === activeItem ? styles.iconActive : styles.iconMenu;

                };

                const getItemStyle = (item: string) => {
                    return item === activeItem ? styles.itemMenuActive : styles.itemMenu;
                };

                const getTextStyle = (item: string) => {
                    return item === activeItem ? styles.textMenuActive : styles.textMenu;
                }

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onLongPress={onLongPress}
                        onPress={() => { onPress() }}
                        style={getItemStyle(nameIcon)}
                    >
                        {/* {nameIcon === activeItem
                            ?
                            <ImageBackground style={getItemStyle(nameIcon)} source={image_active_item} resizeMode="cover">
                                <Feather name={nameIcon} style={getIconStyle(nameIcon)} />
                            </ImageBackground>
                            :
                            <Feather name={nameIcon} style={getIconStyle(nameIcon)} />
                        } */}
                        <Feather name={nameIcon} style={getIconStyle(route.name)} />
                        <Text style={getTextStyle(route.name)}>{label.toString()}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5F4F4',
        // position: 'absolute',
        // zIndex: 2,
        // bottom: 0
    },
    itemMenu: {
        // width: 80,
        // height: 160 / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemMenuActive: {
        // width: 80,
        // height: 160 / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconMenu: {
        fontSize: 30,
        color: '#B1B1B1'
    },
    iconActive: {
        fontSize: 30,
        color: 'black',
    },
    textMenu: {
        fontSize: 10,
        opacity: 0,
        fontWeight: 'bold',
        color: '#B1B1B1'
    },
    textMenuActive: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default CustomTabBar;
