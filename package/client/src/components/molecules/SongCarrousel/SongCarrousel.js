import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SongCard from '../../atoms/SongCard';

export default function SongCarrousel() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }

  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };




  return (

    <Carousel
      swipeable={true}
      draggable={true}
      // showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      // autoPlaySpeed={1000}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      // dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    // customRightArrow={<CustomRightArrow />}
    >
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </Carousel>
  )
}











// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import Slider from "react-slick";

// import SongCard from '../../atoms/SongCard';

// export default function SongCarrousel() {
//   const songs = useSelector(state => state.songs.result);
//   const error = useSelector(state => state.songs.error);
//   const status = useSelector(state => state.songs.status);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // dispatch({ type: 'FETCH_SONGS' });

//   }, [dispatch, songs]);

//   var settings = {
//     arrows: true,

//     infinite: true,
//     speed: 1000,
//     slidesToShow: 6,
//     slidesToScroll: 1
//   };
//   return (
//     <div  >
//       {
//         songs.length > 0 ? <ul>
//           <li>Hello from SongList</li>
//         </ul> : <h2>No songs yet</h2>
//       }
//       <Slider {...settings}>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//         <div>
//           <SongCard />
//         </div>
//       </Slider>
//     </div >

//   );
// }
