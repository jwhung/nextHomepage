import Image from 'next/image'
import SocialLinks from '@/components/SocialLinks'
import FadeIn from '@/components/FadeIn'
import AnimatedElement from '@/components/AnimatedElement'
import ParallaxSection from '@/components/ParallaxSection'
import HoverCard from '@/components/HoverCard'
import GradientBackground from '@/components/GradientBackground'
import ResearchCard from '@/components/ResearchCard'

export default function Home() {
  return (
    <GradientBackground className="text-white">
      {/* Hero Section */}
      <ParallaxSection speed={0.2} className="py-10">
        <FadeIn>
          <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedElement type="scale" delay={0.3}>
                <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20">
                  <Image
                    src="/avatar.svg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </AnimatedElement>
              <div className="text-center md:text-left">
                <AnimatedElement type="slideRight" delay={0.5}>
                  <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Edurado Hung</h1>
                  <p className="text-xl text-zinc-400 mb-6">Product Manager / UX Strategist</p>
                  <p className="max-w-lg text-zinc-300 leading-relaxed">
                    Passionate about transforming complex problems into elegant product solutions.
                    Experienced in leading cross-functional teams and delivering user-centered digital experiences.
                  </p>
                  <SocialLinks />
                </AnimatedElement>
              </div>
            </div>
          </section>
        </FadeIn>
      </ParallaxSection>

      {/* Skills Section */}
      <ParallaxSection speed={-0.1} className="py-16 bg-gradient-to-r from-zinc-900/50 to-blue-900/10">
        <FadeIn>
          <section className="container mx-auto px-4 py-16">
            <AnimatedElement type="fadeIn">
              <h2 className="text-3xl font-bold mb-2 text-center">Skills & Expertise</h2>
              <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">A curated collection of skills developed through years of industry experience</p>
            </AnimatedElement>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { name: 'Product Strategy', icon: '🧠' },
                { name: 'User Research', icon: '🔍' },
                { name: 'Agile Methodologies', icon: '🔄' },
                { name: 'Data Analysis', icon: '📊' },
                { name: 'Wireframing', icon: '✏️' },
                { name: 'Prototyping', icon: '📱' },
                { name: 'Stakeholder Management', icon: '👥' },
                { name: 'Market Analysis', icon: '📈' }
              ].map((skill, index) => (
                <AnimatedElement key={skill.name} type="slideUp" delay={0.1 * index}>
                  <HoverCard hoverEffect="glow" className="h-full">
                    <div className="p-6 bg-zinc-800/30 rounded-xl backdrop-blur-sm h-full flex flex-col items-center justify-center text-center">
                      <span className="text-3xl mb-3">{skill.icon}</span>
                      <h3 className="font-medium">{skill.name}</h3>
                    </div>
                  </HoverCard>
                </AnimatedElement>
              ))}
            </div>
          </section>
        </FadeIn>
      </ParallaxSection>

      {/* Projects Section */}
      <ParallaxSection speed={0.15} className="py-20">
        <section className="container mx-auto px-4">
          <AnimatedElement type="fadeIn">
            <h2 className="text-3xl font-bold mb-2 text-center">Featured Projects</h2>
            <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">Showcasing innovative solutions to complex product challenges</p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Redesign',
                description: 'Led a cross-functional team to redesign the user journey, resulting in a 40% increase in conversion rate and improved customer satisfaction.',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
                tags: ['UX Research', 'UI Design', 'A/B Testing']
              },
              {
                title: 'Enterprise Dashboard',
                description: 'Developed product requirements and user stories for an enterprise analytics dashboard that streamlined reporting and decision-making processes.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                tags: ['Data Visualization', 'Enterprise UX', 'Product Strategy']
              },
              {
                title: 'Social Platform',
                description: 'Conducted extensive user research and competitive analysis to define the product roadmap for a social networking application.',
                image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
                tags: ['Social Media', 'Mobile App', 'User Engagement']
              }
            ].map((project, index) => (
              <AnimatedElement key={project.title} type="slideUp" delay={0.2 * index}>
                <HoverCard hoverEffect="lift" className="h-full overflow-hidden">
                  <div className="h-full bg-zinc-800/40 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-zinc-400 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-full">{tag}</span>
                        ))}
                      </div>
                      
                      <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        View Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </AnimatedElement>
            ))}
          </div>
        </section>
      </ParallaxSection>

      {/* Research Section */}
      <ParallaxSection speed={-0.1} className="py-24 bg-gradient-to-b from-zinc-900 to-blue-900/20">
        <section className="container mx-auto px-4">
          <AnimatedElement type="fadeIn">
            <h2 className="text-3xl font-bold mb-4 text-center">User Research & Insights</h2>
            <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">Discover key insights through in-depth user research to drive product decisions</p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <AnimatedElement type="slideUp" delay={0.1}>
              <ResearchCard 
                title="Enterprise User Behavior Analysis"
                imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                methodology="Qualitative Interviews + User Journey Mapping + Behavioral Data Analysis"
                findings="Identified key pain points in complex task flows for enterprise users and opportunities for efficiency improvements"
                impact="Redesigned workflow increased user efficiency by 30% and significantly reduced training costs"
              />
            </AnimatedElement>
            
            <AnimatedElement type="slideUp" delay={0.2}>
              <ResearchCard 
                title="Multi-Channel UX Optimization"
                imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                methodology="Competitive Analysis + A/B Testing + User Satisfaction Survey"
                findings="Inconsistent cross-platform experience was the main reason for user churn, with mobile conversion rate 40% lower than desktop"
                impact="Unified cross-platform experience design increased overall conversion by 18% and improved user satisfaction by 35%"
              />
            </AnimatedElement>
          </div>
        </section>
      </ParallaxSection>

      {/* Testimonials Section */}
      <ParallaxSection speed={0.1} className="py-20">
        <section className="container mx-auto px-4">
          <AnimatedElement type="fadeIn">
            <h2 className="text-3xl font-bold mb-2 text-center">Testimonials</h2>
            <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">Genuine feedback from our partners</p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Eduardo's product strategy perspective helped us redefine our product direction, resulting in significant business growth.",
                author: "Zhang Ming",
                position: "CEO, Tech Company"
              },
              {
                quote: "His deep understanding of user needs and data-driven decision-making approach brought new vitality to our product.",
                author: "Li Hua",
                position: "Product Director"
              },
              {
                quote: "Working with Eduardo was a pleasant experience. His expertise and communication skills made complex projects simple.",
                author: "Wang Fang",
                position: "Marketing Manager"
              }
            ].map((testimonial, index) => (
              <AnimatedElement key={testimonial.author} type="fadeIn" delay={0.15 * index}>
                <HoverCard hoverEffect="border" className="h-full">
                  <div className="p-6 bg-zinc-800/30 rounded-xl backdrop-blur-sm h-full flex flex-col">
                    <svg className="w-10 h-10 text-blue-500/70 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-zinc-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-zinc-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </HoverCard>
              </AnimatedElement>
            ))}
          </div>
        </section>
      </ParallaxSection>

      {/* Contact Section */}
      <ParallaxSection speed={-0.05} className="py-24 bg-gradient-to-t from-zinc-900 to-blue-900/10">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-800/30 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
            <AnimatedElement type="fadeIn">
              <h2 className="text-3xl font-bold mb-6 text-center">Let's Work Together</h2>
              <p className="text-zinc-400 text-center mb-8 max-w-2xl mx-auto">
              </p>
            </AnimatedElement>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <AnimatedElement type="slideUp" delay={0.1}>
                <a 
                  href="mailto:eduardo@example.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </AnimatedElement>
              
              <AnimatedElement type="slideUp" delay={0.2}>
                <a 
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View Resume
                </a>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Footer */}
      <FadeIn>
        <footer className="container mx-auto px-4 py-12 text-center border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto">
            <AnimatedElement type="fadeIn">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <span className="text-xl font-bold">Eduardo Hung</span>
                </div>
                
                <SocialLinks />
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#" className="hover:text-white transition-colors">Projects</a>
                <a href="#" className="hover:text-white transition-colors">Research</a>
                <a href="#" className="hover:text-white transition-colors">About Me</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
              
              <p className="text-zinc-500">© 2023 Eduardo Hung. All rights reserved.</p>
            </AnimatedElement>
          </div>
        </footer>
      </FadeIn>
    </GradientBackground>
  )
}