---
title: "Decoding Microsoft Intune Logs: A Guide to Troubleshooting Deployments"
description: "Learn how to effectively troubleshoot Microsoft Intune deployments by locating and reading the right log files for Win32 apps, scripts, and MDM policies."
pubDate: 2026-03-07
author: "AutoPacker Team"
tags: ["intune", "troubleshooting", "sysadmin", "deployment"]
image:
  url: "/images/intune-logs-cover.jpg"
  alt: "Microsoft Intune log troubleshooting on a computer screen"
---

# Decoding Microsoft Intune Logs: A Guide to Troubleshooting Deployments

If you manage devices using Microsoft Intune, you already know the sinking feeling of a deployment status hanging indefinitely on "Pending" or failing with a cryptic error code. Because Intune is a cloud service, you can't just remote into the server console to see what went wrong. You have to rely on the breadcrumbs left behind on the client device.

Troubleshooting Intune doesn't have to be a guessing game. By knowing exactly which logs to look at and what they mean, you can pinpoint the exact cause of a failed deployment in minutes. 

Here is your comprehensive guide to tracking down Intune logs and using them to fix your deployments.

## The Core of Intune Logging: The IME

The **Intune Management Extension (IME)** is the engine that drives Win32 app deployments, PowerShell scripts, and proactive remediations on Windows devices. Naturally, the IME is also where you will find the most valuable logs.

All IME-related logs are located in a hidden system folder:
`/ProgramData/Microsoft/IntuneManagementExtension/Logs`

> **Pro Tip:** Never read these logs in standard Notepad. Use **CMTrace** or **OneTrace** (included with Configuration Manager tools). These tools format the text, update in real-time, and automatically highlight errors in red and warnings in yellow.

---

## 1. Troubleshooting Win32 Apps: The `AppWorkload.log`

Historically, every single action the IME took was dumped into one massive file called `IntuneManagementExtension.log`. Thankfully, Microsoft recently separated app deployment traffic into its own dedicated file: **`AppWorkload.log`**. 

When a Win32 App fails to install, this is your first stop.

### What to look for:
* **Check-in and Evaluation:** Search for `[Win32App]`. You will see the IME evaluating if the app is already installed based on your configured Detection Rules.
* **Download Phase:** Watch for the agent requesting the content and creating the download folder.
* **Execution:** Look for the actual install command being triggered and the resulting exit code.
  * **Exit Code 0:** Success. *(Note: If Intune still says the app failed in the portal after a 0 code, your Detection Rule is incorrect!)*
  * **Exit Code 1603:** Generic MSI failure. This usually means the app is already installed, or a required reboot is pending.

## 2. Troubleshooting PowerShell Scripts: The `AgentExecutor.log`

If you are deploying custom PowerShell scripts or Remediations, the `AppWorkload.log` won't help you. Instead, you need to look at the **`AgentExecutor.log`** (found in the same IME Logs folder).

### What to look for:
* This log shows exactly what happens when Intune hands a script over to the local Windows PowerShell execution engine.
* It captures the output of the script, including `Write-Output` or `Write-Error` streams. If your script is failing silently in Intune, add logging output directly to your script, push it again, and read this file.

## 3. Troubleshooting Enrollment & MDM Policies: Event Viewer

Not everything relies on the Intune Management Extension. Core MDM policies (like BitLocker settings, Wi-Fi profiles, and Device Restrictions) and enrollment processes are handled directly by the Windows OS.

For these, you need to head to the **Event Viewer**.

**Navigation Path:**
`Applications and Services Logs > Microsoft > Windows > DeviceManagement-Enterprise-Diagnostics-Provider > Admin`

### Key Event IDs to Watch:
* **Event 201:** Success! The device successfully completed a sync with the Intune service.
* **Events 11, 12, or 52:** Enrollment failures. These are often caused by missing user licenses or MDM scope configuration issues in Entra ID.
* **Event 404:** Network failure. The device cannot reach the required Microsoft endpoints (check your firewalls, proxies, and device clock).

## 4. The Quick Overview: MDM Diagnostics Report

Sometimes you don't need to read thousands of lines of code; you just need to know if a policy *actually* reached the device. The **MDM Diagnostics Report** generates a clean HTML file summarizing exactly what Intune has applied.

### How to generate it:
1. On the Windows device, navigate to **Settings > Accounts > Access work or school**.
2. Click on the connected Entra ID/Intune account and select **Info**.
3. Scroll to the bottom and click **Create report**.
4. Open the HTML file saved at `C:\Users\Public\Documents\MDMDiagnostics`.

Check the **"Managed Policies"** section. If your setting isn't listed there, it hasn't synced to the device at all. If it *is* listed but the device isn't behaving correctly, you likely have a policy conflict.

---

## Wrap Up

Intune troubleshooting is a process of elimination. Start broad (did the device sync?), narrow down to the workload (is it a script or a Win32 app?), and dive into the specific log file.
