import "./App.js";
import img from "./user.png";

function Tweets() {
  let users = [
    {
      userName: "Amirah",
      img: { img },
      tweets: ["Hello Everyone"],
    },
    {
      userName: "Ali",
      img: { img },
      tweets: ["hi Everyone"],
    },
    {
      userName: "Sara",
      img: { img },
      tweets: ["Hello", "Hi"],
    },
  ];
  return (
    <div>
      {users.map((item) => {
        return (
          <div class="tweets">
            <h2>User Name : {item.userName}</h2>
            <img src={item.img} />
            <h3>Tweets: </h3>

            {item.tweets.map((tweets) => {
              return <li>{tweets}</li>;
            })}

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Tweets;

// <div class="tweets">
// <h2>User Name : {user.userName}</h2>
// <img src={user.img} />
// <h3>Tweets: </h3>
// <li>{user.tweets}</li>
// <hr></hr>
// </div>
