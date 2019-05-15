import React from 'react'
import Loadable from 'react-loadable'

const doc = document

export const LoadBlog = (url, title) => {
    if (process.env.NODE_ENV === 'development') {
        return require(`../screen/Blog/${url}`).default
    }

    return Loadable({
        loader: () => {
            if (title) doc.title = title
            return import(`../screen/Blog/${url}`)
        },
        loading:  () => null
    })
}

export const LoadAdmin = (url, title) => {
    if (process.env.NODE_ENV === 'development') {
        return require(`../screen/Admin/${url}`).default
    }

    return Loadable({
        loader: () => {
            if (title) doc.title = title
            return import(`../screen/Admin/${url}`)
        },
        loading:  () => null
    })
}

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