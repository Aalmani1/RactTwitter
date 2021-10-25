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
            <img src={img} />
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
