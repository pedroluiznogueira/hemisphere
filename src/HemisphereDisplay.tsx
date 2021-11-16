import React from 'react';

const HemisphereDisplay = ({latitude}: any) => {

    const hemisphere = latitude > 0 ? 'nothern' : 'southern'

    return(
        <div>
            {hemisphere}
        </div>
    )
}

export default HemisphereDisplay;