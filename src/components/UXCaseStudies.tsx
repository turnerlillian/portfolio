import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Clock, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Mobile App Redesign",
    description: "Redesigned a mobile shopping experience that increased conversion rates by 35% and reduced cart abandonment by 28%.",
    image: "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdpcmVmcmFtZXN8ZW58MXx8fHwxNzU5NTI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile UX", "E-commerce", "User Research", "Prototyping"],
    timeline: "3 months",
    team: "4 members",
    impact: "35% conversion increase",
    problem: "High cart abandonment and poor mobile checkout experience",
    solution: "Streamlined checkout flow with one-click payments and improved product discovery",
    process: [
      "User interviews and analytics review",
      "Competitive analysis and benchmarking",
      "Information architecture redesign",
      "Low and high-fidelity wireframing",
      "Interactive prototyping and testing",
      "Design system creation",
      "Developer handoff and QA"
    ],
    results: [
      "35% increase in mobile conversion rate",
      "28% reduction in cart abandonment",
      "45% faster checkout completion time",
      "92% user satisfaction score"
    ]
  },
  {
    id: 2,
    title: "SaaS Dashboard User Experience",
    description: "Redesigned a complex analytics dashboard to improve data visualization and reduce learning curve for new users.",
    image: "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdpcmVmcmFtZXN8ZW58MXx8fHwxNzU5NTI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Data Visualization", "SaaS", "Information Architecture", "B2B"],
    timeline: "4 months",
    team: "6 members",
    impact: "60% reduction in support tickets",
    problem: "Users struggled to understand complex data and frequently contacted support",
    solution: "Progressive disclosure with contextual help and intuitive data visualization",
    process: [
      "Stakeholder interviews and user journey mapping",
      "Data audit and hierarchy analysis",
      "Card sorting for information architecture",
      "Sketch and wireframe iterations",
      "High-fidelity prototyping",
      "Usability testing with target users",
      "Implementation and post-launch analysis"
    ],
    results: [
      "60% reduction in support tickets",
      "40% increase in feature adoption",
      "50% faster task completion",
      "89% user satisfaction improvement"
    ]
  },
  {
    id: 3,
    title: "Healthcare Provider Portal",
    description: "Designed a patient management system focused on accessibility and efficiency for healthcare professionals.",
    image: "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdpcmVmcmFtZXN8ZW58MXx8fHwxNzU5NTI1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Accessibility", "Enterprise", "Workflow Design"],
    timeline: "6 months",
    team: "8 members",
    impact: "25% faster patient processing",
    problem: "Complex workflows slowed down patient care and created documentation errors",
    solution: "Streamlined interface with smart defaults and error prevention",
    process: [
      "Ethnographic research in clinical settings",
      "Workflow analysis and pain point identification",
      "Accessibility audit and compliance planning",
      "Iterative design with clinical feedback",
      "Prototype testing in controlled environment",
      "HIPAA-compliant design system",
      "Training material development"
    ],
    results: [
      "25% faster patient processing time",
      "40% reduction in documentation errors",
      "WCAG 2.1 AA compliance achieved",
      "95% healthcare professional satisfaction"
    ]
  }
];

export function UXCaseStudies() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl mb-12 heading-seaglass">
              UX case studies
            </h1>
            <div className="accent-line-seaglass w-32 mx-auto mb-8"></div>
            <p className="text-xl text-seaglass-ink max-w-4xl mx-auto leading-tight font-montserrat">
              Behold the manifestations of design craft<br/>
              Each project a portal to enhanced human experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => {
              const colorClasses = ["seaglass-mint", "seaglass-blue", "seaglass-aqua", "seaglass-green", "seaglass-sand", "seaglass-cloud"];
              const color = colorClasses[index % colorClasses.length];
              return (
                <Card key={study.id} className={`card-seaglass h-full group ${color}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-seaglass-accent text-seaglass-ink font-bold border border-seaglass-green font-montserrat">
                        {study.timeline}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl mb-4 text-seaglass-accent font-black uppercase font-montserrat">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-seaglass-ink/90 leading-relaxed font-montserrat text-sm">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {study.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="bg-seaglass-badge text-seaglass-accent border border-seaglass-accent text-xs font-bold font-montserrat">
                          {tag.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm font-montserrat">
                      <div className="flex items-center gap-2 text-seaglass-accent">
                        <Clock className="w-4 h-4" />
                        <span>{study.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-seaglass-accent">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                      <div className="flex items-center gap-2 text-seaglass-green">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-bold">{study.impact.split(' ')[0]}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-8 btn-seaglass group-hover:bg-seaglass-green/80 transition-all duration-300 font-montserrat">
                      VIEW PROJECT
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}