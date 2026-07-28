import { Users,
    FileCheck,
    GraduationCap,
    UserCheck,
    Award,
    Briefcase,
    Gift,
    ShieldCheck,
    Building2,
    Calendar,
    Heart,
    HeartHandshake,
    Activity,
    ClipboardCheck,
    FileText,
    Wrench,
    Handshake,
    Sparkles,
    Headphones

  } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Recruitments', href: '/recruitments' },
  { name: 'Our Strength', href: '/strength' },
  { name: 'Our Clients', href: '/clients' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export const CLIENT_LOGOS = [
  'Oliva Skin & Hair',
  'JLL',
  'Ashvita by Mahindra Lifespaces',
  'CBRE',
  'Golf View',
];

export const STATS = [
  { label: 'Workforce', value: '15,000+' },
  { label: 'Valued Clients', value: '200+' },
  { label: 'Area Managed', value: '20M+ Sq. ft' },
  { label: 'Coverage', value: 'PAN India' },
];

export const SERVICES = [
  {
    title: 'Landscaping Services',
    description: 'Comprehensive green space maintenance and lawn care.',
  },
  {
    title: 'Housekeeping & Maintenance',
    description: 'Professional facility upkeep and deep cleaning solutions.',
  },
  {
    title: 'MEP Services',
    description: 'Mechanical, Electrical, and Plumbing integrated care.',
  },
  {
    title: 'Security & Pest Control',
    description: 'Certified security practitioners and environmental control.',
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Amaze Property Management Solutions Pvt Ltd',
    subtitle: 'A one stop solutions for all your property management needs.',
    tag: 'Division of Action Group • Est. 2001',
    image:"https://www.amazepms.com/assets/banner1.jpg"
  },
  {
    id: 2,
    title: 'Security Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner2.jpg"
},
  {
    id: 3,
    title: 'House keeping Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner3.jpg"

},
  {
    id: 4,
    title: 'Technical Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner4.jpg"
  },{
    id: 5,
    title: 'Landscaping Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner5.jpg"
  },{
    id: 6,
    title: 'pest Control Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner6.jpg"
  },{
id: 7,
    title: 'Helpdesk Management Services',
    subtitle: '',
    tag: '',
    image:"https://www.amazepms.com/assets/banner7.jpg"
  }
];


//Recruitment Page Data

  export const recruitmentSteps = [
    {
      step: '01',
      title: 'Talent Sourcing & Screening',
      desc: 'Sourcing qualified candidates through structured referral networks and regional recruitment hubs.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Background Verification',
      desc: 'Rigorous 3-tier address verification, police clearance, and past employment authentication.',
      icon: FileCheck,
    },
    {
      step: '03',
      title: 'In-House Training Protocols',
      desc: 'Comprehensive practical training modules led by ex-military and senior facility officers.',
      icon: GraduationCap,
    },
    {
      step: '04',
      title: 'On-Site Deployment',
      desc: 'Seamless placement with complete uniforming, ID credentialing, and site-specific orientation.',
      icon: UserCheck,
    },
  ];

  export const highlights = [
  {
    icon: UserCheck,
    title: "100% Background Verified",
    description: "Every staff member undergoes rigorous identity verification, criminal background screening, and local police verification before deployment."
  },
  {
    icon: Award,
    title: "In-House Training Academy",
    description: "Our workforce is trained under standard operating procedures led by ex-defense personnel, ensuring discipline and professional conduct."
  },
  {
    icon: Briefcase,
    title: "Full Statutory Compliance",
    description: "Complete adherence to labor laws, PF, ESI, minimum wages, and employment regulations to mitigate corporate risk."
  }
];

  export const workforceCategories = [
    'Security Personnel & Officers',
    'Housekeeping & Janitorial Staff',
    'MEP & HVAC Technicians',
    'Helpdesk & Front Office Staff',
    'STP & WTP Plant Operators',
    'Lawn & Landscape Caretakers',
    'Deep Cleaning Specialists',
    'Supervisors & Facility Managers',
  ];



  //Strength Page Data

  export const coreStrengths = [
    {
      title: 'Managing 20M+ Sq.Ft',
      desc: 'Managing an area of more than 20 million Sq.ft across different portfolios.',
      icon: Building2,
    },
    {
      title: '100% Inhouse Services',
      desc: 'All services are managed fully in-house to ensure high operational quality.',
      icon: ShieldCheck,
    },
    {
      title: 'Emergency Backup Staff',
      desc: 'Immediate availability of back-up staff to handle emergencies seamlessly.',
      icon: Users,
    },
    {
      title: 'Yearly Training Calendar',
      desc: 'Yearly training calendar shared and conducted regularly by our dedicated Training Officer.',
      icon: Calendar,
    },
    {
      title: 'Equipment Risk Assessment',
      desc: 'Risk Assessment of Equipment and operations with recommended measures from time to time.',
      icon: Activity,
    },
    {
      title: 'Regular Site Audits',
      desc: 'Internal team audits sites regularly to propose improvement, power-saving methods, and manpower cost optimization.',
      icon: ClipboardCheck,
    },
    {
      title: 'Site-Specific SOPs',
      desc: 'Detailed site-specific SOPs and checklists crafted for all offered services.',
      icon: FileText,
    },
    {
      title: 'Shutdown Maintenance',
      desc: 'Coordination and supervision towards annual shutdown maintenance and rapid mobilizing.',
      icon: Wrench,
    },
    {
      title: 'Government Agency Liaison',
      desc: 'Expert liaison and compliance coordination with regional government agencies.',
      icon: Handshake,
    },
    {
      title: 'Comprehensive EHS & Audits',
      desc: 'EHS, Security, Technical, Fire & Safety, Inventory, Process, Soft Services, and Customer Satisfaction audits.',
      icon: ShieldCheck,
    },
    {
      title: 'AMC Tracking & Negotiations',
      desc: 'Proactive AMC tracking, vendor management, and cost negotiations.',
      icon: ClipboardCheck,
    },
  ];

  export const welfareBenefits = [
    {
      title: 'Diwali Sweets & Celebration',
      desc: 'Festival treats and annual celebrations for all team members.',
      icon: Gift,
    },
    {
      title: 'Republic & Independence Day Gifts',
      desc: 'Gifts, recognitions, and special rewards on RD/ID.',
      icon: Award,
    },
    {
      title: '₹2 Lakhs Insurance Coverage',
      desc: 'Comprehensive medical and life insurance protection for staff members.',
      icon: Heart,
    },
    {
      title: '₹10,000 Funeral Expenses',
      desc: 'Compassionate financial support provided during family bereavements.',
      icon: HeartHandshake,
    },
    {
      title: '₹1 Lakh Compensation Support',
      desc: 'Dedicated compensation scheme for staff in critical emergency events.',
      icon: ShieldCheck,
    },
    {
      title: 'Ranker Student Rewards',
      desc: 'Scholarships: ₹1 Lakh, ₹50 Thousand, and ₹25 Thousand for top-performing children of staff.',
      icon: Award,
    },
  ];


  //Career Page Data

   export const openings = [
    { title: 'Facility Manager', category: 'Management', icon: Building2 },
    { title: 'Assistant Facility Manager', category: 'Management', icon: Building2 },
    { title: 'Operations Manager', category: 'Management', icon: Users },
    { title: 'Security Officer', category: 'Security', icon: ShieldCheck },
    { title: 'Electrician', category: 'Technical', icon: Wrench },
    { title: 'Field Officer - Technical', category: 'Technical', icon: Wrench },
    { title: 'Field Officer - Security', category: 'Security', icon: ShieldCheck },
    { title: 'Gardener', category: 'Services', icon: Sparkles },
    { title: 'House Keeping Supervisor', category: 'Services', icon: Users },
    { title: 'House Keeper', category: 'Services', icon: Sparkles },
    { title: 'Fire & Safety Technicians', category: 'Technical', icon: ShieldCheck },
    { title: 'Help Desk Executive', category: 'Administration', icon: Headphones },
  ];



export const PARTNERS = [
  { 
    name: 'Oliva Skin & Hair Clinic', 
    logo: 'OLIVA',
    imageUrl: 'https://www.amazepms.com/assets/client1.jpg'
  },
  { 
    name: 'JLL', 
    logo: 'JLL',
    imageUrl: 'https://www.amazepms.com/assets/client2.png'
  },
  { 
    name: 'Ashvita by Mahindra Lifespaces', 
    logo: 'Mahindra Ashvita',
    imageUrl: 'https://www.amazepms.com/assets/client4.png'
  },
  { 
    name: 'CBRE', 
    logo: 'CBRE',
    imageUrl: 'https://www.amazepms.com/assets/client5.png'
  },
  { 
    name: 'Golf View', 
    logo: 'GOLF VIEW',
    imageUrl: 'https://www.amazepms.com/assets/client6.png'
  },
];