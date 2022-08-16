import React from 'react'
import { FaceRecognitionContainer, ImageContainer, Image, } from "./FaceRecognitionStyling"
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <FaceRecognitionContainer>

            <ImageContainer>
                <Image src={imageUrl}></Image>
                <div className="bounding-box" style={{
                    left: box.leftCol,
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow
                }}
                >
                </div>
            </ImageContainer>

        </FaceRecognitionContainer>
    )

}


export default FaceRecognition