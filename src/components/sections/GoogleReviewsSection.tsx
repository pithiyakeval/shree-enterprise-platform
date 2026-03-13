import { motion } from "framer-motion"
import { Star } from "lucide-react"

import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/badge"

export default function GoogleReviewsSection() {

  const reviews = [
    {
      name: "Jethabhai Pithiya",
      place: "Nagichana",
      text: "Excellent solar installation service. The team handled everything including subsidy paperwork.",
      rating: 5,
    },
    {
      name: "Naranbhai Pithiya",
      place: "Junagadh",
      text: "Our wedding mandap decoration was beautiful. Everyone appreciated the setup.",
      rating: 5,
    },
    {
      name: "Dineshbhai Nandha",
      place: "Talala",
      text: "Very professional solar installation. System working perfectly for 2 years.",
      rating: 5,
    }
  ]

  return (

    <SectionWrapper className="relative py-32 overflow-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 rounded-[80px] md:rounded-[140px] bg-gradient-to-b from-white via-slate-50 to-indigo-50 shadow-[0_30px_120px_rgba(0,0,0,0.06)]"></div>

      {/* FLOATING BLOBS */}

      <motion.div
        animate={{ y:[0,-60,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y:[0,60,0] }}
        transition={{ duration:20, repeat:Infinity }}
        className="absolute w-[450px] h-[450px] bg-purple-400/20 blur-[120px] rounded-full bottom-[-150px] right-[-120px]"
      />

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}

        <div className="text-center mb-20">

          <Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
            Google Reviews
          </Badge>

          <SectionHeader
            title="Rated 5★ by Our Customers"
            subtitle="Trusted by families across Junagadh region"
          />

        </div>


        {/* RATING SUMMARY */}

        <div className="flex flex-col items-center mb-16">

          <div className="flex gap-1 mb-2">

            {[...Array(5)].map((_,i)=>(
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400"/>
            ))}

          </div>

          <p className="text-lg font-semibold">
            5.0 Rating on Google
          </p>

          <p className="text-muted-foreground text-sm">
            Based on verified customer reviews
          </p>

        </div>


        {/* REVIEW CARDS */}

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {reviews.map((review,i)=>(
            
            <motion.div
              key={i}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.15}}
              whileHover={{y:-10}}
              className="group relative"
            >

              {/* glow */}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"/>

              {/* card */}

              <div className="relative p-8 rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition">

                {/* stars */}

                <div className="flex gap-1 mb-4">

                  {[...Array(review.rating)].map((_,index)=>(
                    <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                  ))}

                </div>

                {/* text */}

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* name */}

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-semibold">
                    {review.name[0]}
                  </div>

                  <div>

                    <p className="font-semibold text-foreground">
                      {review.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {review.place}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </SectionWrapper>

  )

}