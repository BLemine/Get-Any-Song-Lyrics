import { useState, useEffect } from "react";
import axios from "axios";

export default function Lyrics(props) {
  const [text, setText] = useState("..");
  useEffect(() => {
    axios
      .get("https://api.lyrics.ovh/v1/" + props.singer + "/" + props.song)
      .then(res => {
        setText(res.data.lyrics);
      })
      .catch(err => console.log(err));
  });
  return text;
}
