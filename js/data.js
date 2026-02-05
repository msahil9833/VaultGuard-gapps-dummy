// EXTENDED MOCK DATA FOR VAULTGUARD - WITH COC & TARA
const MOCK_DATA = {
    users: [
        {id: 1, email: 'admin@cirt.gov.in', password: 'password123', firstName: 'System', lastName: 'Administrator', role: 'SUPER_ADMIN', isActive: true},
        {id: 2, email: 'priya.sharma@cirt.gov.in', password: 'password123', firstName: 'Priya', lastName: 'Sharma', role: 'CIRT_ADMIN', isActive: true},
        {id: 3, email: 'rajesh.kumar@maruti.com', password: 'password123', firstName: 'Rajesh', lastName: 'Kumar', role: 'OEM', organizationId: 1, organization: 'Maruti Suzuki India Ltd', isActive: true},
        {id: 4, email: 'security@pentest.com', password: 'password123', firstName: 'Vikram', lastName: 'Singh', role: 'PENTESTER', isActive: true},
        {id: 5, email: 'anita.desai@tatamotors.com', password: 'password123', firstName: 'Anita', lastName: 'Desai', role: 'OEM', organizationId: 2, organization: 'Tata Motors Limited', isActive: true}
    ],
    
    organizations: [
        {id: 1, name: 'Maruti Suzuki India Ltd', code: 'MSIL', contactEmail: 'compliance@maruti.com', activeProjects: 3, completionRate: 77.3, isActive: true},
        {id: 2, name: 'Tata Motors Limited', code: 'TATA', contactEmail: 'cybersec@tatamotors.com', activeProjects: 2, completionRate: 52.0, isActive: true},
        {id: 3, name: 'Mahindra & Mahindra Ltd', code: 'MM', contactEmail: 'security@mahindra.com', activeProjects: 1, completionRate: 89.6, isActive: true}
    ],
    
    projects: [
        {id: 1, name: 'AIS-189 Compliance - Model XYZ', vehicleModel: 'Swift Dzire 2026', organizationId: 1, organization: 'Maruti Suzuki India Ltd', assignedAuditor: 'Priya Sharma', status: 'ACTIVE', deadline: '2026-03-31', totalControls: 450, completedControls: 348, completionPercentage: 77.3, pendingReviews: 23, rejected: 12, notSubmitted: 67},
        {id: 2, name: 'AIS-189 Compliance - Nexon EV', vehicleModel: 'Nexon EV 2026', organizationId: 2, organization: 'Tata Motors Limited', assignedAuditor: 'Priya Sharma', status: 'ACTIVE', deadline: '2026-04-15', totalControls: 450, completedControls: 234, completionPercentage: 52.0, pendingReviews: 45, rejected: 8, notSubmitted: 163},
        {id: 3, name: 'AIS-189 Compliance - XUV700', vehicleModel: 'XUV700 2026', organizationId: 3, organization: 'Mahindra & Mahindra Ltd', assignedAuditor: 'Rajiv Kumar', status: 'ACTIVE', deadline: '2026-05-01', totalControls: 450, completedControls: 403, completionPercentage: 89.6, pendingReviews: 5, rejected: 3, notSubmitted: 39}
    ],
    
    evidence: [
        {id: 1, projectId: 1, requirementCode: 'REQ-AIS-189-1.1.1', requirementTitle: 'CSMS Policy Documentation', fileName: 'CSMS-Policy-v1.1.pdf', fileSize: '2.4 MB', submittedBy: 'Rajesh Kumar', submittedAt: '2026-02-03 10:30 AM', status: 'UNDER_REVIEW', version: 1, description: 'Complete CSMS policy document'},
        {id: 2, projectId: 1, requirementCode: 'REQ-AIS-189-2.1.1', requirementTitle: 'Risk Assessment Process', fileName: 'Risk-Assessment.pdf', fileSize: '1.8 MB', submittedBy: 'Rajesh Kumar', submittedAt: '2026-02-03 11:15 AM', status: 'UNDER_REVIEW', version: 1, description: 'Risk assessment methodology'},
        {id: 3, projectId: 1, requirementCode: 'REQ-AIS-189-5.1.1', requirementTitle: 'Vulnerability Management', fileName: 'Vuln-Mgmt.pdf', fileSize: '3.1 MB', submittedBy: 'Rajesh Kumar', submittedAt: '2026-02-04 09:45 AM', status: 'UNDER_REVIEW', version: 1, description: 'Vulnerability management process'},
        {id: 4, projectId: 1, requirementCode: 'REQ-AIS-189-3.1.2', requirementTitle: 'Secure Coding Guidelines', fileName: 'Secure-Coding.pdf', fileSize: '1.2 MB', submittedBy: 'Rajesh Kumar', submittedAt: '2026-02-02 02:30 PM', status: 'REJECTED', version: 1, reviewComment: 'Section 3.2 missing code review process', reviewedAt: '2026-02-04 04:20 PM'}
    ],
    
    requirements: [
        {id: 1, code: 'REQ-AIS-189-1.1.1', title: 'CSMS Policy Documentation', category: 'Documentation', status: 'UNDER_REVIEW'},
        {id: 2, code: 'REQ-AIS-189-1.1.2', title: 'Organizational Structure', category: 'Documentation', status: 'APPROVED'},
        {id: 3, code: 'REQ-AIS-189-2.1.1', title: 'Risk Assessment Process', category: 'Risk Management', status: 'UNDER_REVIEW'},
        {id: 4, code: 'REQ-AIS-189-2.1.2', title: 'Threat Analysis (TARA)', category: 'Risk Management', status: 'NOT_SUBMITTED'},
        {id: 5, code: 'REQ-AIS-189-2.1.3', title: 'Risk Treatment Plan', category: 'Risk Management', status: 'APPROVED'},
        {id: 6, code: 'REQ-AIS-189-3.1.1', title: 'Security by Design', category: 'Development', status: 'APPROVED'},
        {id: 7, code: 'REQ-AIS-189-3.1.2', title: 'Secure Coding Guidelines', category: 'Development', status: 'REJECTED'},
        {id: 8, code: 'REQ-AIS-189-4.1.1', title: 'Cryptographic Controls', category: 'Technical Controls', status: 'APPROVED'},
        {id: 9, code: 'REQ-AIS-189-4.1.2', title: 'Key Management', category: 'Technical Controls', status: 'APPROVED'},
        {id: 10, code: 'REQ-AIS-189-5.1.1', title: 'Vulnerability Management', category: 'Operations', status: 'UNDER_REVIEW'},
        {id: 11, code: 'REQ-AIS-189-5.1.2', title: 'Incident Response Plan', category: 'Operations', status: 'APPROVED'},
        {id: 12, code: 'REQ-AIS-189-5.2.1', title: 'Security Monitoring', category: 'Operations', status: 'APPROVED'},
        {id: 13, code: 'REQ-AIS-189-6.1.1', title: 'Penetration Testing', category: 'Testing', status: 'NOT_SUBMITTED'},
        {id: 14, code: 'REQ-AIS-189-6.1.2', title: 'Vulnerability Scanning', category: 'Testing', status: 'NOT_SUBMITTED'},
        {id: 15, code: 'REQ-AIS-189-7.1.1', title: 'Security Training', category: 'Training', status: 'APPROVED'}
    ],
    
    activities: [
        {id: 1, user: 'Priya Sharma', action: 'Approved evidence', details: 'CSMS Policy Documentation', timestamp: '2 hours ago'},
        {id: 2, user: 'Rajesh Kumar', action: 'Submitted evidence', details: 'Vulnerability Management Policy', timestamp: '4 hours ago'},
        {id: 3, user: 'System Administrator', action: 'Created new project', details: 'AIS-189 Compliance - Nexon EV', timestamp: '1 day ago'}
    ],
    
    //  NEW: COC Data
    cocs: [
        {
            id: 1, 
            cocNumber: 'COC-MSIL-2026-001', 
            projectId: 1, 
            vehicleModel: 'Swift Dzire 2026',
            organization: 'Maruti Suzuki India Ltd',
            createdDate: '2026-01-15',
            status: 'DRAFT',
            completionPercentage: 65,
            tabs: {
                tab1: {title: 'Vehicle Information', status: 'COMPLETED', data: {vin: 'MA3FWD71S00000001', engineType: 'K15C Petrol', year: 2026}},
                tab2: {title: 'CSMS Policy', status: 'COMPLETED', data: {policyVersion: 'v2.1', approvedDate: '2026-01-10'}},
                tab3: {title: 'TARA Results', status: 'COMPLETED', data: {taraId: 1, riskScore: 'MEDIUM'}},
                tab4: {title: 'Security Controls', status: 'IN_PROGRESS', data: {}},
                tab5: {title: 'Testing Evidence', status: 'IN_PROGRESS', data: {}},
                tab6: {title: 'Incident Response', status: 'NOT_STARTED', data: {}},
                tab7: {title: 'Vulnerability Management', status: 'NOT_STARTED', data: {}},
                tab8: {title: 'Supply Chain Security', status: 'NOT_STARTED', data: {}},
                tab9: {title: 'Evidence Links', status: 'NOT_STARTED', data: {}},
                tab10: {title: 'Audit Trail', status: 'AUTO', data: {}}
            }
        },
        {
            id: 2,
            cocNumber: 'COC-TATA-2026-001',
            projectId: 2,
            vehicleModel: 'Nexon EV 2026',
            organization: 'Tata Motors Limited',
            createdDate: '2026-01-20',
            status: 'SUBMITTED',
            completionPercentage: 100,
            submittedDate: '2026-02-01',
            tabs: {}
        }
    ],
    
    //  NEW: TARA Data
    taras: [
        {
            id: 1,
            taraNumber: 'TARA-MSIL-2026-001',
            projectId: 1,
            vehicleModel: 'Swift Dzire 2026',
            organization: 'Maruti Suzuki India Ltd',
            createdDate: '2026-01-10',
            status: 'COMPLETED',
            assets: [
                {id: 1, name: 'Engine Control Unit (ECU)', type: 'ECU', criticality: 'HIGH'},
                {id: 2, name: 'Telematics Unit', type: 'ECU', criticality: 'MEDIUM'},
                {id: 3, name: 'CAN Bus', type: 'NETWORK', criticality: 'HIGH'},
                {id: 4, name: 'OBD-II Port', type: 'INTERFACE', criticality: 'MEDIUM'},
                {id: 5, name: 'WiFi Module', type: 'INTERFACE', criticality: 'MEDIUM'}
            ],
            threats: [
                {id: 1, assetId: 1, title: 'Unauthorized ECU Reprogramming', strideCategory: 'Tampering', likelihood: 3, impact: 5, riskScore: 15, riskLevel: 'HIGH'},
                {id: 2, assetId: 3, title: 'CAN Bus Message Injection', strideCategory: 'Spoofing', likelihood: 4, impact: 4, riskScore: 16, riskLevel: 'HIGH'},
                {id: 3, assetId: 4, title: 'OBD Port Physical Access', strideCategory: 'Elevation', likelihood: 3, impact: 3, riskScore: 9, riskLevel: 'MEDIUM'},
                {id: 4, assetId: 5, title: 'WiFi Man-in-the-Middle', strideCategory: 'Spoofing', likelihood: 2, impact: 3, riskScore: 6, riskLevel: 'LOW'}
            ],
            controls: [
                {id: 1, threatId: 1, control: 'Secure Boot Implementation', status: 'IMPLEMENTED', residualRisk: 'LOW'},
                {id: 2, threatId: 2, control: 'CAN Message Authentication', status: 'PLANNED', residualRisk: 'MEDIUM'},
                {id: 3, threatId: 3, control: 'Physical Access Controls', status: 'IMPLEMENTED', residualRisk: 'LOW'}
            ]
        }
    ],
    
    //  NEW: Analytics Data
    analyticsData: {
        monthlyCompliance: [
            {month: 'Sep 2025', msil: 45, tata: 30, mahindra: 50},
            {month: 'Oct 2025', msil: 55, tata: 38, mahindra: 62},
            {month: 'Nov 2025', msil: 65, tata: 42, mahindra: 75},
            {month: 'Dec 2025', msil: 72, tata: 48, mahindra: 84},
            {month: 'Jan 2026', msil: 77, tata: 52, mahindra: 90}
        ],
        categoryCompliance: [
            {category: 'Documentation', msil: 90, tata: 75, mahindra: 95},
            {category: 'Risk Mgmt', msil: 85, tata: 60, mahindra: 88},
            {category: 'Development', msil: 70, tata: 45, mahindra: 85},
            {category: 'Testing', msil: 60, tata: 40, mahindra: 80},
            {category: 'Operations', msil: 80, tata: 55, mahindra: 92}
        ],
        avgReviewTime: {msil: 3.2, tata: 4.5, mahindra: 2.8}, // days
        rejectionRate: {msil: 12, tata: 18, mahindra: 8} // percentage
    }
};
