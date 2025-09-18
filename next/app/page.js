import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div style={{ marginInline: '2px' }}>
        <Link href={"/about"}>About Us</Link>
        <Link style={{marginLeft: '10px'}} href={"/blog"}>Blog Page</Link>
      </div>
    </main>
  );
}
