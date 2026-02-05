// TARA Engine - Threat Assessment & Risk Analysis
const TARAEngine = {
    // Calculate risk score
    calculateRiskScore(likelihood, impact) {
        return likelihood * impact;
    },
    
    // Determine risk level based on score
    getRiskLevel(score) {
        if (score >= 15) return 'CRITICAL';
        if (score >= 10) return 'HIGH';
        if (score >= 5) return 'MEDIUM';
        return 'LOW';
    },
    
    // Get risk color
    getRiskColor(level) {
        const colors = {
            'CRITICAL': '#dc2626',
            'HIGH': '#f59e0b',
            'MEDIUM': '#fbbf24',
            'LOW': '#10b981'
        };
        return colors[level] || '#6b7280';
    },
    
    // STRIDE categories
    strideCategories: [
        'Spoofing',
        'Tampering',
        'Repudiation',
        'Information Disclosure',
        'Denial of Service',
        'Elevation of Privilege'
    ],
    
    // Common threats library
    threatLibrary: [
        {id: 1, title: 'Unauthorized ECU Reprogramming', stride: 'Tampering', typical_likelihood: 3, typical_impact: 5},
        {id: 2, title: 'CAN Bus Message Injection', stride: 'Spoofing', typical_likelihood: 4, typical_impact: 4},
        {id: 3, title: 'Replay Attack on Key Fob', stride: 'Spoofing', typical_likelihood: 3, typical_impact: 4},
        {id: 4, title: 'OBD Port Physical Access', stride: 'Elevation of Privilege', typical_likelihood: 3, typical_impact: 3},
        {id: 5, title: 'WiFi Man-in-the-Middle', stride: 'Information Disclosure', typical_likelihood: 2, typical_impact: 3},
        {id: 6, title: 'GPS Spoofing', stride: 'Spoofing', typical_likelihood: 2, typical_impact: 3},
        {id: 7, title: 'Sensor Data Manipulation', stride: 'Tampering', typical_likelihood: 3, typical_impact: 4},
        {id: 8, title: 'Firmware Downgrade Attack', stride: 'Tampering', typical_likelihood: 2, typical_impact: 5},
        {id: 9, title: 'Bluetooth Unauthorized Pairing', stride: 'Elevation of Privilege', typical_likelihood: 3, typical_impact: 2},
        {id: 10, title: 'DoS on Critical ECU', stride: 'Denial of Service', typical_likelihood: 2, typical_impact: 5}
    ],
    
    // Recommended controls library
    controlsLibrary: [
        {id: 1, control: 'Secure Boot Implementation', effectiveness: 'HIGH', cost: 'MEDIUM'},
        {id: 2, control: 'CAN Message Authentication (MAC)', effectiveness: 'HIGH', cost: 'HIGH'},
        {id: 3, control: 'End-to-End Encryption', effectiveness: 'HIGH', cost: 'MEDIUM'},
        {id: 4, control: 'Physical Access Controls', effectiveness: 'MEDIUM', cost: 'LOW'},
        {id: 5, control: 'Intrusion Detection System (IDS)', effectiveness: 'MEDIUM', cost: 'MEDIUM'},
        {id: 6, control: 'Regular Penetration Testing', effectiveness: 'MEDIUM', cost: 'HIGH'},
        {id: 7, control: 'Code Signing', effectiveness: 'HIGH', cost: 'LOW'},
        {id: 8, control: 'Secure Key Storage (HSM)', effectiveness: 'HIGH', cost: 'HIGH'},
        {id: 9, control: 'Network Segmentation', effectiveness: 'MEDIUM', cost: 'MEDIUM'},
        {id: 10, control: 'Anomaly Detection', effectiveness: 'MEDIUM', cost: 'MEDIUM'}
    ],
    
    // Generate TARA report data
    generateReport(taraData) {
        const totalAssets = taraData.assets.length;
        const totalThreats = taraData.threats.length;
        const criticalThreats = taraData.threats.filter(t => this.getRiskLevel(t.riskScore) === 'CRITICAL').length;
        const highThreats = taraData.threats.filter(t => this.getRiskLevel(t.riskScore) === 'HIGH').length;
        const implementedControls = taraData.controls.filter(c => c.status === 'IMPLEMENTED').length;
        
        return {
            summary: {
                totalAssets,
                totalThreats,
                criticalThreats,
                highThreats,
                implementedControls,
                totalControls: taraData.controls.length
            },
            overallRisk: criticalThreats > 0 ? 'HIGH' : (highThreats > 0 ? 'MEDIUM' : 'LOW')
        };
    }
};
