import {Dimensions, StyleSheet} from 'react-native'

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default StyleSheet.create({
    max: {
        flex: 1,
    },
    local: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    buttonHolder: {
        height: 100,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        width: dimensions.width,
        height: dimensions.height - 100,
        justifyContent: "flex-end",
        flexDirection: "column",
        alignItems: "center",
    },
    localView: {
        flex: 1,
        maxHeight: 150,
        width: 150,
        borderRadius: 75,
        overflow: 'hidden',
        borderColor: '#000000',
        borderWidth: 2,
        marginBottom: 100,
    },
    remoteContainer: {
        maxWidth: 150,
        height: 150,
        position: 'absolute',
        top: 245,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#000000',
    },
    remote: {
        width: 150,
        height: 150,
        marginHorizontal: 2.5,
        borderRadius: 75,
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
})
