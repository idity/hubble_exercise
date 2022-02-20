import { Button } from "./Styles/Button.styled"
import { Container } from "./Styles/Container.styled"
import { Flex } from "./Styles/Flex.styled"
import { StyledHeader, Nav, Logo, Image } from "./Styles/Header.styled"

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='something'/>
                    <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community Your Fans will Love</h1>
                        <p>Sunt reprehenderit anim exercitation commodo ex. Consequat laborum minim proident anim reprehenderit duis nostrud ea consectetur est. Adipisicing id aute dolore laboris cillum. Nisi esse pariatur occaecat commodo sint eiusmod nulla amet irure officia elit sit. Est eu magna ea adipisicing consectetur amet sunt laborum.</p>
                        <Button bg="#ff0099" color="#fff">Get Started for Free</Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt=""/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}