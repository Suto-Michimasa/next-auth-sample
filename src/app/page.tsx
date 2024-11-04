import { Rocket } from "lucide-react"
import Header from '@/components/layouts/header'
import UserInfo from '@/features/home/user-info'

const sessionData = {
  user: {
    id: "1",
    name: "Suto Michimasa",
    email: "suto.michimasa@test.com",
    image: "https://avatars.githubusercontent.com/u/71575781?v=4"
  },
  expires: "2024-04-25T05:47:10.525Z"
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">NextAuth.js Tutorial</h1>
        </div>

        <UserInfo user={sessionData.user} expires={sessionData.expires} />
      </main>
    </div>
  )
}
