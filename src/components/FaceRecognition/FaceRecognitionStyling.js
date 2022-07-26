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

export const BorderBox = styled.div.attrs({
})`
.bounding-box {
    position: absolute;
    box-shadow: 0 0 0 3px #149df2 inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
}
`
