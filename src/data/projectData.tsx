import { FaFootballBall, FaChartLine, FaUsers, FaComments, FaTrophy, FaClock, FaMobileAlt, FaBolt, FaGlobe, FaSearch, FaListOl, FaBroadcastTower, FaSync, FaTruckMoving, FaReact, FaPalette, FaCode, FaCogs, FaCloud, FaMagic, FaMarkdown, FaNodeJs, FaServer } from "react-icons/fa";
import { FaGithub, FaCodeBranch, FaDesktop } from "react-icons/fa";
import {
    FaShoppingCart, FaBoxOpen, FaShippingFast, FaCreditCard,
    FaUserShield, FaMoneyBillWave,
    FaLock, FaCog, FaDatabase, FaUserTie, FaClipboardList
} from "react-icons/fa";
import { FaFutbol, FaChartBar } from "react-icons/fa";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaFire, FaBookOpen, FaPlayCircle } from "react-icons/fa";
import { SiAntdesign, SiApifox, SiAuth0, SiFramer, SiGit, SiImagedotsc, SiMarkdown, SiMongodb, SiNextdotjs, SiNodedotjs, SiRedux, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export const projectDetailsData = [
    {
        title: "Sofa",
        slug: "sofa",
        branding: {
            logo: "/logo/sofa.ico",
            image: "/projectsV1/sofa.png",
            themeColor: "#FF4500", // Optional: Use for UI theming
        },
        links: {
            liveDemo: "https://sofa-nu.vercel.app/",
            github: "https://github.com/Hbadr13/sofascore-clone",
        },
        description: {
            short: "Sofa is a feature-rich Sofascore clone designed for sports enthusiasts.",
            full: "Sofa provides real-time live scores, in-depth match statistics, and comprehensive sports data powered by the Sofascore API. Built with Next.js and Tailwind CSS, the platform ensures a seamless, fully responsive experience across all devices. With a modern UI and high-performance architecture, it enhances the sports tracking experience.",
            tags: ["Live Scores", "Sports Analytics", "Next.js", "API Integration"],
        },
        features: {
            highlights: [
                { text: "Real-time Match Schedules & Scores", icon: <FaBroadcastTower /> },
                { text: "Detailed Player & Team Statistics", icon: <FaChartLine /> },
                { text: "Tournaments & Leagues Coverage", icon: <FaTrophy /> },
                { text: "Fully Responsive UI with Tailwind CSS", icon: <FaMobileAlt /> },
                { text: "Optimized Performance with Next.js", icon: <FaBolt /> },
                { text: "Live Match Commentary & Events", icon: <FaComments /> },
                { text: "Data Fetched from Sofascore API", icon: <FaGlobe /> },
                { text: "Advanced search and filtering options", icon: <FaSearch /> },
                { text: "Live score notifications & updates", icon: <FaBroadcastTower /> },
                { text: "Match Timeline with Key Events", icon: <FaClock /> },
                { text: "League Standings with Team Rankings", icon: <FaListOl /> },
            ],
            coreFunctionalities: [
                {
                    title: "Real-time Match Schedules & Scores",
                    description: "Get instant match updates, including goals, fouls, and substitutions in real time.",
                    icon: <FaBroadcastTower />,
                    image: '/feature/sofa/1.png'
                },
                {
                    title: "Detailed Player & Team Statistics",
                    description: "Access in-depth stats for teams and players across multiple leagues.",
                    icon: <FaChartLine />,
                    image: '/feature/sofa/2.png'
                },
                {
                    title: "Player Stats, Ratings & Goals",
                    description: "Detailed match performance, including ratings, goals, assists, and key stats. Track matches summary and transfer history.",
                    icon: <FaChartLine />,
                    image: "/feature/sofa/4.png"
                },
                {
                    title: "Tournaments & Leagues Coverage",
                    description: "Track multiple leagues and tournaments worldwide with accurate stats.",
                    icon: <FaTrophy />,
                    image: '/feature/sofa/3.png'
                },
                {
                    title: "Fully Responsive UI with Tailwind CSS",
                    description: "Enjoy a seamless experience on mobile, tablet, and desktop devices.",
                    icon: <FaMobileAlt />,
                    image: '/feature/sofa/5.png'
                }
            ],
        },
        techStack: [
            { name: "Next.js", shortDesc: "React framework for SSR & SSG.", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", shortDesc: "Utility-first CSS for styling.", icon: <SiTailwindcss /> },
            { name: "TypeScript", shortDesc: "Strictly typed JavaScript.", icon: <SiTypescript /> },
            { name: "Sofascore API", shortDesc: "Real-time sports data provider.", icon: <FaGlobe /> },
            { name: "Vercel", shortDesc: "Frontend deployment platform.", icon: <SiVercel /> },
            { name: "Git", shortDesc: "Version control system.", icon: <SiGit /> },
        ],
        license: {
            type: "Educational & Personal Use Only",
            details: "This project is for **educational and personal use** and is **not affiliated** with Sofascore.",
        },
    },
    {
        "title": "Evol-N",
        "slug": "evol-n",
        "branding": {
            "logo": "/logo/evol-n.png",
            "image": "/projectsV1/evol-n.png",
            "themeColor": "#1E90FF"
        },
        "links": {
            "liveDemo": "https://evol-n.com/home",
            "github": ""
        },
        "description": {
            "short": "Evol-N is a full stack application with admin dashboard.",
            "full": "Evol-N provides a comprehensive platform for managing users, content, and data efficiently. It features a robust backend with secure authentication, dynamic frontend interfaces, and integrated tools to facilitate workflow management and project tracking for businesses.",
            "tags": ["Full Stack", "Admin Dashboard", "Web App", "Next.js", "Tailwind CSS", "Supabase", "TypeScript", "API"]
        },
        "features": {
            "highlights": [
                { "text": "User & Content Management", "icon": "<FaUsers />" },
                { "text": "Admin Dashboard for Analytics", "icon": "<FaChartLine />" },
                { "text": "Secure Authentication", "icon": "<FaUserShield />" },
                { "text": "Responsive UI with Tailwind CSS", "icon": "<FaMobileAlt />" },
                { "text": "API Integration & Full Stack Functionality", "icon": "<FaCogs />" },
                { "text": "Real-Time Product Updates", "icon": "<FaSync />" },
                { "text": "Advanced Search & Filtering", "icon": "<FaSearch />" },
                { "text": "Order Tracking & Notifications", "icon": "<FaShippingFast />" },
                { "text": "Multiple Payment Gateways", "icon": "<FaMoneyBillWave />" },
                { "text": "User Reviews & Ratings", "icon": "<FaUsers />" },
                { "text": "Data Security & Encryption", "icon": "<FaLock />" },
                { "text": "Local Storage for Session Persistence", "icon": "<FaDatabase />" },
                { "text": "Fast & Optimized Performance", "icon": "<FaBolt />" }

            ],
            "coreFunctionalities": [
                {
                    "title": "User & Content Management",
                    "description": "Admins can manage users, content, and roles efficiently through the dashboard.",
                    "icon": "<FaUsers />",
                    "image": "/feature/evol-n/1.png"
                },
                {
                    "title": "Admin Analytics Dashboard",
                    "description": "Visualize data and track key metrics for informed decision making.",
                    "icon": "<FaChartLine />",
                    "image": "/feature/evol-n/2.png"
                },
                {
                    "title": "Secure Authentication",
                    "description": "Role-based access control ensures only authorized users can access sensitive data.",
                    "icon": "<FaUserShield />",
                    "image": "/feature/evol-n/3.png"
                },
                {
                    "title": "Responsive UI",
                    "description": "Seamless user experience on desktop, tablet, and mobile devices using Tailwind CSS.",
                    "icon": "<FaMobileAlt />",
                    "image": "/feature/evol-n/4.png"
                },
                {
                    "title": "Full Stack Functionality",
                    "description": "Backend API with Supabase and frontend integration for real-time data updates.",
                    "icon": "<FaCogs />",
                    "image": "/feature/evol-n/5.png"
                },
                {
                    "title": "Model-Friendly Website Frontend",
                    "description": "A responsive and intuitive frontend interface designed for a smooth shopping experience, showcasing products and interactive features effectively.",
                    "icon": "<FaCogs />",
                    "image": "/feature/evol-n/6.png"
                }
            ]
        },
        "adminPanel": {
            "features": [
                { "text": "User & Role Management", "icon": "<FaUsers />" },
                { "text": "Content Management", "icon": "<FaFileAlt />" },
                { "text": "Analytics Dashboard", "icon": "<FaChartLine />" },
                { "text": "Secure Authentication", "icon": "<FaUserShield />" },
                { "text": "API & Data Management", "icon": "<FaDatabase />" }
            ],
            "description": "The Admin Panel allows management of users, content, and analytics with secure authentication and real-time data updates."
        },
        "techStack": [
            { "name": "Next.js", "shortDesc": "React framework for SSR & SSG.", "icon": <SiNextdotjs /> },
            { "name": "Tailwind CSS", "shortDesc": "Utility-first CSS for styling.", "icon": <SiTailwindcss /> },
            { "name": "TypeScript", "shortDesc": "Strictly typed JavaScript.", "icon": <SiTypescript /> },
            { "name": "Supabase", "shortDesc": "Backend as a service and database.", "icon": <SiSupabase /> },
            { "name": "Node.js", "shortDesc": "JavaScript runtime for backend.", "icon": <SiNodedotjs /> },
            { "name": "LocalStorage", "shortDesc": "Session persistence and client-side storage.", "icon": <FaDatabase /> },
            { "name": "JWT Authentication", "shortDesc": "Secure authentication with JSON Web Tokens.", "icon": <FaUserShield /> },
            { "name": "Git", "shortDesc": "Version control system.", "icon": <FaCodeBranch /> },
            { "name": "VPS Deployment", "shortDesc": "Hosting on Virtual Private Server for backend.", "icon": <FaServer /> }
        ],
        "license": {
            "type": "Educational & Personal Use Only",
            "details": "This project is for educational and personal use and is not affiliated with any commercial entity."
        }
    }
    ,
    {
        title: "ShopSta",
        slug: "shopsta",
        branding: {
            logo: "/logo/shopsta.ico",
            image: "/projectsV1/shopsta.png",
            themeColor: "#008080",
        },
        links: {
            liveDemo: "https://shop-sta.vercel.app/",
            github: "https://github.com/Hbadr13/shopsta",
        },
        description: {
            short: "ShopSta is a modern e-commerce platform with seamless shopping experiences.",
            full: "ShopSta is a feature-rich e-commerce platform offering real-time product updates, secure checkout, and an intuitive user interface. Built with Next.js and Tailwind CSS, it ensures optimal performance, scalability, and responsiveness across all devices. Users can browse products, track orders, and experience secure transactions. Additionally, an Admin Panel allows management of products, users, and transactions.",
            tags: ["E-Commerce", "Next.js", "Secure Payments", "Shopping Cart", "Admin Panel"],
        },
        features: {
            highlights: [
                { text: "Seamless Shopping Experience", icon: <FaShoppingCart /> },
                { text: "Real-time Product Availability", icon: <FaBoxOpen /> },
                { text: "Admin Panel for Store Management", icon: <FaCog /> },
                { text: "Fast & Secure Checkout", icon: <FaCreditCard /> },
                { text: "Order Tracking & Notifications", icon: <FaShippingFast /> },
                { text: "Fully Responsive UI with Tailwind CSS", icon: <FaMobileAlt /> },
                { text: "Optimized Performance with Next.js", icon: <FaBolt /> },
                { text: "Advanced Search & Filtering", icon: <FaSearch /> },
                { text: "User Authentication & Security", icon: <FaUserShield /> },
                { text: "State Management with Redux & Zustand", icon: <FaSync /> },
                { text: "Local Storage for Session Persistence", icon: <FaDatabase /> },
                { text: "Multiple Payment Gateways", icon: <FaMoneyBillWave /> },
                { text: "Data Fetched from E-commerce API", icon: <FaGlobe /> },
                { text: "Secure Transactions & Data Protection", icon: <FaLock /> },
                { text: "User Reviews & Ratings", icon: <FaUsers /> },
            ],
            coreFunctionalities: [
                {
                    title: "Seamless Shopping Experience",
                    description: "Browse and purchase products effortlessly with a smooth UI.",
                    icon: <FaShoppingCart />,
                    image: '/feature/shopSta/1.png'

                },

                {
                    title: "Product & Inventory Management",
                    description: "Admins can add, edit, or delete products and track inventory levels.",
                    icon: <FaClipboardList />,
                    image: '/feature/shopSta/5.png'


                },
                {
                    title: "Real-Time Order Tracking",
                    description: "Track your order status from processing to delivery with real-time updates.",
                    icon: <FaTruckMoving />,  // You can use another icon if needed
                    image: '/feature/shopSta/4.png'
                },
                {
                    title: "Admin Panel for Store Management",
                    description: "Manage products, orders, users, and analytics from a dedicated admin dashboard.",
                    icon: <FaCog />,
                    image: '/feature/shopSta/3.png'

                },
                {
                    title: "Order & Transaction Management",
                    description: "Track customer orders, update statuses, and process refunds.",
                    icon: <FaDatabase />,
                    image: '/feature/shopSta/2.png'

                },
                {
                    title: "Fully Responsive UI with Tailwind CSS",
                    description: "Enjoy a seamless experience on mobile, tablet, and desktop devices.",
                    icon: <FaMobileAlt />,
                    image: '/feature/shopSta/6.png'

                }
            ],
        },
        adminPanel: {
            features: [
                { text: "Product Management", icon: <FaBoxOpen /> },
                { text: "Order & Payment Tracking", icon: <FaClipboardList /> },
                { text: "User Role & Access Control", icon: <FaUserTie /> },
                { text: "Analytics Dashboard", icon: <FaChartLine /> },
                { text: "Secure Authentication for Admins", icon: <FaUserShield /> },
                { text: "Transaction & Refund Management", icon: <FaMoneyBillWave /> },
                { name: "LocalStorage", category: "Data Persistence", icon: <FaDatabase /> },
                { name: "Redux", category: "State Management", icon: <FaSync /> },

            ],
            description: "The Admin Panel allows store owners to manage products, orders, users, and track sales analytics in real time. Secure authentication ensures that only authorized users can access admin functionalities.",
        },
        techStack: [
            { name: "Next.js", shortDesc: "React framework for SSR & SSG.", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", shortDesc: "Utility-first CSS for styling.", icon: <SiTailwindcss /> },
            { name: "TypeScript", shortDesc: "Strictly typed JavaScript.", icon: <SiTypescript /> },
            { name: "Redux", shortDesc: "Global state management.", icon: <SiRedux /> },
            { name: "LocalStorage", shortDesc: "Session persistence.", icon: <FaDatabase /> },
            { name: "Node.js", shortDesc: "JavaScript runtime for backend.", icon: <SiNodedotjs /> },
            { name: "MongoDB", shortDesc: "NoSQL database for scalable data storage.", icon: <SiMongodb /> },
            { name: "Cloudinary", shortDesc: "Media management & image optimization.", icon: <FaCloud /> },
            { name: "Vercel", shortDesc: "Frontend deployment platform.", icon: <SiVercel /> },
            { name: "Git", shortDesc: "Version control system.", icon: <FaCodeBranch /> },
        ],
        license: {
            type: "Educational & Personal Use Only",
            details: "This project is for **educational and personal use** and is **not affiliated** with any commercial entity.",
        }
    },
    {
        title: "Fitness Journey",
        slug: "fitness-journey",
        branding: {
            logo: "/logo/fitnessJ.ico",
            image: "/projectsV1/fitnessJur.png",
            themeColor: "#FF5733", // Optional: UI theming
        },
        links: {
            liveDemo: "https://fitnesjourneyy.vercel.app/",
            github: "https://github.com/Hbadr13/workout-blog",
        },
        description: {
            short: "Fitness Journey is a platform dedicated to fitness enthusiasts.",
            full: "Fitness Journey covers the latest trends in fitness technology, workout routines, injury prevention, and nutrition tips. Whether you're looking for weight loss strategies, strength training guides, or lifestyle motivation, this platform offers a well-rounded experience tailored to every fitness level.",
            tags: ["Fitness", "Workout", "Nutrition", "Health", "Blog"],
        },
        features: {
            highlights: [
                { text: "Comprehensive Workout Plans", icon: <FaDumbbell /> },
                { text: "Heart Rate & Progress Tracking", icon: <FaHeartbeat /> },
                { text: "Nutrition & Diet Guidance", icon: <FaAppleAlt /> },
                { text: "Community Support & Challenges", icon: <FaUsers /> },
                { text: "Weight Loss & Muscle Gain Strategies", icon: <FaFire /> },
                { text: "Video Tutorials & Exercise Guides", icon: <FaPlayCircle /> },
                { text: "Mobile-Friendly Responsive Design", icon: <FaMobileAlt /> },
                { text: "Performance Analytics & Goals Tracking", icon: <FaChartLine /> },
                { text: "Expert Articles & Research-Based Tips", icon: <FaBookOpen /> },
            ],
            coreFunctionalities: [
                {
                    title: "Comprehensive Workout Plans",
                    description: "Tailored workout programs for different fitness levels and goals.",
                    icon: <FaDumbbell />,
                    image: '/feature/fitness/4.png'

                },
                {
                    title: "Nutrition & Diet Guidance",
                    description: "Personalized meal plans and expert nutrition advice.",
                    icon: <FaAppleAlt />,
                    image: '/feature/fitness/1.png'
                },
                {
                    title: "Performance Analytics & Goals Tracking",
                    description: "Set goals and track your fitness journey with insightful data.",
                    icon: <FaChartLine />,
                    image: '/feature/fitness/3.png'
                },
                {
                    title: "Weight Loss & Muscle Gain Strategies",
                    description: "Effective methods for weight loss and muscle building.",
                    icon: <FaFire />,
                    image: '/feature/fitness/2.png'
                },
                {
                    title: "Fully Responsive UI with Tailwind CSS",
                    description: "Enjoy a seamless experience on mobile, tablet, and desktop devices.",
                    icon: <FaMobileAlt />,
                    image: '/feature/fitness/5.png'
                },
            ],
        },
        techStack: [
            { name: "Next.js", shortDesc: "React-based framework for SSR & SSG.", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", shortDesc: "Utility-first CSS for rapid UI styling.", icon: <SiTailwindcss /> },
            { name: "TypeScript", shortDesc: "Typed JavaScript for robust applications.", icon: <SiTypescript /> },
            { name: "Vercel", shortDesc: "Cloud platform for frontend deployment.", icon: <SiVercel /> },
            { name: "Framer Motion", shortDesc: "Modern animation library for React.", icon: <SiFramer /> },
            { name: "Git", shortDesc: "Version control system for collaboration.", icon: <SiGit /> },
            { name: "Markdown", shortDesc: "Lightweight markup language for content formatting.", icon: <SiMarkdown /> },
        ],
        setup: {
            requirements: [
                "✅ Node.js >= 16",
                "✅ NPM or Yarn",
                "✅ Content Management System (Optional)",
            ],
            installationSteps: [
                { step: "Clone the repository", command: "git clone https://github.com/Hbadr13/workout-blog.git" },
                { step: "Navigate to the project", command: "cd workout-blog" },
                { step: "Install dependencies", command: "npm install" },
                { step: "Run the development server", command: "npm run dev" },
            ],
            environmentVariables: [
                { name: "NEXT_PUBLIC_ANALYTICS_ID", required: false, description: "Google Analytics tracking ID" },
            ],
        },
        license: {
            type: "Educational & Personal Use Only",
            details: "This project is for **educational and personal use** and is **not affiliated** with any fitness brand.",
        },
        contributors: [
            {
                name: "Hamza Badr",
                role: "Full-Stack Developer",
                github: "https://github.com/Hbadr13",
            },
        ],
    },
    {
        title: "YallaFoot",
        slug: "yalla-foot",
        branding: {
            logo: "/logo/yallaFoot.ico",
            image: "/projectsV1/yalla.png",
            themeColor: "#FF0000", // Optional: Use for UI theming
        },
        links: {
            liveDemo: "https://yalla-foot.vercel.app/",
            github: "https://github.com/Hbadr13/yalla-foot",
        },
        description: {
            short: "YallaFoot is the ultimate platform for football fans.",
            full: "It delivers real-time updates on football events, match results, team standings, and tournament details. Developed with Next.js and Tailwind CSS, it offers a fast, dynamic, and fully responsive experience for users seeking up-to-the-minute football news and insights.",
            tags: ["Football", "Live Scores", "Next.js", "API Integration"],
        },
        features: {
            highlights: [
                { text: "Live Match Scores & Updates", icon: <FaBroadcastTower /> },
                { text: "Detailed Player & Team Statistics", icon: <FaChartBar /> },
                { text: "Tournaments & Leagues Coverage", icon: <FaTrophy /> },
                { text: "Fully Responsive UI with Tailwind CSS", icon: <FaMobileAlt /> },
                { text: "Optimized Performance with Next.js", icon: <FaBolt /> },
                { text: "Match Timeline & Key Events", icon: <FaClock /> },
                { text: "League Standings & Rankings", icon: <FaListOl /> },
                { text: "Advanced Search & Filtering", icon: <FaSearch /> },
                { text: "Football News & Insights", icon: <FaGlobe /> },
            ],
            coreFunctionalities: [
                {
                    title: "Live Match Scores & Updates",
                    description: "Stay updated with real-time match scores, goals, and events.",
                    icon: <FaBroadcastTower />,
                    image: ''
                },
                {
                    title: "Detailed Player & Team Statistics",
                    description: "Get in-depth analytics on teams, players, and performance metrics.",
                    icon: <FaChartBar />,
                    image: ''
                },
                {
                    title: "Match Timeline & Key Events",
                    description: "Follow match highlights and key moments in a structured timeline.",
                    icon: <FaClock />,
                },
                {
                    title: "League Standings & Rankings",
                    description: "Check team rankings and league standings in real time.",
                    icon: <FaListOl />,
                    image: ''
                },
                {
                    title: "Tournaments & Leagues Coverage",
                    description: "Follow major tournaments and leagues with comprehensive data.",
                    icon: <FaTrophy />,
                    image: ''
                },
                {
                    title: "Fully Responsive UI with Tailwind CSS",
                    description: "Enjoy a seamless experience across all devices.",
                    icon: <FaMobileAlt />,
                    image: ''
                },
                {
                    title: "Optimized Performance with Next.js",
                    description: "Lightning-fast loading with efficient data fetching.",
                    icon: <FaBolt />,
                    image: ''
                },
                {
                    title: "Football News & Insights",
                    description: "Access the latest news, articles, and analysis on football events.",
                    icon: <FaGlobe />,
                    image: ''
                },
            ],
        },
        techStack: [
            { name: "Next.js", shortDesc: "Frontend framework for SSR & SSG.", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", shortDesc: "Utility-first CSS for styling.", icon: <SiTailwindcss /> },
            { name: "TypeScript", shortDesc: "Strictly typed JavaScript.", icon: <SiTypescript /> },
            { name: "Vercel", shortDesc: "Frontend deployment platform.", icon: <SiVercel /> },
            { name: "Git", shortDesc: "Version control system.", icon: <SiGit /> },
        ],
        setup: {
            requirements: [
                "✅ Node.js >= 16",
                "✅ NPM or Yarn",
                "✅ Football Data API key (for real-time data fetching)",
            ],
            installationSteps: [
                { step: "Clone the repository", command: "git clone https://github.com/Hbadr13/yalla-foot.git" },
                { step: "Navigate to the project", command: "cd yalla-foot" },
                { step: "Install dependencies", command: "npm install" },
                { step: "Run the development server", command: "npm run dev" },
            ],
            environmentVariables: [
                { name: "NEXT_PUBLIC_API_KEY", required: true, description: "Your Football Data API key" },
                { name: "NEXT_PUBLIC_ANALYTICS_ID", required: false, description: "Google Analytics tracking ID" },
            ],
        },
        license: {
            type: "Educational & Personal Use Only",
            details: "This project is for **educational and personal use** and is **not affiliated** with any official football organization.",
        },
        contributors: [
            {
                name: "Hamza Badr",
                role: "Full-Stack Developer",
                github: "https://github.com/Hbadr13",
            },
        ],
    },
    {
        title: "GitHub Admin Dashboard",
        slug: "github-admin",
        branding: {
            logo: "/logo/github.ico",
            image: "/projectsV1/github.png",
            themeColor: "#24292e", // GitHub's official color
        },
        links: {
            liveDemo: "https://github-admin-ivory.vercel.app/",
            github: "https://github.com/Hbadr13/github-admin",
        },
        description: {
            short: "A powerful dashboard for managing GitHub repositories and users efficiently.",
            full: "GitHub Admin Dashboard is designed to streamline repository and user management. Built with Next.js, Tailwind CSS, Zustand, and Ant Design, it integrates with the GitHub REST API to provide an intuitive interface for tracking repositories, managing users, and accessing key GitHub insights efficiently.",
            tags: ["GitHub API", "Admin Dashboard", "Next.js", "Tailwind CSS", "Ant Design"],
        },
        features: {
            highlights: [
                { text: "Manage GitHub Repositories", icon: <FaCodeBranch /> },
                { text: "User Access Control & Management", icon: <FaUserShield /> },
                { text: "Real-time Repository Insights", icon: <FaChartLine /> },
                { text: "Fully Responsive UI with Tailwind CSS", icon: <FaDesktop /> },
                { text: "Optimized Performance with Next.js", icon: <FaBolt /> },
                { text: "Authentication via GitHub OAuth", icon: <FaUsers /> },
                { text: "Data Fetched from GitHub REST API", icon: <FaDatabase /> },
                { text: "Issue & Pull Request Tracking", icon: <FaClipboardList /> },
            ],
            coreFunctionalities: [
                {
                    title: "Repository Management",
                    description: "View, search, and organize repositories seamlessly.",
                    icon: <FaCodeBranch />,
                    image: ''
                },
                {
                    title: "User Access & Permissions",
                    description: "Manage user roles and repository access within teams.",
                    icon: <FaUserShield />,
                    image: ''
                },
                {
                    title: "Live Repository Insights",
                    description: "Get real-time statistics, commits, and contributions.",
                    icon: <FaChartLine />,
                    image: ''
                },
                {
                    title: "GitHub OAuth Authentication",
                    description: "Secure login via GitHub OAuth for personalized access.",
                    icon: <FaUsers />,
                    image: ''
                },
                {
                    title: "Fully Responsive UI",
                    description: "Optimized for desktop and mobile experiences.",
                    icon: <FaDesktop />,
                    image: ''
                },
                {
                    title: "Optimized Performance with Next.js",
                    description: "Fast rendering and API efficiency for smooth interactions.",
                    icon: <FaBolt />,
                    image: ''
                },
                {
                    title: "Issue & PR Tracking",
                    description: "Monitor GitHub issues and pull requests directly.",
                    icon: <FaClipboardList />,
                    image: ''
                },
                {
                    title: "Data Fetched from GitHub REST API",
                    description: "Ensures up-to-date repository and user information.",
                    icon: <FaDatabase />,
                    image: ''
                },
            ],
        },
        techStack: [
            { name: "Next.js", shortDesc: "Frontend framework for SSR & SSG.", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", shortDesc: "Utility-first CSS for styling.", icon: <SiTailwindcss /> },
            { name: "TypeScript", shortDesc: "Strictly typed JavaScript.", icon: <SiTypescript /> },
            { name: "GitHub REST API", shortDesc: "GitHub data provider for repositories and users.", icon: <SiGit /> },
            { name: "Ant Design", shortDesc: "UI component library.", icon: <SiAntdesign /> },
            { name: "Vercel", shortDesc: "Frontend deployment platform.", icon: <SiVercel /> },
            { name: "NextAuth.js", shortDesc: "Authentication library for Next.js.", icon: <SiAuth0 /> },
        ],
        setup: {
            requirements: [
                "✅ Node.js >= 16",
                "✅ NPM or Yarn",
                "✅ GitHub OAuth App credentials",
            ],
            installationSteps: [
                { step: "Clone the repository", command: "git clone https://github.com/Hbadr13/github-admin.git" },
                { step: "Navigate to the project", command: "cd github-admin" },
                { step: "Install dependencies", command: "npm install" },
                { step: "Run the development server", command: "npm run dev" },
            ],
            environmentVariables: [
                { name: "NEXT_PUBLIC_GITHUB_CLIENT_ID", required: true, description: "GitHub OAuth Client ID" },
                { name: "NEXT_PUBLIC_GITHUB_CLIENT_SECRET", required: true, description: "GitHub OAuth Client Secret" },
            ],
        },
        license: {
            type: "Educational & Personal Use Only",
            details: "This project is for **educational and personal use** and is **not affiliated** with GitHub.",
        },
        contributors: [
            {
                name: "Hamza Badr",
                role: "Full-Stack Developer",
                github: "https://github.com/Hbadr13",
            },
        ],
    }
]



export const projectData = [
    {
        "title": "Sofa",
        "slug": "/project/sofa",
        "logo": "/logo/sofa.ico",
        "image": "/projectsV1/sofa.png",
        "liveDemo": "https://sofa-nu.vercel.app/",
        "github": "https://github.com/Hbadr13/sofascore-clone",
        "shortDescription": "Sofa is a feature-rich Sofascore clone designed for sports enthusiasts.",
        "fullDescription": "It provides real-time live scores, in-depth match statistics, and comprehensive sports data powered by the Sofascore API. Built with Next.js and Tailwind CSS, the platform ensures a seamless, fully responsive experience across all devices."
    },
    {
        "title": "Evol-N",
        "slug": "/project/evol-n",
        "logo": "/logo/evol-n.png",
        "image": "/projectsV1/evol-n.png",
        "liveDemo": "https://evol-n.com/home",
        "github": "",
        "shortDescription": "E-commerce App is a full-featured online store platform.",
        "fullDescription": "This platform offers a complete e-commerce experience with an admin dashboard, product management, secure online payment, and responsive design. Customers can browse products, make purchases, and track orders seamlessly, while admins can manage inventory, monitor sales, and optimize user experience efficiently."

    },
    {
        "title": "ShopSta",
        "slug": "/project/shopsta",
        "logo": "/logo/shopSta.ico",
        "image": "/projectsV1/shopSta.png",
        "liveDemo": "https://shop-sta.vercel.app/",
        "github": "https://github.com/Hbadr13/shopSta",
        "shortDescription": "ShopSta is a modern eCommerce platform built with Next.js, Node.js, and MongoDB.",
        "fullDescription": "Featuring an intuitive admin panel, it offers a smooth and responsive shopping experience, allowing users to browse, purchase, and manage products with ease. Designed for scalability and efficiency, ShopSta provides a powerful backend to handle dynamic product listings and secure transactions."
    },
    {
        "title": "Fitness Journey",
        "slug": "/project/fitness-journey",
        "logo": "/logo/fitnessJ.ico",
        "image": "/projectsV1/fitnessJur.png",
        "liveDemo": "https://fitnesjourneyy.vercel.app/",
        "github": "https://github.com/Hbadr13/workout-blog",
        "shortDescription": "Fitness Journey is a platform dedicated to fitness enthusiasts.",
        "fullDescription": "It covers the latest trends in fitness technology, workout routines, injury prevention, and nutrition tips. Whether you're looking for weight loss strategies, strength training guides, or lifestyle motivation, this platform offers a well-rounded experience tailored to every fitness level."
    },

    {
        "title": "YallaFoot",
        "slug": "/project/yalla-foot",
        "logo": "/logo/yallaFoot.ico",
        "image": "/projectsV1/yalla.png",
        "liveDemo": "https://yalla-foot.vercel.app/",
        "github": "https://github.com/Hbadr13/yalla-foot",
        "shortDescription": "YallaFoot is the ultimate platform for football fans.",
        "fullDescription": "It delivers real-time updates on football events, match results, team standings, and tournament details. Developed with Next.js and Tailwind CSS, it offers a fast, dynamic, and fully responsive experience for users seeking up-to-the-minute football news and insights."
    },
    {
        "title": "GitHub Admin Dashboard",
        "slug": "/project/github-admin",
        "logo": "/logo/github.ico",
        "image": "/projectsV1/github.png",
        "liveDemo": "https://github-admin-ivory.vercel.app/",
        "github": "https://github.com/Hbadr13/github-admin",
        "shortDescription": "GitHub Admin Dashboard is a tool designed to streamline repository and user management.",
        "fullDescription": "Built with Next.js, Tailwind CSS, Zustand, and Ant Design, it integrates with the GitHub REST API to provide an intuitive interface for tracking repositories, managing users, and accessing key GitHub insights efficiently."
    }
];
