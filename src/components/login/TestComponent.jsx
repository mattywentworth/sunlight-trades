import React from 'react';

export const TestComponent = ( { inputLength, inputName } ) => {

    let testText;
    if (!inputLength) {
        testText = '';
    } else if (inputLength >= 1 && inputLength < 5) {
        testText = `❌ ${inputName} must be at contain at least 5 characters`;
    } else {
        testText = `✅ You\'ve entered a valid ${inputName}`;    
    }
    //inputLength < 5 ? testText = `❌ ${inputName} must be at contain at least 5 characters` : testText = '✅ You\'ve entered enough characters';

    return (
        <div>
            <p>{testText}</p>
        </div>
    )
}