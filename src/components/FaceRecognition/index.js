import React from 'react'
import { FaceRecognitionContainer, ImageContainer, Image, BorderBox } from "./FaceRecognitionStyling"

const FaceRecognition = ({ imageUrl, box }) => {

    return (
        <FaceRecognitionContainer>

            <ImageContainer>
                <Image src={imageUrl}></Image>
                <BorderBox className="bounding-box" style={{
                    left: box.leftCol,
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow
                }}>
                </BorderBox>
            </ImageContainer>
            <div>{console.log("in component:", box)}</div>

        </FaceRecognitionContainer>
    )

}


export default FaceRecognition