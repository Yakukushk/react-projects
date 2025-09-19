import { useRouter } from "next/router"

export default function DetailPage() {
    const router = useRouter();

    return (
        <>
        <h1>DetailPage {router.query.id}</h1>
        </>
    )
}