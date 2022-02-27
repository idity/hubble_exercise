import { StyledButton } from "./Styles/Button.styled"
import { Container } from "./Styles/Container.styled"
import { Flex } from "./Styles/Flex.styled"
import { StyledHeader, Nav, Logo, Image, ThemeToggler } from "./Styles/Header.styled"
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { THEMES } from '../Globals';

export default function Header({ changeToTheme, handleThemeChange }) {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='something' />
                    <div>
                        <StyledButton>Try it free</StyledButton>
                        <ThemeToggler onClick={handleThemeChange}>
                            {changeToTheme === THEMES.LIGHT ?
                                <BsMoonFill /> :
                                <BsSun />}
                        </ThemeToggler>
                    </div>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community Your Fans will Love</h1>
                        <p>Sunt reprehenderit anim exercitation commodo ex. Consequat laborum minim proident anim reprehenderit duis nostrud ea consectetur est. Adipisicing id aute dolore laboris cillum. Nisi esse pariatur occaecat commodo sint eiusmod nulla amet irure officia elit sit. Est eu magna ea adipisicing consectetur amet sunt laborum.</p>
                        <StyledButton bg="#ff0099" color="#fff">Get Started for Free</StyledButton>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt="" />
                </Flex>
            </Container>
        </StyledHeader>
    )
}