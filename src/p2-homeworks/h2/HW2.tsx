import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'High'
export type AffairType = {_id: number, name: string, priority:string}
export type FilterType = 'All' | 'High' | 'Middle' | 'Low'
export type AffairsType = Array<AffairType>
// constants
const defaultAffairs: AffairsType = [ // need to fix any
    {_id: 0, name: 'React', priority: 'High'},
    {_id: 1, name: 'anime', priority: 'Low'},
    {_id: 2, name: 'games', priority: 'Low'},
    {_id: 3, name: 'work', priority: 'High'},
    {_id: 4, name: 'html & css', priority: 'Middle'},
    {_id: 5, name: 'porn', priority: 'Low'},
]

// pure helper functions
export const filterAffairs = (affairs:AffairsType, filter: FilterType): AffairsType => {
    if (filter === 'All') return affairs
    else return affairs.filter((item: AffairType)=>{
        return item.priority === filter
    })
}

export const deleteAffair = (affairs:AffairsType , id: number): AffairsType => {
    return affairs.filter((item: AffairType) => id !== item._id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('All')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (affairs: AffairsType, _id:number) : void => setAffairs(deleteAffair(affairs, _id))


    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
