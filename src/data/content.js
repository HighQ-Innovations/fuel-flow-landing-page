import {
  Bell,
  Briefcase,
  Building2,
  ClipboardList,
  FileSpreadsheet,
  Fuel,
  Gauge,
  LifeBuoy,
  Smartphone,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react";

// Change this when the app is hosted at its final address
export const SIGN_IN_URL = "/login";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Roles", href: "#roles" },
];

export const FEATURES = [
  {
    icon: ClipboardList,
    title: "Daily tank records",
    text: "Log opening stock, deliveries received and closing stock for every product. Tank sales are worked out for you.",
  },
  {
    icon: Gauge,
    title: "Pump meter readings",
    text: "Capture each pump's readings and rate per litre, then export a clean meter report as a PDF.",
  },
  {
    icon: Wallet,
    title: "Daily accounts",
    text: "Record POS, cash, bank transfers, expenses and IOUs, and see the day's grand total without a calculator.",
  },
  {
    icon: FileSpreadsheet,
    title: "Summaries and Excel export",
    text: "Filter by date range and export a formatted Excel file with totals at the bottom of every column.",
  },
  {
    icon: Truck,
    title: "Outdoor and van sales",
    text: "Track outdoor sales, customer payments, outstanding balances and van stock movements in one place.",
  },
  {
    icon: Bell,
    title: "Notifications and templates",
    text: "Send email notifications to your team, using reusable message templates for routine updates.",
  },
  {
    icon: LifeBuoy,
    title: "Help center",
    text: "Staff can raise issues from inside the app, and admins track each request until it is resolved.",
  },
  {
    icon: Smartphone,
    title: "Works on any device",
    text: "Use it on desktop or phone, install it to your home screen, and keep a fallback page if the connection drops.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Record the tanks",
    text: "Enter opening, received and closing stock for each product at the start or end of the day.",
  },
  {
    number: "02",
    title: "Read the pumps",
    text: "Add each pump's meter readings and the rate per litre. Totals are calculated automatically.",
  },
  {
    number: "03",
    title: "Close the day",
    text: "Enter POS, cash, transfers, expenses and IOUs. The app brings it all together into the day's grand total.",
  },
  {
    number: "04",
    title: "Review and export",
    text: "Pick a date range, check the summary, and export to Excel or PDF for management and records.",
  },
];

export const ROLES = [
  {
    icon: ShieldCheck,
    title: "Administrators",
    text: "Set up stations, users and products. Review pump records, daily records and accounts across every station.",
  },
  {
    icon: Fuel,
    title: "Station staff",
    text: "Record tanks, meter readings and accounts for the day, and view or export the summary for their station.",
  },
  {
    icon: Briefcase,
    title: "Outdoor and van sales",
    text: "Manage outdoor customers, sales, payments and van operations, with balances always up to date.",
  },
  {
    icon: Building2,
    title: "HR and finance",
    text: "Review finance records, tank records and product summaries for AGO and PMS to keep the books accurate.",
  },
];

export const SUMMARY_HIGHLIGHTS = [
  "Pick any start and end date to filter the summary.",
  "See each product's totals, and a combined total for the period.",
  "Account figures are merged per day, so nothing is repeated or double-counted.",
  "Clean grey headers and bordered cells, ready to print or share.",
];

export const VAN_HIGHLIGHTS = [
  "Keep a running balance for every van.",
  "Check a customer's history and outstanding amount before a sale.",
  "Record outdoor payments against the right customer and sale.",
  "Give general managers a clear view of outdoor performance.",
];
