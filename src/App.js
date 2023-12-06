import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [links, setLinks] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setLinks(data.links);
    setBlogPosts(data.blogPosts);
  }, []);

  return (
    <div className="App container my-5">
      <div className="text-left">
        <h1>Your Name</h1>
        <img src="your-image.jpg" className="rounded-circle" alt="Yaakov" style={{ width: '150px', height: '150px' }} />
      </div>

      <div className="row my-4">
        <div className="col-md-6 mx-auto">
          <ul className="list-unstyled">
            {links.map(link => (
              <li key={link.id} className="mb-2">
                <i className={`bi bi-${link.type.toLowerCase()}`}></i> <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recent-posts">
        <h3>Recent Blog Posts</h3>
        {blogPosts.map(post => (
          <div key={post.id} className="post mb-3 text-left">
            <h5><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a></h5>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
