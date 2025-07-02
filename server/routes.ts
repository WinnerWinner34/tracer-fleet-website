import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, calculatorRequestSchema, type CalculatorResponse } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Lead capture endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      res.json({ success: true, lead });
    } catch (error) {
      console.error("Lead creation error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid lead data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Savings calculator endpoint
  app.post("/api/calculator", async (req, res) => {
    try {
      const calculatorData = calculatorRequestSchema.parse(req.body);
      
      // Calculate savings based on input
      const { fleet_size, monthly_fuel_cost, efficiency_improvement } = calculatorData;
      
      // Tracer cost calculation: $25 per vehicle per month
      const tracer_monthly_cost = fleet_size * 25;
      
      // Calculate estimated savings based on efficiency improvement
      const estimated_monthly_savings = Math.round(
        (monthly_fuel_cost * efficiency_improvement) / 100
      );
      
      const estimated_annual_savings = estimated_monthly_savings * 12;
      const net_monthly_savings = estimated_monthly_savings - tracer_monthly_cost;
      
      // Calculate ROI in months
      const roi_months = tracer_monthly_cost > 0 
        ? Math.round((tracer_monthly_cost / Math.max(net_monthly_savings, 1)) * 10) / 10
        : 0;

      const response: CalculatorResponse = {
        estimated_monthly_savings,
        estimated_annual_savings,
        tracer_monthly_cost,
        net_monthly_savings,
        roi_months,
        success: true,
      };

      res.json(response);
    } catch (error) {
      console.error("Calculator error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid calculator data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get all leads (for admin purposes)
  app.get("/api/leads", async (_req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json({ success: true, leads });
    } catch (error) {
      console.error("Get leads error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve leads" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
