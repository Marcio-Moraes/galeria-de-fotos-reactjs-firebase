import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282F;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const ScreeWarning = styled.div`
  text-align: center;

  .emoji{
    font-size: 50px;
    margin--bottom: 5px;
  }
`;

export const ListaPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 18px;
  border-radius: 10px;
  margin-bottom: 60px;

  input[type=submit]{
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    margin: 0 20px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
      opacity: .9;
    }
  }
`;