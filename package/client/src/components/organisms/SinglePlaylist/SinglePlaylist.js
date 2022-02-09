import React from "react";
import withLayout from "../../HOC/withLayout";

function SinglePlaylist() {
  return (
    <>
      <main id="main">
        <div className="flex-row d-flex gap-5">
          <div className="" id="photo">
            <img
              id="sm"
              src="https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/2f/22/a9/2f22a9a6-5af1-5846-a44e-ba016724ed69/21UM1IM58860.rgb.jpg/1000x1000bb-60.jpg"
              alt=""
            />
          </div>
          <div
            className="col-sm-8 d-flex flex-column justify-content-center"
            id="detail"
          >
            <h3 id="shawn">
              <b>Dawn FM</b>
            </h3>
            <p className="brand_color">The Weeknd</p>
            <div className="d-flex gap-2 flex-row" id="interact_buttons">
              <button id="play">▶ Play</button>
              <button id="play">⥃ Shuffle</button>
            </div>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Album</td>
              <td>duration</td>
              <td>
                <i className="fa fa-clock-o"></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dawn FM</td>
              <td>Dawn FM</td>
              <td>3:58</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gasoline</td>
              <td>Dawn FM</td>
              <td>3:11</td>
            </tr>
            <tr>
              <td>3</td>
              <td>How Do I Make You Love Me</td>
              <td>Dawn FM</td>
              <td>3:18</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Take My Breath</td>
              <td>Dawn FM</td>
              <td>3:35</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sacrifice</td>
              <td>Dawn FM</td>
              <td>3:27</td>
            </tr>
            <tr>
              <td>6</td>
              <td>A tale By Quincy</td>
              <td>Dawn FM</td>
              <td>3:36</td>
            </tr>
            <tr>
              <td>7</td>
              <td>I Dont Even Know Your Name</td>
              <td>Dawn FM</td>
              <td>3:46</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Something Big</td>
              <td>Dawn FM</td>
              <td>3:00</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default withLayout(SinglePlaylist);
