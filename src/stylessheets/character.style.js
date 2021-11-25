import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        height: 80,
        width: 80,
        borderRadius: 60,
        marginVertical: 10,
        marginLeft:10
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    headerTXT: {
        marginLeft: 20,
        fontSize: 20,
        width: 200,
        marginVertical: 10
    },
    headerPanah: {
        height: 30,
        width: 30,
        marginVertical: 30
    }
});