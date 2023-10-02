import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 5,
    },
    navButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    botNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // padding: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    quoteCard: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    authorText: {
        marginTop: 10,
        fontSize: 18,
        fontStyle: 'italic',
    },
  // ... add other styles as needed
});
