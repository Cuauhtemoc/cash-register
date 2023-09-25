import React from "react";

interface Props {
    total: number
}

export default function Total({total} : Props){
    return <span className='text-xl mt-6 text-center'>Total cash: ${total}</span>
}