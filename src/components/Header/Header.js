import React from 'react'
import { Text, View } from 'react-native'

// import styles from './styles'

// imported components
import CalendarBtn from '../CalendarBtn'
import WeekTitle from '../WeekTitle'
import DateTitle from '../DateTitle'
import WeekContainer from '../WeekContainer'

class Header extends React.Component {
    render() {
        return (
            <View>
                <WeekTitle />
                <DateTitle />
                <CalendarBtn />
                <WeekContainer />
            </View>
        )
    }
}

export default Header