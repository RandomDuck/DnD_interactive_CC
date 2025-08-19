"use client";
import { imageSrcAtom } from '@/atoms/chatacter-image-atom';
import { useAtom } from 'jotai';
import { useEffect, useId } from 'react';
import { StyledImg, HiddenInput, StyledBackgroundImg } from './resources/imageStyle';
import { InputButton } from './components/inputButton';

export function CharacterImg({ isUploadable = false, size, ...props }) {
  const inputId = useId();
  const [imgSrc, setImgSrc] = useAtom(imageSrcAtom);
  const randomID = `character-image-id-${inputId}`;
  if (isUploadable) {
    const handleFileChange = (e) => {
      if (typeof window === "undefined") return; // SSR guard
      const file = e.target.files?.[0];
      if (!file) return;

      const fr = new FileReader();
      fr.onload = () => setImgSrc(fr.result);
      fr.readAsDataURL(file);
    };

    useEffect
    return (
      <div data-testid="char-img">
        <HiddenInput type="file" id={randomID} accept="image/*" onChange={handleFileChange} />
        <StyledBackgroundImg size={size} src={imgSrc} $border $round>
          <InputButton htmlFor={randomID}>Upload</InputButton>
        </StyledBackgroundImg>
      </div>
    );
  } else {
    return (
      <StyledImg data-testid="char-img" size={size} src={imgSrc} />
    );
  }
}
