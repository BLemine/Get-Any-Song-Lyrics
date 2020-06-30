import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";

export default function Lyrics(props) {
  const [text, setText] = useState(
    <CircularProgress />
  );
  useEffect(() => {
    axios
      .get("https://api.lyrics.ovh/v1/" + props.singer + "/" + props.song)
      .then(res => {
        setText(res.data.lyrics);
      })
      .catch(err => {
        setText("Not found mate")
        console.log(err);
      });
  });
  return <div style={{ height: 400, overflow: "auto" }}>{text}</div>;
}
