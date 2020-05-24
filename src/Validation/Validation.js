import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }


    return(
        <div>
            <p>{validationMessage}</p>
        
        {/*{
            //ternary expression, no the better approach::
            props.inputLength > 5 ?
            <p>Text long enough!</p> : 
                <p>Text too short!</p>
        }*/}
        </div>
    );
};

export default validation;