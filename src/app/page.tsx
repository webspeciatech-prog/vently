import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RisingCosts from "@/components/RisingCosts";
import WhyUs from "@/components/WhyUs";
import CustomerCount from "@/components/CustomerCount";
import TrustSymbolsV2 from "@/components/TrustSymbols";
import VerifiedAuthority from "@/components/VerifiedAuthority";
import ReviewSlider from "@/components/ReviewSlider";
import FAQV2 from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import LeadModal from "@/components/LeadModal";
import ActivityToast from "@/components/ActivityToast";

export const metadata: Metadata = {
  title: "Professional Air Duct Cleaning Services | Vently Air",
  description:
    "Breathe cleaner air today. Vently Air provides certified air duct, dryer vent, and HVAC system cleaning services for homes and businesses. 100% satisfaction guaranteed.",
  keywords: [
    "air duct cleaning",
    "dryer vent cleaning",
    "HVAC cleaning",
    "indoor air quality",
  ],
};

const PHONE = "(800) 836-8591";
const EMAIL = "hello@ventlyair.com";

const navData = {
  logo: { name: "Vently", accent: "Air" },
  links: [],
  phone: PHONE,
  ctaLabel: "Get Free Estimate",
  ctaHref: "#contact",
};

const footerData = {
  logo: { name: "Vently", accent: "Air" },
  tagline:
    "Your local experts in professional air quality and home cleaning services.",
  socials: [{ initial: "F", href: "#", label: "Facebook" }],
  columns: [
    {
      heading: "Our Services",
      links: [
        { label: "Duct Cleaning", href: "#services" },
        { label: "Dryer Vent Cleaning", href: "#services" },
        { label: "Air Sanitization", href: "#services" },
      ],
    },
  ],
  contact: [{ icon: "📍", label: "Serving Major Metro Areas Locally" }],
  certifications: ["NADCA Member", "EPA Certified", "BBB A+ Rated"],
  phone: PHONE,
  email: EMAIL,
  bottomLeft: `© ${new Date().getFullYear()} Vently Air`,
  bottomRight: "Licensed, Bonded & Insured",
};

const heroData = {
  badge: "Certified Air Duct Cleaning",
  headline: {
    main: "Professional Air Duct",
    accent: "Cleaning Services",
    highlight: "In Your Area",
  },
  subtext:
    "Breathe cleaner air today with our hospital-grade sanitization and deep cleaning technology.",
  benefits: [
    "Lowest Price Guarantee",
    "100% Genuine Service",
    "Free Inspection & Price List",
  ],
  primaryCta: { label: "Schedule My Cleaning", modal: true },
  phone: PHONE,
  stats: [
    { icon: "🏠", value: "75+", label: "Homes Cleaned" },
    { icon: "⚡", value: "15+", label: "Years Exp." },
    { icon: "👨‍🔧", value: "100+", label: "Expert Techs" },
  ],
};

const servicesData = {
  sectionLabel: "Professional Cleaning Suite",
  heading: "What Services",
  headingAccent: "We Provide",
  subheading:
    "Complete air quality and cleaning solutions tailored for residential and commercial spaces.",
  items: [
    {
      emoji: "💨",
      title: "Air Duct Cleaning",
      description:
        "Full system deep cleaning using high-powered suction to remove decades of particulates and allergens.",
      highlight: "Recommended",
      accentColor: "#67b1e1",
      glowColor: "rgba(103,177,225,0.15)",
    },
    {
      emoji: "🌀",
      title: "Dryer Vent Cleaning",
      description:
        "Protect your home from dryer fire hazards and significantly improve drying efficiency.",
      highlight: "Safety",
      accentColor: "#ef4444",
      glowColor: "rgba(239,68,68,0.12)",
    },
    {
      emoji: "🌿",
      title: "Air Sanitization",
      description:
        "Hospital-grade antimicrobial treatment to eliminate odors, bacteria, and microbial growth.",
      highlight: null,
      accentColor: "#10b981",
      glowColor: "rgba(16,185,129,0.12)",
    },
  ],
  bottomPrompt: "Looking for a full home air quality assessment?",
  bottomCtaLabel: "Book Your Free Audit",
  bottomCtaHref: "#contact",
};

const whyUsData = {
  sectionLabel: "The Vently Difference",
  heading: "Why Homeowners",
  headingAccent: "Trust Us",
  body: "We set the standard for home cleaning services. Our dedicated team uses specialized equipment and industry-leading methods to ensure your home is cleaner and healthier.",
  certifications: ["NADCA Certified", "EPA Compliant", "OSHA Trained"],
  stats: [
    { v: "15k+", l: "Homes Cleaned" },
    { v: "5,000+", l: "Verified Reviews" },
    { v: "100%", l: "Satisfaction" },
  ],
  ctaLabel: "Book Now",
  ctaHref: "#contact",
  benefits: [
    {
      icon: "🛡️",
      title: "Certified Cleaning",
      description:
        "Every technician is NADCA-certified and background-checked for your peace of mind.",
      color: "#67b1e1",
    },
    {
      icon: "⚡",
      title: "Speed & Quality",
      description:
        "Efficient same-day service that never cuts corners on quality or safety.",
      color: "#10b981",
    },
    {
      icon: "💰",
      title: "No Hidden Costs",
      description:
        "The price we quote is the price you pay. Transparent, honest flat-rate pricing.",
      color: "#f59e0b",
    },
    {
      icon: "✅",
      title: "The Guarantee",
      description:
        "100% Satisfaction Guarantee. If you're not happy, we return and fix it at no cost.",
      color: "#8b5cf6",
    },
  ],
};

const trustSymbolsData = {
  symbols: [
    { icon: "🛡️", text: "EPA Certified" },
    { icon: "🏆", text: "NADCA Member" },
    { icon: "⭐", text: "Google Guaranteed" },
    { icon: "✅", text: "Licensed & Insured" },
  ],
};

const faqData = {
  sectionLabel: "Duct Cleaning FAQ",
  heading: "Frequently Asked",
  headingAccent: "Questions",
  certBadge: {
    icon: "🛡️",
    title: "Expert Certification",
    text: "Our technicians are fully certified by NADCA and EPA, ensuring your home's air quality is handled by the industry's best.",
  },
  items: [
    {
      question: "How often should I clean my ducts?",
      answer:
        "The EPA suggests cleaning every 3-5 years, or more frequently if you have pets, allergies, or recent renovations.",
    },
    {
      question: "How long does a cleaning take?",
      answer:
        "A typical single-family home takes between 2 to 4 hours depending on the size and layout.",
    },
    {
      question: "Are the sanitizers safe for pets?",
      answer:
        "Yes, we use non-toxic, hospital-grade sanitizers that are perfectly safe for pets and children.",
    },
    {
      question: "Will duct cleaning help with my allergies?",
      answer:
        "Yes, by removing allergens like dust, pollen, and pet dander from your HVAC system, duct cleaning can significantly improve indoor air quality and reduce allergy symptoms.",
    },
    {
      question: "Do you offer commercial air duct cleaning?",
      answer:
        "Yes, we provide comprehensive commercial air duct cleaning services tailored to the size and needs of your business or facility.",
    },
  ],
};

const risingCostsData = {
  sectionLabel: "Efficiency Audit",
  heading: "What's Behind Rising",
  headingAccent: "HVAC Costs?",
  subheading:
    "If your utility bills are creeping up, your HVAC system is likely struggling against hidden debris. Regular duct cleaning isn't just about air quality—it's about financial efficiency.",
  image: {
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop",
    alt: "HVAC duct system requiring professional cleaning",
    badgeTitle: "Before Professional Cleaning",
    badgeText: "Reduced airflow & rising costs",
  },
  alert: {
    icon: "!",
    text: "Dirty ducts can increase energy consumption by 15–25%.",
  },
  factors: [
    {
      icon: "🔌",
      title: "Airflow Restriction",
      description:
        "Clogged ducts force your system to run longer, spiking electricity bills by up to 20%.",
    },
    {
      icon: "🧫",
      title: "Debris Buildup",
      description:
        "Dust and microbial growth on coils insulate the heat exchange, wasting energy.",
    },
    {
      icon: "⚙️",
      title: "Mechanical Wear",
      description:
        "Dirty components cause friction and overheating, leading to expensive part failures.",
    },
  ],
};

const customerCountData = {
  sectionLabel: "The Vently Promise",
  heading: "Why our customers count on us",
  headingAccent: "every single time.",
  subheading:
    "We've built our reputation on three simple pillars: punctuality, transparency, and deep respect for your living space.",
  guaranteeBadge: {
    icon: "🤝",
    title: "100% Satisfaction Guaranteed",
    text: "We don't leave until you're breathing easier.",
  },
  ctaLabel: "Book Your Cleaning",
  reasons: [
    {
      title: "On-Time Arrival",
      text: "We respect your schedule. Our technicians arrive within the promised window, every time.",
      icon: "🕒",
    },
    {
      title: "Crystal Clear Pricing",
      text: "No hidden fees or surprise upcharges. The quote you get is the price you pay.",
      icon: "💎",
    },
    {
      title: "Respect for Your Home",
      text: "We wear protective shoe covers and use floor guards to keep your home spotless.",
      icon: "🏠",
    },
  ],
};

const verifiedAuthorityData = {
  sectionLabel: "Certified Service Partner",
  heading: "Professional Credentials",
  authorities: [
    {
      icon: "🏆",
      title: "NADCA Certified",
      detail: "Highest standard in duct cleaning",
    },
    {
      icon: "🛡️",
      title: "Licensed & Insured",
      detail: "$2M liability protection",
    },
    {
      icon: "🍃",
      title: "EPA Approved",
      detail: "Safe, non-toxic sanitizing agents",
    },
    {
      icon: "⭐",
      text: "A+ Rating",
      detail: "Consistent excellence in service",
    },
  ],
};

const reviewSliderData = {
  heading: "Customer Experiences",
  badgeText: "5,000+ Five-Star Reviews",
  googleRatingText: "Google Rating 4.9/5.0",
  verifiedText: "Verified Booking",
  reviews: [
    {
      name: "Michael J.",
      date: "2 days ago",
      text: "They did an amazing job cleaning our ducts. The house smells so fresh now and the airflow in the master bedroom has doubled!",
      location: "Framingham",
      avatar: "M",
      color: "bg-blue-500",
    },
    {
      name: "Sarah Williams",
      date: "1 week ago",
      text: "Professional, on-time, and very clean. They even showed me Before/After photos of my system. Truly impressed with the service.",
      location: "Boston",
      avatar: "S",
      color: "bg-green-500",
    },
    {
      name: "David Ross",
      date: "3 weeks ago",
      text: "Excellent service. The tech explained everything clearly. We noticed a huge difference in our allergies within 24 hours.",
      location: "Worcester",
      avatar: "D",
      color: "bg-orange-500",
    },
    {
      name: "Emma Davis",
      date: "1 month ago",
      text: "Highly recommend Vently Air. They found things our previous cleaner missed. Honest and reliable company.",
      location: "Newton",
      avatar: "E",
      color: "bg-purple-500",
    },
  ],
};

const activityToastData = {
  activities: [
    { zip: "78701", service: "Air Duct Cleaning" },
    { zip: "78704", service: "Dryer Vent Cleaning" },
    { zip: "78745", service: "Chimney Sweeping" },
    { zip: "78759", service: "Air Quality Test" },
    { zip: "78613", service: "UV Light Install" },
    { zip: "78660", service: "Duct Sanitizing" },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar {...navData} />
      <Hero
        {...heroData}
        image={{
          src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
          alt: "HVAC Cleaning Technician",
        }}
      />
      <Services {...servicesData} />
      <RisingCosts {...risingCostsData} />
      <WhyUs {...whyUsData} />
      <CustomerCount {...customerCountData} />
      <VerifiedAuthority {...verifiedAuthorityData} />
      <ReviewSlider {...reviewSliderData} />
      <FAQV2 {...faqData} />
      <Footer {...footerData} />
      <MobileCTABar phone={PHONE} ctaLabel="Get Estimate" ctaHref="#contact" />
      <LeadModal phone={PHONE} />
      <ActivityToast {...activityToastData} />
    </>
  );
}
