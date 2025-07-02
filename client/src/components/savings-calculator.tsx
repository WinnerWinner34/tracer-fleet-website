import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculatorRequestSchema, type CalculatorRequest, type CalculatorResponse } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

export default function SavingsCalculator() {
  const [results, setResults] = useState<CalculatorResponse | null>(null);

  const form = useForm<CalculatorRequest>({
    resolver: zodResolver(calculatorRequestSchema),
    defaultValues: {
      fleet_size: 50,
      monthly_fuel_cost: 12000,
      efficiency_improvement: 15,
    },
  });

  const calculatorMutation = useMutation({
    mutationFn: async (data: CalculatorRequest) => {
      const response = await apiRequest("POST", "/api/calculator", data);
      return response.json();
    },
    onSuccess: (data: CalculatorResponse) => {
      setResults(data);
    },
  });

  const onSubmit = (data: CalculatorRequest) => {
    calculatorMutation.mutate(data);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Calculate Your Fleet Savings
          </h2>
          <p className="text-lg text-gray-600">
            See how much your fleet could save with Tracer telematics solutions
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="fleet_size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fleet Size</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="50" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="monthly_fuel_cost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Fuel Cost ($)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="12000" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="efficiency_improvement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Efficiency Improvement (%)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="15" 
                            min="1" 
                            max="50"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={calculatorMutation.isPending}
                >
                  {calculatorMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    "Calculate Savings"
                  )}
                </Button>
              </form>
            </Form>

            {/* Results Display */}
            {results && results.success && (
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold text-tracer-dark mb-4">Your Potential Savings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.estimated_monthly_savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      ${results.estimated_annual_savings.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">
                      ${results.tracer_monthly_cost.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Tracer Monthly Cost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">
                      {results.roi_months} months
                    </div>
                    <div className="text-sm text-gray-600">ROI Timeline</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button 
                    onClick={scrollToContact}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            )}

            {/* Error Display */}
            {calculatorMutation.isError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-red-600">
                  Unable to calculate savings. Please check your inputs and try again.
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
