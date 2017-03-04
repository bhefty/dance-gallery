import React from 'react'
import { Col, Row } from 'react-bootstrap'

import WelcomeMessage from './components/WelcomeMessage'
import AnnouncementsMessage from './components/AnnouncementsMessage'

import building from '../../assets/building_banner.png'
import dancers from '../../assets/dancers.png'

import Wrapper from '../../styles/Wrapper'
import StyledImage from './StyledImage'

const Home = (props) => {
    return (
        <div>
            <Row>
                <Col xs={12} md={6}>
                    <Wrapper>
                        <StyledImage src={building} alt='The Dance Gallery Building' responsive />
                        <WelcomeMessage />
                    </Wrapper>
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        <Col xs={12}>
                            <Wrapper>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <AnnouncementsMessage />
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <StyledImage src={dancers} alt='Dancers' responsive />
                                    </Col>
                                </Row>
                            </Wrapper>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Home