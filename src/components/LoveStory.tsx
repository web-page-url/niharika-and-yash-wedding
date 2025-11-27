import { motion } from "framer-motion";
import { Heart, Music, Sun, Palette, Gem } from "lucide-react";

const timeline = [
  {
    icon: Palette,
    title: "Shagun & Mehndi",
    date: "February 2, 2026",
    description: "Adorning hands with intricate henna designs and blessings from family, symbolizing love and prosperity.",
    color: "text-green-600",
    image: "/niharika-mehadi-1.0.png",
  },
  {
    icon: Gem,
    title: "Engagement",
    date: "February 5, 2026",
    description: "The beginning of our forever. Join us as we exchange rings and promises.",
    color: "text-accent",
    image: "/engagement-1.png",
  },
  {
    icon: Music,
    title: "Sangeet Night",
    date: "February 5, 2026",
    description: "A night of music, dance, and celebration. Put on your dancing shoes!",
    color: "text-primary",
    image: "/niharika-sangeet-1.0.png",
  },
  {
    icon: Sun,
    title: "Haldi Ceremony",
    date: "February 6, 2026",
    description: "A splash of yellow and a glow of love. Blessing the couple with turmeric and joy in the morning.",
    color: "text-yellow-500",
    image: "/niharika-haldi-1.0.png",
  },
  {
    icon: Heart,
    title: "The Wedding",
    date: "February 6, 2026",
    description: "The big day! Witness our union as we tie the knot and start our journey together.",
    color: "text-red-500",
    image: "/niharika-bride-1.0.png",
  },
];

const LoveStory = () => {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gradient-romantic mb-4">
            Wedding Celebrations
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us in our beautiful journey of celebrations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center md:items-start justify-start ${!isEven && "md:justify-end"} mb-12 md:mb-16`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "var(--shadow-romantic)" }}
                  className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-5/12 bg-card rounded-2xl p-6 shadow-lg border border-border ${isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                >
                  {/* Event Image */}
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-primary/10 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent font-medium">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-glow"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
