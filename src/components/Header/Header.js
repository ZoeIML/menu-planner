import React from 'react'
import { Text, View } from 'react-native'

// import styles from './styles'

// imported components
import CalendarBtn from '../CalendarBtn'
import WeekTitle from '../WeekTitle'
import DateTitle from '../DateTitle'
import WeekContainer from '../WeekContainer'
import BtnContainer from '../BtnContainer'

class Header extends React.Component {
    render() {
        return (
            <View>
                <WeekTitle />
                <DateTitle />
                <CalendarBtn />
                <WeekContainer />
                <BtnContainer />
            </View>
        )
    }
}

export default Header