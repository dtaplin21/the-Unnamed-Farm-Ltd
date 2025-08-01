/*eslint-disable*/
import React from 'react'
import "./About.css"
import Video from "../../assets/farm-walk.mp4"
import Farm from "../../assets/New-farm-video.mp4"

const About = ({setPlay}) => {
  return (
    <div className="about">
      <div className="about-video-section">
        <div className="video-description">
          <h4>WATCH WHY IT ALL STARTED</h4>
        </div>
        <video 
          src={Farm}
          controls
          autoplay
          loop
          muted
          className="farm-walk"
        >
        </video>
      </div>
      <div className="about-text-section">
        <h3>ABOUT THE UNNAMED FARM LTD</h3>
        <h2>Nurturing Tomorrows Future Today</h2>
        <p>In the heart of West Africa, Liberia's farmers have long stood at the foundation of the nation's economy
and cultural identity. We produce over 34% of Liberia's GDP and represent more than 60% of the national
workforce (World Bank, 2024). Yet, despite our vital role, rural communities like ours continue to face
overwhelming challenges—with poverty rates reaching nearly 70% in the countryside (Sida, 2024).
On our fertile land, we cultivate staples like rice, cassava, and cocoa. But the paradox is hard to ignore:
while we grow what we eat, Liberia still imports nearly 70% of its rice (FAO, 2024). And while we export
raw materials like cocoa and cassava, they leave our shores unprocessed, capturing only 10% of their final
value in global markets—because the real profits are made elsewhere (World Bank, 2024).
For me, this reality is more than statistics—it's deeply personal.
Our farm is in Segbehplay, Nimba County, a place where my family has lived and worked the land for
generations. This is more than farmland—it's legacy. My father, Neamon Fallah, along with his brothers,
our neighbors, and extended kin, have always been part of this story. They are not just farmers. They are
stewards of our history, our land, and our community's survival.
My journey began in 1999, at the height of Liberia's civil unrest. Forced to leave the country, my family
sought safety in the United States. Through the I-94 refugee asylum program, my grandfather—already
living in America—filed for five of his eldest grandchildren, including me, to join him. Before we left, he
gave us a purpose:
"I'm bringing you to America for a better education—so you can return and help the people
you left behind."
Those words became a compass in my life.
In the U.S., I pursued that education and built a future—but never lost sight of the mission. Then in 2021,
after 22 years away, I returned to Liberia. What I saw was a painful reminder of everything my
grandfather had warned us about: underdeveloped infrastructure, limited schools, and a reliance on
subsistence farming that keeps families trapped in survival mode rather than building toward prosperity.
That return was a turning point.
It led to the founding of The UnNamed Farm Ltd., rooted on our ancestral land. We're now scaling up
across 700 acres, cultivating rice, cassava, and cocoa not just for subsistence, but for transformation. With
on-site processing facilities—fermentation units, cassava grating and drying systems, rice mills—we are
reclaiming the value chain. We're keeping more of the profit, the opportunity, and the ownership right
here at home.
This isn't just about farming. It's about solutions.
In Africa, transport costs alone can inflate expenses by 30–40% (White & Case, 2023). Financing is
scarce. Processing technology is often out of reach due to regulatory and market barriers (Kearney, 2024).
But if we bridge this gap in value-added processing, intra-African trade could grow by $22 billion

annually (UNECA, 2025). We're using blockchain for traceability, enabling us to sell in international
markets at 20–30% premium rates for organic and ethical products.
Our philosophy is captured in our slogan:
"UnNamed by choice. Remembered by purpose."
This is more than a name—it's a movement. We've committed 10% equity to our local community,
established CSR programs to support rural schools and clinics, and ensured that our farmworkers earn fair
and dignified wages. We're proving that rural agriculture doesn't have to mean poverty—it can mean
partnership, innovation, and sustainable prosperity.
When you support The UnNamed Farm Ltd., you're not just investing in a company.
You're aligning with family farmers who are rewriting the story of African agriculture—one acre, one
seed, one community at a time.
Let's build a legacy together.</p>
      </div>
    </div>
  )
}

export default About