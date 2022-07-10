import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostServise";
import Loader from "../components/UI/loader/Loader";
import MyButton from "../components/UI/button/MyButton";

const PostIdPage = (props) => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    const goBack = () => navigate(-1)


    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {
                isComLoading
                ? <Loader />
                : <>
                    <div>
                        {
                            comments.map(comm =>
                                <div key={comm.id} style={{marginTop: 15}}>
                                    <h5>{comm.email}</h5>
                                    <div>{comm.body}</div>
                                </div>
                            )
                        }
                </div>
                <MyButton onClick={goBack}>Назад</MyButton>
                    </>
            }
        </div>
    );
};

export default PostIdPage;