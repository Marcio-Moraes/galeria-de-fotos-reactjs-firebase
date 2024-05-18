import {useState, useEffect, FormEvent} from 'react';
import * as C from './App.styles';
import * as Fotos from './services/photos';
import {Photo} from './types/Photo';
import {PhotoItem} from './components/PhotoItem';

const App = ()=>{
  const [upLoading, setUploading] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [photosState, setPhotosState] = useState<Photo[]>([]);

  useEffect(()=>{
    const getPhotos = async () => {
      setCarregando(true);
      setPhotosState(await Fotos.getAll());
      setCarregando(false);
    }
    getPhotos();
  }, []);  

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0){
      setUploading(true);
      
      let result = await Fotos.insert(file);

      setUploading(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`);
      } else{
        let newPhotoList = [...photosState];
        newPhotoList.push(result);
        setPhotosState(newPhotoList);
      }
    }
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name="image" id="" />
          <input type="submit" value="Enviar" />
          {carregando && "Enviando..."}
        </C.UploadForm>

        

        {carregando &&
          <C.ScreeWarning>
            <div className='emoji'>✋</div>
            <div className="texto_carregando">Carregando...</div>
          </C.ScreeWarning>
        }

        {!carregando && photosState.length > 0 &&
          <C.ListaPhotos>
            {photosState.map((item, index)=>(
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </C.ListaPhotos>          
        }

        {!carregando && photosState.length === 0 &&
          <C.ScreeWarning>
            <div className='emoji'>😞</div>
            <div className="texto_carregando">Não há imagens cadastradas...</div>
          </C.ScreeWarning>
        }

      </C.Area>
    </C.Container>
  );
}

export default App;