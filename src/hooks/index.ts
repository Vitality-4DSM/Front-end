import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContexts";

export default function useLogin() {
    const context = useContext(LoginContext);
    return context;
}