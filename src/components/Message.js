<p className="message"></p>;
function Message({ message }) {
  console.log("message:", message);
  return <p className="message"> {message}</p>;
}
export default Message;
