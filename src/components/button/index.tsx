import { Container } from "./style"
interface IButton {
    text: string;
    primary?: boolean;
}
export function Button({text, primary=true}: IButton) {
    return (
        <Container $primary={primary}>
            {text}
        </Container>
    )
}