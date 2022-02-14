import React,{ useState } from "react";
import { addToList } from '../../../redux/playlists/playlists-actions';
import { useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsPlusLg } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";

const DropDownList = (props) => {
  const { playlist, trackId, url, name } = props
  const [show, setShow] = useState(false);

  const listPlaylist = playlist.playlists
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem('user'))._id
  function handleAddTrack(data) {
    dispatch(addToList(data))
  }
  return (<>
    <aside>
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>{name} Upload successfully!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </aside>
    <div className="dropdown">
      {/* <AddtoPlayListButton isAddList={isAddList} /> */}
      <ListGroup.Item className="track__row-buttons">
        <Button className="btn__options">
          <BsPlusLg />
        </Button>
      </ListGroup.Item>
      <div className="dropdown-content">
        {listPlaylist.map((item, index) =>
          <a
            key={index + 1}
            onClick={() => handleAddTrack({ TrackId: trackId, playListId: item._id, userId: userId, url: url, name: name})} 
            >{item.name}</a>
       )}
      </div>
    </div>
   </>);
}
 
export default DropDownList;