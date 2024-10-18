import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    // <div className="flex justify-center items-center">
    //   <iframe
    //     src="https://res.cloudinary.com/dtid3x3aq/video/upload/VID_20241019_030659482_m0oybi.mp4?loop=1&amp;playlist=VID_20241019_030659482_m0oybi"
    //     width="960"
    //     height="800"
    //     allowFullScreen={true} // Assigning boolean value directly
    //   />
    // </div>
    <main className={styles.main}>
      <h1 className={styles.title}>Lae sam!!</h1>
      <div className="flex justify-center items-center">
        <Image
          src={
            'https://res.cloudinary.com/dtid3x3aq/image/upload/IMG_20241019_034417202_kkfcwx.jpg'
          }
          alt={''}
          width={270}
          height={1080}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </main>
  );
}
