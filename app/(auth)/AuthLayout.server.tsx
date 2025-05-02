import React, { ReactNode } from 'react'
import AuthLayout from './layout'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'


const AuthLayoutServer = async ({children}: {children: ReactNode}) => {

    const isUserAuthenticated = await isAuthenticated()

    if(isUserAuthenticated) redirect('/')


  return (
    <AuthLayout>{children}</AuthLayout>
  )
}

export default AuthLayoutServer