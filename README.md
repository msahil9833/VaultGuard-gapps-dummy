VaultGuard - Vehicle Audit & Compliance Platform
Securing Tomorrow's Mobility

Project Overview
VaultGuard is a comprehensive web-based platform for managing automotive cybersecurity compliance (AIS-189 standards) in India. This prototype demonstrates the complete workflow for:

Super Admins - System management and organization oversight

CIRT Admins - Evidence review and approval workflow

OEMs - Compliance project management and evidence submission

Pentesters - Security assessment and report uploads

Quick Start
Method 1: Direct Open (Easiest)
bash
# Simply double-click index.html
# Or right-click → Open with → Browser (Chrome recommended)
Method 2: Local Server (Recommended)
bash
# Using Python 3
cd vaultguard-prototype
python -m http.server 8000

# Then visit: http://localhost:8000
Test Credentials
Role	Email	Password	Features
Super Admin	admin@cirt.gov.in	password123	Organizations, Users, Projects
CIRT Admin	priya.sharma@cirt.gov.in	password123	Review evidence, Approve/Reject
OEM	rajesh.kumar@maruti.com	password123	Submit evidence, Track progress
Pentester	security@pentest.com	password123	Upload security reports
File Structure
text
vaultguard-prototype/
│
├── index.html                    # Login page
│
├── css/
│   ├── style.css                # Main styles (login, buttons, forms)
│   └── dashboard.css            # Dashboard layouts & components
│
├── js/
│   ├── data.js                  # Mock data (users, projects, evidence)
│   ├── auth.js                  # Authentication logic
│   ├── utils.js                 # Helper functions
│   └── router.js                # SPA Navigation Engine
│
└── pages/
    ├── super-admin.html         # Super Admin dashboard (7 sections)
    ├── cirt-admin.html          # CIRT Admin dashboard (6 sections)
    ├── oem.html                 # OEM dashboard (5 sections)
    └── pentester.html           # Pentester dashboard (5 sections)
Features Implemented
Core Features
 Single Page App (SPA) Navigation - Fast, smooth transitions between sections
 Role-Based Access Control - 4 distinct user roles with different permissions
 Internal Linking - Cards and stats link to detail pages
 Modal Dialogs - Upload evidence, add users, create organizations
 Filters & Search - Filter requirements by status, search by keywords
 Progress Tracking - Visual progress bars for compliance tracking
 Responsive Design - Works on desktop, tablet, and mobile

 Super Admin Dashboard (7 Sections)
Dashboard - System overview with stats

Organizations - Manage OEMs (Add/Edit/Delete)

Users - User management with role assignment

Projects - View all compliance projects

Standards - AIS-189 requirements library

Reports - (Coming soon)

Settings - (Coming soon)

 CIRT Admin Dashboard (6 Sections)
Dashboard - Pending reviews and assigned projects

My Projects - Projects assigned for auditing

Pending Reviews - Evidence waiting for review

Review Detail -  Full review workflow with PDF preview

Rejected - Rejected items with reasons

Reports - (Coming soon)

 OEM Dashboard (5 Sections)
Dashboard - Project overview and progress

Project Detail -  All 450 requirements with filters (showing 15 sample)

Submissions - History of submitted evidence

Rejected Items - Items needing resubmission with reasons

Progress Report - (Coming soon)

 Pentester Dashboard (5 Sections)
Dashboard - Assigned projects and findings

Assigned Projects - Projects for security testing

Upload Report - Submit penetration test reports

Vulnerabilities - Track identified vulnerabilities

Analytics - (Coming soon)

 Testing Scenarios
Scenario 1: CIRT Admin Reviews Evidence (3 min)
Login as CIRT Admin

Click "CIRT Admin" quick login button

View Pending Reviews

Dashboard shows 3 pending evidence items

Click on any evidence card

Review Detail Page

See all evidence details

PDF preview on right side

Select "Approve" or "Reject"

Enter review comments

Click "Submit Review"

Result

Success message appears

Redirects back to pending reviews

Evidence status updated

Scenario 2: OEM Submits Evidence (3 min)
Login as OEM

Click "OEM (Maruti)" quick login button

Navigate to Project Detail

Click "View Full Requirements List" button

OR click "Project Detail" in sidebar

Browse Requirements

See 15 requirements (represents 450 in production)

Use filters to find "Not Submitted" items

Search by requirement code

Upload Evidence

Click "Upload" button on a requirement

Select requirement from dropdown

Choose file (simulated)

Add description

Click "Upload"

Result

Success message

Requirement status changes to "Under Review"

Scenario 3: Super Admin Manages Users (2 min)
Login as Super Admin

Click "Super Admin" quick login button

Navigate to Users

Click "Users" in sidebar

See all users in table

Add New User

Click "+ Add User" button

Fill in form (name, email, role, org)

If role = OEM, organization dropdown appears

Click "Create User"

Filter Users

Use role filter dropdown

Use status filter (Active/Inactive)

See filtered results instantly

 Key Navigation Features
Internal Linking Examples
Dashboard Cards Link to Detail Pages:

text
Super Admin Dashboard:
- "Total Organizations" card → Organizations page
- "Active Projects" card → Projects page

CIRT Admin Dashboard:
- "Pending Reviews" card → Pending Reviews page
- "Assigned Projects" card → My Projects page
- Click evidence card → Review Detail page

OEM Dashboard:
- "View Full Requirements" → Project Detail page
- Table rows clickable for details
Sidebar Navigation:

text
 Click any sidebar menu item
 Section changes without page reload
 Active menu item highlighted
 URL hash updates (#/section-name)
 Browser back/forward buttons work!
Back Buttons:

text
Review Detail page has "← Back" button
Returns to previous section
Smooth transitions
 Technical Implementation
Router System
The router.js file implements Single Page App navigation:

Hash-based routing (#/section-name)

History API support (back/forward buttons work)

Dynamic section loading

Active state management

Data Management
All data in data.js:

Users (6 sample users)

Organizations (3 OEMs)

Projects (3 active projects)

Evidence (4 submissions)

Requirements (15 requirements, represents 450)

Styling
CSS Variables for theming

Responsive grid layouts

Mobile-friendly design

Smooth animations

 Mock Data Overview
Users (6)
1 Super Admin

2 CIRT Admins (1 active, 1 inactive)

2 OEMs (Maruti, Tata)

1 Pentester

Organizations (3)
Maruti Suzuki India Ltd (77.3% completion)

Tata Motors Limited (52.0% completion)

Mahindra & Mahindra Ltd (89.6% completion)

Projects (3)
Swift Dzire 2026 - Maruti (348/450 requirements)

Nexon EV 2026 - Tata (234/450 requirements)

XUV700 2026 - Mahindra (403/450 requirements)

Evidence (4)
3 Under Review

1 Rejected (demonstrates resubmission workflow)

Requirements (15 sample, represents 450)
Categories:

Documentation (2)

Risk Management (3)

Development (2)

Technical Controls (2)

Operations (3)

Testing (2)

Training (1)

 Design Highlights
Color Scheme
Primary Blue: #2563eb - Main actions, links

Success Green: #10b981 - Approved items

Warning Orange: #f59e0b - Under review

Danger Red: #ef4444 - Rejected items

Info Cyan: #06b6d4 - Information

Dark Gray: #1f2937 - Sidebar, headings

UI Components
Cards - Clean, elevated, hoverable

Badges - Color-coded status indicators

Progress Bars - Gradient fill, animated

Modals - Centered, overlay, smooth entrance

Tables - Sticky headers, hover effects

Buttons - Primary, secondary, danger, success variants

 Workflow Demonstrations
Evidence Approval Cycle
text
OEM Submits Evidence
        ↓
CIRT Admin Reviews
        ↓
Approve or Reject
        ↓
OEM Notified (Resubmit if rejected)
User Management Flow
text
Super Admin Creates User
        ↓
Assigns Role & Organization
        ↓
User Receives Credentials
        ↓
User Logs In
Project Progress Tracking
text
450 Requirements Defined
        ↓
OEM Submits Evidence for Each
        ↓
CIRT Reviews & Approves
        ↓
Progress Bar Updates
        ↓
Project Completion
 Browser Support
✅ Chrome 90+ (Recommended)

✅ Firefox 88+

✅ Safari 14+

✅ Edge 90+

 IE 11 (Limited)

 Known Limitations (Prototype)
No Backend - All data in localStorage (resets on page refresh)

Simulated Uploads - File uploads are simulated, no actual storage

No Notifications - Email/SMS notifications not implemented

No Charts - Analytics pages show placeholder

Limited Data - Shows 15 requirements (production would have 450)

No Authentication - Simple localStorage-based auth (demo only)

 Production Roadmap
Phase 1: Backend (Weeks 1-3)
 PostgreSQL database

 Prisma ORM

 JWT authentication

 RESTful API endpoints

 AWS S3 for file uploads

Phase 2: Advanced Features (Weeks 4-6)
 Real-time notifications (WebSocket)

 Email service (SendGrid/AWS SES)

 Audit trail logging

 Version control for evidence

 Bulk operations

Phase 3: Analytics (Weeks 7-8)
 Charts & graphs (Chart.js/D3.js)

 PDF report generation

 Export to Excel

 Compliance dashboards

Phase 4: Testing & Deployment (Weeks 9-10)
 Unit tests

 Integration tests

 Load testing

 Security audit

 Production deployment (AWS/Azure)

 Support & Contact
Developed for: JT Sir, CIRT Team
Developer: Your Development Team
Date: February 05, 2026
Version: 1.0.0 (Prototype)
Status: ✅ Ready for Demo

Deployment Timeline: 8-12 weeks for production-ready system
Tech Stack: Next.js + PostgreSQL + Redis + AWS S3

 Pre-Demo Checklist
Before presenting to stakeholders:

 Extract ZIP file

 Test login with all 4 roles

 Navigate through all sections

 Test filters and search

 Test modal dialogs (upload, add user)

 Test evidence review workflow

 Test on mobile device

 Prepare demo script

 Note stakeholder feedback

 Technical Notes
Why HTML/CSS/JS Only?
Speed: Built in 2-3 days vs 2-3 weeks

Simplicity: No dependencies, no build

Portability: Runs anywhere

Clarity: Stakeholders see actual UI/UX

Iteration: Quick changes based on feedback

Why SPA Routing?
Modern UX: No page reloads

Fast Transitions: Smooth animations

Better Performance: Load once, navigate fast

Production-Ready: Same pattern used in React/Vue

 What's Working
✅ Login System - All 4 roles
✅ Dashboard Navigation - 7 sections for Super Admin, 6 for CIRT, 5 for OEM/Pentester
✅ Internal Linking - Stats → Detail pages, Evidence → Review
✅ Filters & Search - Status, category, keyword search
✅ Review Workflow - Complete approve/reject cycle
✅ Progress Tracking - Visual bars, percentage calculation
✅ Modal Forms - Upload, add user, add org
✅ Responsive Design - Mobile-friendly

 License
© 2026 CIRT - Central Institute of Road Transport
For internal use only - Prototype demonstration

 Thank You!
This prototype demonstrates the complete VaultGuard platform workflow with internal navigation, filters, and role-based access control.

Ready for stakeholder demo and production planning!

 "Securing Tomorrow's Mobility" 🇮🇳#   V a u l t G u a r d - g a p p s - d u m m y  
 