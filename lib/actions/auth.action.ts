'use server';

import { db } from "@/firebase/admin";

export async function signUp(params:SignUpParams) {
    const {uid, name, email, password} = params

    try {

        const userRecord = await db.collection('users').doc(uid).get()
        if(userRecord.exists){
            return {
                success: false,
                message: 'User already exists. Please sign in.'
            }
        }
        await db.collection('users').doc(uid).set({
            name: name,
            email: email
        })        
    } catch (error: any) {
        console.error('error creating user', error)
        if(error.code === 'auth/email-already-exists'){
            return{
                success:false,
                message: 'Email already in use'
            }
        }

        return {
            success: false,
            message: 'Failed to create an account'
        }
    }
}