import "./App.css";
import { useState } from "react";
import app_headerImage from "./Assets/app_headerImage.jpg";
import Post from "./components/Post";
import Carousel from "react-elastic-carousel";
const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "subrara76",
      caption: "wow it works",
      imageUrl:
        "https://cdn.kinandcarta.com/-/media-assets/images/kincarta/insights/2022/02/react-native/react_hero.png?as=0&iar=0&w=1200&rev=61e1dad3af7e465e9544cf8490237772&hash=0AD31383BCBA1DA1C88546327312BA33",
    },
    {
      username: "rio86",
      caption: "let's make some noise",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
    {
      username: "rio86",
      caption: "let's make some noise",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
    {
      username: "rio86",
      caption: "let's make some noise",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    },
  ]);

  return (
    <div className="app">
      {/* Header and Navigation start */}
      <div className="app_header">
        <img
          className="tab_off app_headerImage"
          src={app_headerImage}
          alt="logo"
        />
        <i className="desktop_off fa-brands fa-instagram fa-2x"></i>
        <div className="app_headerNav">
          <div className="app_navItem">
            <i className="fa-solid fa-house"></i>
            <h3 className="tab_off app_navTitle">Home</h3>
          </div>
          <div className="app_navItem">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className="tab_off app_navTitle">Search</p>
          </div>
          <div className="app_navItem">
            <i className="fa-regular fa-compass"></i>
            <p className="tab_off app_navTitle">Explore</p>
          </div>
          <div className="app_navItem">
            <i className="fa-solid fa-clapperboard"></i>
            <p className="tab_off app_navTitle">Reels</p>
          </div>
          <div className="app_navItem">
            <i className="fa-brands fa-facebook-messenger"></i>
            <p className="tab_off app_navTitle">Massages</p>
          </div>
          <div className="app_navItem">
            <i className="fa-regular fa-heart"></i>
            <p className="tab_off app_navTitle">Notifications</p>
          </div>
          <div className="app_navItem">
            <i className="fa-regular fa-square-plus "></i>
            <p className="tab_off app_navTitle">Create</p>
          </div>
          <div
            className="app_navItem"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              className="app_navAvatar"
              src="https://i.pinimg.com/originals/d9/c2/66/d9c266d772be275b3debdda807239dca.jpg"
              alt="profile_pic"
            />
            <p className="tab_off app_navTitle">Profile</p>
          </div>
          <div
            className="app_navItem"
            style={{ marginTop: "50px", marginBottom: "20px" }}
          >
            <i className="fa-solid fa-bars"></i>
            <p className="tab_off app_navTitle">More</p>
          </div>
        </div>
        <div className="app_headerLikes">
          <div className="app_headerSearchBar">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ paddingRight: "10px", paddingLeft: "5px" }}
            />
            <input className="app_headerInput" placeholder="Search..." />
          </div>
          <div className="app_headerLikesBtn">
            <i className="fa-regular fa-heart fa-lg"></i>
          </div>
        </div>
      </div>
      {/* Header and Navigation end */}

      {/* Posts and stories start */}
      <div className="post_container">
        <div className="post_Stories">
          <Carousel
            itemsToShow={5.5}
            itemsToScroll={3}
            pagination={false}
            style={{ backgroundColor: "#000000" }}
          >
            {posts.map((item, i) => (
              <div
                className="story_container"
                key={i}
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                }}
              >
                <p>{i}</p>
              </div>
            ))}
          </Carousel>
        </div>
        {posts.map((item, i) => (
          <Post
            key={i}
            username={item.username}
            caption={item.caption}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      {/* Posts and stories start */}
    </div>
  );
};

export default App;
