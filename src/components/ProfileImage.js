function ProfileImage({ image }) {
  console.log("image:", image);
  return <img src={image} className="profile" alt="profile" />;
}
export default ProfileImage;
