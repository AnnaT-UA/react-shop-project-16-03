type HeaderProps = {
    text: string
    leftPart: string
    rightPart: string
    order?: number
}

const Header = ({ order, leftPart, text, rightPart }: HeaderProps) => {
    return (
        <h1>
            {order} {leftPart} {text} {rightPart}
        </h1>
    )
}

export default Header
