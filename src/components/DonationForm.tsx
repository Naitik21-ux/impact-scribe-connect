import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, CreditCard, Lock } from "lucide-react";
import { toast } from "sonner";

const donationAmounts = [
  { value: "25", label: "$25", impact: "Provides meals for 5 families" },
  { value: "50", label: "$50", impact: "Supports a child's education for 1 month" },
  { value: "100", label: "$100", impact: "Provides clean water for 20 people" },
  { value: "250", label: "$250", impact: "Funds medical care for 3 patients" },
];

export const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAnonymous: false
  });

  const currentAmount = customAmount || selectedAmount;
  const selectedImpact = donationAmounts.find(amount => amount.value === selectedAmount)?.impact || "Making a meaningful difference";

  const handleDonate = () => {
    if (!currentAmount || parseFloat(currentAmount) < 5) {
      toast.error("Minimum donation amount is $5");
      return;
    }
    
    if (!donorInfo.isAnonymous && (!donorInfo.firstName || !donorInfo.lastName || !donorInfo.email)) {
      toast.error("Please fill in all required fields");
      return;
    }

    // For now, just show a success message
    // When Supabase is connected, this will process the actual payment
    toast.success("Thank you! Redirecting to secure payment...");
    console.log("Donation data:", { amount: currentAmount, donorInfo });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Make Your Donation</h2>
            <p className="text-lg text-muted-foreground">
              Choose your contribution amount and see the direct impact you'll make
            </p>
          </div>

          <Card className="shadow-[var(--shadow-card)] border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Heart className="w-6 h-6 text-donation-primary" />
                Your Generous Gift
              </CardTitle>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield className="w-4 h-4 text-donation-success" />
                <span className="text-sm text-muted-foreground">
                  100% secure and encrypted
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Amount Selection */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Select Donation Amount
                </Label>
                <RadioGroup
                  value={customAmount ? "custom" : selectedAmount}
                  onValueChange={(value) => {
                    if (value !== "custom") {
                      setSelectedAmount(value);
                      setCustomAmount("");
                    }
                  }}
                  className="grid grid-cols-2 gap-4 mb-4"
                >
                  {donationAmounts.map((amount) => (
                    <div key={amount.value} className="relative">
                      <RadioGroupItem
                        value={amount.value}
                        id={amount.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={amount.value}
                        className="flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 peer-checked:border-donation-primary peer-checked:bg-accent hover:border-donation-primary/50"
                      >
                        <span className="font-bold text-lg">{amount.label}</span>
                        <span className="text-xs text-muted-foreground mt-1">
                          {amount.impact}
                        </span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {/* Custom Amount */}
                <div className="flex items-center gap-2 mt-4">
                  <RadioGroup
                    value={customAmount ? "custom" : selectedAmount}
                    onValueChange={() => {}}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="custom"
                        id="custom"
                        onClick={() => setSelectedAmount("")}
                      />
                      <Label htmlFor="custom" className="font-medium">
                        Other amount:
                      </Label>
                    </div>
                  </RadioGroup>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className="pl-8"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      min="5"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Display */}
              {currentAmount && (
                <div className="bg-gradient-to-r from-accent to-muted p-4 rounded-lg border border-donation-primary/20">
                  <h4 className="font-semibold text-donation-primary mb-2">
                    Your Impact: ${currentAmount}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedImpact}
                  </p>
                </div>
              )}

              <Separator />

              {/* Donor Information */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Donor Information
                </Label>
                
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={donorInfo.isAnonymous}
                    onChange={(e) => setDonorInfo(prev => ({ 
                      ...prev, 
                      isAnonymous: e.target.checked 
                    }))}
                    className="rounded"
                  />
                  <Label htmlFor="anonymous" className="text-sm">
                    Make this donation anonymous
                  </Label>
                </div>

                {!donorInfo.isAnonymous && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={donorInfo.firstName}
                        onChange={(e) => setDonorInfo(prev => ({ 
                          ...prev, 
                          firstName: e.target.value 
                        }))}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={donorInfo.lastName}
                        onChange={(e) => setDonorInfo(prev => ({ 
                          ...prev, 
                          lastName: e.target.value 
                        }))}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                )}

                {!donorInfo.isAnonymous && (
                  <div className="mb-4">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo(prev => ({ 
                        ...prev, 
                        email: e.target.value 
                      }))}
                      placeholder="john@example.com"
                    />
                  </div>
                )}
              </div>

              {/* Security Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  SSL Encrypted
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  PCI Compliant
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <CreditCard className="w-3 h-3" />
                  Stripe Secured
                </Badge>
              </div>

              {/* Donate Button */}
              <Button
                variant="donation"
                size="lg"
                className="w-full py-6 text-lg"
                onClick={handleDonate}
                disabled={!currentAmount || parseFloat(currentAmount) < 5}
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate ${currentAmount || "0"} Now
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By proceeding, you agree to our terms and privacy policy. 
                You will receive a tax-deductible receipt via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};