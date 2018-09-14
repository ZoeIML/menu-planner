import React from 'react'
import { Text, View } from 'react-native'

// import styles from './styles'

// imported components
import CalendarBtn from '../CalendarBtn'

class Header extends React.Component {
    render() {
        return (
            <View>
                <Text>This is a header</Text>
                <CalendarBtn />
            </View>
        )
    }
}

export default Header