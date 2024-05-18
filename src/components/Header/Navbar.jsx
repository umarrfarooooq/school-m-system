import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export function Navbar() {
  return (
  <div className="white-bg-color">
    <header
      className="flex h-20 w-full items-center justify-between container">
      <Link className="flex items-center" href="/">
        <SchoolIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">EDU BRAINS</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/courses">
          Courses
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link className="font-medium hover:underline" href="/">
              Home
            </Link>
            <Link className="font-medium hover:underline" href="/about">
              About
            </Link>
            <Link className="font-medium hover:underline" href="/courses">
              Courses
            </Link>
            <Link className="font-medium hover:underline" href="/contact">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  </div>
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function SchoolIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>)
  );
}
