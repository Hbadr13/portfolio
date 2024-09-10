import React from 'react'
import { workApi } from '..'
import { useParams } from 'next/navigation'
const Index = () => {
    const route = useParams()
    if (!route)
        return <div className="h-52 w-full"></div>
    console.log(route?.jobId)
    return (
        <div>
            {workApi[0].desrciption}
        </div>
    )
}

export default Index