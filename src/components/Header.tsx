import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Directory", href: "/directory" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">TurboCharity</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/get-started"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
