import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [, setData] = useState(null)
    useEffect(() => {
        axios.get(url).then((response) => {

        })
    })
}

export default useFetch