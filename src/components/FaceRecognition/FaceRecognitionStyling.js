import styled from "styled-components";

export const FaceRecognitionContainer = styled.div.attrs({
    className: "face-recognition-container center ma",
})``

export const ImageContainer = styled.div.attrs({
    className: "image-container absolute mt2"
})``

export const Image = styled.img.attrs({
    className: "pa3",
    alt: "",
    id: "inputImage",
})`
width: 500px;
height: auto;
`

