"use client";
import { ReactNode } from "react";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDescription?: string;
  description: string | ReactNode;  // ✅ use ReactNode instead of JSX.Element
  mediaType: "image" | "video";
  mediaSrc: string;
  url?: string;
}



export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [

    {
  id: 1,
  title: "Huspy – AI-Powered PropTech Super-App",
  shortDescription:
    "AI-driven real estate and mortgage platform designed to streamline property discovery, simplify mortgage processes, and empower property agents and brokers.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        Huspy set out to build an{" "}
        <strong>AI-driven real estate and mortgage platform</strong> designed to
        empower property agents and mortgage brokers. The goal was to create a
        super-app that would streamline property discovery, simplify mortgage
        processes, and provide actionable insights for both buyers and brokers.
        The platform combined intelligent search, personalized property
        recommendations, financial services, and seamless integrations into a
        single, scalable ecosystem accessible across web and mobile.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Web & Mobile Development:</strong> Built responsive web
          applications and mobile apps for a consistent experience across devices.
        </li>
        <li>
          <strong>Backend Architecture:</strong> Designed a robust backend capable
          of handling high traffic, secure transactions, and real-time data
          updates.
        </li>
        <li>
          <strong>AI-Powered Features:</strong> Implemented property
          recommendations, advanced search, and predictive analytics.
        </li>
        <li>
          <strong>Secure Payments & API Integrations:</strong> Enabled financial
          transactions and integrations with mortgage/property systems.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Improved scalability,
          reliability, and overall platform performance.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <p>
        A scalable, intuitive, and{" "}
        <strong>AI-powered PropTech super-app</strong> that redefined real estate
        operations. By merging search, mortgage services, analytics, and payments
        into one ecosystem, Huspy empowered agents and brokers with faster
        transactions, better insights, and improved customer experience.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/huspy.png", // replace with actual image path
  url: "https://www.huspy.com/",
}
,
    {
  id: 2,
  title: "ASDA (UK) – AI-Powered Churn Prediction & Customer Analytics",
  shortDescription:
    "AI-powered churn prediction and customer analytics platform delivering real-time, explainable insights and enabling targeted retention strategies at scale.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        ASDA, one of the UK’s leading e-commerce and retail chains, set out to
        improve customer retention and lifetime value (CLV) by proactively
        identifying churn risks. Traditional rule-based segmentation approaches
        failed to capture subtle behavioral signals, resulting in delayed and less
        effective interventions. The goal was to build an{" "}
        <strong>AI-powered churn prediction and customer analytics platform</strong>{" "}
        capable of delivering real-time, explainable insights and enabling targeted
        retention strategies at scale.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Data Capturing:</strong> Integrated customer interaction data
          across purchase history, browsing behavior, cart abandonment, loyalty
          programs, and app engagement.
        </li>
        <li>
          <strong>Data Engineering:</strong> Cleaned, structured, and enriched raw
          data to create a strong foundation for predictive modeling.
        </li>
        <li>
          <strong>AI/ML Models:</strong>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Logistic Regression & Random Forest for baseline churn classification.</li>
            <li>XGBoost for high-accuracy churn predictions.</li>
            <li>LSTM/Neural Networks for time-series behavioral modeling.</li>
            <li>
              Explainable AI (SHAP values) to reveal churn drivers such as declining
              purchase frequency or cart abandonment.
            </li>
          </ul>
        </li>
        <li>
          <strong>Risk Scoring & Segmentation:</strong> Categorized customers into
          high, medium, and low churn risk segments.
        </li>
        <li>
          <strong>Retention Campaign Automation:</strong>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>High Risk → Personalized offers and discounts.</li>
            <li>Medium Risk → Engagement nudges with reminders and loyalty incentives.</li>
            <li>Low Risk → Standard communication flows.</li>
          </ul>
        </li>
        <li>
          <strong>AI-Powered Analytics Dashboard:</strong> Built a Gen-AI enabled
          dashboard with real-time churn insights, interactive visualizations, and
          natural language queries (e.g., “Which region had the highest churn spike
          last week?”).
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <p>
        The churn prediction platform delivered immediate business value by enabling
        ASDA to intervene before disengagement occurred. Targeted campaigns improved
        loyalty across all risk segments, while executives gained{" "}
        <strong>real-time visibility into customer health</strong>. Continuous model
        retraining ensured accuracy as behavior evolved, helping ASDA shift from
        reactive to proactive engagement—reducing churn, minimizing revenue leakage,
        and strengthening lifetime value.
      </p>
    </div>
  ),
  mediaType: "video",
  mediaSrc: "/videos/sample.mp4", // replace with actual video
  url: "https://www.asda.com/",
}
,
    {
  id: 3,
  title: "NexusMD – AI Agents for Hospital Operations",
  shortDescription:
    "AI-powered agents designed to reduce administrative workload, improve Emergency Department throughput, and ensure compliance in hospital operations.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        NexusMD set out to move beyond basic transcription and create{" "}
        <strong>next-generation AI agents</strong> that drive measurable impact
        in hospital operations. At Peninsula Private Hospital, the focus was on
        addressing one of healthcare’s biggest challenges: overburdened staff,
        delayed documentation, and inefficiencies in the Emergency Department
        (ED). The client’s goal was to improve throughput, reduce administrative
        workload, and ensure accurate, compliant medical records—all while
        enabling staff to dedicate more time to patient care.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Speech-to-Text & Documentation Enhancement:</strong> Captured
          doctor–patient interactions, transcribed them into accurate notes, and
          applied AI to improve clarity.
        </li>
        <li>
          <strong>Medical Entity Extraction:</strong> Leveraged NLP to detect
          symptoms, diagnoses, medications, and procedures from transcripts.
        </li>
        <li>
          <strong>Structured Note Generation:</strong> Produced well-organized,
          review-ready clinical notes for faster approval.
        </li>
        <li>
          <strong>AI Compliance Module:</strong> Implemented automated checks
          against hospital policies and clinical guidelines, ensuring mandatory
          fields were complete and error-free.
        </li>
        <li>
          <strong>Workflow Automation:</strong> Reduced repetitive documentation
          tasks, freeing doctors and nurses from administrative overload.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Operational Efficiency:</strong> 30% boost in ED throughput,
          enabling faster patient turnaround, shorter wait times, and greater
          capacity without additional staff.
        </li>
        <li>
          <strong>Cost Reduction:</strong> Decreased reliance on manual scribes
          and admin support, lowering hospital operating expenses.
        </li>
        <li>
          <strong>Compliance & Risk Mitigation:</strong> Automated checks
          enhanced regulatory adherence and minimized malpractice risks.
        </li>
        <li>
          <strong>Improved Staff Productivity:</strong> Clinicians shifted focus
          from paperwork to patient care, improving morale and outcomes.
        </li>
        <li>
          <strong>Scalable Impact:</strong> Designed for extension beyond the
          ED, driving efficiency gains across multiple hospital departments.
        </li>
      </ul>

      <p>
        Through this partnership, <strong>Arinsa AI Minds</strong> and{" "}
        <strong>NexusMD</strong> demonstrated how AI agents can transform
        healthcare workflows not just by transcribing conversations, but by
        ensuring compliance, boosting efficiency, and enhancing clinical
        excellence. The NexusMD deployment at Peninsula Private Hospital proves
        that AI can deliver both operational improvements and better patient
        outcomes in the healthcare sector.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project2.png", // replace with actual NexusMD project image
  url: "https://nexusmd.ai/",
}
,
    {
  id: 4,
  title: "OnDeck – AI + RPA-Driven Loan Processing System",
  shortDescription:
    "AI and RPA-powered loan processing system that reduced approval times by 70%, improved customer satisfaction, and enabled scalable lending operations.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        OnDeck, a leading U.S. small business lending platform, wanted to{" "}
        <strong>modernize and accelerate its loan approval process</strong>.
        Traditional workflows were slowed by manual document checks, fragmented
        credit assessments, and human-dependent decision-making. These
        inefficiencies created delays for customers, reduced competitiveness,
        and led to missed opportunities. The client’s goal was to leverage AI
        and robotic process automation (RPA) to cut processing times, improve
        customer satisfaction, and scale lending operations without adding
        overhead.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>AI-Powered Document Intake:</strong> Automated ingestion of
          loan applications, validated documents, and flagged missing or
          inconsistent information.
        </li>
        <li>
          <strong>Smart Data Extraction & Analysis:</strong> Applied NLP and AI
          models to extract applicant details, financial data, and credit
          history with high accuracy.
        </li>
        <li>
          <strong>AI-Based Risk Profiling:</strong> Machine learning models
          assessed repayment likelihood by analyzing statements and histories,
          producing real-time borrower risk scores.
        </li>
        <li>
          <strong>RPA-Enabled Workflow Automation:</strong> Used robotic process
          automation to orchestrate tasks like routing applications, triggering
          validations, and preparing loan decisions without human effort.
        </li>
        <li>
          <strong>Decision Engine:</strong> Combined AI-driven insights with
          automated workflows to generate instant loan offers, routing complex
          cases to human reviewers.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Speed & Efficiency:</strong> Reduced loan processing time by
          70%, cutting turnaround from days to hours.
        </li>
        <li>
          <strong>Customer Satisfaction:</strong> Faster approvals improved
          borrower experience, trust, and referrals.
        </li>
        <li>
          <strong>Higher Approval Rates:</strong> Data-driven profiling
          increased approval rates by 20% while ensuring compliance.
        </li>
        <li>
          <strong>Cost Savings:</strong> Lower reliance on manual labor reduced
          operational costs and increased efficiency.
        </li>
        <li>
          <strong>Scalable Growth:</strong> Modular architecture enabled
          expansion into additional financial products and services.
        </li>
      </ul>

      <p>
        Through this project, <strong>Arinsa AI Minds</strong> enabled{" "}
        <strong>OnDeck</strong> to evolve from traditional workflows into a
        digitally intelligent, customer-centric lending model. The
        transformation improved customer satisfaction, strengthened market
        position, and proved how AI + RPA can unlock efficiency, profitability,
        and sustainable growth in financial services.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project3.png", // replace with actual OnDeck project image
  url: "https://www.ondeck.com/",
}
,
    {
  id: 5,
  title: "MediCopy – AI + RPA Transformation of Healthcare Records Management",
  shortDescription:
    "AI + RPA-powered records management platform that achieved 85% faster processing, improved HIPAA compliance, and ensured secure, scalable healthcare data handling.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>MediCopy</strong>, a U.S.-based provider of healthcare records
        management, wanted to eliminate the inefficiencies of manual document
        handling. Traditional processes required extensive human effort for data
        extraction, compliance verification, and redaction of sensitive
        information—leading to slow turnaround, high costs, and elevated
        compliance risks. The client’s goal was to leverage AI and robotic
        process automation (RPA) to accelerate operations, reduce risk, and
        improve the customer experience.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>RPA-Driven Workflows:</strong> Automated initiation of records
          management immediately upon receipt from hospitals and clinics.
        </li>
        <li>
          <strong>AI-Powered Data Extraction:</strong> Transformed unstructured
          medical documents into structured datasets, capturing key details like
          demographics, diagnoses, medications, and medical history.
        </li>
        <li>
          <strong>AI Compliance Engine:</strong> Validated documents against
          HIPAA and healthcare regulations, ensuring accuracy while flagging
          missing or risky data.
        </li>
        <li>
          <strong>AI Redaction Module:</strong> Automatically removed sensitive
          identifiers (names, SSNs, addresses) to ensure privacy before records
          were returned.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Efficiency & Cost Reduction:</strong> Achieved 85% faster
          processing, reducing manual effort and increasing throughput.
        </li>
        <li>
          <strong>Compliance Assurance:</strong> Automated checks minimized
          regulatory errors and reinforced HIPAA compliance.
        </li>
        <li>
          <strong>Data Privacy:</strong> Consistent AI-driven redaction
          protected patient confidentiality.
        </li>
        <li>
          <strong>Customer Experience:</strong> Hospitals, clinics, and patients
          benefited from faster, more accurate records delivery.
        </li>
        <li>
          <strong>Scalability:</strong> Built for expansion into additional
          healthcare workflows, creating long-term competitive advantage.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>Arinsa AI Minds</strong> transformed{" "}
        <strong>MediCopy’s</strong> records management into a digitally
        intelligent, compliant, and scalable model. The project reinforced
        MediCopy’s position as a trusted nationwide healthcare partner, proving
        how AI + RPA can unlock both operational efficiency and regulatory
        excellence in the healthcare sector.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project3.png", // replace with actual MediCopy project image
  url: "https://medicopy.net/",
},
    {
  id: 6,
  title: "Kogan – Development of Australia’s Leading E-Commerce Platform",
  shortDescription:
    "AI-powered, scalable e-commerce platform with intelligent search, personalization, secure payments, and SEO optimization serving millions of customers across Australia.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Kogan</strong>, one of Australia’s largest and fastest-growing
        e-commerce companies, wanted to enhance its digital presence with a
        scalable, intelligent, and secure platform capable of handling millions
        of users. The primary objectives were to deliver a seamless online
        shopping experience, integrate AI-driven personalization and intelligent
        search, improve site performance, ensure mobile responsiveness, enable
        safe payment options, and strengthen long-term scalability through SEO
        optimization.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>End-to-End Project Leadership:</strong> Directed requirements
          gathering, technical roadmapping, sprint planning, and stakeholder
          communication, ensuring delivery within scope and budget.
        </li>
        <li>
          <strong>Frontend & Backend Development:</strong> Built a responsive,
          user-friendly frontend and a robust backend capable of supporting
          massive traffic.
        </li>
        <li>
          <strong>AI-Powered Integrations:</strong> Added personalized product
          recommendations, advanced search capabilities, and behavioral insights
          to boost engagement and conversions.
        </li>
        <li>
          <strong>Secure Payment & API Integrations:</strong> Oversaw secure
          payment gateway integration and third-party APIs to streamline
          transactions and extend platform functionality.
        </li>
        <li>
          <strong>Performance Optimization:</strong> Reduced load times,
          optimized server responses, and ensured scalability for millions of
          concurrent users.
        </li>
        <li>
          <strong>Mobile Responsiveness & SEO Enhancements:</strong> Delivered
          responsive design across devices and implemented SEO best practices to
          drive organic traffic and visibility.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Customer Experience:</strong> AI-driven personalization and
          intelligent search improved satisfaction, engagement, and retention.
        </li>
        <li>
          <strong>Conversion & Sales:</strong> Performance optimizations and
          responsive design boosted conversion rates and repeat purchases.
        </li>
        <li>
          <strong>Market Reach:</strong> SEO enhancements drove organic traffic,
          strengthening Kogan’s position against global competitors.
        </li>
        <li>
          <strong>Long-Term Value:</strong> Future-ready, adaptable platform
          capable of evolving with market and customer demands.
        </li>
      </ul>

      <p>
        By aligning business objectives with technical execution,{" "}
        <strong>Arinsa AI Minds</strong> delivered a high-performing, secure,
        and scalable e-commerce platform. The project gave{" "}
        <strong>Kogan</strong> a seamless shopping experience, operational
        efficiency, and a strong competitive edge in the global e-commerce
        landscape.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project4.png", // replace with actual Kogan project image
  url: "https://www.kogan.com/au/",
}
,
{
  id: 7,
  title: "Heidi Health – AI-Powered Medical Scribe Solution",
  shortDescription:
    "AI-driven medical scribe that reduced physician documentation time by 70%, improved patient care, ensured compliance, and scaled across specialties and telehealth.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Heidi Health</strong> sought to solve a pressing challenge in
        modern healthcare: physicians spending excessive time on manual
        documentation after consultations. This not only reduced face-to-face
        patient interaction but also contributed to physician burnout and
        administrative inefficiency. Their goal was to build an AI-driven
        medical scribe platform that could automate clinical documentation in
        real time, ensuring accuracy, compliance, and scalability across diverse
        medical specialties and telehealth environments.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Speech Recognition & Transcription:</strong> Captured
          consultation audio and converted it into high-quality transcripts
          using advanced speech-to-text models.
        </li>
        <li>
          <strong>NLP Pipelines:</strong> Applied natural language processing to
          extract key clinical entities such as symptoms, diagnoses,
          medications, and conditions.
        </li>
        <li>
          <strong>Intelligent Summarization:</strong> Generated structured
          clinical notes and automated pre-chart summaries that doctors could
          quickly review and approve.
        </li>
        <li>
          <strong>Guideline-Integrated Compliance:</strong> Embedded clinical
          guideline checks to ensure documentation accuracy and regulatory
          readiness.
        </li>
        <li>
          <strong>EHR Integration:</strong> Enabled seamless interoperability
          with electronic health record systems for smooth adoption by
          healthcare providers.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Time & Cost Savings:</strong> Achieved up to 70% reduction in
          administrative workload, enabling more patient consultations and
          lowering operational costs.
        </li>
        <li>
          <strong>Improved Patient Experience:</strong> Freed from paperwork,
          physicians devoted more attention to patients, boosting satisfaction
          and trust.
        </li>
        <li>
          <strong>Accuracy & Compliance:</strong> Automated checks reduced
          errors and supported regulatory standards.
        </li>
        <li>
          <strong>Rapid Scalability:</strong> Adaptable across multiple
          specialties and telehealth workflows, supporting expansion following
          Heidi Health’s AUD $16.6M Series A in March 2025.
        </li>
        <li>
          <strong>Competitive Edge:</strong> Unique features such as pre-chart
          summaries and built-in compliance gave Heidi Health a distinct
          advantage in the AI healthcare market.
        </li>
      </ul>

      <p>
        Through this collaboration, <strong>Arinsa AI Minds</strong> enabled{" "}
        <strong>Heidi Health</strong> to achieve operational efficiency, revenue
        growth, and market leadership, showcasing how AI can drive meaningful
        business transformation in healthcare.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project5.png", // replace with actual Heidi Health project image
  url: "https://www.heidihealth.com/au",
}
,{
  id: 8,
  title: "MFine – AI-Powered Healthcare Mobile App",
  shortDescription:
    "AI-driven healthcare app enabling online consultations, lab test bookings, vitals tracking, and secure health record management for millions of users.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>MFine</strong> set out to build an AI-driven digital healthcare
        platform that would bring high-quality medical services directly to
        users’ smartphones. Their goal was to create a seamless mobile-first
        experience where users could consult doctors online, book lab tests,
        track health vitals, and manage medical records without visiting clinics
        physically. The app needed to be intelligent, secure, scalable, and able
        to serve millions of users while providing personalized health insights
        and convenience at scale.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>AI-Powered Features:</strong> Implemented AI-driven health
          insights, symptom checkers, and personalized recommendations to
          enhance user engagement and medical decision-making.
        </li>
        <li>
          <strong>Vitals Tracking:</strong> Integrated mobile sensors and APIs
          to allow users to monitor key health parameters directly within the
          app.
        </li>
        <li>
          <strong>Secure Payments & API Integrations:</strong> Enabled safe
          transactions for consultations, lab tests, and health services while
          connecting with hospitals, labs, and third-party providers.
        </li>
        <li>
          <strong>Mobile-First Responsive Design:</strong> Designed an intuitive
          and responsive mobile interface optimized for Android and iOS users.
        </li>
        <li>
          <strong>Performance & Scalability:</strong> Ensured smooth performance
          under high traffic, making the app reliable for millions of users
          simultaneously.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Seamless Access:</strong> Enabled faster doctor consultations,
          simplified lab test bookings, and easy access to personal health
          records.
        </li>
        <li>
          <strong>AI-Driven Personalization:</strong> Delivered tailored health
          insights that improved user engagement and decision-making.
        </li>
        <li>
          <strong>Scalability & Reliability:</strong> Built a platform capable
          of serving millions of users simultaneously with consistent
          performance.
        </li>
        <li>
          <strong>Healthcare Accessibility:</strong> Increased convenience by
          reducing the need for physical clinic visits and making quality care
          available at scale.
        </li>
        <li>
          <strong>Market Leadership:</strong> Positioned MFine as a trusted
          leader in the digital health ecosystem.
        </li>
      </ul>

      <p>
        Through this project, <strong>Arinsa AI Minds</strong> helped{" "}
        <strong>MFine</strong> transform healthcare delivery with a scalable,
        intelligent, and user-friendly app that bridged the gap between patients
        and providers, showcasing how AI can enhance accessibility, efficiency,
        and patient satisfaction.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project6.png", // replace with actual MFine project image
  url: "https://www.mfine.co/",
}
,{
  id: 9,
  title: "EcoTrend Retail – AI-Powered Predictive Inventory Management",
  shortDescription:
    "Predictive AI solution that improved forecast accuracy by 20%, reduced stock imbalances by 15%, and delivered 30% staff time savings for EcoTrend’s retail operations.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>EcoTrend Retail</strong>, a U.S.-based boutique retail chain
        specializing in organic consumer goods, faced challenges in balancing
        inventory across its stores. Traditional planning methods led to
        frequent stock shortages, surplus goods, and high manual workload for
        staff managing budget and inventory. To modernize operations, EcoTrend
        adopted a cloud-based predictive analytics tool developed by external AI
        consultants.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Data Sources Integrated:</strong> Combined historical sales,
          weather forecasts, promotions, and seasonal offers.
        </li>
        <li>
          <strong>AI-Powered Forecasting:</strong> Used predictive analytics to
          process inputs and project future inventory needs.
        </li>
        <li>
          <strong>Inventory Balancing:</strong> Compared forecasts against
          current stock levels to detect shortages or surpluses.
        </li>
        <li>
          <strong>Automated Recommendations:</strong> Generated restocking and
          adjustment plans to optimize supply chain decisions.
        </li>
        <li>
          <strong>Staff Productivity Gains:</strong> Reduced manual time spent
          on budget planning through automation.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>+20% Forecast Accuracy:</strong> More reliable demand
          predictions improved stock planning.
        </li>
        <li>
          <strong>-15% Stock Imbalances:</strong> Reduced frequency of both
          shortages and excess stock.
        </li>
        <li>
          <strong>+30% Staff Time Savings:</strong> Automation freed teams from
          manual budgeting and enabled focus on customer service.
        </li>
        <li>
          <strong>Agility & Efficiency:</strong> Achieved smoother operations
          with less waste and faster adaptation to seasonal changes.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>EcoTrend Retail</strong> transformed
        its planning and supply chain operations, proving how even boutique
        retailers can leverage AI to compete with larger players through
        smarter, leaner inventory management.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project7.png", // replace with actual EcoTrend project image
  url: "https://www.ecotrendretail.com/", // 👉 replace with actual client URL if available
}
,
{
  id: 10,
  title: "LHV – Development of Cloud-Native Banking Infrastructure",
  shortDescription:
    "Built a cloud-native, API-first banking platform enabling instant GBP/EUR payments, virtual IBAN issuance, and open banking integrations, now serving 200+ fintech clients across Europe.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>LHV</strong>, a leading European bank, aimed to modernize its
        banking infrastructure to support seamless fintech integrations across
        the UK and Europe. Their goal was to create a{" "}
        <strong>cloud-native, API-first platform</strong> capable of delivering
        real-time financial services such as instant GBP/EUR payments, virtual
        IBAN issuance, and open banking functionalities. The solution needed to
        be <strong>scalable, secure, and regulatory-compliant</strong>, while
        empowering fintech partners to innovate with speed and reliability.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Cloud-Native Architecture:</strong> Designed a scalable,
          containerized microservices infrastructure for modularity and
          resilience.
        </li>
        <li>
          <strong>API-First Approach:</strong> Developed APIs for real-time
          payments, account management, and compliance services to streamline
          fintech integrations.
        </li>
        <li>
          <strong>Tuum Platform Integration:</strong> Leveraged Tuum’s
          module-based core banking system to accelerate service deployment and
          ensure flexibility.
        </li>
        <li>
          <strong>Payment Capabilities:</strong> Delivered instant GBP/EUR
          processing, virtual IBAN issuance, and cross-border transaction
          support.
        </li>
        <li>
          <strong>Open Banking Enablement:</strong> Integrated open banking APIs
          that empower fintechs to build innovative services on top of LHV’s
          infrastructure.
        </li>
        <li>
          <strong>Security & Compliance:</strong> Ensured regulatory compliance
          with advanced encryption, monitoring, and fraud prevention.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>200+ Fintech Clients:</strong> Banking platform now powers
          integrations across Europe.
        </li>
        <li>
          <strong>Millions of Transactions:</strong> Processes real-time
          payments with high reliability.
        </li>
        <li>
          <strong>Rapid Innovation:</strong> API-first design enabled fintechs
          to build and deploy new services faster.
        </li>
        <li>
          <strong>Future-Ready Banking:</strong> Positioned LHV as a trusted
          enabler in the European fintech ecosystem.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>LHV</strong> established a secure,
        scalable, and future-ready banking infrastructure that empowers fintechs
        to innovate faster while maintaining compliance and resilience in the
        digital banking era.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project8.png", // replace with actual LHV project image
  url: "https://www.lhv.ee/et", // official client URL
}
,
{
  id: 11,
  title: "Manje Health – Digital Healthcare Platform",
  shortDescription:
    "Developed a secure, scalable platform enabling Africans in the diaspora to fund healthcare for families back home, with cross-border payments, hospital search, and insurance integration.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Manje Health</strong> set out to build a digital healthcare
        solution that allows Africans in the diaspora to seamlessly{" "}
        <strong>fund and manage quality healthcare services</strong> for their
        families back home in countries like Ghana and Zambia. The platform
        needed to simplify cross-border healthcare funding, improve
        transparency, and provide tools to find trusted hospitals and insurance
        providers. The client emphasized the need for a{" "}
        <strong>secure, scalable, and user-friendly</strong> system to build
        trust while making healthcare more accessible and affordable.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Frontend & Backend Development:</strong> Delivered a
          responsive, intuitive UI supported by a robust backend to handle high
          transaction volumes and user load.
        </li>
        <li>
          <strong>Secure Payment Integration:</strong> Implemented cross-border
          payment solutions with compliance to financial regulations.
        </li>
        <li>
          <strong>API Integration:</strong> Connected hospitals, insurance
          providers, and third-party services for expanded platform
          functionality.
        </li>
        <li>
          <strong>Insurance & Hospital Search:</strong> Built intelligent search
          modules enabling users to compare providers and insurance plans with
          ease.
        </li>
        <li>
          <strong>Performance & Mobile Optimization:</strong> Ensured smooth,
          responsive performance across devices for diaspora users and families
          at home.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Cross-Border Support:</strong> Empowered Africans abroad to
          directly fund healthcare for their families.
        </li>
        <li>
          <strong>Trust & Transparency:</strong> Improved visibility into
          hospitals and insurance providers, reducing barriers to quality care.
        </li>
        <li>
          <strong>Secure & Scalable:</strong> Built a platform that can grow
          with user demand while maintaining compliance and security.
        </li>
        <li>
          <strong>Social Impact:</strong> Bridged the gap between diaspora
          funding and reliable healthcare delivery in Africa.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>Manje Health</strong> successfully
        delivered on its vision of combining technology with social impact,
        making healthcare more accessible and affordable for families across
        Africa.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project9.png", // replace with actual Manje Health project image
  url: "https://manjehealth.com/", // official client URL
}
,{
  id: 12,
  title: "Coles Liquor – AI/ML-Driven Demand Forecasting",
  shortDescription:
    "AI/ML-powered demand forecasting system that reduced stockouts, minimized overstocking, improved supplier coordination, and drove sales uplift across Coles Liquor stores.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Coles Liquor</strong>, one of Australia’s largest liquor
        retailers, needed a smarter way to manage inventory across its
        nationwide network of stores. Traditional demand planning often failed
        to account for seasonal changes, promotions, local events, and supplier
        coordination—leading to frequent stockouts or oversupply. To overcome
        this, Coles adopted an <strong>AI/ML platform</strong> designed to
        improve forecasting accuracy and enable automated ordering.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Data Sources Integrated:</strong> Combined historical sales,
          weather forecasts, promotional campaigns, local/national events, and
          supplier availability.
        </li>
        <li>
          <strong>Data Processing:</strong> Cleaned and standardized data for
          consistent input into ML models.
        </li>
        <li>
          <strong>AI/ML Forecasting Models:</strong> Predicted demand for beer,
          wine, and spirits with higher precision.
        </li>
        <li>
          <strong>Inventory Gap Analysis:</strong> Compared forecasted demand
          with current stock to detect surpluses or shortages.
        </li>
        <li>
          <strong>Automated Ordering System:</strong> Triggered purchase orders
          directly to suppliers when inventory gaps were identified.
        </li>
        <li>
          <strong>Supplier Coordination:</strong> Automated delivery schedules
          for improved efficiency.
        </li>
        <li>
          <strong>Rollout & Monitoring:</strong> Phased rollout since 2024 with
          continuous improvements based on store-level performance.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Optimized Inventory:</strong> Reduced overstocking and
          minimized out-of-stock incidents.
        </li>
        <li>
          <strong>Supplier Efficiency:</strong> Improved coordination with
          suppliers through automated scheduling.
        </li>
        <li>
          <strong>Sales Uplift:</strong> Higher stock availability boosted sales
          and customer satisfaction.
        </li>
        <li>
          <strong>Operational Agility:</strong> Forecasts adapted dynamically to
          promotions, events, and weather conditions.
        </li>
        <li>
          <strong>Scalability:</strong> Designed to scale across all Coles
          Liquor stores nationwide.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>Coles Liquor</strong> is transforming
        its supply chain into an{" "}
        <strong>AI-driven, demand-responsive system</strong>, setting a new
        benchmark for retail innovation in Australia’s liquor industry.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project10.png", // replace with actual Coles Liquor project image
  url: "https://www.coles.com.au/", // official client URL
}
,
{
  id: 13,
  title: "StyleDotMe – MirrAR: AI-Driven Augmented Reality Jewelry Try-On",
  shortDescription:
    "AI-powered AR jewelry try-on platform that boosted conversions by 200%, increased engagement, and reduced inventory costs for StyleDotMe’s retail partners.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>StyleDotMe</strong>, a Gurugram-based fashion tech company,
        wanted to solve two critical challenges in jewelry retail: the high cost
        of maintaining physical inventory and the lack of an engaging online
        shopping experience comparable to in-store trials. Their vision was to
        scale <strong>MirrAR</strong>, an AI-powered augmented reality solution,
        to enable customers to virtually try on jewelry in real time. The goal
        was to boost customer confidence, increase conversions, and make online
        jewelry shopping immersive and interactive.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>AI-Powered AR Integration:</strong> Built real-time jewelry
          try-on modules for web and mobile applications.
        </li>
        <li>
          <strong>Seamless User Experience:</strong> Enabled customers to select
          jewelry, activate MirrAR, and see items overlaid naturally on their
          face or body via the device camera.
        </li>
        <li>
          <strong>Intelligent Adjustments:</strong> Used AI to auto-adjust size,
          lighting, and angle for highly realistic visualization.
        </li>
        <li>
          <strong>Scalable Architecture:</strong> Designed the platform for use
          across large chains and independent jewelers.
        </li>
        <li>
          <strong>Cross-Platform Optimization:</strong> Ensured consistent
          performance across web and mobile devices.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Higher Conversions:</strong> Online conversion rates increased
          by 200%, driving significant revenue growth.
        </li>
        <li>
          <strong>Customer Engagement:</strong> Interactive try-ons boosted
          browsing time, loyalty, and repeat purchases.
        </li>
        <li>
          <strong>Reduced Inventory Costs:</strong> Retailers saved on physical
          stock and expanded product ranges via virtual catalogs.
        </li>
        <li>
          <strong>Scalable Adoption:</strong> Flexible design made the platform
          suitable for both enterprise and SMB jewelers.
        </li>
        <li>
          <strong>Market Differentiation:</strong> Merged AI + AR to create a
          pioneering fashion tech experience unmatched by competitors.
        </li>
      </ul>

      <p>
        Through this collaboration, <strong>Arinsa AI Minds</strong> empowered{" "}
        <strong>StyleDotMe</strong> to redefine jewelry retail with a
        cost-efficient, immersive, and conversion-driven model, setting new
        standards for customer experience in the fashion tech space.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project11.png", // replace with actual MirrAR project image
  url: "https://play.google.com/store/apps/developer?id=STYLEDOTME&hl=en_IN",
}
,{
  id: 14,
  title: "Nubank – AI-First Transformation of Latin America’s Digital Bank",
  shortDescription:
    "End-to-end AI transformation for Nubank: GPT-4 assistants, AI-driven Pix payments, fraud prevention, and hyperpersonalization across 80M+ customers.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Nubank</strong>, one of the world’s largest digital banks with
        over 80M+ customers, set out to reinvent itself as an{" "}
        <strong>AI-first financial institution</strong>. The challenge was to
        embed AI not as an add-on, but as the foundation of a scalable ecosystem
        that enhances customer experience, fraud prevention, operational
        efficiency, and personalization.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>AI-Powered Customer Experience:</strong> Integrated GPT-4
          assistants for finance guidance, natural language queries, smart
          reminders, and tailored product recommendations.
        </li>
        <li>
          <strong>Pix Transactions with AI:</strong> Enabled text, voice, and
          image-based payment commands, cutting transaction time by 60%.
        </li>
        <li>
          <strong>AI-Enhanced Customer Support:</strong> Deployed AI agents
          resolving 55% of Tier 1 issues, with GPT copilots reducing resolution
          times by 70%.
        </li>
        <li>
          <strong>Knowledge Automation:</strong> Built a RAG-powered knowledge
          system serving 5,000+ employees monthly, cutting documentation time.
        </li>
        <li>
          <strong>Fraud Prevention & Compliance:</strong> Used GPT-4o Vision for
          anomaly detection in transactions, documents, and behavioral data with
          biometric monitoring.
        </li>
        <li>
          <strong>Intent Prediction & Smart Routing:</strong> Developed Precog
          models to route queries between bots and agents for efficiency.
        </li>
        <li>
          <strong>Hyperpersonalization at Scale:</strong> Leveraged Nubank’s
          Hyperplane platform to deliver proactive reminders, budgeting insights,
          and AI-powered private banking features.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Faster Transactions:</strong> Pix payments processed 60%
          quicker.
        </li>
        <li>
          <strong>Fraud & Risk Mitigation:</strong> Real-time anomaly detection
          strengthened compliance and security.
        </li>
        <li>
          <strong>Lower Support Costs:</strong> Tier 1 AI agents cut support
          load by over 50%.
        </li>
        <li>
          <strong>Workforce Productivity:</strong> Knowledge automation boosted
          efficiency across 5,000+ employees.
        </li>
        <li>
          <strong>Customer Satisfaction:</strong> Personalized AI-first banking
          improved engagement and loyalty.
        </li>
        <li>
          <strong>Scalable Transformation:</strong> Established Nubank as a
          global leader in AI-driven financial services.
        </li>
      </ul>

      <p>
        Through this engagement, <strong>Arinsa AI Minds</strong> enabled{" "}
        <strong>Nubank</strong> to evolve into a resilient, customer-centric,
        AI-first digital bank, setting new benchmarks for innovation in Latin
        America and beyond.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project12.png", // replace with actual Nubank project image
  url: "https://nubank.com.br",
}
,{
  id: 15,
  title: "Myna Bolo – LLM-Powered Health Chatbot on WhatsApp",
  shortDescription:
    "WhatsApp-based health chatbot leveraging LLMs with doctor-in-the-loop safety, cultural adaptation, and telehealth features to serve underserved communities.",
  description: (
    <div className="text-gray-700 leading-relaxed space-y-4">
      <p>
        <strong>Myna Bolo</strong> set out to democratize access to{" "}
        <strong>trustworthy, culturally relevant, and easy-to-understand medical information</strong> 
        for underserved communities by using a platform people already rely on daily –{" "}
        <strong>WhatsApp</strong>. The challenge was to deliver reliable health
        support at scale while ensuring <strong>clinical safety</strong>.
      </p>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Our Contribution
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>LLM-Powered Conversations:</strong> Integrated ChatGPT-4 with RAG,
          fine-tuned on localized medical knowledge bases for accurate responses.
        </li>
        <li>
          <strong>Multimodal Understanding:</strong> Enabled support for text, voice,
          slang, GIFs, and cultural nuances for natural conversations.
        </li>
        <li>
          <strong>Doctor-in-the-Loop Safety:</strong> Built a validation layer where
          responses are reviewed by a doctor network before reaching users.
        </li>
        <li>
          <strong>Extended Features:</strong> Added telehealth referrals, menstrual
          tracking, and educational video content beyond Q&A.
        </li>
        <li>
          <strong>Scalable Delivery:</strong> Leveraged WhatsApp to minimize adoption
          friction, making access seamless without new app downloads.
        </li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold text-gray-900">
        Project Success
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Wider Access:</strong> WhatsApp delivery lowered barriers for rural
          and underserved populations.
        </li>
        <li>
          <strong>Trust & Safety:</strong> Human-verified responses reduced
          misinformation risks and improved confidence.
        </li>
        <li>
          <strong>Operational Efficiency:</strong> Automated first-level support cut
          workloads for healthcare professionals, reducing costs.
        </li>
        <li>
          <strong>Continuous Learning:</strong> Feedback loops with doctors and users
          improved accuracy and adaptability over time.
        </li>
        <li>
          <strong>Higher Engagement:</strong> Context-aware, multimedia-enabled
          responses increased repeat usage and retention.
        </li>
      </ul>

      <p>
        Through this initiative, <strong>Arinsa AI Minds</strong> helped{" "}
        <strong>Myna Bolo</strong> evolve into a{" "}
        <strong>scalable, safe, and trusted digital health companion</strong>,
        bridging the gap between underserved communities and reliable healthcare
        while easing the operational burden on providers.
      </p>
    </div>
  ),
  mediaType: "image",
  mediaSrc: "/image/project13.png", // replace with actual Myna Bolo project image
  url: "https://play.google.com/store/apps/details?id=com.mynarnapp&hl=en_IN",
}
,
  ];

  const selected = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-16 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo & Company Name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8"
          >
            <div className="relative w-28 h-28 shrink-0">
              <Image
                src="/image/purple-logo.png"
                alt="Arinsa AI Minds Logo"
                fill
                sizes="112px"
                className="rounded-full shadow-lg border-2 border-white object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide leading-tight break-words">
              ARINSA AI MINDS
              <span className="hidden md:inline">
                <br />
              </span>{" "}
              PRIVATE LIMITED
            </h1>
          </motion.div>

          {/* Right: Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-center md:text-left leading-relaxed"
          >
            We are a next-generation AI & technology company, building powerful
            solutions in <span className="font-semibold">Generative AI</span>,{" "}
            <span className="font-semibold">NLP</span>, and{" "}
            <span className="font-semibold">Intelligent Automation</span> to help
            businesses grow smarter and faster.
          </motion.p>
        </div>
      </section>

      {/* Services and Products */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-8">
        {/* Services Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-6 text-purple-600">
            Our Services
          </h2>
          <ul className="space-y-6 list-disc list-inside">
            <li>
              <strong>Generative AI & Agentic AI</strong>
              <br />
              Custom Generative AI (Text, Code, Image, Audio) + Agentic AI for
              Business Automation & Intelligent Customer Interaction
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>Full Stack Web & Mobile Development</strong>
              <br />
              End-to-End + Full Stack Web Development (React, Node.js, FastAPI,
              Flask, Django, HTML, CSS, JavaScript)
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>ML, DL, NLP & CV</strong>
              <br />
              Machine Learning, Deep Learning, NLP (Chatbots, Document AI,
              Sentiment Analysis), Computer Vision (Detection, Segmentation, OCR)
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>Data Engineering</strong>
              <br />
              End-to-End Data Engineering Pipelines + SQL + NoSQL
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>AI SaaS + Automation + Hyperautomation</strong>
              <br />
              End-to-end AI SaaS product development, intelligent workflow
              automation, and hyperautomation solutions empowering businesses with
              custom AI tools, optimized processes, and strategic AI deployment.
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>Predictive Analytics & Visualization</strong>
              <br />
              Predictive Analytics, Forecasting, Data Analysis, Data Visualization
              (Power BI, Tableau)
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>

            <li>
              <strong>24×7 App, Web & Mobile Support</strong>
              <br />
              Round-the-clock support and maintenance for your apps, websites, and
              mobile platforms to ensure uninterrupted service, performance
              optimization, and rapid issue resolution.
              <div className="mt-1">
                <a
                  href="https://www.arinsaaiminds.com/about-us/connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Products Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-4xl font-semibold mb-6 text-indigo-600">
            Our Products
          </h2>
          <ul className="space-y-6 list-disc list-inside text-lg leading-relaxed">
            <li>Arinsa Multi Agent – Autonomous multi-department AI workforce</li>
            <li>Arinsa Campaign Agent – Full-funnel sales & marketing automation</li>
            <li>Arinsa FinSecure Agent – Financial compliance & reporting assistant</li>
            <li>Arinsa Operational Agent – Team coordination & project execution</li>
            <li>AutoDocQuery – Smart multi-document AI assistant</li>
            <li>CodeSimplify – Automated code documentation generator</li>
            <li>InstaCoder – On-demand AI coding assistant</li>
            <li>TransCoder – Cross-language intelligent code translator</li>
            <li>TextifyAI – Creative & functional AI text generation</li>
            <li>Text2Vision – Text-to-image AI visual generation</li>
            <li>SummarizerPro – Multi-format intelligent summarization tool</li>
          </ul>
          <div className="mt-6">
            <a
              href="https://www.arinsaaiminds.com/products/details"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold text-lg hover:underline"
            >
              Explore all products →
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 px-8 bg-gray-100 relative">
        <h2 className="text-3xl font-bold text-center mb-10">Project Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {"shortDescription" in project
                    ? project.shortDescription
                    : typeof project.description === "string"
                    ? project.description.substring(0, 120) + "..."
                    : ""}
                </p>

                <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-700">Image/Video Preview</span>
                </div>
                <Button
                  className="w-full"
                  onClick={() => setSelectedProject(project.id)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.4 }}
                className="bg-white w-full max-w-5xl h-[80vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={28} />
                </button>

                {/* Project Content */}
                <div className="p-8 overflow-y-auto">
                  <h3 className="text-3xl font-bold mb-6">{selected.title}</h3>

                  {/* Media Section */}
                  <div className="w-full h-80 bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    {selected.mediaType === "video" ? (
                      <video
                        controls
                        className="w-full h-full object-cover rounded-lg"
                        src={selected.mediaSrc}
                      />
                    ) : (
                      <Image
                        src={selected.mediaSrc}
                        alt="Project media"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>

                  {/* Description (DIV wrapper to prevent p-in-p) */}
                  <div className="text-gray-700 text-lg mb-8 leading-relaxed space-y-4">
                    {typeof selected.description === "string" ? (
                      <p>{selected.description}</p>
                    ) : (
                      selected.description
                    )}
                  </div>

                  {/* URL */}
                  <a
                    href={selected.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold underline animate-pulse text-lg"
                  >
                    {selected.url}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-8">
          We would love to hear from you. Let’s build something amazing together!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Button variant="secondary" className="flex items-center gap-2">
            <Mail size={18} /> ans@arinsaaiminds.com
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <Phone size={18} /> +91 9123745946
          </Button>
          <Button variant="secondary" className="flex items-center gap-2" asChild>
            <a
              href="https://www.arinsaaiminds.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </Button>
          <Button variant="secondary" className="flex items-center gap-2" asChild>
            <a
              href="https://www.linkedin.com/company/arinsaaiminds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 text-center bg-gray-900 text-gray-300">
        <p className="font-semibold">ARINSA AI MINDS PVT LTD</p>
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}
