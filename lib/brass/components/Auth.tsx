import { useEffect, useState } from "react";
import LoadingScreen, { LoadingScreenProps } from "./LoadingScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen, { LoginScreenProps } from "./LoginScreen";
import SessionContext from "../contexts/SessionContext";

export interface AuthProps {
    loadingScreenProps: LoadingScreenProps;
    children?: any;
}

export default function Auth(props: AuthProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const [sessionID, setSessionID] = useState<string | null>(null);

    useEffect(() => {
        AsyncStorage.getItem("sessionID").then((id: string | null) => {
            setLoading(false)
            if (id !== null) {
                setSessionID(id)
            }
        });
    }, []);

    if (loading) {
        return <LoadingScreen {...props.loadingScreenProps}  />;
    }

    if (!sessionID) {
        return <LoginScreen onSuccess={setSessionID} />;
    }

    return <SessionContext.Provider value={sessionID}>
        {props.children}
    </SessionContext.Provider>
}
