import React from 'react'
import { Text, View } from 'react-native'

// import styles from './styles'

// imported components
import KeepBtn from '../KeepBtn'
import NewBtn from '../NewBtn'

class BtnContainer extends React.Component {
    render() {
        return (
            <View>
                <KeepBtn />
                <NewBtn />
            </View>
        )
    }
}

export default BtnContainer