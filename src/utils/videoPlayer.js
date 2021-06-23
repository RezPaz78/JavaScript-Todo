import { videoPlayer } from "./nodes";

export const playerCreator = (src) => {
  const player = document.createElement("video");
  player.controls = true;
  player.autoplay = true;
  player.src = src;

  videoPlayer.appendChild(player);
  videoPlayer.style.display = "flex";
};

export const closePlayer = (e) => {
  if (e.target.className === "videoPlayer") {
    videoPlayer.style.display = "none";
    videoPlayer.innerHTML = "";
  }
};
