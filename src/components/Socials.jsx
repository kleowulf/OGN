import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSpotify
  } from "@fortawesome/free-brands-svg-icons";


const Socials = () => {
  return (
    <div>
        <div className='text-center'>
      <h3 className="mb-5">Follow Us!</h3>
      <a href="https://www.youtube.com/@OperationGameNight"
        className="p-4">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61567220322623"
        className="p-7">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://x.com/OGNPodcast" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/operation_game_night_podcast/"
        className="p-7">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://open.spotify.com/show/1TFR6VGh2Co9wtr2cmRZhR?si=oPs2rlTiTb-b6x05jdH8yg"
        className="p-4">
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
</div>
    </div>
  )
}

export default Socials