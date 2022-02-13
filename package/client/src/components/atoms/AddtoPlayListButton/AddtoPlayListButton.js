import React from 'react';
import Button from 'react-bootstrap/Button';

import addIcon from '../../../assets/Icons/addList.png';
import removeIcon from '../../../assets/Icons/removeList.png';

function AddtoPlayListButton(props) {
const {isAddList}=props
  return <Button
    variant="secondary"
    color="#292929"
  // id={trackId}
  > 
    {isAddList ?
      <img
        className='icon__add-list'
        src={removeIcon}
      />
      : <img
        className='icon__add-list'
        src={addIcon}
      />}
    </Button >
 }
export default AddtoPlayListButton