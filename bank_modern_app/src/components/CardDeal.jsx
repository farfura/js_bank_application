import React from 'react'
import {card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => (
    <section className={layout.section}>
<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>
    Find a better card deal <br className='sm:block hidden' /> in few easy steps
  </h2>
<p className={`${styles.paragraph} mt-5 max-w-[470px] `}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ex iusto quod quis maiores nesciunt.</p>
<Button styles="mt-10"/>

</div>
<div className={layout.sectionImg}>
  <img src={card} alt="card" className='' />
  </div>    </section>
    
  )


export default CardDeal