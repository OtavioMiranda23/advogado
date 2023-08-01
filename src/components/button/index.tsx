import { Container } from "./style"
interface IButton {
    text: string;
    primary?: boolean;
}
export function Button({text, primary=true}: IButton) {
    console.log(typeof(primary))
    return (
        <Container $primary={primary}>
            {text}
        </Container>
    )
}