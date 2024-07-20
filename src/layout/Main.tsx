import ProductsList from 'components/Products/ProductsList'
import { Container } from '@mui/material'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductsList />
            </Container>
        </>
    )
}
export default Main
