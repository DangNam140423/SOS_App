import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    home: { background_App: string } | undefined;
    user: { background_App: string } | undefined;
    protect: { background_App: string } | undefined;
    friend: { background_App: string } | undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
