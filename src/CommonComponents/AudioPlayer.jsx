import React, { useState } from "react";
import music from "../assets/music.mp3";

const AudioPlayer = () => {

  return (
    <div>
      <audio
        src={music}
        controls={true}
        autoPlay={isPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
