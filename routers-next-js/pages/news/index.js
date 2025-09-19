import Link from "next/link";

export default function NewsPage() {
    return (
        <>
        <h1>News Page</h1>
        <ul>
            <li>
                <Link href={'news/post1'}>Post 1</Link>
                <Link href={'news/post2'}>Post 2</Link>
                <Link href={'news/post3'}>Post 3</Link>
            </li>
        </ul>
        </>
    )
}