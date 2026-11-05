import {
  Bell,
  Briefcase,
  Fuel,
  Gauge,
  HelpCircle,
  Layers,
  Smartphone,
  SlidersHorizontal,
  Table2,
  Truck,
  Wallet,
} from "lucide-react";

// Set these in .env. Fallbacks keep the build working before they are filled in.
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://www.yourdomain.com";
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "hello@yourdomain.com";
export const SIGN_IN_URL = "/login";
export const DEMO_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Fuel Flow demo request")}`;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Roles", href: "#roles" },
];

export const AUDIENCES = [
  "Station owners",
  "Station managers",
  "Head office finance",
];

export const FEATURES = [
  {
    icon: Layers,
    title: "Tank records",
    text: "Track opening stock, deliveries and closing levels for each tank.",
  },
  {
    icon: Gauge,
    title: "Pump meter readings",
    text: "Record opening and closing meters to account for every litre sold.",
  },
  {
    icon: Wallet,
    title: "Daily accounts",
    text: "Bring sales, payments and expenses into one daily account.",
  },
  {
    icon: Table2,
    title: "Summaries & Excel export",
    text: "Review daily totals and export clear records for your finance team.",
  },
  {
    icon: Truck,
    title: "Outdoor & van sales",
    text: "Keep deliveries, collections and outstanding balances in view.",
  },
  {
    icon: Bell,
    title: "Notifications",
    text: "Keep up with record updates that need your team's attention.",
  },
  {
    icon: HelpCircle,
    title: "Help center",
    text: "Find practical guidance when your team needs a hand.",
  },
  {
    icon: Smartphone,
    title: "Device support",
    text: "Work with your station records from a phone, tablet or computer.",
  },
];

export const SUMMARY_POINTS = [
  "Review litres and sales by product.",
  "Keep each day's records grouped together.",
  "See daily totals without rebuilding the sheet.",
  "Export to Excel for checks and reporting.",
];

export const OUTDOOR_POINTS = [
  "Record fuel sold on outdoor and van runs.",
  "Keep customer and delivery details together.",
  "Track collections against each sale.",
  "See what is paid and what is still outstanding.",
];

export const ROLES = [
  {
    icon: SlidersHorizontal,
    title: "Administrators",
    text: "Organise your stations, people and records with a shared view of the business.",
    label: "Oversee the operation",
  },
  {
    icon: Fuel,
    title: "Station Manager",
    text: "Enter tank levels, pump readings and daily accounts as the day unfolds.",
    label: "Capture the working day",
  },
  {
    icon: Truck,
    title: "Outdoor & van sales",
    text: "Record sales away from the station and keep customer balances in sight.",
    label: "Follow each delivery",
  },
  {
    icon: Briefcase,
    title: "HR & finance",
    text: "Review team records and daily accounts, then export summaries for follow-up.",
    label: "Review the details",
  },
];

export const STEPS = [
  {
    title: "Record tanks",
    text: "Log opening levels, deliveries and closing stock.",
  },
  {
    title: "Read pumps",
    text: "Enter meter readings and record litres sold.",
  },
  {
    title: "Close the day",
    text: "Bring sales, collections and expenses together.",
  },
  {
    title: "Review",
    text: "Check the summary of your daily records.",
  },
];

export const SUMMARY_TABLE = {
  title: "Station_summary_04_Nov.xlsx",
  subtitle: "Daily sales · All products",
  date: "04 Nov 2026",
  note: "Daily sales summary",
  columns: ["Product", "Litres", "Rate (₦)", "Sales (₦)"],
  rows: [
    ["PMS", "2,400", "1,000", "2,400,000"],
    ["AGO", "600", "1,200", "720,000"],
    ["DPK", "200", "1,100", "220,000"],
  ],
  total: ["TOTAL", "3,200", "–", "3,340,000"],
};
