import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const qualifications = [
  {
    title: "Bachelor's in Computer Science",
    institution: "The Open University",
    year: "2020-2024",
    description: "Graduated with honors, specializing in software engineering and web technologies."
  },
  {
    title: "AWS Certified Practitioner",
    institution: "Amazon Web Services",
    year: "2023",
    description: "Certified in cloud development and deployment practices."
  },
];

const skills = [
  "Frontend Development", "Backend Development", "Cloud Architecture", "Database Design",
  "API Development", "Performance Optimization", "Testing & QA", "DevOps", "UI/UX Design",
  "Project Management", "Agile Methodologies", "Team Leadership"
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code that stands the test of time."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and approaches to solve complex problems."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to deliver exceptional user experiences."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and user satisfaction."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer with over 4 years of experience building modern, 
            scalable web applications. I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {values.map((value, index) => (
            <Card key={value.title} className="card-glow text-center">
              <CardHeader>
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Qualifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-glow">Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="card-glow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{qual.title}</CardTitle>
                  <CardDescription className="text-secondary font-semibold">
                    {qual.institution} • {qual.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-glow">Core Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}