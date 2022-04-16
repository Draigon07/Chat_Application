function MyMessage({ message }) {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "rgb(5 28 52)",
      }}
    >
      {message.text}
      <br />
      <small style={{ width: "100%", fontSize: "10px" }}>
        <em>{`by me`}</em>
      </small>
    </div>
  );
}

export default MyMessage;
