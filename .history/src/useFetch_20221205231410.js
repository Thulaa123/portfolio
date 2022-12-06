import React, { useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    
    useEffect(() => {
        axios.get(url).then((response) => {

        })
    })
}

export default useFetch