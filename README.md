# Awesome Microsoft Agent Framework [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> Open-source development kit for building AI agents and multi-agent workflows for .NET and Python.

## Contents

- [Getting Started](#getting-started)
- [Official Documentation](#official-documentation)
- [Video Resources](#video-resources)
- [Blog Posts & Articles](#blog-posts--articles)
- [Tutorials](#tutorials)
- [Examples & Samples](#examples--samples)
- [Tools & Frameworks](#tools--frameworks)
- [Related Technologies](#related-technologies)
- [Community](#community)

## Getting Started

### Installation

Python:

```bash
pip install agent-framework --pre
```

C#/.NET:

```bash
dotnet add package Microsoft.Agents.AI
```

### Quick Start Resources

- [Microsoft Agent Framework GitHub Repository](https://github.com/microsoft/agent-framework) - Official source code and examples.
- [Quick Start Guide](https://learn.microsoft.com/en-us/agent-framework/tutorials/quick-start) - Get started with a simple agent.
- [Hello World Agents Sample](https://aka.ms/dotnet/agent-framework/helloworld) - Try it out in GitHub Codespaces.

## Official Documentation

- [Official Documentation Hub](https://learn.microsoft.com/en-us/agent-framework/) - Complete documentation portal.
- [Microsoft Agent Framework Overview](https://aka.ms/AgentFramework/docs) - High-level overview and concepts.
- [Tutorials](https://learn.microsoft.com/agent-framework/tutorials/overview) - Step-by-step tutorials.
- [User Guide](https://learn.microsoft.com/en-us/agent-framework/user-guide/overview) - In-depth user guide for building agents and workflows.
- [Migration from Semantic Kernel](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-semantic-kernel) - Guide for migrating from Semantic Kernel.
- [Migration from AutoGen](https://learn.microsoft.com/en-us/agent-framework/migration-guide/from-autogen) - Guide for migrating from AutoGen.

## Video Resources

- [Microsoft Agent Framework Introduction (30 min)](https://aka.ms/AgentFramework/OpenAtMicrosoft) - Full framework introduction.
- [AI Show Episodes](https://aka.ms/AgentFramework/AIShow) - Microsoft AI Show coverage.
- [Deep Dive into Microsoft Agent Framework for AutoGen Users](https://www.youtube.com/watch?v=JlzteydCK_Q) - Comprehensive walkthrough for developers migrating from AutoGen.
- [DevUI in Action (1 min)](https://www.youtube.com/watch?v=mOAaGY4WPvc) - Interactive developer UI demo.
- [Agent Framework Lab - The AI Show episode](https://www.youtube.com/watch?v=u1YOPRdGqxQ) - The experimental modules of Microsoft Agent Framework.
- [Microsoft Agent Framework Playlist](https://www.youtube.com/playlist?list=PLhGl0l5La4sYXjYOBv7h9l7x6qNuW34Cx) - YouTube playlist collection of videos and tutorials.
- [End-to-End Example (Part 2: Deployment Options)](https://www.youtube.com/watch?v=nVYCU1euYl0) - Demonstration of deploying an AI-powered backend using different deployment strategies by Rasmus Wulff Jensen.

## Blog Posts & Articles

### Official Microsoft Blogs

- [Introducing Microsoft Agent Framework](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/) - Azure AI and machine learning blog announcement.
- [Introducing Microsoft Agent Framework: The Open-Source Engine for Agentic AI Apps](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/) - Azure AI Foundry blog announcement.
- [Introducing Microsoft Agent Framework (Preview): Making AI Agents Simple for Every Developer](https://devblogs.microsoft.com/dotnet/introducing-microsoft-agent-framework-preview/) - .NET blog announcement.
- [Migrate your Semantic Kernel and AutoGen projects to Microsoft Agent Framework Release Candidate](https://devblogs.microsoft.com/semantic-kernel/migrate-your-semantic-kernel-and-autogen-projects-to-microsoft-agent-framework-release-candidate/) - Migration guide for transitioning projects to the release candidate.
- [Build AI agents with GitHub Copilot SDK and Microsoft Agent Framework](https://devblogs.microsoft.com/semantic-kernel/build-ai-agents-with-github-copilot-sdk-and-microsoft-agent-framework/) - Guide for building AI agents with GitHub Copilot SDK integration.
- [Give Your Agents Domain Expertise with Agent Skills in Microsoft Agent Framework](https://devblogs.microsoft.com/semantic-kernel/give-your-agents-domain-expertise-with-agent-skills-in-microsoft-agent-framework/) - Introducing Agent Skills for packaging domain expertise as reusable, portable skill modules.
- [Agent Harness in Agent Framework](https://devblogs.microsoft.com/agent-framework/agent-harness-in-agent-framework/) - Overview of the Agent Harness feature in Microsoft Agent Framework.
- [What's New in Agent Skills: Code Skills, Script Execution, and Approval for Python](https://devblogs.microsoft.com/agent-framework/whats-new-in-agent-skills-code-skills-script-execution-and-approval-for-python/) - New Agent Skills capabilities including code skills, script execution, and approval workflows for Python.

### Community Blogs

- [Microsoft Agent Framework: Why This Matters for the Future of Enterprise AI](https://www.linkedin.com/pulse/microsoft-agent-framework-why-matters-future-ai-muhammad-zubair-25j3f/) - Article by Muhammad Zubair.
- [From ChatGPT to Codex: How I Built an Agent Framework Lab That Talks to OpenAI and Ollama](https://www.linkedin.com/pulse/from-chatgpt-codex-how-i-built-agent-framework-lab-talks-williams--vspze/) - Article by Fabian Williams.
- [Microsoft Agent Framework](https://www.linkedin.com/pulse/microsoft-agent-framework-bill-ayers-l1ype/) - Article by Bill Ayers.
- [Microsoft Agent Framework Python Auth0 Token Vault](https://auth0.com/blog/microsoft-agent-framework-python-auth0-token-vault/) - Guide on integrating Auth0 Token Vault with Microsoft Agent Framework in Python.
- [Microsoft Agent Framework: First Look](https://jamiemaguire.net/index.php/2025/11/01/microsoft-agent-framework-first-look/) - Article by Jamie Maguire.
- [Microsoft Agent Framework: Conversations and Threads](https://jamiemaguire.net/index.php/2025/11/06/microsoft-agent-framework-conversations-and-threads/) - Article by Jamie Maguire.
- [Microsoft Agent Framework: Extending Agent Intelligence Using Function Tools](https://jamiemaguire.net/index.php/2025/11/15/microsoft-agent-framework-extending-agent-intelligence-using-function-tools/) - Article by Jamie Maguire.
- [Microsoft Agent Framework: Using Agents as Function Tools](https://jamiemaguire.net/index.php/2025/11/22/microsoft-agent-framework-using-agents-as-function-tools/) - Article by Jamie Maguire.
- [Microsoft Agent Framework is now AG UI compatible](https://www.copilotkit.ai/blog/microsoft-agent-framework-is-now-ag-ui-compatible) - Blog post about AG UI compatibility with Microsoft Agent Framework.
- [My Take: Why Microsoft Agent Framework Matters](https://www.linkedin.com/pulse/my-take-why-microsoft-agent-framework-matters-edgar-mcochieng--7kh6f/) - Article by Edgar Mcochieng.
- [Give Your Agents New Capabilities and Expertise Using Skills with Microsoft Agent Framework](https://arafattehsin.com/blog/give-your-agents-new-capabilities-skills-microsoft-agent-framework/) - Practical guide on implementing Agent Skills by Arafat Tehsin.
- [Microsoft Agent Framework - Agent Skills](https://ravichaganti.com/blog/microsoft-agent-framework-agent-skills/) - Overview and walkthrough of Agent Skills by Ravikanth Chaganti.

## Tutorials

- [Agent Framework Demos Day 1: Intercepting Function Calls](https://www.linkedin.com/pulse/agent-framework-demos-day-1-intercepting-function-calls-dibia-phd-sbuqc) - Practical guide to intercepting and handling function calls in Microsoft Agent Framework.
- [Agent Framework Deep Dive](https://github.com/fabianwilliams/agentframeworkdeepdive) - Deep dive tutorial and comprehensive guide to Microsoft Agent Framework.
- [Build AI Agents in C# with the Microsoft Agent Framework and Hugging Face MCP Tools](https://elbruno.com/2025/10/13/%F0%9F%A7%A0-build-ai-agents-in-c-with-the-microsoft-agent-framework-and-hugging-face-mcp-tools/) - Tutorial on building AI agents in C# using Microsoft Agent Framework integrated with Hugging Face MCP tools.
- [Generative AI Notebooks](https://github.com/arafattehsin/generative-ai/tree/main/notebooks/agent-framework) - Collection of Jupyter notebooks demonstrating Microsoft Agent Framework concepts and implementations.
- [M365 Graph DevUI Walkthrough](https://github.com/fabianwilliams/agent-framework/blob/m365agentsdevui/python/packages/devui/samples/m365_graph_devui/DEVUI_WALKTHROUGH.md) - Step-by-step walkthrough for using DevUI with Microsoft 365 Graph integration.
- [Multi-Model AI Agent Orchestration in .NET 9](https://elbruno.com/2025/10/12/multi-model-ai-agent-orchestration-in-net-9-with-microsoft-agent-framework-azure-ai-foundry-github-models-and-ollama/) - Tutorial on building multi-model AI agent orchestration using Microsoft Agent Framework in .NET 9.
- [Taking Multi-Model AI Orchestration Further: Azure AI Foundry Persistent Agents in .NET 9](https://elbruno.com/2025/10/16/%f0%9f%a7%a0-taking-multi-model-ai-orchestration-further-azure-ai-foundry-persistent-agents-in-net-9/) - Advanced tutorial on implementing persistent agents with Azure AI Foundry and Microsoft Agent Framework in .NET 9.
- [Build Long-Running AI Agents on Azure App Service with Microsoft Agent Framework](https://techcommunity.microsoft.com/blog/appsonazureblog/build-long-running-ai-agents-on-azure-app-service-with-microsoft-agent-framework/4463159) - Step-by-step guide for building and deploying long-running AI agents on Azure App Service.
- [Part 2: Build Long-Running AI Agents on Azure App Service with Microsoft Agent Framework](https://techcommunity.microsoft.com/blog/appsonazureblog/part-2-build-long-running-ai-agents-on-azure-app-service-with-microsoft-agent-fr/4465825) - Continuation of the practical guide for deploying long-running AI agents on Azure App Service.
- [Multi-agent Workflow with Human Approval using Agent Framework](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/multi-agent-workflow-with-human-approval-using-agent-framework/4465927) - Tutorial on implementing multi-agent workflows with human-in-the-loop approval patterns.
- [Bulletproof Agents with the Durable Task Extension for Microsoft Agent Framework](https://techcommunity.microsoft.com/blog/appsonazureblog/bulletproof-agents-with-the-durable-task-extension-for-microsoft-agent-framework/4467122) - Tutorial on building bulletproof agents using the Durable Task Extension.

## Examples & Samples

### Python Samples

- [Getting Started with Agents](https://github.com/microsoft/agent-framework/blob/main/python/samples/getting_started/agents) - Basic agent creation and tool usage.
- [Getting Started with Workflows](https://github.com/microsoft/agent-framework/blob/main/python/samples/getting_started/workflows) - Basic workflow creation.
- [Chat Client Examples](https://github.com/microsoft/agent-framework/blob/main/python/samples/getting_started/chat_client) - Direct chat client usage patterns.
- [Observability Examples](https://github.com/microsoft/agent-framework/blob/main/python/samples/getting_started/observability) - Monitoring and tracing.
- [Middleware Examples](https://github.com/microsoft/agent-framework/blob/main/python/samples/getting_started/middleware) - Custom middleware implementations.

### .NET Samples

- [Getting Started with Agents](https://github.com/microsoft/agent-framework/blob/main/dotnet/samples/GettingStarted/Agents) - Basic agent creation and tool usage.
- [Agent Provider Samples](https://github.com/microsoft/agent-framework/blob/main/dotnet/samples/GettingStarted/AgentProviders) - Different agent providers.
- [Workflow Samples](https://github.com/microsoft/agent-framework/blob/main/dotnet/samples/GettingStarted/Workflows) - Advanced multi-agent patterns.
- [OpenTelemetry Integration](https://github.com/microsoft/agent-framework/blob/main/dotnet/samples/GettingStarted/AgentOpenTelemetry) - Telemetry and monitoring.
- [Middleware Examples](https://github.com/microsoft/agent-framework/blob/main/dotnet/samples/GettingStarted/Agents/Agent_Step14_Middleware) - Custom middleware.

### Community Examples

- [PrivyDoc](https://github.com/ShivamGoyal03/PrivyDoc) - Local document intelligence tool powered by Foundry Local for secure, on-device document analysis.
- [AICalcX](https://github.com/ShivamGoyal03/AICalcX) - Real-time AI project cost estimation combining live Azure pricing, human resources, and autonomous agents for accurate enterprise TCO.

## Tools & Frameworks

### Development Tools

- [Agent Framework Toolkit](https://github.com/rwjdk/AgentFrameworkToolkit) - An opinionated C# toolkit that simplifies development with Microsoft Agent Framework, providing convenient factories and options for creating agents with multiple AI providers.
- [DevUI](https://github.com/microsoft/agent-framework/tree/main/python/packages/devui) - Interactive developer UI for agent development, testing, and debugging workflows.
- [VS Code AI Toolkit](https://marketplace.visualstudio.com/items?itemName=ms-windows-ai-studio.windows-ai-studio) - Streamlined experience for building with Microsoft Agent Framework.
- [AF Labs](https://github.com/microsoft/agent-framework/tree/main/python/packages/lab) - Experimental packages for cutting-edge features including benchmarking and reinforcement learning.
- [Agent Skills Repository](https://github.com/microsoft/skills) - Official repository of ready-made skills, MCP servers, custom agents, and reusable agent components.

### Integration Options

- [Agent Framework MS](https://github.com/aiwithsudheer/agent-framework-ms) - Project demonstrating how to extend the agent-framework by creating a custom chat client for Google's Gemini large language models.
- [Model Context Protocol (MCP)](https://learn.microsoft.com/en-us/agent-framework/user-guide/model-context-protocol/?pivots=programming-language-csharp) - Connect to external tools and data servers.
- [Agent as MCP Server](https://github.com/chanirban/agent-as-mcp-server-MAF) - Example of exposing an agent as an MCP server using Microsoft Agent Framework with STDIO transport.
- [Agent-to-Agent (A2A)](https://learn.microsoft.com/en-us/agent-framework/user-guide/agents/agent-types/a2a-agent?pivots=programming-language-csharp) - Cross-runtime agent collaboration.

## Related Technologies

### Microsoft AI Ecosystem

- [Semantic Kernel](https://github.com/microsoft/semantic-kernel) - Predecessor framework for AI orchestration.
- [AutoGen](https://github.com/microsoft/autogen) - Multi-agent conversation framework.
- [Azure AI Foundry](https://ai.azure.com/) - Cloud platform for AI development.
- [Microsoft 365 Agents SDK](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/) - Enterprise agent development.
- [Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio) - Low-code agent development.

### Standards & Protocols

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Standard for tool integration.
- [OpenAPI](https://www.openapis.org/) - API specification standard.
- [OpenTelemetry](https://opentelemetry.io/) - Observability standard.
- [Azure AI Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety) - Content moderation and safety.

## Community

- [Azure AI Foundry Discord](https://discord.gg/azureaifoundry) - Join the community on Discord, see the `#agent-framework` channel for discussions.
- [Reddit r/MSAgentFramework](https://www.reddit.com/r/MSAgentFramework/) - Community discussions, questions, and sharing experiences.

## Contributing

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

## Footnotes

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party's policies.
