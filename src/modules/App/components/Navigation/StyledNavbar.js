import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

const StyledNavbar = styled(Navbar)`
    @media (max-width: 768px) {
        margin-bottom: 0 !important;
    }
`

export default StyledNavbar