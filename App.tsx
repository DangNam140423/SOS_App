import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ProtectScreen from './src/components/Protect/ProtectScreen';
import UserScreen from './src/components/User/UserScreen';
import CustomTabBar from './src/components/CustomTabBar/CustomTabBar';
import MyHeader from './src/components/CustomTabBar/CustomHeader';
import FakeScreen from './src/components/Fake/FakeScreen';
import { RootStackParamList } from './src/navigation/routes';
import FriendScreen from './src/components/Friend/FriendScreen';
import { Provider } from 'react-redux';
import store, { RootState } from './src/store/store';
import { useSelector } from 'react-redux';
import SOSMapScreen from './src/components/Home/SOSMapScreen';
import HomeScreen from './src/components/Home/HomeScreen';
SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();  // Thêm Stack Navigator

const background_App = 'https://res.cloudinary.com/dtjdfh2ly/image/upload/v1725689356/SOS_App/background_App_ul2bty.jpg';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5F4F4',
  },
};



const MainApp = () => {
  const routeRedux = useSelector((state: RootState) => state.app.route as keyof RootStackParamList);

  return (
    <ImageBackground resizeMode='cover' source={{ uri: background_App }} style={{ flex: 1 }}>
      <View style={[{ backgroundColor: 'rgba(0, 0,0, 0)' }, StyleSheet.absoluteFill]} />
      <Tab.Navigator
        initialRouteName={routeRedux}
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: true,
          header: (props) => (
            <MyHeader {...props} />
          ),
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Home'
          }}
        />
        {/* <Tab.Screen
          name="map"
          component={SOSMapScreen}
          options={{
            headerShown: true,
            title: 'Map'
          }}
        /> */}
        <Tab.Screen
          name="friend"
          component={FriendScreen}
          options={{
            headerShown: false,
            title: 'Friend'
          }}
        />
        <Tab.Screen
          name="protect"
          component={ProtectScreen}
          options={{ title: 'Protect' }}
        />
        <Tab.Screen
          name="user"
          component={UserScreen}
          options={{
            title: 'User',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </ImageBackground>
  );
};

const App = () => {
  const [loaded, error] = useFonts({
    'OpenSans_Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="FakeScreen">
          <Stack.Screen
            name="FakeScreen"
            component={FakeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
