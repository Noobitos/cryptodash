import React from 'react'
import {AppContext} from '../Components/AppProvider';

export default function(props) {
    return <AppContext.Consumer>
        {({coinList}) => {
            if(!coinList) {
                return <div>Loading Coins..</div>
            }
            return <div>{props.children}</div>
        }}
    </AppContext.Consumer>
}