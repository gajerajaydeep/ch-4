import React from 'react'
import { data } from './Parent'

export default function B() {
    return (
        <>
            <data.Consumer>
                {
                    (name) => {
                        return (
                            <h1>my name is {name}</h1>
                        )
                    }
                }
            </data.Consumer >
        </>
    )
}
