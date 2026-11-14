import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/iammzeeshan')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })

    }, [])

    return (
        <div className="h-22 w-auto flex items-center justify-center text-4xl font-bold bg-gray-700 text-white">Github Followers: {data.followers}</div>
    )
}

export default Github