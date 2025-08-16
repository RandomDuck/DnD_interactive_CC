import { imageSrcAtom } from '@/atoms/chatacter-image-atom';
import { useAtom } from 'jotai';
import { StyledImg, HiddenInput, InputButton, StyledBackgroundImg } from './imports';

export function CharacterImg({ isUploadable = false, size, ...props }) {
  const [imgSrc, setImgSrc] = useAtom(imageSrcAtom);
  if (isUploadable) {
    const randomID = `character-image-id-${new Date().getTime()}`;
    const fr = new FileReader();
    fr.onload = () => setImgSrc(fr.result);
    return (
      <div data-testid="char-img">
        <HiddenInput type="file" id={randomID} accept="image/*" onChange={(e) => fr.readAsDataURL(e.target.files[0])} />
        <StyledBackgroundImg size={size} src={imgSrc} border round>
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
