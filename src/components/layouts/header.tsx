import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          NextAuth Sample
        </Link>
        <nav>
          <Button asChild variant="secondary">
            <Link href="/signin">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
