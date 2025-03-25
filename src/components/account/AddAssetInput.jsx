import React from 'react';

export const AddAssetInput = ( { testInput } ) => {

    return (
        <>
            <input id={testInput.id} type={testInput.inputType} name={testInput.name} placeholder={testInput.placeholder}></input>
        </>
    )
}