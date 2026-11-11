/**
 * ============================================================================
 * 🔗 REFERRAL REDIRECT LINK CONFIGURATION
 * ============================================================================
 */
const DEFAULT_REFERRAL_URL = "https://t.mercor.com/DNDX9";

// Retrieves active referral URL (from query string if provided, or default)
function getActiveReferralUrl(customUrl) {
  if (customUrl) return customUrl;
  const urlParams = new URLSearchParams(window.location.search);
  const paramRef = urlParams.get("ref") || urlParams.get("referral");
  return paramRef ? decodeURIComponent(paramRef) : DEFAULT_REFERRAL_URL;
}

/**
 * ============================================================================
 * 💼 JOB OPPORTUNITIES DATASET (Only Verified Jobs With Full Descriptions)
 * ============================================================================
 */
const JOBS_DATA = [
  {
    id: 1,
    title: "Embedded Systems / Kernel Engineer",
    domain: "Software engineering",
    rate: "$100 - $150 / hour",
    rateNum: 150,
    posted: "Posted 21 hours ago",
    postedOrder: 1,
    bonus: "$2000",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/DNDX9",
    location: "United States (Remote)",
    jobType: "Part-time position",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's cutting-edge GenAI team to be at the core of the AI revolution, where your expertise fuels the development of the most advanced Large Language Models.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Embedded Systems, Firmware, Kernel and Chip Design Engineers with hands-on expertise in low-level C/C++, operating system internals, firmware or hardware design (RTL) to bring deep systems-level expertise and elevate the quality of our AI training data.\n\nThis is a W-2 employment position with Cincinnatus LLC, with the opportunity to be placed at a leading AI Lab as part of their extended workforce.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in embedded systems and kernel engineering, firmware and device drivers, and hardware design and verification topics.",
      "Design challenging, domain-relevant tasks, and write accurate and well-structured solutions to embedded systems and kernel engineering problems.",
      "Evaluate embedded systems and kernel engineering tasks and solutions and provide clear, written technical feedback.",
      "Design and evaluate low-level tasks covering memory management, concurrency, device drivers, RTOS behavior and hardware description languages.",
      "Develop rubrics to assess correctness, safety and performance of systems-level and hardware design solutions.",
      "Collaborate with other subject matter experts to ensure consistency and accuracy in training data."
    ],
    qualifications: [
      "4+ years of dedicated professional experience in embedded systems, firmware, OS kernel or chip design at a recognized, top-tier organization (semiconductor, OS, devices, automotive or aerospace).",
      "Strong production C and/or C++ for resource-constrained or performance-critical systems.",
      "Hands-on experience in at least one of: Linux kernel or driver development, RTOS and firmware, or RTL design and verification (Verilog, SystemVerilog, VHDL, UVM).",
      "Demonstrable career progression.",
      "Ability to engage reliably for at least 20 hours/week during weekdays.",
      "Strong written communication skills and the ability to explain complex technical decisions clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor or W-2 contingent employee with Cincinnatus LLC.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 2,
    title: "DevOps / Infrastructure Engineer",
    domain: "Software engineering",
    rate: "$80 - $120 / hour",
    rateNum: 120,
    posted: "Posted 21 hours ago",
    postedOrder: 2,
    bonus: "$1920",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/r1lWV",
    location: "United States (Remote)",
    jobType: "Part-time position",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's cutting-edge GenAI team to be at the core of the AI revolution, where your expertise fuels the development of the most advanced Large Language Models.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented DevOps, SRE and Infrastructure Engineers with hands-on expertise in cloud infrastructure, Kubernetes, infrastructure as code and CI/CD to bring real-world operational judgment and elevate the quality of our AI training data.\n\nThis is a W-2 employment position with Cincinnatus LLC, with the opportunity to be placed at a leading AI Lab as part of their extended workforce.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in DevOps and infrastructure engineering, cloud platforms, and reliability and observability topics.",
      "Design challenging, domain-relevant tasks, and write accurate and well-structured solutions to DevOps and infrastructure engineering problems.",
      "Evaluate DevOps and infrastructure engineering tasks and solutions and provide clear, written technical feedback.",
      "Build and evaluate realistic infrastructure tasks such as Kubernetes manifests, Terraform modules, CI/CD pipelines and incident debugging scenarios.",
      "Develop rubrics to assess infrastructure design, security posture, reliability and cost tradeoffs.",
      "Collaborate with other subject matter experts to ensure consistency and accuracy in training data."
    ],
    qualifications: [
      "4+ years of dedicated professional experience in DevOps, SRE, platform or infrastructure engineering at a recognized, top-tier organization.",
      "Hands-on production experience with Kubernetes and containers (Docker), and infrastructure as code (Terraform, Pulumi or CloudFormation).",
      "Deep experience with at least one major cloud provider (AWS, GCP or Azure) and CI/CD tooling (GitHub Actions, Jenkins, ArgoCD or similar).",
      "Strong scripting skills in Python, Bash or Go.",
      "Demonstrable career progression.",
      "Ability to engage reliably for at least 20 hours/week during weekdays.",
      "Strong written communication skills and the ability to explain complex technical decisions clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor or W-2 contingent employee with Cincinnatus LLC.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 3,
    title: "Responsible AI / Security Specialist",
    domain: "Software engineering",
    rate: "$90 - $140 / hour",
    rateNum: 140,
    posted: "Posted 21 hours ago",
    postedOrder: 3,
    bonus: "$2000",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/16CnI",
    location: "United States (Remote)",
    jobType: "Part-time position",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's cutting-edge GenAI team to be at the core of the AI revolution, where your expertise fuels the development of the most advanced Large Language Models.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Security, Red Teaming and Responsible AI specialists with hands-on expertise in application security, offensive security, threat analysis or trust and safety to bring an adversarial, safety-first mindset and elevate the quality of our AI training data.\n\nThis is a W-2 employment position with Cincinnatus LLC, with the opportunity to be placed at a leading AI Lab as part of their extended workforce.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in security and responsible AI, application and infrastructure security, and red teaming and abuse prevention topics.",
      "Design challenging, domain-relevant tasks, and write accurate and well-structured solutions to security and responsible AI problems.",
      "Evaluate security and responsible AI tasks and solutions and provide clear, written technical feedback.",
      "Design adversarial tasks and red teaming scenarios that probe AI systems for security vulnerabilities, unsafe behavior and policy violations.",
      "Develop rubrics to assess the safety, accuracy and harm potential of AI responses on security and sensitive topics.",
      "Collaborate with other subject matter experts to ensure consistency and accuracy in training data."
    ],
    qualifications: [
      "4+ years of dedicated professional experience in cybersecurity, red teaming, penetration testing, threat intelligence or trust and safety at a recognized, top-tier organization.",
      "Hands-on experience in at least one of: application security and secure code review, penetration testing and offensive security, threat intelligence or incident response, or trust and safety policy enforcement.",
      "Relevant credentials such as OSCP, OSWE, GPEN, CISSP or published CVEs, bug bounty findings or security research are a strong plus.",
      "Demonstrable career progression.",
      "Ability to engage reliably for at least 20 hours/week during weekdays.",
      "Strong written communication skills and the ability to explain complex technical decisions clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor or W-2 contingent employee with Cincinnatus LLC.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 4,
    title: "Software Engineer (Foundational)",
    domain: "Software engineering",
    rate: "$80 - $120 / hour",
    rateNum: 120,
    posted: "Posted 21 hours ago",
    postedOrder: 4,
    bonus: "$1920",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/j2JpJ",
    location: "United States (Remote)",
    jobType: "Part-time position",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's cutting-edge GenAI team to be at the core of the AI revolution, where your expertise fuels the development of the most advanced Large Language Models.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Software Engineers with hands-on expertise in production software engineering across Python and at least one systems or backend language (Java, C++, Go or Rust) to bring rigorous engineering judgment and elevate the quality of our AI training data.\n\nThis is a W-2 employment position with Cincinnatus LLC, with the opportunity to be placed at a leading AI Lab as part of their extended workforce.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in software engineering, algorithms and data structures, and backend and systems design topics.",
      "Design challenging, domain-relevant tasks, and write accurate and well-structured solutions to software engineering problems.",
      "Evaluate software engineering tasks and solutions and provide clear, written technical feedback.",
      "Write, review and debug realistic multi-file coding tasks, including unit tests and reference solutions that run cleanly.",
      "Develop rubrics to assess code correctness, readability, test coverage and design tradeoffs in model-generated code.",
      "Collaborate with other subject matter experts to ensure consistency and accuracy in training data."
    ],
    qualifications: [
      "4+ years of dedicated professional software engineering experience at a recognized, top-tier technology company or high-growth startup.",
      "Strong production proficiency in Python plus at least one of Java, C++, Go or Rust.",
      "Hands-on experience with Git workflows, code review, automated testing and CI.",
      "Demonstrable career progression (e.g., Software Engineer → Senior Engineer → Staff or Tech Lead).",
      "Ability to engage reliably for at least 20 hours/week during weekdays.",
      "Strong written communication skills and the ability to explain complex technical decisions clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor or W-2 contingent employee with Cincinnatus LLC.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 5,
    title: "MLOps Engineer, LLM Performance (Kernels, Profiling, Serving)",
    domain: "Software engineering",
    rate: "$90 - $120 / hour",
    rateNum: 120,
    posted: "Posted 19 days ago",
    postedOrder: 5,
    bonus: "$1920",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/2Mowx",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (40 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's cutting-edge GenAI team to be at the core of the AI revolution, where your expertise fuels the development of the most advanced Large Language Models.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking MLOps and ML systems engineers with hands-on experience in large language model infrastructure across any of four areas: accelerator kernel programming, performance profiling and trace analysis, debugging accelerated and distributed workloads, and high-throughput inference serving. Experience with JAX, XLA or TPUs is especially valuable. This role involves AI model training and evaluation work, including writing and assessing ML systems tasks and solutions to generate high-quality training data for frontier AI systems.\n\nThis is a fully remote role open to candidates worldwide. Depending on where you are based, your engagement will be arranged through Cincinnatus LLC or one of its trusted employer-of-record partners in your country, with the opportunity to be placed at a leading AI lab as part of their extended workforce. This is a 40-hour full-time engagement, with no conflicts/no other engagements.",
    responsibilities: [
      "Design challenging tasks across kernels, profiling, debugging and inference serving, including adversarial problems that expose where frontier models fail on accelerator code (for example Pallas kernels on TPU), and write accurate, well-structured solutions to them.",
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance on ML systems, compilers and training infrastructure topics.",
      "Evaluate ML systems tasks and solutions, and provide clear written technical feedback that stands up to expert review.",
      "Develop guidelines and detailed rubrics covering kernel optimization, profiler output interpretation, distributed systems reasoning, and serving throughput and latency trade-offs.",
      "Collaborate with other subject matter experts to keep training data consistent and accurate."
    ],
    qualifications: [
      "2+ years of hands-on professional experience in ML systems, ML infrastructure, model serving, or accelerator performance engineering.",
      "Practical experience in at least one of: writing or optimizing custom kernels (Pallas, Triton, CUDA, CUTLASS); performance profiling and trace analysis (JAX/XLA profiler, Kineto, torch.profiler, Nsight); debugging distributed or accelerator-bound workloads; serving large language models at scale (vLLM, SGLang, TensorRT-LLM, JetStream, KV cache, paged attention, continuous batching).",
      "Working production experience with JAX and/or PyTorch. Framework-level depth is a strong plus: custom operators, sharding and distributed training (pjit/shard_map, FSDP, Megatron, MaxText), or compiler and graph-level work (XLA/StableHLO, torch.compile, MLIR).",
      "Experience with modern accelerators such as TPU (v4 to v6e), H100, B200, Trainium or MI300, and the ability to reason about throughput, latency and memory trade-offs.",
      "Demonstrable career progression.",
      "Ability to engage reliably for at least 40 hours/week during weekdays.",
      "Strong written communication skills and the ability to explain complex technical decisions clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor or through local employer-of-record partners.",
      "This is a fully remote role open to candidates worldwide.",
      "This is a 40-hour full-time engagement with no conflicts/no other engagements.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 6,
    title: "Software Developers (Must own MacBook)",
    domain: "Software engineering",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 23 days ago",
    postedOrder: 6,
    bonus: "$240",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/PAk4F",
    location: "Remote",
    jobType: "Hourly contract (10-20 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "Work through real development workflows on your own Mac to help benchmark and improve cutting-edge AI models for a leading AI lab.",
    overview: "We are looking for software developers with 2-3 years of professional coding experience, or currently enrolled postgrad Computer Science students, to support a research project with a leading AI lab. You will work through real development workflows on your own Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real software development tasks (building, debugging, refactoring, reviewing code) on your Mac to create high-quality training data for advanced AI models.",
      "Work through authentic developer workflows including everyday macOS developer tools (VS Code, Xcode, Terminal, Git, and package managers).",
      "Clearly explain and document your technical reasoning and architectural decisions while you work.",
      "Engage for a flexible part-time commitment of approximately 10-20 hours per week on your own schedule with clearly structured responsibilities."
    ],
    qualifications: [
      "Required: You must own a MacBook or Mac with an Apple M-series chip or Intel processor, running macOS 15 or higher. (Applicants without a Mac cannot be considered).",
      "Hands-on experience with one or more programming languages (e.g., Python, JavaScript/TypeScript, Swift, Java, Go).",
      "Comfortable with everyday developer tools on macOS such as VS Code, Xcode, Terminal, Git, and package managers.",
      "Currently pursuing or recently completed Masters studies, or have 2-3 years of relevant experience + Bachelors from a prestigious institution.",
      "Ability to clearly explain your reasoning while you work with excellent written and verbal communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule (10-20 hours/week).",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Application & Onboarding: Submit resume → brief 3-minute conversation with AI interviewer → brief paid assessment.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 7,
    title: "Infrastructure / Site Reliability Engineer (SRE)",
    domain: "Software engineering",
    rate: "$200 / hour",
    rateNum: 200,
    posted: "Posted a month ago",
    postedOrder: 7,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/PnZsG",
    location: "Remote (Worldwide)",
    jobType: "Talent network (Full-time)",
    postedBy: "Opportunity Network",
    summary: "Build and operate complex, enterprise-grade production infrastructure and scale distributed systems with Kubernetes, AWS, and Datadog.",
    overview: "Connecting exceptional technical talent with leading organizations working on ambitious technology and AI initiatives. We are looking for experienced Infrastructure / Site Reliability Engineers (SREs) to join a full-time engagement focused on building and operating complex, enterprise-grade infrastructure. We are seeking engineers with strong hands-on experience building, operating, debugging, and scaling sophisticated production systems. The ideal candidate has worked extensively with Kubernetes, AWS, observability platforms such as Datadog, and modern infrastructure tooling.\n\nThis is a full-time opportunity, and candidates must be able to commit to full-time engagement.",
    responsibilities: [
      "Build, operate, and improve highly available and scalable production infrastructure.",
      "Manage and optimise Kubernetes-based production environments.",
      "Design and maintain cloud infrastructure, primarily across AWS.",
      "Improve system reliability, availability, scalability, and operational efficiency.",
      "Build and maintain observability across infrastructure and applications using Datadog, Prometheus, or Grafana.",
      "Investigate production incidents, perform root-cause analysis, and implement durable fixes.",
      "Improve monitoring, alerting, logging, tracing, and overall production visibility.",
      "Develop automation and internal tooling to reduce manual operational work.",
      "Partner closely with software engineering teams on deployments, infrastructure, and production reliability.",
      "Contribute to infrastructure architecture and technical decisions for complex distributed systems."
    ],
    qualifications: [
      "Professional experience in Infrastructure Engineering, Site Reliability Engineering (SRE), Platform Engineering, DevOps, or Production Engineering.",
      "Hands-on experience operating complex, enterprise-grade production systems at scale.",
      "Strong production experience with Kubernetes and AWS cloud-native infrastructure.",
      "Experience with Datadog, Prometheus, Grafana, or comparable observability platforms.",
      "Experience with Infrastructure as Code using Terraform, Pulumi, or equivalent technologies.",
      "Strong understanding of distributed systems, networking, containers, Linux, and cloud architecture.",
      "Strong debugging, troubleshooting, and incident-response capabilities.",
      "Proficiency in at least one programming or scripting language, such as Python, Go, or Bash."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role open to candidates worldwide.",
      "Candidates must be able to commit to a full-time engagement.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 8,
    title: "Software & Firmware Engineering Experts",
    domain: "Software engineering",
    rate: "$100 - $120 / hour",
    rateNum: 120,
    posted: "Posted a month ago",
    postedOrder: 8,
    bonus: "20% Referral",
    oneClick: true,
    applyUrl: "https://t.mercor.com/xa2EX",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    hired: {
      count: 2,
      avatars: [
        { letter: "B", color: "blue" },
        { letter: "R", color: "pink" }
      ]
    },
    summary: "Hands-on software and firmware engineering evaluating embedded systems, FPGA/RTL, flight software, and hardware-in-the-loop workflows.",
    overview: "We are seeking experienced Software and Firmware Engineers to support an advanced engineering and AI research initiative with a leading technology organization. We are looking for deeply hands-on engineers who have designed, implemented, integrated, tested, debugged, or validated software and firmware that directly interfaces with real-world hardware systems.\n\nRelevant backgrounds include Embedded Firmware Engineering, FPGA / RTL Engineering, Flight Software Engineering, and Hardware Test Automation Engineering.",
    responsibilities: [
      "Apply hands-on software, firmware, and digital hardware expertise to technically complex engineering tasks involving real physical systems.",
      "Review and evaluate embedded firmware, FPGA/RTL designs, flight software, test automation frameworks, hardware interfaces, and system-level engineering workflows.",
      "Analyze architecture and implementation trade-offs involving real-time performance, timing, memory, compute resources, interfaces, reliability, fault handling, concurrency, and hardware/software integration.",
      "Assess technical correctness, robustness, and practical feasibility of engineering solutions for real-world embedded and hardware-connected systems.",
      "Identify implementation errors, incorrect assumptions, race conditions, timing issues, interface failures, resource constraints, and other system-level failure modes.",
      "Develop or review technically rigorous engineering problems, reference implementations, test cases, and evaluation criteria."
    ],
    qualifications: [
      "5+ years of professional software, firmware, FPGA, or embedded systems engineering experience, with at least 3 years actively hands-on on real hardware.",
      "Demonstrated experience as responsible engineer for production hardware-connected software or firmware across the full lifecycle.",
      "Deep technical expertise in embedded firmware, real-time systems, FPGA/RTL design, flight software, or HIL test infrastructure.",
      "Strong practical command of C/C++, Python, RTOS/bare-metal, device drivers, SPI/I²C/UART/CAN/Ethernet, Verilog/VHDL, and telemetry.",
      "Extensive hands-on experience debugging physical systems using JTAG/SWD, logic analyzers, oscilloscopes, HIL/SIL environments, and root-cause analysis.",
      "Background from aerospace, defense, space, automotive/EV, semiconductors, consumer hardware, or medical device environments (e.g. Lockheed Martin, RTX, Boeing, SpaceX, Tesla, Rivian, NVIDIA, Apple, Google Hardware, Medtronic)."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 9,
    title: "Software Engineering Expert",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 2 months ago",
    postedOrder: 9,
    bonus: null,
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/h2f8p",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for engineers evaluating frontier AI models, grading code/design, and authoring real-world engineering benchmarks.",
    overview: "The research teams behind the best-known AI models come to our network for software engineering judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for engineers who want AI training and evaluation work, not a specific job opening. It stays open whether or not a matching project is running this week. New projects start on short notice, so instead of posting and pulling a listing each time, we keep one open per field and draw from it when one begins.",
    responsibilities: [
      "Write engineering problems from systems you have shipped, with requirements, constraints, failure modes, and reference answers.",
      "Grade model-written code and design: assess edge cases, justified complexity, and whether tests actually exercise claimed behavior.",
      "Flag where a model's code passes superficial review but would fail in production (concurrency, scale, error handling, cost).",
      "Span key software engineering areas: Frontend (React, TypeScript, Next.js), Backend (Java, Go, Node.js), Mobile (iOS, Android), Embedded/IoT, DevOps, QA/Automation, and Security."
    ],
    qualifications: [
      "Professional experience building and shipping software.",
      "Clear written communication, explaining your technical reasoning and architectural tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions.",
      "Where you trained matters less than whether you have owned code in production and dealt with what it did there."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply with resume → short 20-minute AI interview → added to pool for rapid project invites.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 10,
    title: "Application Users - Linux Ubuntu 24.04 Expert - Professionals",
    domain: "Software engineering",
    rate: "$60 - $70 / hour",
    rateNum: 70,
    posted: "Posted 2 months ago",
    postedOrder: 10,
    bonus: "$280",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/CbjX5",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Hands-on tasks and evaluation on Linux Ubuntu 24.04 desktop environment (GNOME, Files, terminal, package management).",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already be running Linux Ubuntu 24.04 as your own day-to-day desktop operating system, and be able to work in it today. We do not provide software licenses, virtual machines, or hardware.",
    responsibilities: [
      "Perform real-world user workflows and technical tasks directly within Linux Ubuntu 24.04 desktop.",
      "Work extensively across the GNOME environment, Files, Settings, terminal, and package management (APT, Snap).",
      "Capture high-resolution screenshots (> 2.5 megapixels) narrating workflows and evaluation criteria.",
      "Evaluate AI interaction and execution accuracy within native Ubuntu desktop environments."
    ],
    qualifications: [
      "Must already run Linux Ubuntu 24.04 as your primary day-to-day desktop operating system.",
      "Strong background as a Linux desktop user, sysadmin, DevOps engineer, or open-source developer.",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "No virtual machines or emulation—must be native, authentic OS usage."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 11,
    title: "Application Users - Windows 11 Professional Expert - Professionals",
    domain: "Software engineering",
    rate: "$60 - $70 / hour",
    rateNum: 70,
    posted: "Posted 2 months ago",
    postedOrder: 11,
    bonus: "$280",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/5nFaH",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Hands-on workflows and evaluation on Windows 11 Professional desktop environment (Settings, File Explorer, system tools).",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already be running Windows 11 Professional as your own day-to-day desktop operating system, and be able to work in it today. We do not provide software licenses, virtual machines, or hardware.",
    responsibilities: [
      "Perform real-world user workflows and technical tasks directly within Windows 11 Professional desktop.",
      "Work extensively across Settings, File Explorer, window management, and built-in system tools.",
      "Capture high-resolution screenshots (> 2.5 megapixels) narrating workflows and evaluation criteria.",
      "Evaluate AI interaction, execution accuracy, and task guidance within native Windows 11 Pro."
    ],
    qualifications: [
      "Must already run Windows 11 Professional as your primary day-to-day desktop operating system.",
      "Strong background as a power user, IT administrator, or desktop support professional.",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "No virtual machines or emulation—must be native, authentic OS usage."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 12,
    title: "Application Users - VMware Fusion on macOS - Code",
    domain: "Software engineering",
    rate: "$55 - $65 / hour",
    rateNum: 65,
    posted: "Posted 2 months ago",
    postedOrder: 12,
    bonus: "$260",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/CqLty",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Hands-on workflows and virtual machine management using VMware Fusion on macOS.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have VMware Fusion installed/available on your own Mac running macOS, and be able to open it today. We do not provide software licenses, virtual machines, or hardware.",
    responsibilities: [
      "Perform real-world user workflows and technical virtualization tasks directly within VMware Fusion on macOS.",
      "Manage, configure, and troubleshoot guest virtual machines, virtual networking, and shared folders.",
      "Capture high-resolution screenshots (> 2.5 megapixels) narrating workflows and evaluation criteria.",
      "Evaluate AI interaction, execution accuracy, and technical guidance within VMware Fusion."
    ],
    qualifications: [
      "Must already have VMware Fusion installed and running on your own Mac.",
      "Strong background as a Mac-based IT administrator, sysadmin, DevOps engineer, or cross-platform developer.",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Hands-on familiarity with virtual machine configuration and macOS developer environments."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 13,
    title: "Application Users - PyCharm on macOS - Code",
    domain: "Software engineering",
    rate: "$55 - $65 / hour",
    rateNum: 65,
    posted: "Posted 2 months ago",
    postedOrder: 13,
    bonus: "$260",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/zTquL",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Hands-on development workflows, refactoring, and debugging using PyCharm on macOS.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have PyCharm installed/available on your own Mac running macOS, and be able to open it today. We do not provide software licenses, virtual machines, or hardware.",
    responsibilities: [
      "Perform real-world Python development workflows directly within PyCharm on macOS.",
      "Execute and document debugging, code refactoring, test execution, and virtual-environment management.",
      "Capture high-resolution screenshots (> 2.5 megapixels) narrating workflows and evaluation criteria.",
      "Evaluate AI interaction, code navigation, and execution accuracy within PyCharm."
    ],
    qualifications: [
      "Must already have PyCharm installed and available on your Mac running macOS.",
      "Strong background as a Python developer, backend engineer, or data/ML practitioner.",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Deep familiarity with Python virtual environments (venv, conda, poetry) and PyCharm toolchains."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 14,
    title: "Application Users - Visual Studio Code on macOS - Code",
    domain: "Software engineering",
    rate: "$55 - $65 / hour",
    rateNum: 65,
    posted: "Posted 2 months ago",
    postedOrder: 14,
    bonus: "$260",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/i1Vc3",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Hands-on developer workflows, extension usage, debugging, and terminal workflows in VS Code on macOS.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have Visual Studio Code installed/available on your own Mac running macOS, and be able to open it today. We do not provide software licenses, virtual machines, or hardware.",
    responsibilities: [
      "Perform real-world development workflows and technical tasks directly within Visual Studio Code on macOS.",
      "Work across code editing, extensions, integrated terminal, source control (Git), and multi-language debugging.",
      "Capture high-resolution screenshots (> 2.5 megapixels) narrating workflows and evaluation criteria.",
      "Evaluate AI interaction, code navigation, auto-completion, and command palette execution accuracy in VS Code."
    ],
    qualifications: [
      "Must already have Visual Studio Code installed and available on your Mac running macOS.",
      "Software developer across any major tech stack (Web, Cloud, Systems, Mobile).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Deep familiarity with developer extensions, launch configurations, and keybindings in VS Code."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 15,
    title: "AI Developer Trace Task Auditor",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 2 months ago",
    postedOrder: 15,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/2Nhkx",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate end-to-end coding sessions and AI-assisted developer traces (Cursor, Copilot, Claude Code) for correctness and workflow soundness.",
    overview: "Evaluate the quality and correctness of AI-assisted software-development traces used to train and evaluate a frontier AI lab's models. You'll assess end-to-end coding sessions produced with AI-assisted developer tools — judging correctness, workflow soundness, and reasoning — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess end-to-end coding sessions produced with AI-assisted developer tools for correctness, workflow soundness, and technical reasoning.",
      "Evaluate multi-step coding trajectories for correctness, error recovery, and software engineering best practices.",
      "Provide clear, rubric-based written feedback that stands up to rigorous review by AI research teams.",
      "Identify subtle coding bugs, hallucinated APIs, unhandled edge cases, and inefficient developer tool trajectories."
    ],
    qualifications: [
      "3+ years of professional software development experience across full-stack or backend systems.",
      "Hands-on experience with AI-assisted coding tools and agentic / spec-driven workflows (Cursor, GitHub Copilot, Claude Code, or similar).",
      "Strong code-reading, trace inspection, and debugging skills.",
      "Preferred: Experience with Kiro or Amazon CodeCatalyst, prior work grading AI code, or contributions to developer tooling.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 16,
    title: "Engineering & Software Domain Expert",
    domain: "Software engineering",
    rate: "$65 - $105 / hour",
    rateNum: 105,
    posted: "Posted 3 months ago",
    postedOrder: 16,
    bonus: "$1680",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/nPW8J",
    location: "Bay Area, CA (Hybrid / On-site)",
    jobType: "Full-time position (W-2)",
    postedBy: "Cincinnatus LLC",
    summary: "Senior domain expert defining instruction specs, golden solutions, and benchmarks to improve how frontier AI models reason about engineering.",
    overview: "We are hiring a senior engineering and software domain expert to work directly with a leading AI lab's research and program management teams, improving how frontier AI models reason about real engineering and software development work.\n\nYour engineering expertise is the substance of this role. You will review the quality of engineering knowledge work tasks, write the instruction specs and golden solutions that define what 'correct' looks like, and build the benchmarks that show whether the model is genuinely improving. This is a full-time W-2 employment position with Cincinnatus LLC, placed at a leading AI lab with client-issued accounts and equipment.\n\nLocation: Hybrid role based in the Bay Area, California. You must live in the Bay Area and work on-site with the client's team multiple days each week.",
    responsibilities: [
      "Data QA and reviews: Vet engineering task quality and model outputs, spotting missing behaviors, thin reasoning, subtly wrong code, and unhandled edge cases.",
      "Instruction specs and golden datasets: Write high-quality instruction specs, produce golden solutions to engineering problems, and define new real-world engineering tasks.",
      "Benchmarks and domain depth: Design challenging engineering tasks and evaluation sets, and help build engineering-specific tools together with research teams.",
      "Calibration: Translate tacit engineering judgment into explicit, teachable criteria with client researchers and specialists."
    ],
    qualifications: [
      "Bachelor's degree or higher in Computer Science or closely related engineering discipline (MS or PhD strongly preferred).",
      "4+ years of substantive professional engineering practice building and shipping production software or engineered systems.",
      "Seniority: Senior, Staff, Principal, Architect, or Engineering Lead with real ownership of architecture and design decisions.",
      "Domain specialization in distributed systems, security, embedded/firmware, ML systems, developer platforms, or test engineering.",
      "Technical evidence: Visible record of engineering output (shipped systems, granted patents, open source, or published technical work).",
      "Location: Living in the Bay Area, California, and able to work on-site multiple days per week (or relocate before start without relocation assistance)."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC, provisioned with client-issued equipment.",
      "40 hours per week commitment for an initial 6-month engagement.",
      "Hybrid role: Multiple days on-site in the Bay Area, CA.",
      "W-2 employment, payroll, benefits, and compliance administered by Cincinnatus LLC."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 17,
    title: "Software Engineer — Agentic Search Systems",
    domain: "Software engineering",
    rate: "$80 - $150 / task",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 17,
    bonus: "$600",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/15NUP",
    location: "Remote (Worldwide)",
    jobType: "Contract (Conversational Interview)",
    postedBy: "Opportunity Network",
    summary: "Evaluation and architecture of agentic retrieval, search relevance, and LLM-powered search systems.",
    overview: "We're looking for engineers who have shipped production search systems (especially agentic ones now that we're in the era of LLMs and agents) and are thinking hard about the requirements and optimizations of those systems.",
    responsibilities: [
      "Participate in a 25-minute conversational interview discussing search quality, evaluation, and real-world system tradeoffs. (No live coding or take-home).",
      "Share authentic war stories and engineering decisions from owning relevance, retrieval, and ranking systems.",
      "Discuss architectures related to agentic search, query expansion, tool use, and vector retrieval.",
      "Qualify for a paid 30-minute follow-up live conversation with our team ($200 paid upon completion)."
    ],
    qualifications: [
      "Demonstrated experience owning relevance or retrieval on a production system real users depended on.",
      "Track record quantifying impact, NDCG, recall, precision, and search quality metrics.",
      "Experience building or designing systems related to agentic search and LLM retrieval.",
      "Experience scaling data pipelines and infrastructure powering modern search and index engines."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a 25-minute conversational interview (no live coding or take-home required).",
      "Paid $200 follow-up call if your conversational interview stands out.",
      "Fully remote role open to engineers worldwide.",
      "Payments are distributed via Stripe or Wise."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 18,
    title: "SWE-Bench Task Auditor",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 2 months ago",
    postedOrder: 18,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Tnt2s",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate repository-level benchmark tasks, reference patches, test harnesses, and grading integrity for SWE-Bench models.",
    overview: "Evaluate the quality, correctness, and reproducibility of software-engineering benchmark tasks used to train and evaluate a frontier AI lab's models. You'll assess repository-level tasks, reference patches, test harnesses, and grading integrity — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess repository-level benchmark tasks, reference patches, test harnesses, and grading integrity.",
      "Audit reference patches, test runners, and Docker isolation to detect answer leakage and reward hacking.",
      "Evaluate test reproduction accuracy across complex multi-file codebases and open-source frameworks.",
      "Provide clear, rubric-based written technical feedback to ensure frontier benchmark fidelity."
    ],
    qualifications: [
      "3+ years of professional software engineering experience.",
      "Real open-source contribution or maintainer experience (merged PRs, committer / maintainer roles).",
      "Strong ability to audit reference patches, test runners, Docker environments, and spot answer leakage / reward hacking.",
      "Fluency across common ecosystems (Python and at least one of Java / Go / TypeScript / C++).",
      "Preferred: Familiarity with SWE-Bench (Verified), maintainer history on major Python OSS (Django, Flask, scikit-learn, sympy, pytest, etc.), or prior code-review/task-grading experience.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 19,
    title: "AWS Serverless & Infrastructure-as-Code Task Auditor",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 2 months ago",
    postedOrder: 19,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/QhO2Z",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate cloud-architecture soundness, multi-service designs, and IaC fidelity for AWS serverless training benchmarks.",
    overview: "Evaluate the quality, correctness, and cloud-architecture soundness of AWS serverless and infrastructure-as-code tasks used to train and evaluate a frontier AI lab's models. You'll assess multi-service serverless designs, IaC fidelity, and cross-service integration correctness — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess multi-service serverless designs, IaC fidelity, and cross-service integration correctness across AWS architectures.",
      "Evaluate event-driven architecture correctness, IAM/permission boundaries, and failure/retry semantics.",
      "Audit infrastructure-as-code templates (CDK, CloudFormation, SAM) against real AWS behavior and local emulation (LocalStack).",
      "Provide clear, rubric-based written feedback to improve frontier AI model reasoning on serverless infrastructure."
    ],
    qualifications: [
      "3+ years hands-on experience building multi-service AWS serverless applications (Lambda, API Gateway, DynamoDB/Streams, S3, EventBridge, SNS/SQS, Step Functions).",
      "Strong experience with infrastructure-as-code (AWS CDK, CloudFormation, or SAM).",
      "Demonstrated ability to assess event-driven architecture correctness, IAM permission boundaries, and failure/retry semantics.",
      "Familiarity with local emulation/testing fidelity (e.g., LocalStack) versus real AWS behavior.",
      "Preferred: AWS certifications (Solutions Architect / Developer), serverless observability/cost optimization experience, or prior task-grading background.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 20,
    title: "Kubernetes Task Auditor",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 2 months ago",
    postedOrder: 20,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/OMxNo",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate cluster-operations scenarios, manifest correctness, and failure-mode troubleshooting for Kubernetes benchmarks.",
    overview: "Evaluate the quality, correctness, and production-readiness of Kubernetes tasks used to train and evaluate a frontier AI lab's models. You'll assess cluster-operations scenarios, manifest correctness, and failure-mode troubleshooting — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess cluster-operations scenarios, manifest correctness, and failure-mode troubleshooting across production Kubernetes clusters.",
      "Evaluate diagnostics and remediation for failure modes including CrashLoopBackOff, OOMKilled, scheduling, and pod eviction.",
      "Audit manifests, Helm charts, CNI, DNS, ingress routing, PV/PVC storage, and RBAC security boundaries.",
      "Provide clear, rubric-based written feedback to improve frontier model reasoning on production Kubernetes operations."
    ],
    qualifications: [
      "3+ years hands-on production Kubernetes experience (EKS, GKE, AKS, or self-managed clusters).",
      "Deep understanding of cluster internals: CNI, DNS, ingress, PV/PVC storage, RBAC, and container failure modes.",
      "Experience authoring and reviewing manifests / Helm charts and debugging live cluster incidents.",
      "Proficiency in Go, Python, or TypeScript.",
      "Preferred: CKA / CKAD certification, service-mesh/observability experience (Istio, HPA, Prometheus/Grafana), or prior SRE/platform-engineering background.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 21,
    title: "Trainium (NKI) Kernel Expert",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 21,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/sKM3O",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate Neuron Kernel Interface (NKI) tasks, CUDA→NKI migration fidelity, and Trainium hardware-specific performance optimizations.",
    overview: "Evaluate the quality, correctness, and hardware-appropriateness of Neuron Kernel Interface (NKI) development tasks used to train and evaluate a frontier AI lab's models. You'll assess CUDA→NKI migration fidelity, Trainium-specific performance-optimization quality, and cross-platform numerical-correctness standards — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess CUDA→NKI migration fidelity, Trainium-specific performance-optimization quality, and cross-platform numerical correctness.",
      "Evaluate NKI-specific development patterns: tile-based computation, SBUF/PSUM/HBM memory hierarchy, partition dimensions, and DMA orchestration.",
      "Audit performance profiling across NeuronCore pipeline utilization, tensor-engine throughput, and memory bandwidth bottlenecks.",
      "Define and evaluate cross-platform numerical correctness standards (GPU vs Trainium accumulation order, rounding behavior, mixed-precision semantics)."
    ],
    qualifications: [
      "2+ years of hands-on experience developing or optimizing kernels using the Neuron Kernel Interface (NKI) targeting AWS Trainium/Inferentia2 hardware.",
      "Strong understanding of NKI development patterns: tile-based computation, SBUF/PSUM/HBM memory hierarchy management, and DMA orchestration.",
      "Demonstrated experience assessing CUDA→NKI migration quality and performance profiling.",
      "Experience defining or evaluating cross-platform numerical-correctness standards (GPU vs Trainium rounding, mixed-precision).",
      "Preferred: Experience with AWS Neuron SDK/compiler internals, CUDA/Triton kernels, NeuronCore-v2 architecture, or benchmarking on Trn1/Trn2 instances.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 22,
    title: "GPU Kernel Expert",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 22,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/SJEyr",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate GPU/accelerator kernel development tasks (CUDA, Triton, NKI, Pallas) across numerical correctness, benchmarking fairness, and runtime validity.",
    overview: "Evaluate the quality, correctness, and completeness of GPU/accelerator kernel development tasks used to train and evaluate a frontier AI lab's models. You'll assess numerical correctness, performance-benchmarking fairness, task scoping, and compilation/runtime validity across diverse kernel task types — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess numerical correctness, performance-benchmarking fairness, task scoping, and compilation/runtime validity across diverse kernel task types.",
      "Evaluate kernel task generation from specification, translation/lowering across frameworks, and migration between hardware targets.",
      "Audit kernel debugging, performance optimization, and operator fusion across accelerator targets.",
      "Provide clear, rubric-based written feedback meeting frontier AI research standards."
    ],
    qualifications: [
      "3+ years of hands-on experience developing, optimizing, or verifying GPU/accelerator kernels in at least two of: CUDA, Triton, NKI, or Pallas (JAX).",
      "Strong understanding of numerical-correctness criteria for kernels (absolute/relative/ULP tolerances, reference-implementation selection).",
      "Demonstrated experience with performance profiling and benchmarking (nsight, ncu, roofline analysis, or framework-native profilers).",
      "Familiarity with common compilation and runtime failure modes (driver mismatches, OOM, launch-configuration errors, shape/stride mismatches, autotuning failures).",
      "Experience with at least three kernel task types: generation from specification, translation/lowering across frameworks, migration between hardware targets, debugging, performance optimization, or operator fusion.",
      "Preferred: Experience across NVIDIA GPU and custom-accelerator ecosystems, compiler engineering/MLIR, memory-hierarchy optimization, or kernel library contributions.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 23,
    title: "CVE Vulnerability Expert",
    domain: "Software engineering",
    rate: "$70 - $90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 23,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/mBoH0",
    location: "Remote — United States",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate the quality, fidelity, and completeness of vulnerability-reproduction and remediation tasks (CVEs, Docker lab environments, two-part verification).",
    overview: "Evaluate the quality, fidelity, and completeness of vulnerability-reproduction and remediation tasks used to train and evaluate a frontier AI lab's models. You'll assess whether CVE reproductions are faithful, fixes are sound, verification logic is rigorous, and Docker-based lab environments accurately recreate exploitable conditions — and provide clear, rubric-based written feedback.",
    responsibilities: [
      "Assess whether CVE reproductions are faithful and accurately mirror real-world vulnerability mechanics.",
      "Audit code fixes and remediations for security soundness across common vulnerability classes (SQL injection, command injection, buffer overflow, deserialization, SSRF, misconfigurations, privilege escalation).",
      "Evaluate two-part verification logic ensuring both functionality tests and vulnerability tests are reliable and robust.",
      "Verify that Docker and Docker Compose multi-container lab environments faithfully recreate exploitable conditions.",
      "Provide clear, rubric-based written feedback according to rigorous frontier AI research standards."
    ],
    qualifications: [
      "3+ years of hands-on experience in application security, penetration testing, or vulnerability research.",
      "Strong understanding of CVE vulnerability taxonomy and severity frameworks (CVSS, CWE, CAPEC).",
      "Demonstrated expertise in secure coding and remediation across common vulnerability classes.",
      "Experience designing or evaluating two-part verification logic (functionality tests + vulnerability tests).",
      "Proficiency with Docker and Docker Compose for multi-container vulnerability reproduction environments.",
      "Preferred: OSCP, GPEN, GWAPT, or equivalent offensive-security certification.",
      "Preferred: Experience with CVE disclosure, responsible reporting, maintaining exploit PoCs, DevSecOps/CI/CD security gating, or SAST/DAST tooling.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 24,
    title: "Expert Interviewer",
    domain: "Software engineering",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 3 months ago",
    postedOrder: 24,
    bonus: "$960",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/JeBv4",
    location: "Remote — United States",
    jobType: "Part-time position (~10 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "Vet shortlisted technical experts across GPU kernel development, vulnerability research, and ML-compiler domains for frontier AI models.",
    overview: "Support a high-priority technical-expert panel for a frontier AI lab as an Expert Interviewer. We're seeking an experienced interviewer to help vet shortlisted engineers across GPU kernel development, security & vulnerability research, and ML-compiler / accelerator domains for an AI model training-and-evaluation engagement. You'll run short, structured interviews and give our team a clear, evidence-based read on each expert's fit.",
    responsibilities: [
      "Run ~20-minute structured interviews with shortlisted experts, assessing technical depth, communication, and AI-evaluation fit against a provided rubric.",
      "Confirm each expert's availability, work authorization, and exclusivity, and surface any red flags.",
      "Tier each candidate (advance / hold / pass) and write a concise summary for the program team.",
      "Coordinate scheduling within weekday business hours."
    ],
    qualifications: [
      "Prior recruiting, interviewing, or technical-vetting experience; comfort assessing senior engineers.",
      "Strong communication and structured judgment; able to run a warm, professional conversation and stay on time.",
      "Weekday business-hours availability.",
      "Able to commit reliably to about 10 hours per week, fully remote.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule (~10 hours/week).",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 25,
    title: "Customer Success Engineer (India)",
    domain: "Software engineering",
    rate: "$30K - $45K / year",
    rateNum: 23,
    posted: "Posted 3 months ago",
    postedOrder: 25,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/cHUSP",
    location: "Remote (India / PT overlap)",
    jobType: "Full-time position (6-day/week)",
    postedBy: "Opportunity Network",
    summary: "Investigate talent-reported issues end-to-end, triage and debug across AI + SaaS stack, and collaborate with engineering.",
    overview: "Our Talent Success team is hiring! Our Talent Success team is responsible for ensuring everyone using our platform has a delightful experience end to end, from applying to job listings, taking our AI-led interviews, accepting offers on our platform, and getting paid. When users run into issues or have questions, you will be responsible for giving them a speedy, delightful, and technically sound resolution while working directly with engineering.",
    responsibilities: [
      "Investigate talent-reported issues end-to-end: reproduce bugs, identify root causes, and separate UX friction, model edge cases, and system defects.",
      "Debug across our AI + SaaS stack using telemetry, logs, network inspection, and database queries to understand production behavior.",
      "Triage with sound judgment — escalate true engineering issues and resolve others via configuration, prompt refinement, or clear user guidance.",
      "Surface systemic patterns and product risks to engineering and product leadership.",
      "Create clear documentation and runbooks to reduce repeat issues and improve resolution speed.",
      "Communicate with precision, professionalism, and empathy with a lighthearted yet highly professional tone."
    ],
    qualifications: [
      "Ability to debug web applications, coming from a degree in Computer Science, Software Engineering, or related technical field, OR prior high-growth startup experience.",
      "Experience building modern web applications (React, Node, Flask, Next.js, etc.) OR 2-5 years of experience supporting customers on such web applications.",
      "Comfortable with AI systems — experienced playing with LLMs, agents, or generative models (fine-tuning, prompt chains, CoT debugging, building agents).",
      "Ability to understand model outputs, failure modes, hallucinations, and feedback loops.",
      "Familiarity with how modern AI APIs work (OpenAI, Anthropic) or agent frameworks (LangChain, AutoGPT) is a plus.",
      "Native English level proficiency with lighthearted yet precise communication.",
      "Strict Requirement: Remote 6-day/week schedule requiring substantial overlap with Pacific Time (PT/PST) working hours."
    ],
    terms: [
      "Full-time position with our partner.",
      "Remote role based in India requiring substantial overlap with Pacific Time (PT/PST) working hours.",
      "Schedule: 6-day/week commitment.",
      "Compensation: $30,000 - $45,000 per year."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 26,
    title: "Agent Engineer",
    domain: "Software engineering",
    rate: "$100 - $500 / task",
    rateNum: 500,
    posted: "Posted 3 months ago",
    postedOrder: 26,
    bonus: "$600",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/hZgnw",
    location: "Remote",
    jobType: "Contract (Conversational interview)",
    postedBy: "Opportunity Network",
    summary: "For engineers who build and operate LLM agents in production, with visibility into multi-agent systems, memory, and adoption.",
    overview: "We are looking for engineers who build and operate LLM agents in production, and who have real visibility into how agents are actually used inside a company. We are especially interested in the layers most people do not talk about: internal monoagents wired into company data, shared company memory, reusable skills and playbooks, the tool and MCP surfaces agents call, and how anyone sees what agents did and what they cost. Applying starts with a short conversational AI interview. If that screen stands out, we will invite you to a live 30-minute conversation with our team ($100 to $500 paid on completion).",
    responsibilities: [
      "Participate in a short conversational AI interview discussing production agent reliability, evaluation, and organizational adoption (no coding, no take-home).",
      "Share messy, specific war stories and architectural trade-offs made in production agentic systems.",
      "Discuss architectures for long-running agents, cloud sandboxes, tool/MCP surfaces, and shared company memory.",
      "Provide practical perspectives on how to tell if an agent got better or worse after changes, and how internal adoption played out."
    ],
    qualifications: [
      "Shipped an agent that real users depended on, taking ownership when failures occurred.",
      "Figured out how to evaluate whether an agent improved or regressed after prompt, tool, or model changes.",
      "Experience running agents that outlive a single request: scheduled jobs, long-running background tasks, cloud sandboxes.",
      "Hands-on experience with tool and MCP surfaces, internal company assistants, shared memory, and cost/telemetry observability."
    ],
    terms: [
      "Short conversational AI interview screen (no coding, no take-home).",
      "Paid follow-up: $100 to $500 for a 30-minute live conversation with the team upon completion of the call (amount based on experience).",
      "Fully remote independent contractor engagement."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 27,
    title: "Legacy Codebase Migration Expert",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 27,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/vlNO2",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Partner with a frontier AI lab to evaluate and guide complex legacy codebase migration and modernization across enterprise systems.",
    overview: "Partnering with a frontier AI research lab to engage experienced software engineers with deep expertise in legacy codebase migration and modernisation. We are looking for engineers who have personally executed complex migrations across large, production-grade systems, particularly in financial services, fintech/payments, insurance, healthcare, telecom, large technology companies, and other mission-critical enterprises.",
    responsibilities: [
      "Design, implement, review, and evaluate complex codebase migration and modernisation tasks.",
      "Analyse legacy code, dependencies, APIs, databases, build systems, and infrastructure to determine safe migration approaches.",
      "Preserve functionality, backwards compatibility, data integrity, security, and performance during migrations.",
      "Develop tests and validation strategies to identify migration regressions and behavioural differences.",
      "Evaluate AI-generated migration solutions for correctness, completeness, maintainability, and production readiness."
    ],
    qualifications: [
      "5+ years of professional software engineering experience (Senior, Staff, Principal, or equivalent).",
      "Personally owned or made substantial technical contributions to large-scale production migrations.",
      "Deep expertise across language upgrades (Java 8→17/21, .NET, Python 2→3), rewrites (COBOL→Java/Python, JS→TS), frameworks (Spring, Django, Rails, Angular), or databases (Oracle/MySQL→Postgres, raw SQL→ORM).",
      "Experience with modern tooling migrations: VMs→Kubernetes/containers, Jenkins→GitHub Actions, Maven→Gradle, Webpack→Vite, REST→gRPC/GraphQL.",
      "Strong knowledge of compatibility, testing, observability, staged rollouts, rollback strategies, and behavioural equivalence.",
      "Especially valuable: modernisation of core banking, payments, trading, insurance, healthcare, telecom, or COBOL/mainframe (z/OS, CICS, JCL, DB2) systems."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 28,
    title: "Cybersecurity Research Expert – Offensive Security & Vulnerability Research",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 28,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/R7WVI",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Evaluate cutting-edge AI systems in advanced security reasoning, vulnerability analysis, exploit development, and secure software engineering.",
    overview: "We're looking for highly accomplished Cybersecurity Research Experts to help evaluate cutting-edge AI systems in advanced security reasoning, vulnerability analysis, exploit development, and secure software engineering. This project is ideal for practitioners with a strong track record in offensive security research and publicly recognised technical contributions.",
    responsibilities: [
      "Evaluate AI-generated analyses of complex cybersecurity scenarios, exploits, and vulnerability reports.",
      "Review technical writeups for correctness, exploitability, and mitigation quality.",
      "Validate vulnerability root-cause analysis across software, operating systems, networking, cloud, and web applications.",
      "Provide structured feedback on security reasoning, exploit chains, and defensive recommendations.",
      "Contribute to benchmark development for advanced AI security capabilities."
    ],
    qualifications: [
      "Track record in offensive security, vulnerability research, exploit development, or reverse engineering.",
      "Demonstrated credentials: top-ranked CTF achievements, discoverer/co-author of CVEs, or recognized bug bounty researcher (Google, Microsoft, Apple, Meta, GitHub, etc.).",
      "Research experience at a respected security lab (e.g., KAIST, SSLab, university groups) or author of high-quality security publications/conference papers.",
      "Hands-on experience with reverse engineering tools (IDA Pro, Ghidra, Binary Ninja, Radare2) and analysis frameworks (fuzzing, symbolic execution, static/dynamic analysis).",
      "Proficiency in C/C++, Rust, Python, Go, or Java with deep understanding of OS internals (Linux, Windows, browser, cloud, mobile).",
      "Nice to have: Bug bounty Hall of Fame, conference presentations (Black Hat, DEF CON, USENIX, IEEE S&P), open-source security tool maintenance, or OSCP/OSEP/OSCE3 credentials."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 29,
    title: "Machine Learning Engineer Talent Network",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 29,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/J4iRR",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our ML Expert Network to connect with leading AI labs training and evaluating frontier models in machine learning and MLOps.",
    overview: "Join our Machine Learning Engineer Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate frontier AI models in Machine Learning Engineering.",
      "Create benchmark tasks and evaluation deliverables based on real-world ML systems and production scenarios.",
      "Provide domain-specific feedback to advance frontier AI research and model reasoning.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in machine learning model development and architecture design.",
      "Strong proficiency in Python and ML frameworks (PyTorch, TensorFlow, JAX).",
      "Hands-on experience with model deployment, serving, inference optimization, and MLOps pipelines.",
      "Strong communication skills with the ability to explain technical decisions and reasoning clearly.",
      "Ability to work independently in a fully remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply once → get verified via short AI interview → matched to opportunities on a rolling basis.",
      "Typical project commitment: 15-30 hours per week, fully remote on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 30,
    title: "Software Engineer (AI-Native Platform & Integrations)",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 30,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Vd21o",
    location: "Remote — United States",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Build an AI-native platform replacing spreadsheet-driven operations with real-time dashboards, integrations, and MCP-compatible agentic workflows.",
    overview: "We’re building an AI-native platform that replaces spreadsheet-driven operations with real-time dashboards and agentic workflows. This engineer will own core product delivery end-to-end: platform foundations, integrations, analytics surfaces, and the pilot launch.",
    responsibilities: [
      "Ship production features across backend + frontend for the AI-native platform (core entities, workflows, multi-tenant foundations).",
      "Design and implement a scalable omni-tool integrations framework (connectors, event ingestion, sync, actions).",
      "Build real-time analytics dashboard experiences (live metrics, drill-downs, data exports).",
      "Architect an MCP-compatible agentic integration architecture (tool registry, permissions, runtime, observability).",
      "Set up strong engineering hygiene: testing, observability, and on-call readiness for pilot launch.",
      "Iterate quickly and pragmatically with real users."
    ],
    qualifications: [
      "Strong, practical software engineering skills; ability to ship end-to-end and unblock yourself.",
      "Experience building SaaS products with APIs, data models, and production constraints.",
      "Deep comfort with integrations (OAuth2, webhooks, API pagination, rate limiting, sync semantics).",
      "“Vibe coding” mindset: effective use of AI tools (Copilot, ChatGPT, Claude Code) to move fast without sacrificing correctness.",
      "Familiarity with MCP-style tool interfaces and/or building tool servers.",
      "Clear communicator who can explain tradeoffs and keep stakeholders aligned.",
      "Location requirement: Must be based in the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Standing talent network with matching project opportunities on a rolling basis.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Cincinnatus is an enterprise staffing company partnering with leading technology companies and AI labs to source and employ highly skilled professionals for high-impact initiatives. Our partner is a leading AI intelligence platform."
  },
  {
    id: 31,
    title: "Frontend Engineer Talent Network",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 31,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/7mvNY",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Frontend Expert Network to train and evaluate frontier AI models in modern JavaScript frameworks, UI architecture, and web performance.",
    overview: "Join our Frontend Engineer Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate frontier AI models in Frontend Engineering.",
      "Create tasks and benchmark deliverables based on real-world web application development and UI scenarios.",
      "Provide domain-specific feedback to advance frontier AI research, component architecture, and code quality.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in modern JavaScript/TypeScript frameworks (React, Vue, Angular, Next.js).",
      "Expertise in responsive UI development, accessible semantic HTML, and modern CSS/styling systems.",
      "Deep understanding of client-side state management, bundle size, and web performance optimization.",
      "Strong communication skills with the ability to clearly explain UI architecture and technical tradeoffs.",
      "Ability to work independently in a fully remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply once → get verified via short AI interview → matched to projects on a rolling basis.",
      "Typical project commitment: 15-30 hours per week, fully remote on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 32,
    title: "DevOps / Platform Engineer Talent Network",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 32,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/7CNX0",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our DevOps / Platform Engineer Network to train and evaluate frontier AI models in CI/CD, cloud infrastructure, and Kubernetes orchestration.",
    overview: "Join our DevOps / Platform Engineer Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate frontier AI models in DevOps and Platform Engineering.",
      "Create tasks and benchmark deliverables based on real-world cloud infrastructure, container orchestration, and CI/CD pipelines.",
      "Provide domain-specific feedback to advance frontier AI research in systems automation and operational reliability.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in CI/CD pipelines, build systems, and deployment automation.",
      "Deep expertise in cloud infrastructure (AWS, GCP, or Azure) and infrastructure-as-code (Terraform, CloudFormation, Pulumi).",
      "Hands-on containerization and orchestration experience with Docker and Kubernetes.",
      "Strong communication skills with the ability to explain systems architecture and failure modes clearly.",
      "Ability to work independently in a fully remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply once → get verified via short AI interview → matched to opportunities on a rolling basis.",
      "Typical project commitment: 15-30 hours per week, fully remote on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 33,
    title: "Backend Engineer Talent Network",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 33,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Wd6Jq",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Backend Engineer Network to train and evaluate frontier AI models in API design, microservices, databases, and distributed systems.",
    overview: "Join our Backend Engineer Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate frontier AI models in Backend Engineering.",
      "Create tasks and benchmark deliverables based on real-world backend architectures, APIs, and microservices.",
      "Provide domain-specific feedback to advance frontier AI research in distributed systems, scalability, and data persistence.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in API development and microservices architectures (REST, GraphQL, gRPC).",
      "Deep expertise in database architecture, indexing, queries, and optimization (PostgreSQL, MySQL, NoSQL).",
      "Strong understanding of distributed systems, message queues (Kafka, RabbitMQ, SQS), concurrency, and fault tolerance.",
      "Strong communication skills with the ability to articulate technical tradeoffs clearly.",
      "Ability to work independently in a fully remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply once → get verified via short AI interview → matched to opportunities on a rolling basis.",
      "Typical project commitment: 15-30 hours per week, fully remote on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 34,
    title: "Full-Stack Engineer Talent Network",
    domain: "Software engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 34,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/RVZpE",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Full-Stack Expert Network to train and evaluate frontier AI models in end-to-end web apps, modern frontend/backend frameworks, and database architecture.",
    overview: "Join our Full-Stack Engineer Expert Network to connect with leading AI labs and companies seeking Full-Stack Engineering expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate frontier AI models in Full-Stack Engineering.",
      "Create tasks and benchmark deliverables based on real-world end-to-end full-stack architectures and workflows.",
      "Provide domain-specific feedback to advance frontier AI research in web systems, integration, and user-facing features.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in frontend development (React, Angular, Vue, Next.js).",
      "Solid backend development expertise (Node.js, Django, Spring, Go, Fastify).",
      "Hands-on database experience with both relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.",
      "Strong communication skills with the ability to explain complex multi-tier architectural decisions clearly.",
      "Ability to work independently in a fully remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $150 / hour depending on project scope).",
      "How it works: Apply once → get verified via short AI interview → matched to opportunities on a rolling basis.",
      "Typical project commitment: 15-30 hours per week, fully remote on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 35,
    title: "Applied Engineer, Evaluations Role",
    domain: "Other engineering",
    rate: "$70 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 35,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/RjPui",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Turn completed pull requests into engineering tasks and build evaluations using automated tests, shell commands, and LLM grading for frontier coding agents.",
    overview: "We are seeking software engineers to build and refine evaluations. You’ll turn completed pull requests into engineering tasks and use our in-house evaluation framework to benchmark multiple frontier coding agents, including Claude Code, Codex, and more. We work alongside an in-house research team and have produced industry-leading benchmarks to compare the performance of frontier large language models.",
    responsibilities: [
      "Identify repositories with substantive work to support challenging evaluations and select suitable completed PRs.",
      "Investigate each problem, its reference solution, and the repository’s architecture, tests, and conventions.",
      "Write task prompts and build evaluations using automated tests, shell commands, and LLM grading prompts.",
      "Validate evaluations against reference solutions and deliberately flawed implementations; detect missing checks and over-constraining criteria.",
      "Run evaluations repeatedly across multiple models and harnesses; isolate failures between agent solutions, environments, or grading.",
      "Refine evaluations through repeated testing, code review, and feedback."
    ],
    qualifications: [
      "Strong programming fundamentals and practical experience in substantial codebases (TypeScript/JS, Python, Java, Kotlin, Go, Ruby, PHP, C++, Rust).",
      "Ability to understand unfamiliar code, investigate subtle behavior, and assess correctness of diverse implementations.",
      "Experience writing meaningful tests, including edge cases and regression coverage.",
      "Practical experience using AI coding tools with the judgment to verify outputs and catch mistakes.",
      "Confidence using Git, test runners, and CI tooling.",
      "Clear written and verbal communication with ability to own tasks independently."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 36,
    title: "Mechanical Engineering Writer",
    domain: "Other engineering",
    rate: "$80 / hour",
    rateNum: 80,
    posted: "Posted 3 months ago",
    postedOrder: 36,
    bonus: "$1280",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/UAubV",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Build evaluation tasks for AI systems in Fortune 500 product design and manufacturing (CAD, FEA/CFD, GD&T, ASME/ISO standards).",
    overview: "We are seeking senior mechanical engineering professionals to build evaluation tasks for AI systems operating in Fortune 500 enterprise product design and manufacturing contexts. Workflows are calibrated to the design complexity, safety stakes, and production scale of Fortune 500 and large industrial manufacturers across two standards tracks: US (ASME) and International (ISO).",
    responsibilities: [
      "Construct enterprise mechanical engineering scenarios spanning complex product design cycles, multi-stakeholder design reviews, and manufacturing or regulatory certification.",
      "Build tasks across F500 product design and CAD modeling, thermal/fluid systems analysis, structural and stress analysis, manufacturing process engineering, and reliability/failure analysis.",
      "Develop scenarios involving tools such as SolidWorks, ANSYS, CATIA, MATLAB/Simulink, and enterprise PLM systems (Siemens Teamcenter, PTC Windchill).",
      "Apply enterprise mechanical engineering methodologies (FEA/CFD simulation, DFM/DFA principles, Six Sigma/DFSS, GD&T per ASME Y14.5 or ISO GPS) and produce reference specifications.",
      "Author rubrics that distinguish authentic enterprise mechanical engineering judgment from textbook recall."
    ],
    qualifications: [
      "5+ years working as a mechanical engineer or engineering lead at a Fortune 500 or major industrial, automotive, aerospace, or manufacturing company (GE, Boeing, Caterpillar, Ford, Honeywell, Siemens, Bosch, Rolls-Royce, etc.).",
      "Direct ownership of large-scale product designs, manufacturing processes, or engineering certification programs.",
      "Fluency in enterprise mechanical engineering tooling and methodologies, plus understanding of safety standards and regulatory certification (ASME, ISO, FAA, FDA).",
      "Professional engineering credential (US PE or international equivalent CEng, EUR ING) and prior rubric or curriculum authorship are a plus."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 37,
    title: "Application Users - MATLAB on Windows - STEM",
    domain: "Other engineering",
    rate: "$45 - $55 / hour",
    rateNum: 55,
    posted: "Posted 3 months ago",
    postedOrder: 37,
    bonus: "$220",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/tjQYr",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For STEM professionals with hands-on MATLAB experience on Windows PC to complete real-world numerical computing and simulation tasks.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have MATLAB installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for electrical, mechanical, control-systems, and aerospace engineers.",
    responsibilities: [
      "Execute realistic numerical computing, simulation, signal and image processing tasks in MATLAB on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with MATLAB on Windows (numerical computing, simulation, control systems, signal/image processing).",
      "Active, working MATLAB installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 38,
    title: "Application Users - Vivado on Windows - STEM",
    domain: "Other engineering",
    rate: "$45 - $55 / hour",
    rateNum: 55,
    posted: "Posted 3 months ago",
    postedOrder: 38,
    bonus: "$220",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/sj89Q",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For FPGA and RTL design engineers with hands-on Vivado experience on Windows PC for AMD/Xilinx FPGA and SoC synthesis and timing.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have Vivado installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for FPGA and RTL design and verification engineers.",
    responsibilities: [
      "Execute realistic FPGA and SoC design, synthesis, place-and-route, and timing closure workflows in Vivado on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with Vivado on Windows (AMD/Xilinx FPGA and SoC design, synthesis, timing analysis, RTL verification).",
      "Active, working Vivado installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 39,
    title: "Application Users - SolidWorks Premium on Windows - STEM",
    domain: "Other engineering",
    rate: "$45 - $55 / hour",
    rateNum: 55,
    posted: "Posted 3 months ago",
    postedOrder: 39,
    bonus: "$220",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/z4vY5",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For mechanical, manufacturing, and tooling design engineers with hands-on SolidWorks Premium experience on Windows PC for 3D parts, assemblies, and simulation.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have SolidWorks Premium installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for mechanical and manufacturing engineers, and tooling designers.",
    responsibilities: [
      "Execute realistic 3D part modeling, complex assemblies, FEA simulation, and drawing creation workflows in SolidWorks Premium on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with SolidWorks Premium on Windows (3D parametric modeling, complex assemblies, simulation, GD&T, tooling design).",
      "Active, working SolidWorks Premium installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 40,
    title: "Application Users - Inventor Professional on Windows - STEM",
    domain: "Other engineering",
    rate: "$45 - $55 / hour",
    rateNum: 55,
    posted: "Posted 3 months ago",
    postedOrder: 40,
    bonus: "$220",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Ji5Gi",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For mechanical engineers, machine and equipment designers with hands-on Inventor Professional experience on Windows PC for 3D mechanical design and assembly modeling.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have Inventor Professional installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for mechanical engineers, machine and equipment designers.",
    responsibilities: [
      "Execute realistic Autodesk Inventor Professional 3D mechanical design, parametric part modeling, and complex assembly modeling workflows on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with Autodesk Inventor Professional on Windows (3D mechanical design, parametric modeling, assembly constraints, sheet metal, machine/equipment design).",
      "Active, working Inventor Professional installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K, MacBook Pro display) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 41,
    title: "Network Engineer - Talent Network (Data for Autonomous Systems)",
    domain: "Other engineering",
    rate: "$70 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 41,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/ntIxJ",
    location: "Remote — US & Canada (PT overlap)",
    jobType: "Talent network (30-40 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "For Level 3 / Tier 3 enterprise network engineers to label, annotate, and structure real-world telemetry, logs, configs, and packet data for autonomous AI infrastructure.",
    overview: "Are you a hands-on enterprise network engineer — Level 3 / Tier 3 support, network operations, or the person your team escalates to — interested in data science and autonomous infrastructure? Our client is building vertically integrated networking systems and using the data they generate to power the next generation of AI-driven infrastructure. They're looking for engineers experienced in troubleshooting, escalations, packet analysis and RCA workflows to help label, annotate, and structure networking data from real production systems.",
    responsibilities: [
      "Review real-world data from deployed networks: logs, configs, telemetry, event streams.",
      "Label and classify network behaviors, issues, anomalies, and incident patterns.",
      "Help define schemas and structure for large-scale data pipelines that downstream ML models will train on.",
      "Perform packet-level troubleshooting and root-cause analysis (RCA) to feed directly into autonomous networking systems.",
      "Interface directly with the client team, working 30-40 hours/week overlapping Pacific (PT) business hours."
    ],
    qualifications: [
      "5+ years of hands-on experience operating enterprise production networks (switches, APs, firewalls) in end-customer environments (retail, healthcare, finance, campus).",
      "Currently, or most recently, working in a hands-on network engineering, NetOps, or Tier 3 network support role.",
      "Experience as an escalation point for network incidents: Tier 3, final escalations, on-call rotation, RCAs, and major outage troubleshooting.",
      "Hands-on enterprise Wi-Fi: WLAN controllers (Cisco WLC/9800, Aruba, or Meraki), 802.1X / RADIUS, and wireless troubleshooting.",
      "Packet-level troubleshooting: Wireshark, tcpdump, SPAN captures.",
      "Authorized to work in the US or Canada without sponsorship (standard F-1 OPT fine; cannot accommodate F-1 STEM OPT)."
    ],
    terms: [
      "You will be engaged as an individual 1099 independent contractor (no corp-to-corp or agency billing).",
      "Expected commitment: 30-40 hours/week with hours overlapping Pacific (PT) business day.",
      "Location requirement: Must be authorized to work in the US or Canada without sponsorship.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 42,
    title: "Electrical Engineer",
    domain: "Other engineering",
    rate: "$80 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 42,
    bonus: "$1920",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/7Mbq2",
    location: "Remote — United States (SF Bay Area preferred)",
    jobType: "Full-time position (40 hrs/week, W-2)",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's GenAI team to guide research and engineering in circuit design, power systems, and embedded hardware for foundational LLM training.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Electrical Engineers with deep, hands-on industry experience in circuit design, power systems, or embedded hardware to bring real engineering judgment and elevate the quality of our AI training data. This is a full-time commitment of 40 hours per week for an initial engagement of 3 to 4 months, with a strong possibility of extension.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in electrical engineering (circuit analysis/design, power systems, power electronics, embedded and control systems).",
      "Design challenging, domain-relevant tasks and write accurate, well-structured reference solutions to electrical engineering problems.",
      "Evaluate electrical engineering tasks and model outputs; provide clear written feedback catching incorrect assumptions, unit/sign errors, violated design constraints, and unsafe design choices.",
      "Develop guidelines and detailed rubrics across analog/mixed-signal, RF, PCB and board-level design, power distribution, signal processing, and controls.",
      "Collaborate with subject matter experts to ensure consistency and precision in frontier AI training data."
    ],
    qualifications: [
      "Bachelor's degree or higher in Electrical Engineering, Electrical and Computer Engineering, or closely related engineering discipline.",
      "5+ years of hands-on professional electrical engineering experience in industry (semiconductors, consumer electronics, power/utilities, aerospace/defense, automotive/EV, robotics, medical devices).",
      "Genuine ownership of real engineering work (circuit/board design & bring-up, circuit simulation, power system specification, hardware validation, production design reviews).",
      "Working fluency with common EDA/simulation tools (SPICE/LTspice, Cadence, Altium, KiCad, MATLAB/Simulink, ETAP) and standards (IEEE, NEC, IPC, UL).",
      "Professional Engineer (PE) license is a plus but not required.",
      "Hands-on use of LLMs in professional work with the judgment to distinguish sound answers from plausible-sounding errors.",
      "Location requirement: Remote within the United States (SF Bay Area-based candidates strongly preferred)."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC (40 hours/week, weekdays).",
      "Initial engagement of 3 to 4 months with strong possibility of extension.",
      "Placed at a leading AI lab as part of their extended workforce.",
      "Location: Remote within the United States."
    ],
    aboutCompany: "Cincinnatus LLC is an enterprise staffing company that partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and contract-based opportunities. Our partner is a leading AI intelligence platform."
  },
  {
    id: 43,
    title: "Mechanical Engineer",
    domain: "Other engineering",
    rate: "$60 - $90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 43,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/v97jh",
    location: "Remote — United States",
    jobType: "Full-time position (40 hrs/week, W-2)",
    postedBy: "Opportunity Network",
    summary: "Work directly with a leading AI lab's research and program management teams to evaluate and improve how frontier AI models reason about real mechanical engineering work.",
    overview: "We are hiring experienced mechanical engineers to work directly with a leading AI lab's research and program management teams, improving how frontier AI models reason about real mechanical engineering work. Your engineering judgment is the substance of this role. You will review the quality of mechanical engineering tasks and model outputs, write the instruction specs and reference solutions that define what 'correct' looks like, and help build the evaluations that show whether the model is genuinely improving.",
    responsibilities: [
      "Data QA and reviews: Vet mechanical engineering tasks and model outputs, catching incorrect assumptions, missing constraints, tolerance errors, and unsafe design choices.",
      "Instruction specs and reference solutions: Write clear instruction specs, produce worked reference solutions, and define new real-world engineering tasks.",
      "Benchmarks and domain depth: Design evaluation sets across mechanical design, thermal/fluid systems, structural/stress analysis, manufacturing, and controls.",
      "Calibration: Work with client researchers and specialists in adjacent fields to translate tacit engineering judgment into explicit, teachable criteria."
    ],
    qualifications: [
      "Bachelor's degree or higher in Mechanical Engineering or closely related engineering discipline.",
      "5+ years of hands-on professional mechanical engineering experience in industry (product design, thermal/fluid, HVAC, FEA/CFD, manufacturing, automotive, aerospace, robotics, medical devices).",
      "Genuine ownership of real engineering work (designing components/systems, running FEA/CFD, releasing drawings, design reviews, testing, production).",
      "Working fluency with engineering tools (SolidWorks, CATIA, NX, Creo, AutoCAD, ANSYS, Abaqus, MATLAB) and codes/standards (ASME, ASTM, ISO, GD&T per ASME Y14.5).",
      "Progression toward senior or lead engineering responsibility. Professional Engineer (PE) license is a plus.",
      "Hands-on working use of LLMs in professional work with judgment to catch subtle, plausible-sounding errors.",
      "Ability to commit reliably to 40 hours per week for 2 to 3 months with strong possibility of extension.",
      "Location requirement: Remote within the United States."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC (40 hours/week).",
      "Initial engagement of 2 to 3 months with strong possibility of extension.",
      "Provisioned with client-issued accounts and equipment, working inside client tools alongside research teams.",
      "Location: Remote within the United States."
    ],
    aboutCompany: "Cincinnatus LLC is an enterprise staffing company that partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and contract-based opportunities. Our partner is a leading AI intelligence platform."
  },
  {
    id: 44,
    title: "Mechanical / CAD Engineer",
    domain: "Other engineering",
    rate: "$60 - $100 / hour",
    rateNum: 100,
    posted: "Posted 3 months ago",
    postedOrder: 44,
    bonus: "$1600",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/IrgtI",
    location: "Remote — United States",
    jobType: "Part-time position (20+ hrs/week)",
    postedBy: "Opportunity Network",
    summary: "Join a leading AI lab's GenAI team to guide research and engineering in mechanical design, parametric CAD, and DFM for foundational LLMs.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Mechanical Design and CAD Engineers with hands-on expertise in mechanical design, parametric CAD and 3D modeling to bring real-world design and engineering judgment and elevate the quality of our AI training data.",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in mechanical design, parametric 3D CAD modeling, and DFM.",
      "Design challenging, domain-relevant tasks and write accurate, well-structured solutions to mechanical design and CAD problems.",
      "Evaluate mechanical design and CAD tasks and solutions, providing clear written technical feedback.",
      "Create and evaluate CAD modeling tasks, engineering drawings, and design problems, producing accurate reference models and solutions.",
      "Develop rubrics to assess geometric accuracy, design intent, tolerancing (GD&T per ASME Y14.5), and manufacturability.",
      "Collaborate with subject matter experts to ensure consistency and precision in training data."
    ],
    qualifications: [
      "4+ years of dedicated professional experience in mechanical design or CAD engineering at a recognized top-tier organization (Apple, Tesla, SpaceX, Boeing, GE, etc.).",
      "Expert proficiency in at least one parametric CAD tool: SolidWorks, CATIA, Siemens NX, Creo, Onshape, or Fusion 360.",
      "Working knowledge of GD&T, engineering drawings, and design for manufacturing (DFM).",
      "Demonstrable career progression in mechanical design or CAD engineering.",
      "Ability to engage reliably for at least 20 hours/week during weekdays.",
      "Location requirement: Remote within the United States."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Part-time commitment: at least 20 hours per week during weekdays.",
      "Fully remote role within the United States.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Cincinnatus LLC is an enterprise staffing company that partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and contract-based opportunities. Our partner is a leading AI intelligence platform."
  },
  {
    id: 45,
    title: "Electrical Test Automation Engineer",
    domain: "Other engineering",
    rate: "$70 - $85 / hour",
    rateNum: 85,
    posted: "Posted 3 months ago",
    postedOrder: 45,
    bonus: "$1360",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/N7PC5",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (Short-term)",
    postedBy: "Opportunity Network",
    summary: "Apply hands-on industry experience in electrical testing, automation, instrumentation, and hardware validation to solve complex technical problems.",
    overview: "Partnering with a leading technology organization to recruit experienced Electrical Test Automation Engineers for a short-term project. Engineers will apply hands-on industry experience in electrical testing, automation, instrumentation, and hardware validation to solve complex technical problems.",
    responsibilities: [
      "Design and implement automated test systems, procedures, and test sequences for electrical and electronic hardware.",
      "Integrate test instruments, data acquisition systems, and hardware interfaces to automate measurements and testing.",
      "Develop test scripts, automation frameworks, and data analysis workflows.",
      "Perform functional, performance, validation, regression, and hardware-in-the-loop (HIL) testing.",
      "Analyze test results, troubleshoot hardware and test setups, and identify root causes of failures.",
      "Review and validate test methodologies, results, and technical approaches against project requirements."
    ],
    qualifications: [
      "Bachelor's, Master's, or PhD in Electrical Engineering, Electronics, Instrumentation, Mechatronics, or related field.",
      "Hands-on industry experience developing or executing automated electrical test systems and working with laboratory instrumentation.",
      "Proficiency in Python, MATLAB, LabVIEW, C/C++, or equivalent.",
      "Experience with test automation, DAQ, and instrument-control protocols (SCPI, GPIB, USB, Ethernet, CAN, RS-232/485).",
      "Ability to interpret electrical schematics, test specifications, and technical documentation.",
      "Preferred: Experience with ATE, test benches, custom fixtures, NI hardware, LabVIEW/TestStand, PXI/PXIe, or HIL/SIL testing for power electronics, batteries, EVs, motors, or embedded hardware."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule (short-term project).",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 46,
    title: "Electrical Design Specialist",
    domain: "Other engineering",
    rate: "$70 - $85 / hour",
    rateNum: 85,
    posted: "Posted 3 months ago",
    postedOrder: 46,
    bonus: "$1360",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/jCY3W",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (Short-term)",
    postedBy: "Opportunity Network",
    summary: "Analyze, evaluate, and solve complex electrical design and system-level engineering problems across power distribution, switchgear, and industrial facilities.",
    overview: "Partnering with a leading technology organization to recruit experienced Electrical Design Specialists for a short-term project. Specialists will apply their hands-on industry experience to analyze, evaluate, and solve complex electrical design and system-level engineering problems across a range of applications (industrial facilities, data centers, energy storage, renewable energy).",
    responsibilities: [
      "Develop, analyze, and evaluate electrical designs based on technical requirements, specifications, and system performance.",
      "Design and review electrical systems, circuits, equipment, and components, including distribution systems, power systems, control panels, switchgear, and motor control systems.",
      "Interpret and analyze electrical schematics, single-line diagrams, wiring diagrams, layouts, and equipment specifications.",
      "Perform electrical calculations including load flow, voltage drop, short-circuit analysis, protection coordination, and equipment sizing.",
      "Evaluate design alternatives, engineering trade-offs, and system performance, identifying potential design issues or improvements.",
      "Review and validate designs, calculations, assumptions, and technical approaches against project requirements and standards (IEC, IEEE, NEC)."
    ],
    qualifications: [
      "Bachelor's, Master's, or PhD in Electrical Engineering or related discipline.",
      "Strong understanding of electrical system design, power systems, and engineering principles.",
      "Practical experience designing or evaluating electrical systems across industrial facilities, infrastructure, manufacturing, energy/renewables, or data centers.",
      "Experience with low- and medium-voltage systems, electrical protection, equipment sizing, and power distribution.",
      "Experience with electrical design and engineering tools such as AutoCAD Electrical, ETAP, SKM Power Tools, EPLAN, Revit, or equivalent.",
      "Preferred: Advanced degree or PE license; experience with power system studies, transformer/switchgear sizing, or vendor technical submittals."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule (short-term project).",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 47,
    title: "Radio Frequency and Electromagnetic Engineering Expert",
    domain: "Other engineering",
    rate: "$80 - $95 / hour",
    rateNum: 95,
    posted: "Posted 3 months ago",
    postedOrder: 47,
    bonus: "$1520",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/JTbkW",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (Short-term)",
    postedBy: "Opportunity Network",
    summary: "Analyze and solve complex technical problems involving RF systems, electromagnetics, antennas, propagation, and wireless communications.",
    overview: "Partnering with a leading technology organization to recruit experienced Radio Frequency (RF) and Electromagnetic (EM) Engineering Experts for a short-term project. Experts will apply their hands-on industry experience to analyze and solve complex problems involving RF systems, electromagnetics, antennas, propagation, and related engineering applications.",
    responsibilities: [
      "Solve complex technical problems involving RF and electromagnetic engineering.",
      "Analyze RF/EM systems, components, antennas, circuits, and architectures.",
      "Apply electromagnetic theory, RF principles, and engineering methodologies to real-world scenarios.",
      "Analyze technical specifications, system requirements, simulation results, and engineering data.",
      "Evaluate design trade-offs, performance limitations, calculations, assumptions, and proposed solutions.",
      "Review and validate technical approaches and results, providing technically rigorous solutions and explanations."
    ],
    qualifications: [
      "Bachelor's, Master's, or PhD in Electrical Engineering, Electronics Engineering, RF Engineering, Electromagnetics, or related field.",
      "Strong understanding of electromagnetic theory, RF engineering principles, and signal propagation.",
      "Practical experience in RF/microwave systems, antenna design, EM simulation/modeling, RF circuits, EMC/EMI, wireless comms/radar, or channel modeling.",
      "Experience with tools such as HFSS, CST, COMSOL, MATLAB, ADS, or equivalent.",
      "Preferred: Experience with microwave or mmWave systems, antenna arrays, phased arrays, beamforming, MIMO, radar, satellite comms, or RF sensing.",
      "Research experience or technical publications in RF, electromagnetics, antennas, or related fields is a plus."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule (short-term project).",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 48,
    title: "Application Users - AutoCAD Mechanical - STEM",
    domain: "Other engineering",
    rate: "$45 - $55 / hour",
    rateNum: 55,
    posted: "Posted 3 months ago",
    postedOrder: 48,
    bonus: "$220",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/u7lSm",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For mechanical designers, drafters, manufacturing and tooling engineers with hands-on AutoCAD Mechanical experience on Windows PC for 2D drafting and detailing.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have AutoCAD Mechanical installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for mechanical designers, drafters, and manufacturing and tooling engineers.",
    responsibilities: [
      "Execute realistic 2D mechanical drafting, detailing, standard component dimensioning, and bill of materials creation in AutoCAD Mechanical on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with AutoCAD Mechanical on Windows (2D mechanical drafting, detailing to engineering standards, GD&T, manufacturing drawings).",
      "Active, working AutoCAD Mechanical installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 49,
    title: "Application Users - Quartus II on Windows - Code",
    domain: "Other engineering",
    rate: "$55 - $65 / hour",
    rateNum: 65,
    posted: "Posted 3 months ago",
    postedOrder: 49,
    bonus: "$260",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/0fdls",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "For FPGA, digital design, and embedded hardware engineers with hands-on Quartus II experience on Windows PC for Intel/Altera FPGA and CPLD design.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications. You must already have Quartus II installed/available on your own PC running Windows, and be able to open it today. We do not provide software licenses, virtual machines, or hardware. Perfect for FPGA, digital design, and embedded hardware engineers.",
    responsibilities: [
      "Execute realistic Intel/Altera FPGA and CPLD design, synthesis, place-and-route, simulation, and timing analysis workflows in Quartus II on Windows.",
      "Narrate workflows, problem-solving reasoning, and technical decisions to produce high-quality AI training data.",
      "Capture high-resolution screenshots meeting resolution thresholds (>2.5 megapixels) across application workflows.",
      "Perform tasks independently on your own schedule with high technical fidelity."
    ],
    qualifications: [
      "Hands-on professional experience with Quartus II on Windows (Intel/Altera FPGA/CPLD design, VHDL/Verilog synthesis, TimeQuest timing analyzer, RTL simulation).",
      "Active, working Quartus II installation on your own Windows PC (licenses/VMs are not provided).",
      "Display hardware capability: High-res monitor (QHD 2560×1440, 4K, 5K) OR dual-monitor setup (two 1080p+ screens captured as single image).",
      "Strong communication skills with the ability to explain workflows and rationale clearly."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 50,
    title: "Materials Science Domain Expert",
    domain: "Other engineering",
    rate: "$70 - $110 / hour",
    rateNum: 110,
    posted: "Posted 3 months ago",
    postedOrder: 50,
    bonus: "$1760",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/rD38l",
    location: "Bay Area, CA (Hybrid on-site)",
    jobType: "Full-time position (40 hrs/week, W-2)",
    postedBy: "Opportunity Network",
    summary: "Work directly with a leading AI lab's research team to evaluate and improve how frontier AI models reason about real materials science and engineering.",
    overview: "We are hiring a senior materials science domain expert to work directly with a leading AI lab's research and program management teams, improving how frontier AI models reason about real materials science and materials engineering work. You will review the quality of materials knowledge work tasks, write the instruction specs and golden solutions that define what 'correct' looks like, and build the benchmarks that show whether the model is genuinely improving.",
    responsibilities: [
      "Data QA and reviews: Vet the quality of materials science knowledge work tasks and model outputs, spotting missing behaviors, thin reasoning, and unsupported structure-property claims.",
      "Instruction specs and golden datasets: Write high-quality instruction specs, produce golden solutions to materials problems, and define realistic materials tasks.",
      "Benchmarks and domain depth: Design challenging materials science tasks and evaluation sets, and help build materials-specific skills and tools together with the research team.",
      "Calibration: Work with client researchers and specialists in adjacent fields to keep standards consistent, translating tacit materials judgment into explicit criteria."
    ],
    qualifications: [
      "PhD in materials science, materials engineering, chemistry, chemical engineering, applied physics, or metallurgy (Master's with exceptional industrial depth considered).",
      "4+ years of substantive research or industrial R&D experience in materials at a research university, national laboratory, or industrial research organization.",
      "Specialization in areas such as energy storage/battery materials, semiconductors/electronic materials, polymers, structural alloys/metallurgy, characterization, or computational materials simulation.",
      "Seniority level: Senior Scientist, Staff Scientist, Research Lead, or Principal Investigator with real ownership of research direction.",
      "Track record: Peer-reviewed publications, granted patents, or shipped materials programs strongly preferred.",
      "Hands-on use of LLMs in professional work with judgment to distinguish sound answers from plausible-sounding errors.",
      "Availability & Location: 40 hours per week for an initial 6-month engagement. Must live in Bay Area, CA and work on-site multiple days per week as required."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC (40 hours/week, 6-month initial engagement).",
      "Hybrid on-site role in Bay Area, California (relocation assistance not provided).",
      "Provisioned with client-issued accounts and equipment, working inside client tools alongside research teams."
    ],
    aboutCompany: "Cincinnatus LLC is an enterprise staffing company that partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and contract-based opportunities. Our partner is a leading AI intelligence platform."
  },
  {
    id: 51,
    title: "Mechanical Engineer Reviewer",
    domain: "Other engineering",
    rate: "$90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 51,
    bonus: "$1440",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/1p35J",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Review evaluation tasks, reference outputs, and grading rubrics for AI systems in Fortune 500 product design and manufacturing (ASME & ISO tracks).",
    overview: "We are seeking senior mechanical engineering professionals to review evaluation tasks for AI systems operating in Fortune 500 enterprise product design and manufacturing contexts. Workflows are calibrated to the design complexity, safety stakes, and production scale of Fortune 500 and large industrial manufacturers across two standards tracks: a US track (ASME) and an International track (ISO). Reviewers assess enterprise mechanical engineering scenarios, reference outputs, and grading rubrics that capture how senior F500 engineering leaders think.",
    responsibilities: [
      "Review mechanical engineering tasks, reference outputs, and supporting artifacts for technical accuracy, realism, and professional complexity.",
      "Independently check engineering calculations, design assumptions, analyses, and conclusions against the applicable standards track (ASME or ISO).",
      "Review design documentation and relevant CAD or simulation evidence to identify errors, omissions, and inconsistent assumptions.",
      "Evaluate grading rubrics for clarity, specificity, and whether they distinguish sound professional engineering judgment from generic textbook recall.",
      "Provide clear written feedback and verify that revisions resolve the identified issues."
    ],
    qualifications: [
      "5+ years working as a mechanical engineer or engineering lead at a Fortune 500 or major industrial, automotive, aerospace, or manufacturing company (GE, Boeing, Caterpillar, Ford, Honeywell, Siemens, Bosch, Rolls-Royce, Mitsubishi Heavy Industries).",
      "Direct ownership of large-scale product designs, manufacturing processes, or engineering certification programs.",
      "Fluency in enterprise mechanical engineering tooling and methodologies, plus understanding of how safety standards, regulatory certification (ASME, ISO, FAA, FDA), and cross-functional design governance actually work.",
      "Professional engineering credential (US PE or an international equivalent such as CEng or EUR ING) and prior rubric, engineering-training curriculum, or design documentation authorship are a plus."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 52,
    title: "Systems & Integration Engineering Experts",
    domain: "Other engineering",
    rate: "$100 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 52,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/ge1V3",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "For hands-on engineers who have integrated, tested, validated, debugged, or qualified complex physical hardware and electromechanical systems.",
    overview: "We are seeking experienced Systems & Integration Engineers to support an advanced engineering and AI research initiative with a leading technology organization. We are looking for deeply hands-on engineers who have integrated, tested, validated, debugged, qualified, or analyzed complex real-world hardware and electromechanical systems in production environments across aerospace, defense, automotive, semiconductors, robotics, or medical devices.",
    responsibilities: [
      "Apply hands-on systems, integration, reliability, and test engineering expertise to complex hardware systems.",
      "Review and evaluate system requirements, interfaces, integration plans, verification strategies, test procedures, qualification approaches, and FMEA workflows.",
      "Analyze system-level interactions across electrical, mechanical, firmware/software, thermal, controls, and manufacturing domains.",
      "Assess technical correctness and feasibility of engineering solutions, test strategies, and troubleshooting approaches.",
      "Diagnose integration failures and identify root causes, interface issues, reliability risks, and test coverage gaps.",
      "Develop or review engineering problems, reference solutions, test cases, verification criteria, and failure analyses."
    ],
    qualifications: [
      "5+ years of professional systems, integration, reliability, or test engineering experience (at least 3 years actively hands-on with hardware).",
      "Experience as responsible engineer for complex physical products, owning lifecycle stages from requirements through V&V, qualification, and production.",
      "Deep technical command of requirements traceability, interface management, FMEA/FMECA, root-cause analysis, qualification, environmental testing, and design-for-test.",
      "Extensive hands-on laboratory experience with DAQ systems, automated test infrastructure, environmental test chambers, and diagnostic tools.",
      "Proven background in hardware-focused organizations across aerospace/defense, space, automotive/EV, semiconductors, consumer electronics, robotics, or medical devices.",
      "Clear communication with ability to explain system tradeoffs, test results, root causes, and failure mechanisms."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 53,
    title: "Mechanical Engineering Experts",
    domain: "Other engineering",
    rate: "$100 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 53,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/W86q7",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "For deeply hands-on mechanical engineers (structural, thermal, design, dynamics & controls) who have built, tested, and validated real-world physical systems.",
    overview: "We are seeking experienced Mechanical Engineers to support an advanced engineering and AI research initiative with a leading technology organisation. We are looking for deeply hands-on engineers who have designed, analysed, built, tested, validated, or troubleshot real-world mechanical and electromechanical systems in production environments across aerospace, defense, automotive, semiconductors, robotics, or medical devices.",
    responsibilities: [
      "Apply hands-on mechanical engineering expertise to technically complex engineering tasks involving real physical systems and products.",
      "Review and evaluate mechanical designs, engineering analyses, simulation results, test methodologies, and troubleshooting approaches.",
      "Analyze engineering trade-offs involving structures, materials, thermal performance, dynamics, vibration, controls, reliability, and manufacturability.",
      "Assess technical correctness and practical feasibility of engineering solutions generated for real-world mechanical problems.",
      "Identify incorrect assumptions, unrealistic boundary conditions, design deficiencies, failure modes, and implementation risks.",
      "Develop or review technically rigorous engineering problems, reference solutions, evaluation criteria, and supporting technical documentation."
    ],
    qualifications: [
      "5+ years of professional mechanical engineering experience (at least 3 years actively hands-on in hardware development, analysis, testing, or validation).",
      "Experience as responsible engineer for real hardware, owning meaningful portions of lifecycle from requirements and analysis through testing, qualification, and manufacturing.",
      "Deep technical expertise in structural/stress analysis and FEA, thermal management and CFD, mechanical product design, or dynamics/vibration/controls.",
      "Command of materials, loads, boundary conditions, structural margins, fatigue, thermal constraints, GD&T, component selection, reliability, and failure modes.",
      "Hands-on experience analyzing and validating physical hardware using CAD/CAE, FEA, CFD, test instrumentation, DAQ, and structured root-cause analysis.",
      "Proven background in hardware organizations across aerospace/defense, space, automotive/EV, semiconductors, consumer electronics, robotics, or medical devices."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 54,
    title: "Atomistic Materials Modeling Expert",
    domain: "Other engineering",
    rate: "$84 / hour",
    rateNum: 84,
    posted: "Posted 3 months ago",
    postedOrder: 54,
    bonus: "$1344",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Qaqpc",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (10-40 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "Evaluate complex scientific problems involving DFT calculations, molecular dynamics (MD), atomistic simulations, and materials property predictions for advanced AI research.",
    overview: "We are recruiting Atomistic Materials Modelling Experts with strong backgrounds in computational materials science, quantum mechanical simulations, and molecular modelling to support advanced AI research. Experts will evaluate technically demanding problems involving atomistic simulations, materials properties, computational methodologies, and scientific reasoning with DFT, MD, and atomistic modeling techniques.",
    responsibilities: [
      "Evaluate advanced scientific problems involving atomistic simulations and computational materials science.",
      "Review and validate AI-generated answers involving DFT calculations, molecular dynamics, and materials property predictions.",
      "Assess appropriateness of computational methods, simulation parameters, convergence criteria, and physical assumptions.",
      "Analyze atomic structures, electronic properties, reaction energetics, diffusion mechanisms, and materials stability.",
      "Evaluate surface and interface phenomena, adsorption energies, defect formation, and chemical reaction pathways.",
      "Develop high-quality reference solutions, evaluation rubrics, and technically rigorous scientific explanations.",
      "Apply computational expertise to improve AI model performance on complex materials science problems."
    ],
    qualifications: [
      "PhD in Computational Materials Science, Materials Science & Engineering, Computational Chemistry, Condensed Matter Physics, or Chemical Engineering (exceptional MSc considered).",
      "Demonstrated hands-on experience with Density Functional Theory (DFT), Ab initio Molecular Dynamics (AIMD), classical MD, Monte Carlo, or atomistic materials modeling.",
      "Proficiency with computational tools: VASP, Quantum ESPRESSO, CP2K, GPAW, LAMMPS, or similar software.",
      "Strong understanding of electronic structure, interatomic interactions, thermodynamics, statistical mechanics, and materials properties.",
      "Strong Python skills for scientific computing, data analysis, or workflow automation (ASE, pymatgen).",
      "Preferred: Peer-reviewed publications, experience with high-throughput screening, machine-learned interatomic potentials, or AI-assisted materials discovery."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Commitment: Minimum 10 hours per week, with potential for up to 40 hours per week.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 55,
    title: "Electrical & Hardware Engineering Experts",
    domain: "Other engineering",
    rate: "$100 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 55,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/lrKun",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "For deeply hands-on electrical and hardware engineers (RF, power electronics, analog/mixed-signal, PCB design, SI/PI) who have built, tested, and validated real-world hardware systems.",
    overview: "We are seeking experienced Electrical and Hardware Engineers to support an advanced engineering and AI research initiative with a leading technology organisation. We are looking for deeply hands-on engineers who have designed, built, tested, brought up, debugged, or validated real-world hardware systems in production environments across aerospace, space, automotive, semiconductors, robotics, or medical devices.",
    responsibilities: [
      "Apply hands-on electrical and hardware engineering expertise to technically complex engineering tasks.",
      "Review and evaluate hardware designs, engineering workflows, technical analyses, and troubleshooting approaches.",
      "Analyze design trade-offs, failure modes, measurements, test results, and system-level engineering decisions.",
      "Assess technical correctness and practicality of engineering solutions generated for real-world hardware problems.",
      "Identify errors, missing assumptions, unrealistic recommendations, and potential implementation risks.",
      "Develop or review technically rigorous engineering problems, reference solutions, evaluation criteria, or supporting documentation."
    ],
    qualifications: [
      "5+ years of professional industry experience (at least 3 years actively hands-on in hardware development, testing, bring-up, validation, or troubleshooting).",
      "Direct experience serving as the responsible engineer for substantial portions of a hardware development workflow.",
      "Deep expertise in at least one area: RF/antenna engineering, power electronics, analog/mixed-signal, PCB architecture/schematic design/bring-up, or signal/power integrity (SI/PI).",
      "Strong understanding of practical engineering constraints (components, tolerances, measurements, manufacturing, reliability, thermal, system integration).",
      "Experience debugging real hardware using relevant laboratory equipment, simulation tools, and engineering instrumentation.",
      "Proven background in hardware organizations across aerospace/defense, space, automotive/EV, semiconductors, consumer electronics, robotics, or medical devices."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network with projects matched on short notice.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 56,
    title: "Industrial & Manufacturing Engineers (Must own MacBook)",
    domain: "Other engineering",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 3 months ago",
    postedOrder: 56,
    bonus: "$240",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/TC5Lg",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (10-20 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "For industrial & manufacturing engineers owning a Mac to work through real process, operations, and production engineering workflows for frontier AI models.",
    overview: "We are looking for industrial and manufacturing engineers with 2-3 years of professional experience, or currently enrolled postgrad engineering students, to support a research project with a leading AI lab. You will work through real process, operations, and production engineering workflows on your own Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real industrial and manufacturing engineering tasks on your Mac to create high-quality training data for advanced AI models.",
      "Execute authentic workflows across process design, lean/Six Sigma, production planning, quality control, and supply chain analysis.",
      "Clearly explain engineering decisions and operational reasoning while you work.",
      "Engage for a flexible part-time commitment of approximately 10-20 hours per week on your own schedule."
    ],
    qualifications: [
      "Strict Requirement: You must own a MacBook or Mac with an Apple M-series chip or Intel processor, running macOS 15 or higher. (Applicants without a Mac cannot be considered).",
      "Degree in Industrial, Manufacturing, or Systems Engineering, or a related field.",
      "Experience with process design, lean/Six Sigma, production planning, quality control, or supply chain analysis using spreadsheets, CAD, process-mapping, or statistical tools.",
      "Currently pursuing or recently completed Masters studies, or have 2-3 years of relevant experience + Bachelors from a prestigious institution.",
      "Ability to clearly explain your engineering decisions with excellent written and verbal communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Part-time commitment: approximately 10-20 hours per week on your own schedule.",
      "Application & Onboarding: Submit resume → brief 3-minute conversation with AI interviewer → brief paid assessment.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 57,
    title: "Civil Engineers & Architects (Must own MacBook)",
    domain: "Other engineering",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 3 months ago",
    postedOrder: 57,
    bonus: "$240",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/1objP",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (10-20 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "For civil engineers & architects owning a Mac to work through real design, drafting, structural, and site planning workflows for frontier AI models.",
    overview: "We are looking for civil engineers and architects with 2-3 years of professional experience, or currently enrolled postgrad students in civil engineering or architecture, to support a research project with a leading AI lab. You will work through real design and drafting workflows on your own Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real civil engineering and architectural tasks on your Mac to create high-quality training data for advanced AI models.",
      "Execute authentic workflows in structural, site, or building design using Mac-compatible drafting and design tools.",
      "Clearly explain design decisions, architectural intent, and structural rationale while you work.",
      "Engage for a flexible part-time commitment of approximately 10-20 hours per week on your own schedule."
    ],
    qualifications: [
      "Strict Requirement: You must own a MacBook or Mac with an Apple M-series chip or Intel processor, running macOS 15 or higher. (Applicants without a Mac cannot be considered).",
      "Degree in Civil Engineering, Architecture, or a related field.",
      "Proficiency in Mac-compatible tools such as AutoCAD for Mac, ArchiCAD, Vectorworks, SketchUp, or Rhino; experience with structural, site, or building design is a plus.",
      "Currently pursuing or recently completed Masters studies, or have 2-3 years of relevant experience + Bachelors from a prestigious institution.",
      "Ability to clearly explain design decisions with excellent written and verbal communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Part-time commitment: approximately 10-20 hours per week on your own schedule.",
      "Application & Onboarding: Submit resume → brief 3-minute conversation with AI interviewer → brief paid assessment.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 58,
    title: "Mechanical & CAD Engineers (Must own MacBook)",
    domain: "Other engineering",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 3 months ago",
    postedOrder: 58,
    bonus: "$240",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/FBQrJ",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract (10-20 hrs/week)",
    postedBy: "Opportunity Network",
    summary: "For mechanical and CAD engineers owning a Mac to work through real engineering design workflows in Mac CAD tools (Fusion 360, Onshape, Shapr3D) for frontier AI models.",
    overview: "We are looking for mechanical and CAD engineers with 2-3 years of professional experience, or currently enrolled postgrad engineering students, to support a research project with a leading AI lab. You will work through real engineering design workflows on your own Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real mechanical design and CAD tasks on your Mac to create high-quality training data for advanced AI models.",
      "Execute authentic workflows in 3D modeling, parametric CAD, and drafting using Mac-compatible tools.",
      "Clearly explain engineering decisions, modeling choices, and tolerancing rationale while you work.",
      "Engage for a flexible part-time commitment of approximately 10-20 hours per week on your own schedule."
    ],
    qualifications: [
      "Strict Requirement: You must own a MacBook or Mac with an Apple M-series chip or Intel processor, running macOS 15 or higher. (Applicants without a Mac cannot be considered).",
      "Degree in Mechanical Engineering or a related field, with hands-on 3D modeling and drafting experience.",
      "Proficiency in Mac-compatible CAD tools such as Fusion 360, Onshape, Shapr3D, or FreeCAD; familiarity with GD&T and engineering drawings is a plus.",
      "Currently pursuing or recently completed Masters studies, or 2-3 years of relevant experience + Bachelors from a prestigious institution.",
      "Ability to clearly explain your engineering decisions with excellent written and verbal communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Part-time commitment: approximately 10-20 hours per week on your own schedule.",
      "Application & Onboarding: Submit resume → brief 3-minute conversation with AI interviewer → brief paid assessment.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 59,
    title: "Engineering Expert",
    domain: "Other engineering",
    rate: "$60 - $125 / hour",
    rateNum: 125,
    posted: "Posted 3 months ago",
    postedOrder: 59,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/SBMZE",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for engineers across structural, civil, mechanical, aerospace, electrical, chemical, and materials engineering to train and evaluate frontier AI models.",
    overview: "The research teams behind the best-known AI models come to our network for engineering judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for engineers who want AI training and evaluation work, not a specific job opening. It stays open whether or not a matching project is running this week.",
    responsibilities: [
      "Write design problems from professional engineering work, including loads, constraints, tolerances, and reference answers.",
      "Grade model-written analysis: assess governing failure modes, regime assumptions, and proper application of safety factors.",
      "Flag where a model's design satisfies mathematical calculations but fails in practice (manufacturability, installation, corrosion, standard compliance).",
      "Span key disciplines: Structural, Civil, Environmental, Mechanical, Aerospace, Industrial, Robotics, Electrical, Chemical, and Materials Engineering."
    ],
    qualifications: [
      "Degree in an engineering discipline with professional design or analysis experience.",
      "Clear written communication with the ability to explain complex technical reasoning and architectural tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions.",
      "Where you trained matters less than whether you have had a design of yours built and learned what it did once it was."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $125 / hour depending on project scope).",
      "How it works: Apply with resume → short 20-minute AI interview → added to pool for rapid project invites.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 60,
    title: "Electrical Engineering Expert",
    domain: "Other engineering",
    rate: "$70 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 60,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/8Td9q",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for electrical engineers to train and evaluate frontier AI models in circuit design, board bring-up, noise/stability margins, and timing closure.",
    overview: "The research teams behind the best-known AI models come to our network for electrical engineering judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for electrical engineers who want AI training and evaluation work, not a specific job opening. It stays open whether or not a matching project is running this week.",
    responsibilities: [
      "Write circuit or systems problems from real engineering work, with specifications, operating conditions, constraints, and reference answers.",
      "Grade model-written design and analysis: assess circuit topology, noise and stability margins, and timing closure.",
      "Flag where a model's design simulates cleanly but fails on a real board (parasitics, tolerance stack-up, EMI/interference).",
      "Bring practical lab bench judgment to evaluate whether solutions work in authentic hardware."
    ],
    qualifications: [
      "Degree in Electrical Engineering with professional design, test, or systems experience.",
      "Clear written communication with ability to explain technical reasoning and tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions.",
      "Where you trained matters less than whether you have debugged your own design on the bench and found out what simulation missed."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $120 / hour depending on project scope).",
      "How it works: Apply with resume → short 20-minute AI interview → added to pool for rapid project invites.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 61,
    title: "Mechanical Engineering Expert",
    domain: "Other engineering",
    rate: "$70 - $125 / hour",
    rateNum: 125,
    posted: "Posted 3 months ago",
    postedOrder: 61,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/MlX8H",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for mechanical engineers to train and evaluate frontier AI models in free body diagrams, governing failure modes, tolerances, and manufacturability.",
    overview: "The research teams behind the best-known AI models come to our network for mechanical engineering judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for mechanical engineers who want AI training and evaluation work, not a specific job opening. It stays open whether or not a matching project is running this week.",
    responsibilities: [
      "Write design problems from work you have done, with loads, constraints, tolerances, and reference answers.",
      "Grade model-written analysis: whether the free body diagram is right, whether the failure mode considered is the governing one, and whether safety factors are correctly applied.",
      "Flag where a model's design satisfies calculations but fails in practice (manufacturability, assembly, wear, thermal expansion).",
      "Bring practical engineering judgment to evaluate AI models on real mechanical engineering problems."
    ],
    qualifications: [
      "Degree in Mechanical Engineering with professional design or analysis experience.",
      "Clear written communication with ability to explain complex technical reasoning and architectural tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions.",
      "Where you trained matters less than whether you have had a design of yours built and learned what it did once it was."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $125 / hour depending on project scope).",
      "How it works: Apply with resume → short 20-minute AI interview → added to pool for rapid project invites.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 62,
    title: "Materials Science Expert",
    domain: "Other engineering",
    rate: "$60 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 62,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/IaNbf",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for materials scientists to train and evaluate frontier AI models in microstructure, characterization, processing windows, and structure-property claims.",
    overview: "The research teams behind the best-known AI models come to our network for materials science judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for materials scientists who want AI training and evaluation work, not a specific job opening. It stays open whether or not a matching project is running this week.",
    responsibilities: [
      "Write materials problems from professional work, with systems, processing histories, property targets, and reference answers.",
      "Grade model-written structure-property reasoning: assess whether microstructure explains properties, whether characterization supports claims, and whether processing windows are realistic.",
      "Flag where a model's proposed material meets the spec on paper but fails in service (fatigue, corrosion, thermal cycling, manufacturability).",
      "Bring first-principles experimental and characterization judgment to evaluate AI models on real materials problems."
    ],
    qualifications: [
      "Graduate degree in Materials Science or a related field, with research or industrial experience.",
      "Clear written communication with ability to explain complex scientific reasoning and tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions.",
      "Where you trained matters less than whether you processed and characterized the material yourself, recently enough to explain the calls you made."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $120 / hour depending on project scope).",
      "How it works: Apply with resume → short 20-minute AI interview → added to pool for rapid project invites.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 63,
    title: "Nursing Talent Network",
    domain: "Medicine",
    rate: "$50 - $100 / hour",
    rateNum: 100,
    posted: "Posted 3 months ago",
    postedOrder: 63,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Mkx1N",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Nursing Expert Network to train and evaluate frontier AI models in patient care, medication administration, and clinical documentation.",
    overview: "Join our Nursing Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Nursing and clinical care.",
      "Create tasks and deliverables based on real-world patient-care and clinical scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in medicine.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in patient care & monitoring, medication administration, and clinical documentation.",
      "Registered Nurse (RN), Nurse Practitioner (NP), BSN/MSN, or equivalent clinical nursing credentials.",
      "Strong communication skills with ability to articulate clinical workflows clearly.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $50 to $100 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to provide the human intelligence essential to AI development. You will work on projects that focus on training and enhancing AI systems, earn competitive rates, collaborate with leading researchers, and help shape the next generation of AI systems in medicine."
  },
  {
    id: 64,
    title: "Physician Talent Network",
    domain: "Medicine",
    rate: "$100 - $200 / hour",
    rateNum: 200,
    posted: "Posted 3 months ago",
    postedOrder: 64,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/qi5K1",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Physician Expert Network to train and evaluate frontier AI models in clinical diagnosis, treatment pathways, and medical documentation.",
    overview: "Join our Physician Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Medicine and clinical reasoning.",
      "Create tasks and deliverables based on real-world clinical diagnosis and treatment scenarios.",
      "Provide domain-specific medical feedback to advance frontier AI research.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "MD, DO, MBBS, or equivalent medical degree with professional clinical experience.",
      "Professional experience in clinical diagnosis & treatment, patient care management, and medical documentation & compliance.",
      "Strong communication skills with ability to evaluate medical reasoning, diagnostic accuracy, and treatment safety.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $100 to $200 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to provide the human intelligence essential to AI development. You will work on projects that focus on training and enhancing AI systems, earn competitive rates, collaborate with leading researchers, and help shape the next generation of AI systems in medicine."
  },
  {
    id: 65,
    title: "Lawyer Talent Network",
    domain: "Law",
    rate: "$75 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 65,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/qtr1X",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Law Expert Network to train and evaluate frontier AI models in legal research, contract review, litigation analysis, and dispute resolution.",
    overview: "Join our Law Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Law and legal reasoning.",
      "Create tasks and deliverables based on real-world legal research, contract drafting & review, and statutory interpretation.",
      "Provide domain-specific feedback to advance frontier AI research in legal intelligence.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in legal research & writing, contract drafting & review, litigation & dispute resolution.",
      "JD, LLM, LLB, or equivalent law degree with active or past legal practice experience.",
      "Strong communication and legal drafting skills with ability to evaluate statutory arguments rigorously.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $75 to $150 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 66,
    title: "SOC Investigation Specialist Talent Network",
    domain: "Data analysis",
    rate: "$50 - $90 / hour",
    rateNum: 90,
    posted: "Posted 3 months ago",
    postedOrder: 66,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/KDskF",
    location: "Remote (Europe & India)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Review, evaluate, and construct high-quality security investigations using Splunk and SIEM/EDR logs to benchmark frontier SOC automation and AI investigation systems.",
    overview: "We are hiring SOC Investigation Specialists on behalf of high-growth technology and enterprise partners building next-generation SOC automation and AI-driven investigation systems. This role is ideal for experienced SOC analysts who can apply real-world investigative judgment to review, validate, and construct high-quality security investigations across SIEM, endpoint, cloud, and identity environments.",
    responsibilities: [
      "Review, monitor, and evaluate SOC alerts and investigation outputs based on predefined scenarios and criteria.",
      "Distinguish true positives from false positives by validating investigative evidence and alert context.",
      "Perform end-to-end security investigations including log analysis, entity pivoting, timeline reconstruction, and evidence correlation.",
      "Assess the correctness, completeness, and quality of SOC investigations produced by automated or human workflows.",
      "Use Splunk extensively to pivot across logs, entities, and timelines, including reading and reasoning about SPL queries.",
      "Make clear binary determinations (e.g., ACCEPT / PASS) while producing detailed ground-truth investigations when required.",
      "Maintain clear and accurate documentation of investigative steps, assumptions, evidence, and conclusions."
    ],
    qualifications: [
      "3+ years of hands-on experience as a SOC analyst in a production SOC environment (Tier 2 or above strongly preferred).",
      "Strong understanding of alert triage, incident investigation workflows, and evidence-based decision-making under time constraints.",
      "Mandatory hands-on experience with Splunk: conducting investigations, reasoning about SPL queries, and pivoting between logs/timelines.",
      "Proven ability to evaluate SOC investigations and determine whether conclusions are valid, incomplete, or incorrect.",
      "Experience with EDR (CrowdStrike, Defender, SentinelOne) or Cloud security logs (AWS, Azure, GCP) is a plus."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $50 to $90 / hour depending on project scope).",
      "Location eligibility: Europe and India (see JD modal for full country list).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to build next-generation SOC automation and AI-driven investigation systems. You will work on high-impact investigative evaluations and ground-truth security cases alongside experienced security practitioners."
  },
  {
    id: 67,
    title: "Financial Analyst Talent Network",
    domain: "Finance",
    rate: "$60 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 67,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/S3LF2",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Financial Analyst Expert Network to train and evaluate frontier AI models in financial modeling, forecasting, statement analysis, and budgeting.",
    overview: "Join our Financial Analyst Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Finance.",
      "Create tasks and deliverables based on real-world scenarios.",
      "Provide domain-specific feedback to advance frontier AI research.",
      "Projects vary in scope and duration, with typical commitments ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in financial modeling & forecasting, financial statement analysis, budgeting & variance analysis.",
      "Degree in Finance, Accounting, Economics, or related quantitative discipline; CFA/CPA or equivalent is a plus.",
      "Strong communication skills.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $120 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 68,
    title: "Mathematician Talent Network",
    domain: "Finance",
    rate: "$70 - $140 / hour",
    rateNum: 140,
    posted: "Posted 3 months ago",
    postedOrder: 68,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/hkd4s",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Mathematician Expert Network to train and evaluate frontier AI models in statistical modeling, mathematical proofs, and computational mathematics.",
    overview: "Join our Mathematician Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Mathematics.",
      "Create tasks and deliverables based on real-world scenarios.",
      "Provide domain-specific feedback to advance frontier AI research.",
      "Projects vary in scope and duration, with typical commitments ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in statistical analysis & modeling, mathematical proof & theory, computational mathematics.",
      "Graduate degree in Mathematics, Applied Mathematics, Statistics, or a related quantitative field.",
      "Strong communication skills with ability to articulate mathematical logic and proof steps.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $140 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 69,
    title: "Business Intelligence Analyst Talent Network",
    domain: "Data analysis",
    rate: "$60 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 69,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/3wlxS",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our BI Analyst Expert Network to train and evaluate frontier AI models in SQL querying, data visualization (Tableau/Power BI), and data warehousing.",
    overview: "Join our Business Intelligence Analyst Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Business Intelligence Analytics.",
      "Create tasks and deliverables based on real-world business intelligence and analytics scenarios.",
      "Provide domain-specific feedback to advance frontier AI research.",
      "Projects vary in scope and duration, with typical commitments ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in SQL & complex data querying.",
      "Hands-on expertise in data visualization tools (Tableau, Power BI, Looker).",
      "Experience in data modeling, schema design, and data warehousing (Snowflake, BigQuery, Redshift).",
      "Strong communication skills with ability to explain data insights and pipeline architecture.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $120 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 70,
    title: "Luxury Automotive Strategy Expert",
    domain: "Business operations",
    rate: "$300 - $350 / hour",
    rateNum: 350,
    posted: "Posted 1 month ago",
    postedOrder: 70,
    bonus: "20% Referral",
    opportunityBadge: false,
    hired: "2 hired this month",
    oneClick: false,
    applyUrl: "https://t.mercor.com/zWNm0",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Senior business strategy advisory engagement to review materials through a luxury automaker C-suite lens (Ferrari, Porsche, Rolls-Royce, Bentley).",
    overview: "We are seeking a senior business strategy expert with deep experience in the luxury automotive sector (e.g., Ferrari, Lamborghini, Porsche, Bentley, Rolls-Royce, Aston Martin, McLaren, Maserati) for a short, focused advisory engagement. You will review strategy materials, market insights, and recommendations and give a candid, C-suite-level perspective on how executives at leading luxury automakers would react to them.",
    responsibilities: [
      "Review strategy materials, including market insights, analyses, and strategic recommendations related to the luxury automotive space.",
      "Assess materials through the lens of a C-suite executive (CEO, CFO, CMO, CSO) at a luxury automaker for credibility and actionability.",
      "Identify logical gaps, red flags, unsupported assumptions, and internal inconsistencies across insights and recommendations.",
      "Flag where recommendations conflict with luxury auto dynamics (brand scarcity, volume discipline, pricing power, bespoke programs, residual values).",
      "Deliver clear, structured written feedback and an optional short debrief call summarizing key strengths, concerns, and improvements."
    ],
    qualifications: [
      "10+ years of experience in business strategy, with substantial focus on the luxury automotive sector.",
      "Partner, Principal, or Senior Consultant at top strategy firms (McKinsey, BCG, Bain) with past luxury auto casework, OR senior leadership at a luxury automaker.",
      "Strong understanding of luxury automotive executive decision-making: brand positioning, allocation strategy, pricing, customer experience, and long-term equity.",
      "Direct experience with brands such as Ferrari, Lamborghini, Porsche, Bentley, Rolls-Royce, Aston Martin, or McLaren is preferred.",
      "Excellent written communication skills in English."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a high-value advisory contract at $300 to $350 per hour.",
      "Fully remote engagement with flexible scheduling around existing commitments.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Connecting world-class domain specialists with leading enterprises and technology firms for high-impact advisory and AI initiatives."
  },
  {
    id: 71,
    title: "Customer Experience Operations (India)",
    domain: "Business operations",
    rate: "$35K - $50K / year",
    rateNum: 50000,
    posted: "Posted 1 month ago",
    postedOrder: 71,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/FdRXW",
    location: "India",
    jobType: "Full-time position",
    postedBy: "Opportunity Network",
    summary: "Full-time internal role in India to own the end-to-end expert experience across Engineering, Operations, Product, and Talent Success.",
    overview: "This is a full-time internal role, open to candidates based in India only. You will work directly as part of our team to own how experts experience our platform end to end, coordinating several owners across Engineering, Operations, Product, and Talent Success to resolve complex cross-functional challenges.",
    responsibilities: [
      "Own cross-functional workstreams affecting expert experience: onboarding, support, payments, and project matching.",
      "Coordinate owners across Engineering, Operations, and other teams: set priorities, run check-ins, unblock work, and enforce deadlines.",
      "Spot friction in feedback, support tickets, and metrics, turning issues into prioritized asks for respective teams across timezones.",
      "Build and run lightweight processes, dashboards, and playbooks that keep operations moving swiftly.",
      "Use AI tools daily (Claude, agents, automations) to automate repetitive workflows and report progress to leadership."
    ],
    qualifications: [
      "Proven track record in high-ownership operations, product ops, chief-of-staff roles, or startup founding.",
      "Comfortable leading through influence and coordinating engineers and operators without formal authority.",
      "Fluent with AI tools (Claude, agentic workflows, automation scripts) and keen to find new efficiencies.",
      "Experience with marketplaces, gig platforms, contractor networks, or talent experience is preferred.",
      "Open to candidates based in India only."
    ],
    terms: [
      "This is a full-time internal position based in India.",
      "Annual compensation range: $35,000 to $50,000 USD per year.",
      "Work directly with our global core team across Engineering, Operations, and Product.",
      "Standard full-time benefits and compensation structure."
    ],
    aboutCompany: "We operate at the intersection of specialized technical talent and frontier AI research, partnering with leading research labs and enterprises to provide the human intelligence essential to advanced model development."
  },
  {
    id: 72,
    title: "Benefit Navigation Expert",
    domain: "Business operations",
    rate: "$70 / hour",
    rateNum: 70,
    posted: "Posted 1 month ago",
    postedOrder: 72,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/xV8rD",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Validate and assess AI-generated benefits-navigation scenarios and evaluation rubrics based on real-world Medicare, Medicaid, and claims experience.",
    overview: "Our client is developing AI-generated benefits-navigation content and needs experienced benefits professionals (plan design, payer/claims operations, regulatory compliance) to validate AI-generated navigation scenarios and evaluation rubrics against real-world customer service workflows.",
    responsibilities: [
      "Review and validate evaluation rubrics for accuracy and real-world relevance in benefits navigation.",
      "Assess AI-generated benefits-navigation scenarios used to inform synthetic training datasets.",
      "Identify inaccurate, unrealistic, ambiguous, or potentially harmful healthcare coverage guidance.",
      "Recommend concrete improvements based on real-world benefits administration and payer experience.",
      "Distinguish general educational guidance from situations requiring licensed, clinical, or legal referrals."
    ],
    qualifications: [
      "Substantial experience in benefits administration, benefits navigation, or healthcare coverage (Must Have).",
      "Strong practical understanding of Medicare and/or Medicaid (Must Have).",
      "Deep knowledge of common customer questions, payer service workflows, and escalation practices (Must Have).",
      "Experience in employer-sponsored group benefits, health & welfare, or QA rubric development is strongly preferred.",
      "This is a non-clinical review role focused on benefits operations."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $70 per hour.",
      "Application includes a short domain-expert interview.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in healthcare and benefits operations."
  },
  {
    id: 73,
    title: "Expert Project Manager",
    domain: "Business operations",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 1 month ago",
    postedOrder: 73,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Fm3HI",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Help run projects pushing the frontier of LLM browsing capabilities: tracking annotator performance, data quality reviews, and contributor communications.",
    overview: "We're hiring an Expert Project Manager to help run projects that push the frontier of LLM browsing capabilities. Day to day includes tracking project and annotator performance in Google Sheets, reviewing annotator quality, handling contributor communications, and owning operational problem-solving start to finish.",
    responsibilities: [
      "Track and analyze project and annotator performance data in Google Sheets.",
      "Review contributor output quality against strict rubrics and guidelines.",
      "Manage communications, onboarding, and feedback loops with expert annotators.",
      "Identify workflow bottlenecks and drive operational improvements for LLM browsing evaluation projects.",
      "Pick up unfamiliar operational hurdles and own them end to end."
    ],
    qualifications: [
      "High agency, strong organization, and an analytical mindset with background in operations or project management.",
      "Strong proficiency in spreadsheet tracking (Google Sheets / Excel) and data organization.",
      "Excellent written and verbal communication skills.",
      "Demonstrated ownership mentality in fast-paced technical or operational environments."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $50 to $60 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Connecting skilled operators with leading frontier AI research organizations to manage groundbreaking data and model evaluation initiatives."
  },
  {
    id: 74,
    title: "Business Operations Expert",
    domain: "Business operations",
    rate: "$90 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 74,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/THSx8",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for business operators to write and grade operational problems, process changes, and forecasts for frontier AI models.",
    overview: "The research teams behind the best-known AI models come to our network for business operations judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for operators across sales, customer success, strategy, supply chain, procurement, and project management.",
    responsibilities: [
      "Write operating problems from real work: processes, constraints, numbers, and reference answers.",
      "Grade model-written operational analysis: whether process changes survive contact with frontline teams, whether forecasts are grounded, and if metrics track true outcomes.",
      "Flag where model recommendations look good on slides but stall in practice due to headcount, systems, or vendor realities.",
      "Provide domain-specific feedback across operations, strategy, and business execution."
    ],
    qualifications: [
      "Professional experience running or analyzing a business function (Strategy, Operations, Supply Chain, Sales Ops, HR, Project Management).",
      "Clear written communication with ability to explain complex operational logic and tradeoffs.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $90 to $120 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in business operations."
  },
  {
    id: 75,
    title: "Management Consulting Expert",
    domain: "Business operations",
    rate: "$90 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 75,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/BTK4U",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for management consultants to evaluate AI model-built market sizings, driver trees, and profitability analyses.",
    overview: "The research teams behind the best-known AI models come to our network for management consulting judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for consultants from MBB, Big Four strategy arms, boutiques, and in-house corporate strategy.",
    responsibilities: [
      "Write case prompts from real engagements: client context, data, constraints, and reference answers.",
      "Grade model-built market sizings and profitability analyses: verify driver trees, segmentation validity, and numeric consistency.",
      "Flag where a model produces clean answers that would fail partner review or client steering committees.",
      "Bring first-principles strategy consulting rigor to benchmark frontier AI reasoning."
    ],
    qualifications: [
      "Professional experience in strategy, operations, or transformation consulting (MBB, Big Four strategy, boutique firms, or in-house corporate development).",
      "Demonstrated ownership of analyses and client-facing recommendations.",
      "Clear written communication and sharp structured reasoning.",
      "Comfort with ambiguous tasks and rigorous evaluations."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $90 to $120 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in management consulting."
  },
  {
    id: 76,
    title: "Management Consultant Talent Network",
    domain: "Business operations",
    rate: "$80 - $150 / hour",
    rateNum: 150,
    posted: "Posted 3 months ago",
    postedOrder: 76,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/sCKpg",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Management Consultant Expert Network to train and evaluate frontier AI models in strategic analysis, financial modeling, and operational problem solving.",
    overview: "Join our Management Consultant Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Management Consulting.",
      "Create tasks and deliverables based on real-world business scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in strategy and operations.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in strategic analysis & problem solving, financial & operational modeling, stakeholder communication.",
      "Consulting experience across strategy, ops, organizational design, or business transformation.",
      "Strong communication skills with ability to explain executive recommendations clearly.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $80 to $150 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in management consulting."
  },
  {
    id: 77,
    title: "Marketing Specialist Talent Network",
    domain: "Business operations",
    rate: "$50 - $100 / hour",
    rateNum: 100,
    posted: "Posted 3 months ago",
    postedOrder: 77,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/LBB26",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Marketing Specialist Expert Network to train and evaluate frontier AI models in campaign management, market research, content strategy, and branding.",
    overview: "Join our Marketing Specialist Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Marketing.",
      "Create tasks and deliverables based on real-world marketing and campaign scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in advertising, brand, and growth.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in digital marketing & campaign management, market research & analytics, content strategy & branding.",
      "Strong communication skills and ability to evaluate creative and analytical marketing outputs.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $50 to $100 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in marketing."
  },
  {
    id: 78,
    title: "HR & Administration Specialist Talent Network",
    domain: "Business operations",
    rate: "$40 - $80 / hour",
    rateNum: 80,
    posted: "Posted 3 months ago",
    postedOrder: 78,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/zNXyF",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our HR & Administration Expert Network to train and evaluate frontier AI models in talent acquisition, onboarding, payroll, benefits, and policy compliance.",
    overview: "Join our HR & Administration Specialist Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in HR & Administration.",
      "Create tasks and deliverables based on real-world HR policies, recruitment, and compliance scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in human resources.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in talent acquisition & onboarding, payroll & benefits administration, HR policy & compliance.",
      "Strong written communication and interpersonal understanding.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $40 to $80 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in HR and administration."
  },
  {
    id: 79,
    title: "Biologist Talent Network",
    domain: "Life, Physical, and Social Science",
    rate: "$60 - $120 / hour",
    rateNum: 120,
    posted: "Posted 3 months ago",
    postedOrder: 79,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/XCsdd",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Biologist Expert Network to train and evaluate frontier AI models in molecular & cellular biology, experimental design, and life science data.",
    overview: "Join our Biologist Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Biology and life science research.",
      "Create tasks and deliverables based on real-world cellular and molecular laboratory scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in biological sciences.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in molecular & cellular biology techniques, experimental design & lab research, data analysis in life sciences.",
      "Graduate degree (MS, PhD) in Biology, Molecular Biology, Biochemistry, or related life science discipline.",
      "Strong communication skills with ability to articulate experimental protocols and biological hypotheses clearly.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $120 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 80,
    title: "Physicist Talent Network",
    domain: "Life, Physical, and Social Science",
    rate: "$70 - $140 / hour",
    rateNum: 140,
    posted: "Posted 3 months ago",
    postedOrder: 80,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/uCmkg",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Physicist Expert Network to train and evaluate frontier AI models in theoretical & computational modeling, experimental design, and scientific programming.",
    overview: "Join our Physicist Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available. We match experts to opportunities on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Physics and physical simulation.",
      "Create tasks and deliverables based on real-world theoretical and experimental physics scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in physical sciences.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in theoretical & computational modeling, experimental design & data analysis, scientific programming.",
      "Graduate degree (MS, PhD) in Physics, Applied Physics, Computational Physics, or related discipline.",
      "Strong communication skills with ability to evaluate physical equations, boundary conditions, and simulations.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $70 to $140 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems. You will be paid competitively, collaborate with leading researchers, and help shape the next generation of AI systems in your area of expertise."
  },
  {
    id: 81,
    title: "Film & Video Craft Expert (Camera, VFX, Editing & Performance)",
    domain: "Arts & Design",
    rate: "$70 - $100 / hour",
    rateNum: 100,
    posted: "Posted 1 month ago",
    postedOrder: 81,
    bonus: "Up to $1,600 Referral",
    opportunityBadge: false,
    hired: "55 hired this month",
    oneClick: false,
    applyUrl: "https://t.mercor.com/wkU9D",
    location: "Remote (Worldwide)",
    jobType: "Part-time position",
    postedBy: "Opportunity Network",
    summary: "Evaluate side-by-side AI-generated video models on craft axes: lighting/grade, framing, camera motion, continuity, texture, and performance.",
    overview: "Join a leading AI lab's cutting-edge research team and help shape how its next generation of video models is judged. We're seeking film, theater and visual effects professionals who understand how a shot is built, from lighting and grade to framing, camera movement, continuity, texture and performance, to compare AI-generated video side by side and explain which result holds up to a professional eye.",
    responsibilities: [
      "Evaluate pairs of AI-generated videos made from the same prompt and choose the stronger result on craft axes: lighting/grade, framing, camera movement, texture, continuity, and acting.",
      "Write short, precise reasons for each judgment in the language a VFX/film supervisor would use in dailies.",
      "Check each video against prompt instructions (requested camera moves, lens choice, framing, or performance delivered).",
      "Participate in calibration rounds with other raters to maintain consistent evaluation benchmarks across model releases."
    ],
    qualifications: [
      "Professional or graduate experience in film, theater, character animation, directing, compositing, lighting, color/DIT, camera department, or editing.",
      "Either respected film/animation training plus 2+ years experience, or 4+ years experience including at least 2 theatrical release projects.",
      "Trained eye for on-screen detail and ability to articulate visual flaws precisely in English.",
      "Reliable access to a high-quality display and headphones; available for at least 20 hours/week."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Part-time hourly contract at $70 to $100 per hour (minimum 20 hours/week).",
      "Fully remote role that can be completed on your own schedule.",
      "Referral program: earn up to $1,600 per successful referral.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI video generation systems."
  },
  {
    id: 82,
    title: "Application Users - Blender on Windows - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 82,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/xQUUR",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Capture and execute hands-on 3D modeling, sculpting, animation, and rendering workflows using Blender on a Windows PC.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications to evaluate and train frontier AI models. You must already have Blender installed on your own PC running Windows and be able to open it immediately.",
    responsibilities: [
      "Complete and record real-world 3D modeling, sculpting, rigging, animation, and rendering tasks in Blender on Windows.",
      "Capture high-resolution screenshots (> 2.5 megapixels, e.g. 1440p, 4K, or dual-monitor setup) during workflow execution.",
      "Document step-by-step actions, tool usages, shortcuts, and parameters accurately.",
      "Ensure clean, reproducible project files and asset structures."
    ],
    qualifications: [
      "Demonstrated proficiency in Blender (3D modeling, UV unwrapping, shading, animation, or rendering).",
      "Own a Windows PC with Blender installed and capable of capturing >2.5 megapixel screenshots (QHD/4K/ultrawide or dual 1080p monitors).",
      "Background as 3D artist, animator, motion designer, or technical artist.",
      "Clear communication and ability to follow precise workflow rubrics."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Software and hardware are BYO (licenses/hardware not provided).",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 83,
    title: "Application Users - PowerPoint on Windows - Professionals",
    domain: "Arts & Design",
    rate: "$60 - $70 / hour",
    rateNum: 70,
    posted: "Posted 1 month ago",
    postedOrder: 83,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/GTaoD",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute advanced presentation design, slide masters, and animation workflows using PowerPoint on a Windows PC.",
    overview: "We're looking for professionals with hands-on, real-world experience in specialized applications to train frontier AI models. You must already have Microsoft PowerPoint installed on your own PC running Windows and be able to open it today.",
    responsibilities: [
      "Execute professional slide design, master template creation, data visualization, and animation sequences in PowerPoint.",
      "Capture high-resolution screenshots (>2.5 megapixels, QHD/4K or dual-monitor) demonstrating complex slide construction.",
      "Document design decisions, typography hierarchy, grid alignment, and corporate presentation standards.",
      "Follow structured rubrics to validate AI desktop assistance capabilities."
    ],
    qualifications: [
      "Professional experience as a consultant, presentation designer, marketer, or corporate analyst heavily using PowerPoint.",
      "Advanced mastery of slide masters, custom shapes, formatting, charts, transitions, and animations.",
      "Own a Windows PC with PowerPoint installed and display meeting the 2.5MP+ resolution requirement.",
      "Strong communication and attention to detail."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $60 to $70 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 84,
    title: "Application Users - DaVinci Resolve on macOS - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 84,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/efC2Z",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute video editing, color grading, Fairlight audio, and node-based workflows in DaVinci Resolve on a Mac.",
    overview: "We're looking for colorists, video editors, and post-production professionals with hands-on experience in DaVinci Resolve on macOS to help train and evaluate frontier AI models. You must already have DaVinci Resolve installed on your own Mac running macOS.",
    responsibilities: [
      "Perform timeline video editing, sequence assembly, color correction, and grading node workflows in DaVinci Resolve.",
      "Capture high-resolution screenshots (>2.5 megapixels, e.g. MacBook Pro 14\"/16\" Retina, 1440p, or 4K display).",
      "Record node trees, LUT applications, curve adjustments, and timeline trim actions accurately.",
      "Provide clear explanations for post-production editing choices."
    ],
    qualifications: [
      "Professional experience as a colorist, video editor, or post-production specialist in DaVinci Resolve.",
      "Own a Mac running macOS with DaVinci Resolve installed and a qualified high-resolution display.",
      "Solid grasp of color spaces, scopes, conforming, and multi-track timelines.",
      "Strong communication skills in English."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 85,
    title: "Application Users - Unreal Engine on Windows - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 85,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/vfzYN",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute real-time 3D, virtual production, environment art, and Blueprint workflows in Unreal Engine on a Windows PC.",
    overview: "We're looking for game developers, technical artists, virtual production, and archviz specialists with hands-on experience in Unreal Engine on Windows. You must already have Unreal Engine installed on your own PC running Windows and be able to open it immediately.",
    responsibilities: [
      "Perform level building, lighting, material creation, Sequencer work, and Blueprint scripting in Unreal Engine on Windows.",
      "Capture high-resolution screenshots (>2.5MP, QHD/4K or dual monitor) during workflow execution.",
      "Document viewport actions, actor placement, shader nodes, and performance optimization steps.",
      "Deliver clean, structured task traces for AI training."
    ],
    qualifications: [
      "Hands-on experience in Unreal Engine (UE4/UE5) for games, virtual production, or architectural visualization.",
      "Own a capable Windows PC with Unreal Engine installed and display meeting the >2.5MP resolution requirement.",
      "Familiarity with Nanite, Lumen, Materials, Blueprints, or Sequencer.",
      "Clear written English communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 86,
    title: "Application Users - Adobe Illustrator on Windows - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 86,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/1B8n6",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute vector illustration, brand identity, typography, and packaging design workflows in Adobe Illustrator on Windows.",
    overview: "We're looking for graphic designers, illustrators, and brand designers with hands-on experience in Adobe Illustrator on Windows to train frontier AI models. You must already have Adobe Illustrator installed on your own PC running Windows.",
    responsibilities: [
      "Create vector illustrations, iconography, typography layouts, and logo assets in Adobe Illustrator on Windows.",
      "Capture high-resolution screenshots (>2.5MP, QHD/4K or dual monitor) showing tool palettes and artboards.",
      "Detail pen tool paths, Pathfinder operations, appearance panels, and vector effects clearly.",
      "Follow structured annotation guidelines."
    ],
    qualifications: [
      "Professional experience in Adobe Illustrator for branding, vector art, or graphic design.",
      "Own a Windows PC with Illustrator installed and display meeting the 2.5MP+ resolution requirement.",
      "Deep familiarity with pen tools, bezier curves, gradient meshes, and asset export workflows.",
      "Excellent written communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 87,
    title: "Application Users - Premiere on Windows - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 87,
    bonus: "20% Referral",
    opportunityBadge: false,
    hired: "1 hired this month",
    oneClick: false,
    applyUrl: "https://t.mercor.com/GsuDJ",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute timeline video editing, sequence assembly, audio sync, and export workflows in Adobe Premiere Pro on Windows.",
    overview: "We're looking for video editors, content producers, and post-production professionals with hands-on experience in Adobe Premiere on Windows. You must already have Premiere installed on your own PC running Windows and be able to open it immediately.",
    responsibilities: [
      "Perform timeline video editing, multi-cam sync, cuts, transitions, and sequence assembly in Premiere Pro on Windows.",
      "Capture high-resolution screenshots (>2.5MP, QHD/4K or dual monitor) displaying sequence panels and effect controls.",
      "Document editing decisions, keyframing, Lumetri color corrections, and audio balance.",
      "Ensure accuracy in tracing timeline actions."
    ],
    qualifications: [
      "Hands-on experience as a video editor or content creator using Adobe Premiere Pro.",
      "Own a Windows PC with Premiere installed and display meeting the >2.5MP resolution requirement.",
      "Strong knowledge of video codecs, aspect ratios, timeline ripple edits, and sequence settings.",
      "Clear written English communication."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 88,
    title: "Application Users - Photoshop on Windows - Generalist",
    domain: "Arts & Design",
    rate: "$30 - $40 / hour",
    rateNum: 40,
    posted: "Posted 1 month ago",
    postedOrder: 88,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/Pe2lA",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Execute raster image editing, retouching, masking, and compositing workflows in Adobe Photoshop on Windows.",
    overview: "We're looking for photographers, retouchers, graphic designers, and digital artists with hands-on experience in Adobe Photoshop on Windows. You must already have Photoshop installed on your own PC running Windows and be able to open it today.",
    responsibilities: [
      "Perform raster image editing, layer masking, frequency separation, retouching, and compositing in Photoshop on Windows.",
      "Capture high-resolution screenshots (>2.5 megapixels, QHD/4K or dual monitor) during workflow execution.",
      "Detail layer structures, adjustment layers, blend modes, and smart object operations.",
      "Validate multimodal desktop model interpretations of graphic software."
    ],
    qualifications: [
      "Professional experience in Adobe Photoshop for retouching, photo manipulation, or graphic layout.",
      "Own a Windows PC with Photoshop installed and display meeting the 2.5MP+ resolution requirement.",
      "Deep understanding of non-destructive editing, clipping masks, color grading, and selection tools.",
      "Excellent written communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $30 to $40 per hour.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs to benchmark and advance AI multimodal reasoning across desktop applications."
  },
  {
    id: 89,
    title: "Senior Character Animator",
    domain: "Arts & Design",
    rate: "$60 - $90 / hour",
    rateNum: 90,
    posted: "Posted 1 month ago",
    postedOrder: 89,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/qyWlo",
    location: "California or New York (United States)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Help an AI lab build a performance transfer model by defining quality standards, reviewing shot-by-shot body mechanics, lip sync, and acting nuances.",
    overview: "A leading AI lab is building a performance transfer model that takes an actor's original performance and carries it faithfully into a new output, keeping timing, emotion, and subtle physical nuances. We're looking for senior character animators with feature film, VFX, or AAA game backgrounds to define benchmarks and critique where models succeed or fail.",
    responsibilities: [
      "Define clear quality standards for body mechanics, facial nuance, timing, and emotional intent in performance transfer models.",
      "Review generated performances shot by shot the way you would in dailies, writing precise actionable notes.",
      "Build challenging benchmarks with reference performances testing micro-expressions and complex physical acting.",
      "Shape reviewer profiles, evaluation rubrics, and calibration across human evaluation pools."
    ],
    qualifications: [
      "10+ years as a hands-on character animator (Senior, Lead, or Principal) on feature films, VFX, or AAA game cinematics.",
      "Animator credits at recognized studios (Sony Imageworks, ILM, Pixar, Disney, DreamWorks, Framestore, MPC, DNEG, Weta FX).",
      "Sharp eye for micro-expressions, lip sync, physical weight, timing, and authentic acting choices.",
      "Experience with generative video tools (Sora, Veo, Midjourney, Runway, Kling) is a strong plus.",
      "Able to attend in-person sessions once or twice a month in Los Angeles (Playa Vista) or New York, NY."
    ],
    terms: [
      "Part-time W-2 employment position with Cincinnatus LLC placed at a leading AI lab.",
      "Hourly rate: $60 to $90 per hour.",
      "Location requirement: United States (California or New York preferred for periodic in-person sessions).",
      "Standard enterprise payroll, benefits, and compliance provided by Cincinnatus LLC."
    ],
    aboutCompany: "Cincinnatus LLC partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and extended workforce initiatives."
  },
  {
    id: 90,
    title: "Music Production Expert - Hindi",
    domain: "Arts & Design",
    rate: "$14 - $42 / hour",
    rateNum: 42,
    posted: "Posted 1 month ago",
    postedOrder: 90,
    bonus: "20% Referral",
    opportunityBadge: false,
    hired: "3 hired this month",
    oneClick: false,
    applyUrl: "https://t.mercor.com/q0dzO",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Evaluate generative music AI models across musicality, creativity, prompt adherence, vocal quality, and mix in Hindi and English.",
    overview: "We are hiring experienced music producers and audio engineers to evaluate generative music AI models in partnership with a leading AI lab. You will assess AI-generated music across a wide range of contemporary Hindi genres, rating it against rigorous quality standards in Hindi and English.",
    responsibilities: [
      "Compare AI-generated songs head-to-head on musicality, creativity, prompt adherence, vocal quality, and production/mix quality.",
      "Label songs by genre, structure, arrangement, instrumentation, vocals, and musical characteristics.",
      "Review AI-generated Hindi lyrics and vocals against reference material for quality, dialect, and cultural accuracy.",
      "Provide detailed feedback on mix balance, frequency masking, and sonic artifacts."
    ],
    qualifications: [
      "Native or near-native proficiency in Hindi, with ability to follow detailed written instructions in English.",
      "2+ years of professional experience as a music producer, mixing engineer, or audio engineer.",
      "Headphones or studio monitors suitable for critical listening.",
      "Broad familiarity with contemporary Hindi musical genres, Bollywood, Indian indie, and regional styles."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $14 to $42 per hour (flexible commitment around 20 hours/week, no cap).",
      "Fully remote role that can be completed on your own schedule.",
      "Project duration up to 6 months with immediate start.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI research labs to evaluate frontier audio and music generation models using expert producers."
  },
  {
    id: 91,
    title: "VFX & Compositing Supervisor",
    domain: "Arts & Design",
    rate: "$70 - $110 / hour",
    rateNum: 110,
    posted: "Posted 1 month ago",
    postedOrder: 91,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/wHeqP",
    location: "United States",
    jobType: "Full-time position",
    postedBy: "Opportunity Network",
    summary: "Full-time role defining quality standards and frame-by-frame evaluations of feature-quality VFX, simulation, and compositing for generative video models.",
    overview: "A leading AI lab is building generative video models aiming for feature-quality visual effects and preproduction: micro detail, physically plausible simulation, clean multi-layer integration, previs, and concept art. We're looking for experienced VFX and compositing supervisors to help define quality standards and critique model performance (approx. 40 hours/week).",
    responsibilities: [
      "Set the quality bar and artifact taxonomy for micro detail, multi-layer integration, physics simulation, previs, and concept art.",
      "Identify, generate, and curate benchmark datasets representing hard VFX challenges (smoke, water, cloth, destruction, seams).",
      "Review generated footage frame by frame, providing precise notes on temporal instability, compositing seams, spill, and physics.",
      "Review captioning guidelines and calibrate human annotator pools for VFX accuracy."
    ],
    qualifications: [
      "7+ years of professional experience in feature VFX, animation, or virtual production with credits on 2+ professional films.",
      "Background as VFX Supervisor, Compositing Supervisor (Nuke/Flame), FX Technical Director (Houdini), or Senior Concept Artist.",
      "Meticulous eye for temporal flickering, edge artifacts, lighting integration, and physical plausibility.",
      "Hands-on use of generative tools to create concept art, previs, and test samples.",
      "Based in the United States and able to work full-time (~40 hours/week).",
      "Access to a 4K display for pixel-level inspection is preferred."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC placed at a leading AI lab.",
      "Compensation: $70 to $110 per hour (~40 hours/week).",
      "Location requirement: United States.",
      "Full employer-provided W-2 payroll, benefits, and compliance."
    ],
    aboutCompany: "Cincinnatus LLC partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and extended workforce initiatives."
  },
  {
    id: 92,
    title: "Performance & Directing Supervisor",
    domain: "Arts & Design",
    rate: "$70 - $110 / hour",
    rateNum: 110,
    posted: "Posted 1 month ago",
    postedOrder: 92,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/mriHl",
    location: "United States",
    jobType: "Full-time position",
    postedBy: "Opportunity Network",
    summary: "Full-time role establishing performance benchmarks, staging rules, eyelines, and continuity evaluations for generative AI video models.",
    overview: "A leading AI lab is building generative video models that aim to capture human performance and staging faithfully: acting realism, blocking, screen direction, eyelines, continuity, and emotional nuance. We're looking for experienced directors, 1st ADs, script supervisors, and performance specialists for a full-time role (~40 hours/week).",
    responsibilities: [
      "Define clear standards for acting realism, blocking, 180-degree rule, screen direction, eyelines, and shot continuity.",
      "Build a taxonomy of failure modes for AI-generated dramatic performances.",
      "Curate benchmark scenes testing subtle dramatic performances and multi-character staging.",
      "Review generated scenes the way you would in dailies, providing precise actionable notes on timing and performance beats."
    ],
    qualifications: [
      "7+ years of professional experience in film, television, theater, or animation with credits on 2+ professional films.",
      "Background as Film/TV Director, 1st AD, Animation Director, Script Supervisor, or Acting Coach.",
      "Meticulous eye for micro-expressions, emotional beats, continuity, and camera blocking.",
      "Hands-on use of generative video tools (Runway, Midjourney, Sora, Kling) to test prompts.",
      "Based in the United States and available for full-time (~40 hours/week) during weekdays."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC placed at a leading AI lab.",
      "Compensation: $70 to $110 per hour (~40 hours/week).",
      "Location requirement: United States.",
      "Full employer-provided W-2 payroll, benefits, and compliance."
    ],
    aboutCompany: "Cincinnatus LLC partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and extended workforce initiatives."
  },
  {
    id: 93,
    title: "Cinematographer",
    domain: "Arts & Design",
    rate: "$70 - $110 / hour",
    rateNum: 110,
    posted: "Posted 1 month ago",
    postedOrder: 93,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/kwO33",
    location: "United States",
    jobType: "Full-time position",
    postedBy: "Opportunity Network",
    summary: "Full-time role evaluating generative video models on cinematic fidelity: lens optics, sensor behavior, motivated lighting, exposure, and color spaces.",
    overview: "A leading AI lab is building generative video models that aim to capture true cinematic fidelity: lens choices, sensor behavior, camera motion, motivated lighting, exposure, and color. We're looking for experienced cinematographers and camera/lighting specialists to evaluate and benchmark model outputs full-time (~40 hours/week).",
    responsibilities: [
      "Set the quality bar for optics, focal length behavior, sensor noise, camera motion, and motivated lighting.",
      "Curate benchmark camera setups representing challenging optical scenarios (anamorphic flare, shallow DOF, low light, dynamic range).",
      "Review generated footage shot by shot and write precise notes on lensing, camera drift, lighting falloff, and color space inconsistencies.",
      "Review captioning guidelines so optical and lighting details are described with professional terminology."
    ],
    qualifications: [
      "7+ years of professional experience in film, television, or virtual production with credits on 2+ professional films.",
      "Background as Director of Photography (DP/DoP), Gaffer, Camera Operator, 1st AC, or DIT.",
      "Meticulous eye for lens optics, sensor characteristics, lighting motivation, exposure, and color fidelity.",
      "Hands-on use of generative video tools (Runway, Midjourney, Sora, Kling).",
      "Based in the United States and available for full-time work (~40 hours/week).",
      "Calibrated 4K display for pixel-level review is preferred."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC placed at a leading AI lab.",
      "Compensation: $70 to $110 per hour (~40 hours/week).",
      "Location requirement: United States.",
      "Full employer-provided W-2 payroll, benefits, and compliance."
    ],
    aboutCompany: "Cincinnatus LLC partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and extended workforce initiatives."
  },
  {
    id: 94,
    title: "3D Artists & Video Editors (Must own MacBook)",
    domain: "Arts & Design",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 1 month ago",
    postedOrder: 94,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/QDSFg",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Complete and narrate real 3D and video production workflows on your own Apple Silicon Mac to benchmark cutting-edge AI models.",
    overview: "We are looking for 3D artists and video editors with 2-3 years of professional experience (or currently enrolled postgrad students in animation/digital media) to work through real production workflows on their Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real 3D modeling and video editing tasks on your Mac (Blender, Maya, Premiere Pro, DaVinci Resolve, Final Cut).",
      "Record creative decision-making processes and tool interactions clearly.",
      "Produce high-quality procedural training data for AI models.",
      "Commit approximately 10-20 hours per week remotely on your own schedule."
    ],
    qualifications: [
      "Required: Must own a MacBook or Mac with Apple M-series chip or Intel processor running macOS 15+.",
      "Proficiency in tools such as Blender, Maya, Cinema 4D, Final Cut Pro, Premiere Pro, DaVinci Resolve, or After Effects.",
      "2-3 years of relevant experience or currently pursuing/recently completed Masters studies.",
      "Ability to clearly explain creative and technical decisions in English while working."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $50 to $60 per hour (10-20 hours/week).",
      "Must own a qualified Mac running macOS 15 or higher.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Connecting elite creative professionals with leading AI research labs to generate groundbreaking procedural training datasets."
  },
  {
    id: 95,
    title: "UI/UX Designers (Must own MacBook)",
    domain: "Arts & Design",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 1 month ago",
    postedOrder: 95,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/G3dza",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Complete and narrate real UI/UX product design workflows in Figma or Sketch on your Apple Silicon Mac to benchmark AI models.",
    overview: "We are looking for UI/UX designers with 2-3 years of professional experience (or currently enrolled postgrad HCI/design students) to work through real product design workflows on their Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real UI/UX design tasks on your Mac (Figma, Sketch, Framer, Adobe XD).",
      "Design wireframes, component systems, prototypes, and user flows while explaining rationale.",
      "Provide clear explanations of usability principles, interaction design, and visual hierarchy.",
      "Commit approximately 10-20 hours per week remotely on your own schedule."
    ],
    qualifications: [
      "Required: Must own a MacBook or Mac with Apple M-series chip or Intel processor running macOS 15+.",
      "Proficiency in Figma, Sketch, Framer, or Adobe XD.",
      "Experience designing mobile/web interfaces, design systems, and interaction patterns.",
      "2-3 years of relevant experience or currently enrolled/completed Masters in HCI/Design.",
      "Excellent verbal and written communication in English."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $50 to $60 per hour (10-20 hours/week).",
      "Must own a qualified Mac running macOS 15 or higher.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Connecting elite creative professionals with leading AI research labs to generate groundbreaking procedural training datasets."
  },
  {
    id: 96,
    title: "Graphic Designers (Must own MacBook)",
    domain: "Arts & Design",
    rate: "$50 - $60 / hour",
    rateNum: 60,
    posted: "Posted 1 month ago",
    postedOrder: 96,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/xT5EN",
    location: "Remote (Worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Complete and narrate real graphic design, branding, and typography tasks on your Apple Silicon Mac to benchmark AI models.",
    overview: "We are looking for graphic designers with 2-3 years of professional or freelance experience (or currently enrolled postgrad design students) to work through real design workflows on their Mac to help benchmark and improve cutting-edge AI models.",
    responsibilities: [
      "Complete and narrate real graphic design tasks on your Mac using Photoshop, Illustrator, InDesign, or Affinity.",
      "Work through layout, branding, typography, color theory, and visual communication projects.",
      "Articulate creative and technical choices clearly during step-by-step recording.",
      "Commit approximately 10-20 hours per week remotely on your own schedule."
    ],
    qualifications: [
      "Required: Must own a MacBook or Mac with Apple M-series chip or Intel processor running macOS 15+.",
      "Proficiency in tools such as Adobe Photoshop, Illustrator, InDesign, Affinity, or Canva.",
      "Experience in branding, print/digital layout, typography, and visual assets.",
      "2-3 years of relevant experience or postgrad design studies.",
      "Excellent written and verbal communication skills."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $50 to $60 per hour (10-20 hours/week).",
      "Must own a qualified Mac running macOS 15 or higher.",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Connecting elite creative professionals with leading AI research labs to generate groundbreaking procedural training datasets."
  },
  {
    id: 97,
    title: "Arts & Design Expert",
    domain: "Arts & Design",
    rate: "$60 - $80 / hour",
    rateNum: 80,
    posted: "Posted 3 months ago",
    postedOrder: 97,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/5grZe",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for artists and designers to write briefs, grade craft standards, and evaluate AI-generated design and imagery.",
    overview: "The research teams behind the best-known AI models come to our network for design and creative judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for designers and creative professionals across graphic/UI design, visual arts, film, fashion, and media.",
    responsibilities: [
      "Write design briefs based on real work: target audience, constraints, brand guidelines, and reference answers.",
      "Grade model-generated design, writing, and imagery on craft: visual hierarchy, typography, color choice, and balance.",
      "Flag where model outputs are technically competent yet unviable in production due to brand, accessibility, or medium limitations.",
      "Provide domain-specific creative feedback to evaluate frontier multimodal models."
    ],
    qualifications: [
      "Professional experience in design, visual arts, creative direction, or media production.",
      "Clear written communication with ability to explain why aesthetic and design choices work or fail.",
      "Strong portfolio and comfort evaluating ambiguous creative tasks."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $80 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human creative expertise."
  },
  {
    id: 98,
    title: "Graphic & UX/UI Designer Talent Network",
    domain: "Arts & Design",
    rate: "$60 - $100 / hour",
    rateNum: 100,
    posted: "Posted 3 months ago",
    postedOrder: 98,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/xzO7P",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Join our Designer Expert Network to train and evaluate frontier AI models in UX research, interface design (Figma/Adobe XD), and prototyping.",
    overview: "Join our Graphic & UX/UI Designer Expert Network to connect with leading AI labs and companies seeking your expertise. This is an open application for future contract opportunities that match your background and interests. Once you complete your profile and pass our AI interview, you'll be eligible for relevant projects as they become available on a rolling basis.",
    responsibilities: [
      "Train and evaluate AI models in Graphic & UX/UI Design.",
      "Create tasks and deliverables based on real-world product design, wireframing, and user research scenarios.",
      "Provide domain-specific feedback to advance frontier AI research in UI/UX systems.",
      "Collaborate on project commitments typically ranging from 15-30 hours per week."
    ],
    qualifications: [
      "Professional experience in user experience research, interface design (Figma / Adobe XD), visual design & prototyping.",
      "Deep understanding of design systems, accessibility standards, and responsive web/mobile patterns.",
      "Strong communication skills with ability to articulate design principles clearly.",
      "Ability to work independently in a remote environment."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $60 to $100 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise. You will work on projects that focus on training and enhancing AI systems in design and UI/UX."
  },
  {
    id: 99,
    title: "Humanities Expert",
    domain: "Humanities",
    rate: "$45 - $60 / hour",
    rateNum: 60,
    posted: "Posted 3 months ago",
    postedOrder: 99,
    bonus: "20% Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/lrenC",
    location: "Remote (Worldwide)",
    jobType: "Talent network",
    postedBy: "Opportunity Network",
    summary: "Standing talent network for humanities scholars across history, literature, philosophy, and cultural studies to evaluate frontier AI textual reasoning.",
    overview: "The research teams behind the best-known AI models come to our network for humanities judgment they can't generate on their own. Your standards and expertise become the rubric that frontier AI is graded against. This is a standing listing for humanities scholars who want AI training and evaluation work across history, classics, philosophy, literature, and religious studies.",
    responsibilities: [
      "Write questions from your own field with primary sources, historical context, and interpretive problems, plus reference answers.",
      "Grade model-written interpretations and arguments: verify if sources support claims and if historical/cultural context is accurate.",
      "Flag where a model produces fluent, confident prose that misreads texts, flattens live scholarly debates, or invents citations.",
      "Provide domain-specific critique on historical nuance, philosophical ethics, and literary analysis."
    ],
    qualifications: [
      "Graduate degree (MA, MS, PhD) in a humanities field (History, Philosophy, Classics, Literature, Religious Studies), or equivalent scholarly experience.",
      "Clear written communication with ability to explain complex interpretive reasoning.",
      "Ability to distinguish a strong reading from a merely plausible one, and identify exactly where weaker readings fail.",
      "Comfort with ambiguous tasks and willingness to flag unclear instructions."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "This is a standing talent network (hourly rates typically $45 to $60 / hour depending on project scope).",
      "Fully remote role that can be completed on your own schedule.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI labs and enterprises to train frontier models using human expertise in the humanities and liberal arts."
  },
  {
    id: 100,
    title: "Video Caption Auditor Expert",
    domain: "Language and Audio",
    rate: "$20 - $30 / hour",
    rateNum: 30,
    posted: "Posted 5 hours ago",
    postedOrder: 1,
    bonus: "$120",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/L5Lyz",
    location: "Remote (worldwide)",
    jobType: "Hourly contract",
    postedBy: "Opportunity Network",
    summary: "Review captions on egocentric (first-person) video footage recorded from a head-mounted camera showing someone's hands performing everyday tasks like cooking, cleaning or crafting.",
    overview: "We're looking for detail-oriented annotators to join a short-term, fast-moving project reviewing captions on egocentric (first-person) video — footage recorded from a head-mounted camera showing someone's hands performing everyday tasks like cooking, cleaning or crafting. You'll audit whether a written caption accurately describes what happens in a short video segment, and give each caption a clear verdict. The project is already underway, so we're prioritising people who can start quickly.\n\nPlay a direct role in improving how advanced AI models understand and interpret real-world human actions through first-person video.",
    responsibilities: [
      "For each video segment and its caption, decide: Approve, Reject, or Exclude.",
      "Approve: Confirm the caption accurately describes the action.",
      "Reject: Identify caption errors rated Major or Minor with specific reasons (e.g. wrong main verb like 'wring' when rubbing, actions added/missing/out of order, wrong object/tool, or swapped left vs. right hand).",
      "Exclude: Flag unusable footage (corrupted, badly mounted camera, broken segment boundaries).",
      "Follow a detailed written guideline with clear rules and examples, judging only what is visible in each segment.",
      "Benefit from clear guidelines, practical examples, and well-defined evaluation criteria to deliver high-quality evaluation data."
    ],
    qualifications: [
      "Excellent attention to detail and patience for careful, repetitive visual review.",
      "Reliable left/right reasoning from the camera wearer's point of view.",
      "Strong English reading comprehension and a precise sense of word meaning (e.g. the difference between 'wipe', 'rub' and 'scrub').",
      "Ability to learn a detailed guideline quickly and apply it consistently.",
      "Good judgment on ambiguous cases.",
      "Nice to have: prior experience in video annotation, data labelling, content moderation, QA, or AI training/evaluation work."
    ],
    terms: [
      "You will be engaged as an independent contractor.",
      "Hourly contract rate: $20 to $30 per hour.",
      "This is a fully remote role that can be completed on your own schedule.",
      "Projects can be extended, shortened, or concluded early depending on needs and performance.",
      "Your work will not involve access to confidential or proprietary information from any employer, client, or institution.",
      "Payments are weekly on Stripe or Wise based on services rendered.",
      "Please note: We are unable to support H1-B or STEM OPT candidates at this time."
    ],
    aboutCompany: "Partnering with leading AI research labs and teams to build and benchmark cutting-edge multimodal vision and action-understanding models. We consider all qualified applicants without regard to legally protected characteristics and provide reasonable accommodations upon request."
  },
  {
    id: 101,
    title: "Customer Support & Success Domain Expert",
    domain: "Business operations",
    rate: "$55 - $80 / hour",
    rateNum: 80,
    posted: "Posted 1 month ago",
    postedOrder: 101,
    bonus: "Up to $1,280 Referral",
    opportunityBadge: true,
    oneClick: true,
    applyUrl: "https://t.mercor.com/XiCcr",
    location: "United States",
    jobType: "Full-time position",
    postedBy: "Cincinnatus LLC",
    summary: "Full-time role guiding AI research teams to close knowledge gaps in customer support, customer success, technical escalation, and onboarding workflows.",
    overview: "Join a leading AI lab's cutting-edge GenAI team and help build foundational AI models from the ground up. We're seeking talented Customer Support, Customer Success and Technical Onboarding subject-matter experts (SMEs) to bring real operating experience and elevate the quality of AI training data (full-time commitment of 40 hours per week).",
    responsibilities: [
      "Guide research and engineering teams to close knowledge gaps and improve AI model performance in customer support, success, and onboarding.",
      "Audit multi-step workflows: ticket triage, technical escalation, churn/renewals, usage reporting, onboarding, and failed payment billing.",
      "Design realistic support and success tasks reflecting real ticket data and CRM, helpdesk, and billing constraints.",
      "Evaluate model outputs and customer communications against rubrics and provide clear, written feedback.",
      "Validate and refine evaluation rubrics across the customer support and success workflow taxonomy."
    ],
    qualifications: [
      "Substantial professional experience in customer support, customer success, or technical onboarding for business customers.",
      "Hands-on experience in ticket triage/escalation, churn/renewal management, or onboarding/implementation.",
      "Daily working experience with tools such as Intercom, HubSpot, Stripe, Metabase, Zendesk, Salesforce, or Looker.",
      "Ability to critically judge customer communications for authenticity and policy compliance.",
      "Based in the United States and able to work full-time (40 hours/week) during weekdays."
    ],
    terms: [
      "Full-time W-2 employment position with Cincinnatus LLC placed at a leading AI lab.",
      "Compensation: $55 to $80 per hour (40 hours per week).",
      "Location requirement: United States.",
      "Full employer-provided W-2 payroll, benefits, and compliance."
    ],
    aboutCompany: "Cincinnatus LLC is an enterprise staffing company that partners with leading technology companies and AI labs to source and employ highly skilled professionals for contingent and extended workforce initiatives."
  }
];

/**
 * ============================================================================
 * 🧭 STATE MANAGEMENT
 * ============================================================================
 */
const state = {
  searchQuery: "",
  sortBy: "newest", // "newest", "pay-high", "pay-low", "title"
  selectedDomain: "all",
  activeCategoryTab: "all", // "all", "one-time"
  currentPage: 1,
  itemsPerPage: 15, // 3 columns x 5 rows when detail pane is active
  selectedJobId: null,
  isDetailPaneOpen: false,
  savedJobIds: new Set()
};

// DOM Elements
const splitLayoutContainer = document.getElementById("splitLayoutContainer");
const splitLeftPane = document.getElementById("splitLeftPane");
const splitRightPane = document.getElementById("splitRightPane");
const detailPaneBody = document.getElementById("detailPaneBody");
const detailContinueBtn = document.getElementById("detailContinueBtn");
const detailSaveBtn = document.getElementById("detailSaveBtn");
const closeDetailPaneBtn = document.getElementById("closeDetailPaneBtn");
const expandPaneBtn = document.getElementById("expandPaneBtn");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const cardsGridEl = document.getElementById("cardsGrid");
const noResultsEl = document.getElementById("noResultsState");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const sortToggleBtn = document.getElementById("sortToggleBtn");
const sortMenu = document.getElementById("sortMenu");
const currentSortLabel = document.getElementById("currentSortLabel");
const pageNumbersEl = document.getElementById("pageNumbers");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");

// Domain Filter Elements (pill buttons row)
const domainPills = document.querySelectorAll(".domain-pill");
const clearDomainFilterBtn = null; // no longer used — pills handle their own active state

// Modal Elements
const jobDetailsModal = document.getElementById("jobDetailsModal");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");

/**
 * ============================================================================
 * ⚡ RENDERING ENGINE
 * ============================================================================
 */

function getFilteredAndSortedJobs() {
  return JOBS_DATA.filter(job => {
    // Search query filter
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = job.title ? job.title.toLowerCase().includes(q) : false;
      const matchDomain = job.domain ? job.domain.toLowerCase().includes(q) : false;
      const matchOverview = job.overview ? job.overview.toLowerCase().includes(q) : false;
      if (!matchTitle && !matchDomain && !matchOverview) return false;
    }

    // Domain filter
    if (state.selectedDomain !== "all") {
      if (!job.domain || job.domain.toLowerCase() !== state.selectedDomain.toLowerCase()) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    // Normalize compensation for comparison (annual $50k/yr -> ~$25/hr)
    const getNormalizedRate = (job) => {
      let r = job.rateNum || 0;
      if (r > 1000) r = Math.round(r / 2000);
      return r;
    };

    if (state.sortBy === "pay-high") {
      const diff = getNormalizedRate(b) - getNormalizedRate(a);
      return diff !== 0 ? diff : (b.id || 0) - (a.id || 0);
    }
    if (state.sortBy === "pay-low") {
      const diff = getNormalizedRate(a) - getNormalizedRate(b);
      return diff !== 0 ? diff : (b.id || 0) - (a.id || 0);
    }
    if (state.sortBy === "title") {
      return (a.title || "").localeCompare(b.title || "");
    }

    // "newest" - sort by recency score then newest id
    const getRecencyScore = (job) => {
      const p = (job.posted || "").toLowerCase();
      if (p.includes("hour")) return 1;
      if (p.includes("day")) {
        const d = parseInt(p.replace(/\D/g, ""), 10) || 1;
        return 10 + d;
      }
      if (p.includes("a month") || p.includes("1 month")) return 50;
      if (p.includes("2 month")) return 80;
      if (p.includes("3 month")) return 110;
      return 200;
    };

    const recencyA = getRecencyScore(a);
    const recencyB = getRecencyScore(b);
    if (recencyA !== recencyB) {
      return recencyA - recencyB;
    }
    return (b.id || 0) - (a.id || 0);
  });
}

// Generate Card HTML matching uploaded reference image
function createJobCardHTML(job) {
  const redirectUrl = getActiveReferralUrl(job.applyUrl);
  const isSelected = state.isDetailPaneOpen && state.selectedJobId === job.id;

  // Bottom left content: "+ New opportunity"
  const footerLeft = `
    <div class="badge-new-opp">
      <span class="plus-circle">+</span>
      <span>New opportunity</span>
    </div>
  `;

  // Bonus earnings on bottom right: "⚡ $1440"
  const footerRight = job.bonus
    ? `<span class="bonus-earnings"><span class="icon-flash">⚡</span> ${escapeHTML(job.bonus)}</span>`
    : "";

  // Top right corner indicator:
  // When active/selected: show "Apply ↗"
  // When not active: show "✓ 1-click apply"
  const topRightBadge = isSelected
    ? `<a href="${escapeHTML(redirectUrl)}" target="_blank" rel="noopener noreferrer" class="badge-apply direct-apply-btn" title="Apply directly">
         Apply
         <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
           <line x1="7" y1="17" x2="17" y2="7"></line>
           <polyline points="7 7 17 7 17 17"></polyline>
         </svg>
       </a>`
    : `<span class="badge-1click">
         <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
           <polyline points="20 6 9 17 4 12"></polyline>
         </svg>
         1-click apply
       </span>`;

  return `
    <div class="job-card ${isSelected ? 'active-selected' : ''}" data-job-id="${job.id}" data-url="${escapeHTML(redirectUrl)}" title="Click to view details">
      <div class="card-content">
        <div class="card-header-row">
          <h3 class="card-title">${escapeHTML(job.title)}</h3>
          ${topRightBadge}
        </div>
        <div class="card-rate">${escapeHTML(job.rate)}</div>
        <div class="card-posted">${escapeHTML(job.posted)}</div>
      </div>

      <div class="card-footer">
        ${footerLeft}
        <div class="card-footer-right">
          ${footerRight}
        </div>
      </div>
    </div>
  `;
}

// Render the grid with pagination and detail pane state
function render() {
  const filtered = getFilteredAndSortedJobs();
  const totalJobs = filtered.length;

  if (totalJobs === 0) {
    cardsGridEl.innerHTML = "";
    noResultsEl.style.display = "block";
    closeDetailPane();
  } else {
    noResultsEl.style.display = "none";

    const totalPages = Math.max(1, Math.ceil(totalJobs / state.itemsPerPage));
    if (state.currentPage > totalPages) {
      state.currentPage = totalPages;
    }

    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const pageJobs = filtered.slice(startIndex, startIndex + state.itemsPerPage);

    cardsGridEl.innerHTML = pageJobs.map(createJobCardHTML).join("");

    // If detail pane is open, ensure selected job is displayed
    if (state.isDetailPaneOpen && state.selectedJobId) {
      const selectedJob = JOBS_DATA.find(j => j.id === state.selectedJobId);
      if (selectedJob) {
        populateDetailPane(selectedJob);
      }
    }
  }

  // Attach card click handlers
  document.querySelectorAll(".job-card").forEach(card => {
    const directApplyBtn = card.querySelector(".direct-apply-btn");
    if (directApplyBtn) {
      directApplyBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Direct anchor opens in new tab
      });
    }

    card.addEventListener("click", () => {
      const jobId = parseInt(card.dataset.jobId, 10);
      const job = JOBS_DATA.find(j => j.id === jobId);
      if (job) {
        openJobDetailPane(job);
      }
    });
  });

  renderPagination(totalJobs);
  updateDomainFilterUI();
}

/**
 * ============================================================================
 * 📱 MASTER-DETAIL SPLIT DRAWER IMPLEMENTATION
 * ============================================================================
 */

function openJobDetailPane(job) {
  state.selectedJobId = job.id;
  state.isDetailPaneOpen = true;

  splitLayoutContainer.classList.add("pane-open");
  splitRightPane.style.display = "flex";

  // Re-highlight active card in grid
  document.querySelectorAll(".job-card").forEach(card => {
    const id = parseInt(card.dataset.jobId, 10);
    if (id === job.id) {
      card.classList.add("active-selected");
      // Replace top-right badge with Apply link if needed
      const headerRow = card.querySelector(".card-header-row");
      const existingBadge = headerRow.querySelector(".badge-1click");
      if (existingBadge) {
        existingBadge.outerHTML = `
          <a href="${escapeHTML(getActiveReferralUrl(job.applyUrl))}" target="_blank" rel="noopener noreferrer" class="badge-apply direct-apply-btn" title="Apply directly">
            Apply
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        `;
        const newApply = headerRow.querySelector(".direct-apply-btn");
        if (newApply) {
          newApply.addEventListener("click", (e) => e.stopPropagation());
        }
      }
    } else {
      card.classList.remove("active-selected");
      const headerRow = card.querySelector(".card-header-row");
      const existingApply = headerRow.querySelector(".badge-apply");
      if (existingApply) {
        existingApply.outerHTML = `
          <span class="badge-1click">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            1-click apply
          </span>
        `;
      }
    }
  });

  populateDetailPane(job);

  // Scroll smoothly to top of pane on mobile
  if (window.innerWidth <= 1024) {
    splitRightPane.scrollIntoView({ behavior: "smooth" });
  }
}

function closeDetailPane() {
  state.isDetailPaneOpen = false;
  state.selectedJobId = null;
  splitLayoutContainer.classList.remove("pane-open");
  splitRightPane.style.display = "none";

  document.querySelectorAll(".job-card").forEach(card => {
    card.classList.remove("active-selected");
    const headerRow = card.querySelector(".card-header-row");
    const existingApply = headerRow.querySelector(".badge-apply");
    if (existingApply) {
      existingApply.outerHTML = `
        <span class="badge-1click">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          1-click apply
        </span>
      `;
    }
  });
}

function populateDetailPane(job) {
  const targetUrl = getActiveReferralUrl(job.applyUrl);

  // Parse pay rate parts
  let payDisplay = job.rate || "$60-$90 / hour";
  let payAmount = payDisplay;
  let payUnit = "per hour";
  if (payDisplay.includes("/")) {
    const parts = payDisplay.split("/");
    payAmount = parts[0].trim();
    payUnit = parts[1].trim();
  }

  // Location requirement tag
  const locationText = job.location || "United States";

  // Application Accordion Box (Matches 3 of 4 steps completed from reference screenshot)
  const applicationBoxHTML = `
    <div class="application-box">
      <div class="app-box-header">
        <span class="app-box-title">Application</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
      
      <div class="app-progress-summary">
        <span>3 of 4 steps completed</span>
        <span>75%</span>
      </div>
      <div class="app-progress-bar-bg">
        <div class="app-progress-bar-fill"></div>
      </div>

      <div class="app-steps-list">
        <!-- Step 1: Resume -->
        <div class="app-step-item">
          <div class="app-step-info">
            <span class="app-step-name">Resume</span>
            <span class="app-step-status completed">Uploaded on 11/08/26</span>
          </div>
          <div class="app-step-check done">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        <!-- Step 2: Availability Confirmation (Pending) -->
        <div class="app-step-item">
          <div class="app-step-info">
            <span class="app-step-name">Availability &amp; Commitment Confirmation: ${escapeHTML(job.title)}</span>
            <span class="app-step-status">Not done</span>
          </div>
          <div class="app-step-check pending"></div>
        </div>

        <!-- Step 3: Domain Expert Interview -->
        <div class="app-step-item">
          <div class="app-step-info">
            <span class="app-step-name">
              Domain Expert Interview
              <span class="badge-tag-core">Core</span>
            </span>
            <span class="app-step-status completed">Completed on 02/18/26</span>
          </div>
          <div class="app-step-check done">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>

        <!-- Step 4: Work Authorization -->
        <div class="app-step-item">
          <div class="app-step-info">
            <span class="app-step-name">Work Authorization</span>
            <span class="app-step-status completed">Completed on 11/10/26</span>
          </div>
          <div class="app-step-check done">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <div class="app-reuse-note">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0; margin-top:1px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>All application steps are reused whenever another role requires the same step, so you never have to upload your resume or take the same interview twice.</span>
      </div>
    </div>
  `;

  // Section: Overview
  let overviewHTML = "";
  if (job.overview) {
    overviewHTML = `
      <div class="detail-content-section">
        <h3>1. Overview</h3>
        <p>${escapeHTML(job.overview).replace(/\n\n/g, "</p><p>")}</p>
      </div>
    `;
  } else if (job.summary) {
    overviewHTML = `
      <div class="detail-content-section">
        <h3>1. Overview</h3>
        <p>${escapeHTML(job.summary)}</p>
      </div>
    `;
  }

  // Section: Key Responsibilities
  let respHTML = "";
  if (job.responsibilities && job.responsibilities.length) {
    respHTML = `
      <div class="detail-content-section">
        <h3>2. Key Responsibilities</h3>
        <ul>
          ${job.responsibilities.map(r => `<li>${escapeHTML(r)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Section: Core Qualifications
  let qualHTML = "";
  if (job.qualifications && job.qualifications.length) {
    qualHTML = `
      <div class="detail-content-section">
        <h3>3. Core Qualifications</h3>
        <ul>
          ${job.qualifications.map(q => `<li>${escapeHTML(q)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Section: Contract and Payment Terms
  let termsHTML = "";
  if (job.terms && job.terms.length) {
    termsHTML = `
      <div class="detail-content-section">
        <h3>Contract and Payment Terms</h3>
        <ul>
          ${job.terms.map(t => `<li>${escapeHTML(t)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Assemble Complete Detail Body
  detailPaneBody.innerHTML = `
    <!-- Top Hero Header -->
    <div class="role-hero-header">
      <h2 class="role-headline">${escapeHTML(job.title)}</h2>
      <div class="role-pay-block">
        <div class="role-pay-amount">${escapeHTML(payAmount)}</div>
        <div class="role-pay-unit">${escapeHTML(payUnit)}</div>
      </div>
    </div>

    <!-- Meta Badges Row -->
    <div class="role-badges-row">
      <span class="role-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        ${escapeHTML(job.jobType || "Full-time position")}
      </span>
      <span class="role-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
        ${escapeHTML(locationText)}
      </span>
      <span class="role-badge opp-badge">
        + New opportunity
      </span>
      <span class="role-badge early-applicant">
        Early applicant
      </span>
    </div>

    <!-- Posted By Card (Zero mention of Mercor) -->
    <div class="posted-org-card">
      <div class="org-avatar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
      </div>
      <div class="org-info">
        <span class="org-name">Posted by Opportunity Network</span>
        <span class="org-domain">verified partner</span>
      </div>
    </div>

    <!-- Interactive Application Steps Accordion -->
    ${applicationBoxHTML}

    <!-- Location Requirements Block -->
    <div class="location-requirements-block">
      <div class="section-label">Location requirements</div>
      <span class="location-pill">${escapeHTML(locationText)}</span>
    </div>

    <!-- Job Intro / Context Blurb -->
    ${job.summary ? `<p style="font-size:0.83rem; color:#475569; margin-bottom:1rem; line-height:1.5;">${escapeHTML(job.summary)}</p>` : ""}

    <!-- Sections 1, 2, 3 & Terms -->
    ${overviewHTML}
    ${respHTML}
    ${qualHTML}
    ${termsHTML}
  `;

  // Wire Sticky Bottom Actions
  detailContinueBtn.href = targetUrl;
  detailContinueBtn.setAttribute("target", "_blank");
  detailContinueBtn.setAttribute("rel", "noopener noreferrer");

  const isSaved = state.savedJobIds.has(job.id);
  detailSaveBtn.classList.toggle("saved", isSaved);
  const saveLabel = detailSaveBtn.querySelector("span");
  if (saveLabel) {
    saveLabel.textContent = isSaved ? "Saved" : "Save";
  }
}

// Toggle Save role bookmark
detailSaveBtn.addEventListener("click", () => {
  if (!state.selectedJobId) return;
  if (state.savedJobIds.has(state.selectedJobId)) {
    state.savedJobIds.delete(state.selectedJobId);
  } else {
    state.savedJobIds.add(state.selectedJobId);
  }
  const isSaved = state.savedJobIds.has(state.selectedJobId);
  detailSaveBtn.classList.toggle("saved", isSaved);
  const saveLabel = detailSaveBtn.querySelector("span");
  if (saveLabel) {
    saveLabel.textContent = isSaved ? "Saved" : "Save";
  }
});

// Close button in right detail pane
closeDetailPaneBtn.addEventListener("click", closeDetailPane);

// Expand pane toggle button (full width / split width)
expandPaneBtn.addEventListener("click", () => {
  if (splitRightPane.style.maxWidth === "90%") {
    splitRightPane.style.maxWidth = "48%";
  } else {
    splitRightPane.style.maxWidth = "90%";
  }
});

// Filter button in toolbar (toggles domain dropdown)
// (domain filter is now inline pills — no toggle button needed)

// Render Pagination
function renderPagination(totalJobs) {
  if (!totalJobs || totalJobs === 0) {
    pageNumbersEl.innerHTML = `<span class="page-btn active">1</span>`;
    prevPageBtn.disabled = true;
    nextPageBtn.disabled = true;
    return;
  }

  const totalPages = Math.max(1, Math.ceil(totalJobs / state.itemsPerPage));
  let pagesHTML = "";

  // Dynamic pagination window
  const current = state.currentPage;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  for (const p of rangeWithDots) {
    if (p === "...") {
      pagesHTML += `<span class="page-ellipsis">&hellip;</span>`;
    } else {
      pagesHTML += `
        <button class="page-btn ${p === state.currentPage ? "active" : ""}" data-page="${p}">
          ${p}
        </button>
      `;
    }
  }

  pageNumbersEl.innerHTML = pagesHTML;

  pageNumbersEl.querySelectorAll(".page-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentPage = parseInt(btn.dataset.page, 10);
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  prevPageBtn.disabled = state.currentPage <= 1;
  nextPageBtn.disabled = state.currentPage >= totalPages;
}

// Update Domain trigger pill and clear button UI
// Update active state on domain pill buttons
function updateDomainFilterUI() {
  domainPills.forEach(pill => {
    const pillDomain = pill.dataset.domain;
    if (
      (pillDomain === "all" && state.selectedDomain === "all") ||
      (pillDomain && pillDomain.toLowerCase() === state.selectedDomain.toLowerCase())
    ) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * ============================================================================
 * 🔄 EVENT LISTENERS & DOMAIN FILTER
 * ============================================================================
 */

// Search input
searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  state.currentPage = 1;
  clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
  render();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.searchQuery = "";
  state.currentPage = 1;
  clearSearchBtn.style.display = "none";
  searchInput.focus();
  render();
});

// Sort Menu Dropdown Toggle
sortToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sortMenu.classList.toggle("show");
  domainMenu.classList.remove("show");
  domainTriggerBtn.classList.remove("open");
});

sortMenu.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    sortMenu.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("selected"));
    item.classList.add("selected");
    state.sortBy = item.dataset.sort;
    state.currentPage = 1;
    currentSortLabel.textContent = item.textContent;
    sortMenu.classList.remove("show");
    render();
  });
});

// Domain Trigger Pill Dropdown Toggle
domainTriggerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = domainMenu.classList.toggle("show");
  domainTriggerBtn.classList.toggle("open", isOpen);
  sortMenu.classList.remove("show");
});

// Click on Domain Item in Menu
// Domain pill button click handlers
domainPills.forEach(pill => {
  pill.addEventListener("click", (e) => {
    e.stopPropagation();
    const domain = pill.dataset.domain || "all";
    state.selectedDomain = domain;
    state.currentPage = 1;
    render();
  });
});

// Clear Domain Filter Pill [ × Clear ]
// (clear domain filter handled by clicking "All" pill)

emptyResetBtn.addEventListener("click", () => {
  clearAllFilters();
});

function clearAllFilters() {
  state.selectedDomain = "all";
  state.searchQuery = "";
  state.currentPage = 1;
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  render();
}

// Close sort dropdown on outside click
document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortToggleBtn.contains(e.target)) {
    sortMenu.classList.remove("show");
  }
});

// Pagination Next / Previous buttons
prevPageBtn.addEventListener("click", () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

nextPageBtn.addEventListener("click", () => {
  state.currentPage++;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * ============================================================================
 * 🚀 INITIALIZATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  render();
});
