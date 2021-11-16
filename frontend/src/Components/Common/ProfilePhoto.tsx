import styled from 'styled-components';

type ProfileIconPhotoProps = { readonly url: string };

export const ProfilePhotoIcon = ({ url }: ProfileIconPhotoProps): JSX.Element => {
  return <PhotoIcon referrerPolicy="no-referrer" src={url} />;
};

export const PhotoIcon = styled.img`
  border: none;
  border-radius: 360px;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
`;
