"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef("");
  const [pickedImage, setPickedImage] = useState();
  function handleClickPick() {
    imageInput.current.click();
  }
  function handlePickImage(e) {
    const files = e.target.files;
    if (!files) {
      setPickedImage(null);
      return;
    }
    console.log(pickedImage);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    for (var file of files) {
      fileReader.readAsDataURL(file);
    }
    // fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="image-1" fill />}
        </div>
        <input
          type="file"
          className={classes.input}
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handlePickImage}
          required
        />
        <button
          className={classes.button}
          onClick={handleClickPick}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
