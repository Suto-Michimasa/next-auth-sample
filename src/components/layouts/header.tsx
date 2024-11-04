import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { signOut } from 'next-auth/react';

type HeaderProps = {
  status: "loading" | "authenticated" | "unauthenticated";
};

export default function Header({ status }: HeaderProps) {

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          NextAuth Sample
        </Link>
        <nav>
          {
            //Todo:: loadingとunauthenticatedの場合の処理を追加
            //Note: 一旦loadingとunauthenticatedの場合は未認証状態として扱う
            status === "authenticated" ? (
              <Button asChild variant="secondary" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button asChild variant="secondary">
                <Link href="/signin">Login</Link>
              </Button>
            )
          }
        </nav>
      </div>
    </header>
  )
}
