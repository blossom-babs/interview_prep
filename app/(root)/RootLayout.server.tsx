import { isAuthenticated } from '@/lib/actions/auth.action'
import React, { ReactNode } from 'react'
import RootLayout from './layout'
import { redirect } from 'next/navigation'

const RootLayoutServer = async({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()

  if (!isUserAuthenticated) {
    redirect("/sign-in");
}

  return (
    <RootLayout>
        {children}
      </RootLayout>
  )
}

export default RootLayoutServer