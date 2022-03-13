import React from 'react'
import Affair from './Affair'
import {AffairsType, AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairsType
    setFilter: (value: FilterType) => void
    deleteAffairCallback: Function
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((item: AffairType) => (
        <Affair
            key={item._id}
            affairs={props.data}
            affair={item}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('All')}
    const setHigh = () => {props.setFilter('High')}
    const setMiddle = () => {props.setFilter('Middle')}
    const setLow = () => {props.setFilter('Low')}

    return (
        <div >

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
