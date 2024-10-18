import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lae sam!!</h1>
      <div className={styles.playerWrapper}>
        <Image
          src={
            'https://res.cloudinary.com/dtid3x3aq/image/upload/IMG_20241019_030318305_bsmrjz.jpg'
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
