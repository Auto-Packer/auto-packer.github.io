# Downloads Management Guide

Welcome to AutoPacker's Downloads section! This guide explains how to add new downloadable software and resources.

## How to Add a New Download

### Step 1: Create a Markdown File

Create a new `.mdx` file in `src/content/downloads/` with a descriptive filename:

```
src/content/downloads/my-software-name.mdx
```

### Step 2: Add Front Matter Metadata

At the top of your file, add the YAML front matter with download information:

```yaml
---
title: "Software Display Name"
description: "Brief description of the software"
version: "1.0.0"
releaseDate: 2026-02-15
fileSize: "145 MB"
osRequirements: ["Windows 10", "Windows 11", "macOS 10.15+"]
downloadUrl: "/downloads/filename.exe"
tags: ["Category1", "Category2"]
---
```

### Step 3: Add Download Content

Below the front matter, write the detailed description using Markdown:

```markdown
## Overview
Describe your software here...

### Features
- Feature 1
- Feature 2

### System Requirements
- RAM: 8GB minimum
- Disk Space: 500MB

### Installation Instructions
1. Download the installer
2. Run with administrator privileges
...
```

### Step 4: Upload the Actual File

Place the downloadable file in the `public/downloads/` folder:

```
public/downloads/
  ├── software-v1.0.0.exe
  ├── software-v1.0.0.zip
  └── guide.pdf
```

Then reference the file path in `downloadUrl`: `/downloads/filename.exe`

## Required Fields

- **title** (required): Display name of the software
- **description** (required): Short description (1-2 sentences)
- **version** (required): Version number (e.g., "1.0.0")
- **releaseDate** (required): Release date in YYYY-MM-DD format
- **fileSize** (required): File size (e.g., "145 MB")
- **osRequirements** (required): Array of OS requirements
- **downloadUrl** (required): Path to the downloadable file
- **tags** (optional): Array of category tags
- **installationInstructions** (optional): Installation guide text

## Example File Structure

```
src/content/downloads/
  ├── installer-toolkit-v1.mdx
  ├── enterprise-deployment-guide.mdx
  └── your-software.mdx

public/downloads/
  ├── autopacker-toolkit-v1.0.0.exe
  ├── enterprise-deployment-guide-v2.1.pdf
  └── your-software-v1.0.exe
```

## Front Matter Reference

```yaml
---
title: "AutoPacker Installer Toolkit"
description: "Complete toolkit for enterprise software packaging"
version: "1.0.0"
releaseDate: 2026-02-15
fileSize: "145 MB"
osRequirements: ["Windows 10", "Windows 11", "Windows Server 2019+"]
downloadUrl: "/downloads/autopacker-toolkit-v1.0.0.exe"
tags: ["MSI", "MSIX", "Packaging"]
---
```

## The Downloads Pages

The following pages are automatically generated:

1. `/downloads` - Lists all available downloads with cards
2. `/downloads/[slug]` - Individual download page with details

## Tips

- Use clear, descriptive file names with versions
- Include installation instructions in the markdown content
- Keep file sizes reasonable (under 500MB recommended)
- Test download links before publishing
- Add relevant tags for better organization
- Update version numbers for new releases

## What Visitors See

- **Downloads Page** (`/downloads`): Grid view of all downloads with metadata
- **Individual Download Page** (`/downloads/[slug]`): Full details, system requirements, and download button
- **Navbar**: "Downloads" link for easy access

## Questions?

Edit the files and regenerate with:
```bash
npm run build
npm run dev
```

Changes are reflected immediately in development mode!
