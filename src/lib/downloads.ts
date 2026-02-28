import type { Download } from '../types';

export const downloadsData: Download[] = [
    {
        slug: 'installer-toolkit-v1',
        data: {
            title: 'AutoPacker Installer Toolkit',
            vendor: 'AutoPacker',
            description: 'Complete toolkit for enterprise software packaging including MSI creation, MSIX conversion, and deployment automation tools.',
            version: '1.0.0',
            releaseDate: new Date('2026-02-15'),
            fileSize: '145 MB',
            osRequirements: ['Windows 10', 'Windows 11', 'Windows Server 2019+'],
            downloadUrl: '/downloads/autopacker-toolkit-v1.0.0.txt',
            tags: ['MSI', 'MSIX', 'Packaging', 'Deployment']
        },
        content: `
<h2>Features</h2>
<ul>
<li><strong>MSI Builder</strong>: Create professional MSI packages with custom UI and deployment logic</li>
<li><strong>MSIX Converter</strong>: Convert legacy installers to MSIX format</li>
<li><strong>Deployment Automation</strong>: Automate software deployment across enterprise networks</li>
</ul>
<h2>Installation</h2>
<p>Extract the toolkit archive and run the setup wizard. Follow the prompts to complete installation with your specific requirements.</p>
<h2>Documentation</h2>
<p>Comprehensive documentation and examples are included in the download package. Visit our documentation portal for additional resources.</p>
        `
    },
    {
        slug: 'enterprise-deployment-guide',
        data: {
            title: 'Enterprise Deployment Guide PDF',
            vendor: 'AutoPacker',
            description: 'Comprehensive guide covering best practices for large-scale software deployments in enterprise environments.',
            version: '2.1',
            releaseDate: new Date('2026-02-10'),
            fileSize: '8.5 MB',
            osRequirements: ['Any OS with PDF Reader'],
            downloadUrl: '/downloads/enterprise-deployment-guide-v2.1.txt',
            tags: ['Documentation', 'Best Practices', 'Deployment', 'Guide']
        },
        content: `
<h2>Document Contents</h2>
<ul>
<li><strong>Chapter 1</strong>: Deployment Planning &amp; Strategy - Risk Assessment Framework</li>
<li><strong>Chapter 2</strong>: Infrastructure Requirements - System specifications and prerequisites</li>
<li><strong>Chapter 3</strong>: Installation Procedures - Step-by-step deployment instructions</li>
<li><strong>Chapter 4</strong>: Configuration &amp; Management - Post-deployment configuration</li>
<li><strong>Chapter 5</strong>: Troubleshooting &amp; Support - Common issues and solutions</li>
</ul>
<h2>Key Highlights</h2>
<p>This guide provides industry best practices for deploying software at scale, covering security considerations, performance optimization, and disaster recovery planning.</p>
        `
    },
    {
        slug: 'my-software',
        data: {
            title: 'My Software Name',
            vendor: 'Vendor Name',
            description: 'Brief description of your software',
            version: '1.0.0',
            releaseDate: new Date('2026-02-28'),
            fileSize: '50 MB',
            osRequirements: ['Windows 10', 'Windows 11'],
            downloadUrl: '/downloads/my-software-v1.0.exe',
            tags: ['Software', 'Tools']
        },
        content: `
<h2>About This Software</h2>
<p>This is a detailed description of the software and what it does. Replace this content with your actual software documentation.</p>
<h2>Features</h2>
<ul>
<li>Feature 1</li>
<li>Feature 2</li>
<li>Feature 3</li>
</ul>
<h2>System Requirements</h2>
<p>See the system requirements panel on the right for operating system and hardware requirements.</p>
<h2>Support</h2>
<p>For support, visit our documentation portal or contact the support team.</p>
        `
    },

];
