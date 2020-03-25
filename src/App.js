import React from 'react';
import Post from './components/Post'
import posts from './data/posts.json'
import './App.css';


function App() {

  return (
    <div className="App">
      <h1>Mi blog</h1>
      <p>Hay {posts.length} posts</p>

      {posts.map((post, index) => <Post data={post} key={index} />)}

    </div>
  );
}

export default App;



//   posts.map(function(post){
//   return  <Post data={post} />
//         })