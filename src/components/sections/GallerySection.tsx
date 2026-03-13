import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionWrapper from "@/components/ui/SectionWrapper"
import SectionHeader from "@/components/ui/SectionHeader"
import GradientButton from "@/components/ui/GradientButton"
import { Badge } from "@/components/ui/badge"

import { Sun, Sparkles } from "lucide-react"

import solar1 from "@/assets/solar-1.jpg"
import solar2 from "@/assets/solar-2.jpg"
import mandap1 from "@/assets/mandap-1.jpg"
import mandap2 from "@/assets/mandap-2.jpg"

export default function GallerySection() {

  const solarGallery = [
    { img: solar1, text: "5kW Rooftop Installation - Nagichana" },
    { img: solar2, text: "Professional Inverter Setup - Talala" },
  ]

  const mandapGallery = [
    { img: mandap1, text: "Traditional Wedding Mandap - Junagadh" },
    { img: mandap2, text: "Engagement Stage Setup - Nagichana" },
  ]

  return (

    <SectionWrapper id="gallery" className="relative py-32 overflow-hidden">

      {/* PREMIUM SPLIT BACKGROUND */}

      <motion.div
        animate={{ scale:[1,1.03,1] }}
        transition={{ duration:20, repeat:Infinity }}
        className="absolute inset-0 -z-10 overflow-hidden rounded-[80px] md:rounded-[140px] shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
      >

        <div className="grid grid-cols-2 h-full">

          <div
            className="bg-cover bg-center opacity-20"
            style={{ backgroundImage:`url(${solar1})` }}
          />

          <div
            className="bg-cover bg-center opacity-20"
            style={{ backgroundImage:`url(${mandap1})` }}
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-indigo-50"/>

      </motion.div>


      {/* NOISE TEXTURE */}

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"/>


      {/* FLOATING BLOBS */}

      <motion.div
        animate={{ y:[0,-60,0] }}
        transition={{ duration:18, repeat:Infinity }}
        className="absolute w-[520px] h-[520px] bg-blue-400/20 blur-[140px] rounded-full -top-40 -left-40"
      />

      <motion.div
        animate={{ y:[0,60,0] }}
        transition={{ duration:20, repeat:Infinity }}
        className="absolute w-[450px] h-[450px] bg-purple-400/20 blur-[140px] rounded-full bottom-[-150px] right-[-120px]"
      />


      <div className="container mx-auto px-6 relative">

        {/* HEADER */}

        <div className="text-center mb-20">

          <Badge className="mb-6 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
            Our Portfolio
          </Badge>

          <SectionHeader
            title="Our Work"
            subtitle="See the quality and craftsmanship we bring to every project"
          />

        </div>


        {/* GLASS PANEL */}

        <div className="max-w-6xl mx-auto rounded-[60px] md:rounded-[80px] border border-white/40 bg-white/60 backdrop-blur-2xl p-10 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">

          <Tabs defaultValue="solar">

            {/* TABS */}

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-14 bg-white/70 backdrop-blur-xl border border-white/40 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

              <TabsTrigger
                value="solar"
                className="flex items-center gap-2 data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition"
              >
                <Sun className="w-4 h-4"/>
                Solar Installations
              </TabsTrigger>

              <TabsTrigger
                value="mandap"
                className="flex items-center gap-2 data-[state=active]:bg-pink-500 data-[state=active]:text-white transition"
              >
                <Sparkles className="w-4 h-4"/>
                Mandap Decorations
              </TabsTrigger>

            </TabsList>


            {/* SOLAR GALLERY */}

            <TabsContent value="solar">

              <div className="grid md:grid-cols-2 gap-10">

                {solarGallery.map((item,i)=>(
                  
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:40 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ duration:0.6, delay:i*0.2 }}
                    whileHover={{ y:-12, scale:1.02 }}
                    className="group relative"
                  >

                    {/* glow */}

                    <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"/>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-500">

                      <div className="relative overflow-hidden">

                        <img
                          src={item.img}
                          alt={item.text}
                          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* shine sweep */}

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
                        bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] 
                        translate-x-[-100%] group-hover:translate-x-[100%]"/>

                      </div>

                      {/* text overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">

                        <p className="text-white text-lg font-semibold">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </TabsContent>


            {/* MANDAP GALLERY */}

            <TabsContent value="mandap">

              <div className="grid md:grid-cols-2 gap-10">

                {mandapGallery.map((item,i)=>(
                  
                  <motion.div
                    key={i}
                    initial={{ opacity:0, y:40 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ duration:0.6, delay:i*0.2 }}
                    whileHover={{ y:-12, scale:1.02 }}
                    className="group relative"
                  >

                    <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"/>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-500">

                      <div className="relative overflow-hidden">

                        <img
                          src={item.img}
                          alt={item.text}
                          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
                        bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] 
                        translate-x-[-100%] group-hover:translate-x-[100%]"/>

                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">

                        <p className="text-white text-lg font-semibold">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </motion.div>

                ))}

              </div>

            </TabsContent>

          </Tabs>

        </div>


        {/* CTA */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mt-24"
        >

          <GradientButton>
            Request Your Project
          </GradientButton>

        </motion.div>

      </div>

    </SectionWrapper>

  )

}