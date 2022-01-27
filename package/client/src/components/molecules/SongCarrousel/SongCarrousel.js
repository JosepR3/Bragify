import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Slider from "react-slick";

import SongCard from '../../atoms/SongCard';
import SongList from '../SongList';
export default function SongCarrousel() {
  const songs = useSelector(state => state.songs.result);
  const error = useSelector(state => state.songs.error);
  const status = useSelector(state => state.songs.status);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({ type: 'FETCH_SONGS' });

  }, [dispatch, songs]);

  var settings = {
    arrows: true,

    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <div  >
      {
        songs.length > 0 ? <ul>
          <li>Hello from SongList</li>
        </ul> : <h2>No songs yet</h2>
      }
      <Slider {...settings}>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
        <div>
          <SongCard />
        </div>
      </Slider>
    </div >

  );
}
