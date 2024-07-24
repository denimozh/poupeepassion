"use server"

import { LoginValues } from "@/lib/validation"
import { isRedirectError } from "next/dist/client/components/redirect";

export async function login(credentials: LoginValues): Promise<{error:string}> {
    try {
        
    } catch (error) {
        if (isRedirectError(error)) throw Error;
        console.error(error);
    }
}