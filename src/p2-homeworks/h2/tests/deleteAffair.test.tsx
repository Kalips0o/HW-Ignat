import React from 'react'
import {AffairType, deleteAffair} from '../HW2'
import {v1} from "uuid";

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'React', priority: 'High'},
        {_id: 1, name: 'anime', priority: 'Low'},
        {_id: 2, name: 'games', priority: 'Low'},
        {_id: 3, name: 'work', priority: 'High'},
        {_id: 4, name: 'html & css', priority: 'Middle'},
        {_id: 5, name: 'porn', priority: 'Low'},
    ]
})

test('delete 0', () => {
    const newState = deleteAffair(initialState, 0)
    expect(newState.length).toBe(6)
})
test('delete 1', () => {
    const newState = deleteAffair(initialState, 1)
    expect(newState.length).toBe(5)
})
test('delete 3', () => {
    const newState = deleteAffair(initialState, 3)
    expect(newState.length).toBe(5)
})
test('delete 6', () => {
    const newState = deleteAffair(initialState, 6)
    expect(newState.length).toBe(5)
})
test('delete 7', () => {
    const newState = deleteAffair(initialState, 7)
    expect(newState.length).toBe(6)
})
