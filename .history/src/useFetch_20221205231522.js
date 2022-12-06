import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, ] = useState(null)
    useEffect(() => {
        axios.get(url).then((response) => {

        })
    })
}

export default useFetch