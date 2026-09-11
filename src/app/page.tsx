import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Analytics Dashboard</h1>
      <p>Welcome to the dashboard.</p>

    <Link href="/dashboard" className="text-blue-500">go to dashboard</Link>
    <br />
    <Link href="/about" className="text-blue-500">go to about</Link>
    </main>
  );
}
