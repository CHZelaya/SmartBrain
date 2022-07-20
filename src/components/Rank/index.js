import React from 'react'
import {
    RankContainer,
    Paragraph1,
    Paragraph2,

} from './RankStyling'

const Rank = () => {
    return (
        <RankContainer>
            <Paragraph1> {'User, your current rank is...'} </Paragraph1>
            <Paragraph2> {'#5'} </Paragraph2>
        </RankContainer>
    )
}

export default Rank