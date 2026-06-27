"use client";

import {

    createContext,

    useContext,

    useEffect,

    useState

} from "react";

import {

    getProfile

} from "@/services/authService";

const AuthContext =
    createContext();

export function AuthProvider({

    children

}) {

    const [user, setUser] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const loadUser = async () => {

        const token =
            localStorage.getItem(
                "token"
            );

        if (!token) {

            setLoading(false);

            return;

        }

        try {

            const profile =
                await getProfile();

            setUser({

                ...profile,

                token

            });

        }

        catch (error) {

            console.error(error);

            localStorage.removeItem(
                "token"
            );

            setUser(null);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadUser();

    }, []);

    const login = async (

        token

    ) => {

        localStorage.setItem(

            "token",

            token

        );

        await loadUser();

    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                login,

                logout,

                refreshUser: loadUser

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(
        AuthContext
    );

}