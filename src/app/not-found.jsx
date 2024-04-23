import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h1>Sorry, the page your looking does not exits!</h1>
        <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound