import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {
    

    const log = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignSelf: 'center',

        }}>
            <HeaderButton text={'Delivery'} 
            onPress={log}
            btnColor={'active'}
            textColor={'white'}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
             />
            <HeaderButton 
            text={'Pickup'} 
            btnColor={'white'}
            textColor={'black'}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
             />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity onPress={()=>props.setActiveTab(props.text)} style={{
        backgroundColor: props.activeTab==props.text? 'black': 'white',
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 20
    }} >
        <Text style={{
            color: props.activeTab==props.text? 'white': 'black', fontSize: 15,
            fontWeight: '900'
        }}>{props.text}</Text>
    </TouchableOpacity>
)