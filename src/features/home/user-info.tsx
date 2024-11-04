import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UserInfo {
  user: {
    id: string
    name: string
    email: string
    image: string
  },
  expires: string
}


export default function UserInfo({ user, expires }: UserInfo) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Session</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>{JSON.stringify({ user, expires }, null, 2)}</code>
        </pre>
      </CardContent>
    </Card>
  )
}
