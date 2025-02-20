export interface LoginScreenProps {
    onSuccess: (sessionID: string) => void;
}

export default function LoginScreen(props: LoginScreenProps) {
    return "Login"
}
