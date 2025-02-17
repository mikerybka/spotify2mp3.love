import { useEffect, useState } from "react";
import LoadingScreen, { LoadingScreenProps } from "./LoadingScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "./LoginScreen";


export interface AuthProps {
    loadingScreen: LoadingScreenProps;
    children?: any;
}

export default function Auth(props: AuthProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [sessionID, setSessionID] = useState<string | null>(null);

    useEffect(() => {
        AsyncStorage.getItem("sessionID").then((id: string | null) => {
            if (id !== null) {
                setSessionID(id)
            }
        })
    }, []);

    if (loading) {
        return <LoadingScreen {...props.loadingScreen}  />;
    }

    if (!sessionID) {
        return <LoginScreen onSuccess={setSessionID} />;
    }

    return <>
        {props.children}
    </>
}
