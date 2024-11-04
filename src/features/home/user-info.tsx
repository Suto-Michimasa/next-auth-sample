import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DefaultSession } from "next-auth"

export default function UserInfo({ user, expires }: DefaultSession) {
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
