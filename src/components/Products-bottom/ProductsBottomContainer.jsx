import React, { Component } from 'react'
import SportAcceories from './SportAcceories'
import OutdoorSports from './OutdoorSports'
import Biribol from './Biribol'

export default class ProductsBottomContainer extends Component {
    render() {
        return (
            <div>
                <SportAcceories/>
                <OutdoorSports/>
                <Biribol/>
            </div>
        )
    }
}
