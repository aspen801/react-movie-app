import React from "react";

const useStopVideos = () => {
  return () => {
    const videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };
};

export default useStopVideos;
