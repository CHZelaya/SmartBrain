import React from 'react'
import {
    ImageLinkFormContainer,
    Paragraph,
    FormContainer,
    Form,
    Input,
    Button,
} from './ImageLinkFormStyling';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <ImageLinkFormContainer>
            <Paragraph>{`This Magic Brain will detect faces in your pictures. Give it a try!`}</Paragraph>
            <FormContainer>
                <Form>
                    <Input onChange={onInputChange}></Input>
                    <Button onClick={onButtonSubmit}>Detect!</Button>
                </Form>
            </FormContainer>
        </ImageLinkFormContainer>
    )
}

export default ImageLinkForm