import React from "react";
import './Home.css'; // Import custom CSS

function Home() {
  return (
    <div className="home-container">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.fJDwdI8sPX6WHpWic4kTtgHaEo&pid=Api&P=0&h=180"
        className="home-image"
        alt="BlogApp Banner"
      />
      <h2 className="home-text">
        BlogApp is a dynamic and versatile platform designed to empower users to create, share, and discover engaging content seamlessly. With an intuitive interface, BlogApp allows bloggers of all levels to craft visually appealing posts enriched with multimedia elements such as images, videos, and links. The platform supports a diverse range of topics, encouraging users to explore their interests and connect with like-minded individuals. Robust social features, including commenting, sharing, and following, foster a vibrant community and facilitate meaningful interactions. Additionally, advanced customization options and analytics tools enable users to personalize their blogs and track their performance, making BlogApp an ideal solution for both casual bloggers and professional content creators seeking to expand their reach and influence.
      </h2>
    </div>
  );
}

export default Home;
