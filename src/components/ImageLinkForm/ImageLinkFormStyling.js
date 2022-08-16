import styled from "styled-components";


export const ImageLinkFormContainer = styled.div.attrs({
    className: "ImageLinkFormContainer"
})``

export const Paragraph = styled.p.attrs({
    className: "f3 tc"
})``

export const FormContainer = styled.div.attrs({
    className: "center"
})``

export const Form = styled.div.attrs({
    className: "patternedbg center pa4 br3 shadow-5 center"
})`
width: 700px;
`

export const Input = styled.input.attrs({
    type: "text",
    placeholder: "Enter Url here...",
    className: "f4 pa2 w-70 center",
})``

export const Button = styled.button.attrs({
    type: "submit",
    className: " w-30 grow f4 link ph3 pv2 dib white bg-light-purple "
})`cursor: pointer;`