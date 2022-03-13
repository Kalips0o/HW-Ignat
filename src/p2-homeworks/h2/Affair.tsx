import React from 'react'
import style from "./Affairs.module.css"
import {AffairsType, AffairType} from "./HW2";

type AffairPropsType = {
    key: number
    affair: AffairType
    affairs: AffairsType
    deleteAffairCallback: Function
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affairs, props.affair._id)

    return (
<div className={style.li}>
        <div key={props.key}>
            <li>
                <span>{props.affair.name}</span>
                <button onClick={deleteCallback}>X</button>
            </li>
        </div>
</div>
    )
}

export default Affair
