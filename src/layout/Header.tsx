import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Logo from '../components/Logo/Logo'
import Button from '../components/Menu/Menu'

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
                    <Button />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
