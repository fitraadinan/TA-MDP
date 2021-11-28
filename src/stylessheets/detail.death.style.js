import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerBody: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerName:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    headerImage: {
        height: 200,
        width: 200,
        borderRadius: 5,
        alignItems: 'center',
        margin: 30,
    },
    headerDesc: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    }
});
