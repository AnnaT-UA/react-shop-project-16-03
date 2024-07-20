import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import { Container } from '@mui/material'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'green',
            }}
        >
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
