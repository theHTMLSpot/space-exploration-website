// app/page.tsx
import styles from './page.module.css'


export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.herotext}>
        <h4>So, you want to travel to</h4>
        <h1> Space</h1> 
        
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className={styles.heroimage}>
        <h2> Explore </h2>
      </div>
    </div>
  );
}