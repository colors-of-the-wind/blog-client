import Loadable from 'react-loadable'

const doc = document

const Loading = () => {
   return null
}

export default (url, title, Loadings = Loading) => {

    if (process.env.NODE_ENV === 'development') {
        return require(`../screen/${url}`).default
    }

    return Loadable({
        loader: () => {
            if (title) doc.title = title
            return import(`../screen/${url}`)
        },
        loading: Loadings
    })
}