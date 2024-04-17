import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      {/* Pass the user's profile image URL to the ProfileImage component */}
      <ProfileImage image="https://i.imgur.com/b0EdHVV.jpg" />
      <div className="body">
        <div className="top">
          <span className="user">
            <User name={user.name} handle={user.handle} />
          </span>
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
