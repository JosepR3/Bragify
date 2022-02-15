import { useSelector } from "react-redux";

const ProfileImg = () => {
  const img = useSelector((state) => state.auth.username?.img)
  console.log(img)

  return (<>
    <div class="user-avatar -medium" style={{ backgroundImage: `url(${img})` }} ></div>
  </> );
}
 
export default ProfileImg;