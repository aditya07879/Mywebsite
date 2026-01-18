import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-6 text-foreground">
      <div className="container mx-auto max-w-6xl flex items-center justify-between">

        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl font-semibold tracking-tight">
            ᗩᗪI<span className="text-accent">...</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button size="md">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}

export default Header;
