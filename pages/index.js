import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src='/assets/pexels-kendall-hoopes-6000x4000.jpg'
        alt='universe'
        width={1500}
        height={1000}
      />
    </div>
  )
}
