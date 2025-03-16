import React, { useState } from 'react'
import { useParams } from "react-router-dom"

function Sidebar()
{
    const { blogName } = useParams<{ blogName: string }>()

return (
    <>
    
    </>
)
}

export default Sidebar
