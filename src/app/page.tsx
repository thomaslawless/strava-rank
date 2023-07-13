import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <h1 className="text-3xl font-bold">Strava Rank</h1>
      <h3>Compare yourself to the world.</h3>
      <Link href="/cycling">
      <button className="btn">SIGN IN</button>
      </Link>
    </div>
  )
}
