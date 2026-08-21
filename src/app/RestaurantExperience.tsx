"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { cuisines, dishes, featuredDishes, gallery, housePours, menuCategories, menuItems } from "./data";
import { Arrow } from "../components/ui/Arrow";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { ReservationForm } from "../components/sections/ReservationForm";

const imageProps = { sizes: "(max-width: 768px) 100vw, 50vw" };
export function RestaurantExperience() {
  const [menuFilter, setMenuFilter] = useState("Indian");
  const [heroDish, setHeroDish] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const filteredMenu = menuFilter === "All" ? menuItems : menuItems.filter((item) => item[1] === menuFilter);
  const selectedHeroDish = featuredDishes[heroDish];

  return (
    <main>
      <motion.div className="progress" style={{ scaleX }} />
      <Header />

      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>A world of flavours <i /></motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }}>One table.<br /><em>Many flavours.</em></motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .32 }}>A modern café and restaurant where Indian comfort meets Asian wok cooking, Italian classics and the easy rhythm of café culture.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .44 }}><a className="button button-dark" href="#menu">Explore menu <Arrow /></a><a className="text-link" href="#reserve">Reserve a table <Arrow /></a></motion.div>
          <div className="hero-notes"><span>01 <b>Fresh daily</b></span><span>02 <b>Eight cuisines</b></span><span>03 <b>Handcrafted</b></span></div>
        </div>
          <motion.div className="hero-stage" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [.2, .8, .2, 1] }}>
          <AnimatePresence mode="wait"><motion.div className="hero-image" key={selectedHeroDish.image} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .45 }}><Image src={selectedHeroDish.image} alt={selectedHeroDish.name} fill priority sizes="(max-width: 768px) 100vw, 52vw" /><div className="image-stamp">M<br /><small>EST. 2026</small></div><div className="hero-image-caption"><span>{selectedHeroDish.category}</span><strong>{selectedHeroDish.name}</strong><small>{selectedHeroDish.detail}</small></div></motion.div></AnimatePresence>
          <motion.div className="floating-dish floating-dish-one" key={`${selectedHeroDish.name}-float`} animate={{ y: [0, -10, 0], rotate: [-5, -2, -5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Image src={selectedHeroDish.floating} alt={`${selectedHeroDish.name} detail`} fill sizes="110px" /></motion.div>
          <motion.div className="floating-dish floating-dish-two" animate={{ y: [0, 9, 0], rotate: [7, 3, 7] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .5 }}><Image src={featuredDishes[(heroDish + 1) % featuredDishes.length].image} alt="Another Mediterra dish" fill sizes="130px" /></motion.div>
          <div className="stage-label stage-label-top">Curated<br /><b>with intent</b></div><div className="stage-label stage-label-bottom">0{heroDish + 1} / 04<br /><b>Flavours to discover</b></div>
          <div className="hero-dish-picker" aria-label="Choose a featured dish">{featuredDishes.map((dish, index) => <button type="button" key={dish.name} className={heroDish === index ? "active" : ""} onClick={() => setHeroDish(index)} aria-label={`Show ${dish.name}`}><span>0{index + 1}</span>{dish.name}</button>)}</div>
        </motion.div>
      </section>

      <section className="intro-band"><p className="eyebrow">The Mediterra table</p><h2>Good food has a way<br />of <em>bringing us closer.</em></h2><p>Come for the familiar, stay for something unexpected. Our menu travels from fragrant Indian kitchens to lively Asian woks, sunlit Italian tables and the warmest corner of the café.</p></section>

      <section className="section signature" id="menu"><div className="section-heading"><div><p className="eyebrow">From our kitchen, bar & café</p><h2>Signature <em>favourites</em></h2></div><a className="text-link" href="#menu-list">View full menu <Arrow /></a></div><div className="dish-grid">{dishes.map((dish, index) => <motion.article className="dish-card" key={dish.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 4) * .08 }}><div className="dish-image"><Image src={dish.image} alt={dish.name} fill {...imageProps} /><span className="dish-arrow"><Arrow /></span></div><div className="dish-meta"><p>{dish.cuisine}</p><span>{dish.price}</span></div><h3>{dish.name}</h3><p>{dish.description}</p></motion.article>)}</div></section>

      <section className="section cuisine-section" id="cuisines"><div className="section-heading"><div><p className="eyebrow">Take your tastebuds travelling</p><h2>Explore our <em>cuisines</em></h2></div><p className="section-aside">A little bit of everywhere,<br />made right here.</p></div><div className="cuisine-scroller">{cuisines.slice(1).map((cuisine, index) => <a className="cuisine-tile" href="#menu-list" key={cuisine.name} onClick={() => setMenuFilter(cuisine.name)}><Image src={cuisine.image} alt={`${cuisine.name} cuisine`} fill sizes="220px" /><span>0{index + 1}</span><strong>{cuisine.name}</strong><Arrow /></a>)}</div></section>

      <section className="split-feature" id="our-story"><div className="split-image"><Image src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=90" alt="Friends sharing a meal at Mediterra" fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="split-copy"><p className="eyebrow">Our story</p><h2>Different cultures.<br /><em>One table.</em></h2><p>Mediterra was born from a simple belief: the best meals are generous, curious and shared. We bring together the flavours we grew up with and the ones we keep discovering.</p><a className="button button-outline" href="#reserve">Meet Mediterra <Arrow /></a></div></section>

      <section className="menu-preview section" id="menu-list"><div className="section-heading"><div><p className="eyebrow">A menu with a passport</p><h2>Something for every <em>craving</em></h2></div><p className="section-aside">Curious ingredients.<br />Comforting rituals.</p></div><div className="filter-row" role="tablist" aria-label="Menu categories">{menuCategories.map((category) => <button key={category} className={menuFilter === category ? "active" : ""} onClick={() => setMenuFilter(category)}>{category}</button>)}</div><div className="menu-list">{filteredMenu.length ? filteredMenu.map((item) => <div className="menu-item" key={item[0]}><div><span>{item[1]}</span><h3>{item[0]}</h3><p>{item[2]}</p></div><strong>{item[3]}</strong></div>) : <p>More flavours are being prepared for this category.</p>}</div><button className="button button-dark menu-button" type="button" onClick={() => setMenuFilter("All")}>View full menu <Arrow /></button></section>

      <section className="cafe-banner" id="experience"><div><p className="eyebrow">The café, all day</p><h2>From morning coffee<br />to <em>evening bites.</em></h2><a className="text-link light-link" href="#reserve">Plan your visit <Arrow /></a></div><div className="cafe-image"><Image src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=90" alt="Warm coffee and pastry in the Mediterra cafe" fill sizes="(max-width: 768px) 100vw, 50vw" /></div></section>

      <section className="pours-section"><div className="pours-intro"><p className="eyebrow">Pour something beautiful</p><h2>The house <em>pours.</em></h2><p>Slow mornings, long lunches and evenings that deserve one more round. Our drinks are made to set the pace.</p><a className="text-link" href="#menu-list" onClick={() => setMenuFilter("Drinks")}>Explore drinks & coffee <Arrow /></a></div><div className="pours-list">{housePours.map((pour, index) => <motion.article className="pour-item" key={pour.name} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><div className="pour-thumb"><Image src={pour.image} alt={pour.name} fill sizes="100px" /></div><div><span>0{index + 1}</span><h3>{pour.name}</h3><p>{pour.note}</p></div><strong>{pour.price}</strong></motion.article>)}</div></section>

      <section className="gallery-section section" id="gallery"><div className="section-heading"><div><p className="eyebrow">A glimpse inside</p><h2>Gather <em>around.</em></h2></div><p className="section-aside">Small moments, best<br />served together.</p></div><div className="gallery-grid">{gallery.map(([image, alt], index) => <motion.div className={`gallery-item gallery-${index + 1}`} key={image} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: .7 }}><Image src={image} alt={alt} fill sizes="(max-width: 768px) 50vw, 33vw" /></motion.div>)}</div></section>

      <section className="reviews section"><p className="eyebrow">Notes from the table</p><h2>Loved by our <em>guests.</em></h2><div className="review-grid">{[["The kind of place that makes a Tuesday feel like a celebration. The paneer was extraordinary.", "Ananya Mehta", "Indian comfort"], ["Every dish felt thoughtful without losing the joy of eating. We will be back very soon.", "Rohan Kapoor", "Chef's picks"], ["Beautiful room, warm service and the best coffee I have had in the city. A new favourite.", "Mira Shah", "Café experience"]].map(([quote, name, order]) => <blockquote key={name}><span>“</span><p>{quote}</p><footer><strong>{name}</strong><small>{order} · ★★★★★</small></footer></blockquote>)}</div></section>

      <section className="reserve" id="reserve"><div className="reserve-copy"><p className="eyebrow">Your next gathering</p><h2>Your table<br /><em>is waiting.</em></h2><p>Join us for a relaxed dining experience filled with flavours from around the world.</p><ReservationForm /></div><div className="reserve-image"><Image src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=90" alt="A welcoming restaurant table set for dinner" fill sizes="(max-width: 768px) 100vw, 50vw" /></div></section>

      <Footer />
    </main>
  );
}
