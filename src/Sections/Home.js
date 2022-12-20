import React from "react";
import me from '../assets/images/me.png';


function Home () {
  
  return(
  <div class="home my-32 ">
  <div class="home-content flex-col lg:flex-row-reverse mx-4">
    <img src={me} class="max-w-sm mx-6 rounded-full shadow-2xl" alt="me"/>
    <div>
      {/* <h1 class="text-5xl tracking-tight font-extrabold text-b">Christian Macias</h1>
      <p class="py-7 text-4xl">Hello! I'm a Full-Stack Developer looking forward to working with you!</p>
       */}
       <header className="mb-16 group">
  <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
    hi, I'm <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
    >
      Christian 👋
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-grey md:-mb-4 md:h-16 animate-cursor will-change-transform"
    ></span>
  </h1>
  <div className="text-xl font-semibold md:text-3xl">developer by choice and designer for fun</div>
</header>
    </div>
  </div>
</div>
)
}
export default Home