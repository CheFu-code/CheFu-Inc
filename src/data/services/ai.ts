import {
    Brain,
    Bot,
    Workflow,
    MessageSquareText,
    Database,
    PlugZap,
    Code2,
    Search,
    ShieldCheck,
    Settings2,
} from 'lucide-react';

export const aiCapabilities = [
    {
        icon: Bot,
        title: 'AI Agents',
        description:
            'Purpose-built AI agents that can understand context, reason through tasks, use connected tools, and execute multi-step workflows instead of simply generating text.',
    },
    {
        icon: Workflow,
        title: 'Intelligent Automation',
        description:
            'Automate repetitive business processes by connecting AI with existing systems, APIs, databases, communication platforms, and internal workflows.',
    },
    {
        icon: MessageSquareText,
        title: 'Conversational AI',
        description:
            'Build intelligent assistants and customer-facing experiences capable of understanding natural language and providing useful, context-aware responses.',
    },
    {
        icon: PlugZap,
        title: 'AI Integrations',
        description:
            'Connect AI capabilities to the tools your business already uses through APIs, webhooks, databases, authentication systems, and custom integrations.',
    },
    {
        icon: Database,
        title: 'Knowledge & Data Systems',
        description:
            'Turn structured and unstructured business information into searchable, contextual knowledge that AI systems can use to provide more relevant results.',
    },
    {
        icon: Code2,
        title: 'Custom AI Applications',
        description:
            'Design and develop complete AI-powered applications around a specific business problem, from the interface and backend to the AI layer and deployment.',
    },
] as const;

export const aiSolutions = [
    {
        title: 'Customer Support Automation',
        description:
            'AI-powered assistants that can answer common questions, understand customer context, retrieve relevant information, and escalate complex cases when human intervention is needed.',
        tags: ['AI Agents', 'Knowledge Systems', 'Automation'],
    },
    {
        title: 'Business Process Automation',
        description:
            'Reduce manual work by connecting intelligent decision-making with the systems and processes your organization already depends on.',
        tags: ['Workflows', 'APIs', 'AI Automation'],
    },
    {
        title: 'AI-Powered Internal Tools',
        description:
            'Build private AI interfaces that help teams search information, analyze data, generate content, perform operational tasks, and work more efficiently.',
        tags: ['Internal Tools', 'Data', 'AI'],
    },
    {
        title: 'Intelligent Digital Products',
        description:
            'Add AI capabilities directly into websites, mobile applications, SaaS platforms, dashboards, and other digital products.',
        tags: ['Web', 'Mobile', 'SaaS'],
    },
] as const;

export const aiProcess = [
    {
        number: '01',
        icon: Search,
        title: 'Understand',
        description:
            'We first understand the business problem, existing workflow, users, data, constraints, and desired outcome before deciding whether AI is actually the right solution.',
    },
    {
        number: '02',
        icon: Brain,
        title: 'Design',
        description:
            'We design the AI architecture, integrations, user experience, data flow, permissions, and automation logic around the requirements of the system.',
    },
    {
        number: '03',
        icon: Code2,
        title: 'Build',
        description:
            'We develop the application, AI capabilities, backend services, integrations, authentication, databases, and supporting infrastructure.',
    },
    {
        number: '04',
        icon: ShieldCheck,
        title: 'Secure',
        description:
            'Security, access control, data handling, failure states, validation, and operational safeguards are considered as part of the implementation.',
    },
    {
        number: '05',
        icon: Settings2,
        title: 'Improve',
        description:
            'After deployment, systems can be monitored, evaluated, optimized, and expanded as business requirements evolve.',
    },
] as const;

export const aiTechnologies = [
    'AI Agents',
    'LLM Applications',
    'Natural Language Processing',
    'Computer Vision',
    'AI Workflows',
    'API Integrations',
    'Cloud Infrastructure',
    'Data Systems',
] as const;

export const aiIndustries = [
    'E-Commerce',
    'Professional Services',
    'Technology',
    'Education',
    'Finance',
    'Healthcare',
    'Retail',
    'Startups',
] as const;