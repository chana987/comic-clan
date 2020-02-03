import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({ type = "cubes", color = "#F15454" }) => {
    return (
        <div style={{margin: '40vh auto', width: '50px'}}>
            <ReactLoading type={type} color={color} height={10} width={50} />
        </div>
    )
}

export default Loading