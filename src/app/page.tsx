import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Admin Console</h1>
      <Link href="/console" passHref>
        Go to Console
      </Link>
    </div>
  );
}
