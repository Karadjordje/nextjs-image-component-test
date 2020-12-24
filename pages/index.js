import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <Image
        src='/assets/pexels-kendall-hoopes-6000x4000.jpg'
        alt='universe'
        width={1500}
        height={1000}
        layout={'responsive'}
      />
    </div>
  )
}
