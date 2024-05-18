import * as C from './styles';

type Props = {
  url: string;
  name: string;
}

export const PhotoItem = ({url, name}: Props) => {
  return(
    <C.Container>
      <img src={url} alt={name} />
      <h3>{name}</h3>
    </C.Container>
  );
}