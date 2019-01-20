import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class LibraryScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Not this one</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        backgroundColor: '#fff',
    },
});
