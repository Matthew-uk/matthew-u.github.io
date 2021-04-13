const aud = document.querySelector("audio")

const play = () =>
{
  aud.autoplay = true;
  aud.load()
}

document.addEventListener("load", play);
