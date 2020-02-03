import React from 'react'
import ReactLoading from 'react-loading'

const Loading = ({ type="cubes", color="#F15454" }) => {
    return (
        <ReactLoading type={type} color={color} height={10} width={50} />
    )
}

export default Loading