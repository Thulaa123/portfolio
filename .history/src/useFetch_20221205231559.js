import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [load, setData] = useState(null)
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(url).then((response) => {

        })
    })
}

export default useFetch