import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  message: text("message"),
  fleet_size: integer("fleet_size"),
  current_solution: text("current_solution"),
  created_at: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  created_at: true,
});

export const calculatorRequestSchema = z.object({
  fleet_size: z.number().min(1, "Fleet size must be at least 1"),
  monthly_fuel_cost: z.number().min(0, "Monthly fuel cost must be positive"),
  efficiency_improvement: z.number().min(1).max(50, "Efficiency improvement must be between 1-50%"),
});

export const calculatorResponseSchema = z.object({
  estimated_monthly_savings: z.number(),
  estimated_annual_savings: z.number(),
  tracer_monthly_cost: z.number(),
  net_monthly_savings: z.number(),
  roi_months: z.number(),
  success: z.boolean(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;
export type CalculatorRequest = z.infer<typeof calculatorRequestSchema>;
export type CalculatorResponse = z.infer<typeof calculatorResponseSchema>;
