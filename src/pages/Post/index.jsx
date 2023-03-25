import React , {useMemo} from 'react'
import { useParams, useLocation} from 'react-router-dom'

const Post = () => {

    const params = useParams()
    const {search} = useLocation()

    const queryParamns = useMemo(() => {
        return new URLSearchParams(search)
    }, [])

    console.log(queryParamns.get('meuQueryParam'))

    return <h1>Post</h1>
}

export default Post;