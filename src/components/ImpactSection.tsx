import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Users, 
  Droplets, 
  GraduationCap, 
  Stethoscope, 
  Home,
  TrendingUp,
  MapPin
} from "lucide-react";

const impactStats = [
  {
    icon: Users,
    title: "Lives Changed",
    current: 127459,
    target: 150000,
    suffix: "",
    color: "text-donation-primary"
  },
  {
    icon: Droplets,
    title: "Clean Water Access",
    current: 45000,
    target: 50000,
    suffix: " people",
    color: "text-donation-trust"
  },
  {
    icon: GraduationCap,
    title: "Children Educated",
    current: 8945,
    target: 10000,
    suffix: "",
    color: "text-donation-secondary"
  },
  {
    icon: Stethoscope,
    title: "Medical Treatments",
    current: 23450,
    target: 25000,
    suffix: "",
    color: "text-donation-success"
  }
];

const currentProjects = [
  {
    title: "Emergency Relief Fund",
    location: "Southeast Asia",
    raised: 185000,
    target: 250000,
    supporters: 2340,
    urgent: true,
    description: "Providing immediate aid to families affected by recent natural disasters."
  },
  {
    title: "Clean Water Initiative",
    location: "Sub-Saharan Africa",
    raised: 95000,
    target: 120000,
    supporters: 1567,
    urgent: false,
    description: "Building sustainable water systems for rural communities."
  },
  {
    title: "Education Access Program",
    location: "Central America",
    raised: 67000,
    target: 80000,
    supporters: 890,
    urgent: false,
    description: "Providing school supplies and supporting teachers in underserved areas."
  }
];

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-donation-primary/10 text-donation-primary border-donation-primary/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real Impact, Real Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Your Donations
            <span className="block text-donation-primary">Making a Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every dollar donated creates measurable impact. Track our progress and see 
            how your generosity transforms lives around the world.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            const percentage = (stat.current / stat.target) * 100;
            
            return (
              <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {percentage.toFixed(0)}%
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-donation-primary transition-colors">
                    {stat.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-2xl">
                        {stat.current.toLocaleString()}{stat.suffix}
                      </span>
                      <span className="text-muted-foreground">
                        of {stat.target.toLocaleString()}{stat.suffix}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Current Projects */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Current Active Projects</h3>
            <p className="text-lg text-muted-foreground">
              Your donations are actively funding these critical initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => {
              const percentage = (project.raised / project.target) * 100;
              
              return (
                <Card key={index} className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-donation-trust" />
                          <span className="text-sm text-muted-foreground">
                            {project.location}
                          </span>
                        </div>
                        {project.urgent && (
                          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="font-bold text-xl mb-3 group-hover:text-donation-primary transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">
                            ${project.raised.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            of ${project.target.toLocaleString()}
                          </span>
                        </div>
                        
                        <Progress value={percentage} className="h-3" />
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {project.supporters.toLocaleString()} supporters
                          </span>
                          <span className="font-medium text-donation-success">
                            {(100 - percentage).toFixed(0)}% to go
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-accent to-muted p-4 border-t">
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 mr-2 text-donation-primary" />
                        Your donation directly supports this project
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};