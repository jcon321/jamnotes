import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Permissions} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this._handlePermissions}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider store={store}>
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <AppNavigator/>
                    </View>
                </Provider>
            );
        }
    }

    // _loadResourcesAsync = async () => {
    //     return Promise.all([
    //         Asset.loadAsync([
    //             require('./assets/images/robot-dev.png'),
    //         ]),
    //         Font.loadAsync({
    //             // This is the font that we are using for our tab bar
    //             ...Icon.Ionicons.font,
    //             // We include SpaceMono because we use it in LibraryScreen.js. Feel free
    //             // to remove this if you are not using it in your app
    //             'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    //         }),
    //     ]);
    // };

    _handlePermissions = async () => {
        await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
