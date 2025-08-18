import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const DonationHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Heart className="w-4 h-4 text-donation-accent" />
            <span className="text-sm font-medium">Trusted by 50,000+ donors worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Change Lives,
            <span className="block bg-gradient-to-r from-donation-secondary to-donation-accent bg-clip-text text-transparent">
              One Donation
            </span>
            at a Time
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of compassionate individuals making a real difference. 
            Every donation creates ripples of hope across communities in need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="px-12 py-6 text-xl">
              Donate Now
              <Heart className="w-6 h-6 ml-2" />
            </Button>
            <Button variant="donation-outline" size="lg" className="px-8 py-6 text-lg">
              Learn Our Impact
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-center text-white">
                <Users className="w-12 h-12 mx-auto mb-4 text-donation-accent" />
                <div className="text-3xl font-bold mb-2">127,459</div>
                <div className="text-white/80">Lives Touched</div>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-center text-white">
                <Target className="w-12 h-12 mx-auto mb-4 text-donation-secondary" />
                <div className="text-3xl font-bold mb-2">$2.8M</div>
                <div className="text-white/80">Raised This Year</div>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-center text-white">
                <Heart className="w-12 h-12 mx-auto mb-4 text-donation-accent" />
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-white/80">Directly to Cause</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};