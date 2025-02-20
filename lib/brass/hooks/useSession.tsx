import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

export function useSession() {
    const sessionID = useContext(SessionContext);
    return sessionID;
}
