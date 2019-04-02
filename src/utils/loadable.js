import React from 'react'
import Loadable from 'react-loadable'

const doc = document

export default (url, title) => {

    if (process.env.NODE_ENV === 'development') {
        return require(`../screen/${url}`).default
    }

    return Loadable({
        loader: () => {
            if (title) doc.title = title
            return import(`../screen/${url}`)
        },
        loading:  () => null
    })
}