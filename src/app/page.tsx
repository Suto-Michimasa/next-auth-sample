'use client'

import { Rocket } from "lucide-react"
import Header from '@/components/layouts/header'
import UserInfo from '@/features/home/user-info'
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen bg-background">
      <Header status={status} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">NextAuth.js Tutorial</h1>
        </div>
        {
          session && (
            <UserInfo user={session.user} expires={session.expires} />
          )
        }
      </main>
    </div>
  )
}
