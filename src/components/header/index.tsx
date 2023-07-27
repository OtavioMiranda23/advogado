"use client"
import { Container } from "./style";

export function Header() {
    return (
        <Container>
            <h1>Logo</h1>
            <ul>
                <a href="#">
                    <li>
                        Serviços
                    </li>
                </a>
                <a href="#">
                    <li>
                        Contate
                    </li>
                </a>
            </ul>
        </Container>
    )
}