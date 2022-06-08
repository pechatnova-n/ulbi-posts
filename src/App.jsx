import React, {useState, useRef} from 'react';
import PostList from './components/PostList.jsx';
import './styles/App.css';
import PostForm from "./components/PostForm";


function App() {
    /*57min*/
    const [posts, setPosts] = useState([
        {id: "1", title: "JavaScript", body: "Js - язык программирования"},
        {id: "2", title: "JavaScript 2", body: "Js - язык программирования"},
        {id: "3", title: "JavaScript 3", body: "Js - язык программирования"},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


  return (
      <div className="App">
          <PostForm create={createPost} />
          <PostList remove={removePost} posts={posts} title="Список постов 1" />
      </div>
  );
}

export default App;
