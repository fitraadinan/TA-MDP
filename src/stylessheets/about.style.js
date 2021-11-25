import { Background } from '@react-navigation/elements';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        height: 180,
        width: 320,
        borderRadius:20,
        marginBottom: 10,
    },
    headerBodyTXT: {
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 27,
        marginVertical: 10,
    },
    headerHello: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});