import React from 'react'
import {
    RankContainer,
    Paragraph1,
    Paragraph2,

} from './RankStyling'

const Rank = ({ user, entries }) => {
    return (
        <RankContainer>
            <Paragraph1> {`${user}, your current rank is ${entries}`} </Paragraph1>
            <Paragraph2> {'#5'} </Paragraph2>
        </RankContainer>
    )
}

export default Rank