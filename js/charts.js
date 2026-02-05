// Chart rendering utilities for VaultGuard Analytics
const ChartRenderer = {
    // Render line chart for compliance trends
    renderComplianceTrend(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        // Simple ASCII chart (production would use Chart.js)
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Background
        ctx.fillStyle = '#f9fafb';
        ctx.fillRect(0, 0, width, height);
        
        // Grid
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const y = (height / 5) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        
        // Draw lines for each OEM
        const colors = {msil: '#2563eb', tata: '#10b981', mahindra: '#f59e0b'};
        const oems = ['msil', 'tata', 'mahindra'];
        const xStep = width / (data.length - 1);
        
        oems.forEach(oem => {
            ctx.strokeStyle = colors[oem];
            ctx.lineWidth = 3;
            ctx.beginPath();
            
            data.forEach((point, index) => {
                const x = index * xStep;
                const y = height - (point[oem] / 100 * height);
                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.stroke();
        });
    },
    
    // Render bar chart for category compliance
    renderCategoryBar(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Background
        ctx.fillStyle = '#f9fafb';
        ctx.fillRect(0, 0, width, height);
        
        const barWidth = width / (data.length * 4);
        const colors = {msil: '#2563eb', tata: '#10b981', mahindra: '#f59e0b'};
        
        data.forEach((cat, index) => {
            const x = index * barWidth * 4 + 20;
            ['msil', 'tata', 'mahindra'].forEach((oem, oIndex) => {
                const barHeight = (cat[oem] / 100) * height;
                ctx.fillStyle = colors[oem];
                ctx.fillRect(x + oIndex * barWidth, height - barHeight, barWidth - 5, barHeight);
            });
        });
    },
    
    // Create simple HTML chart (fallback)
    createSimpleBarChart(containerId, data, title) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = `<div style="padding: 1rem;"><h4>${title}</h4>`;
        data.forEach(item => {
            const label = item.label || item.category || item.month;
            const value = item.value || item.msil || 0;
            const percentage = Math.min(value, 100);
            
            html += `
                <div style="margin: 0.75rem 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                        <span style="font-size: 0.875rem; font-weight: 600;">${label}</span>
                        <span style="font-size: 0.875rem; color: var(--text-light);">${value}%</span>
                    </div>
                    <div style="height: 8px; background: var(--border); border-radius: 4px; overflow: hidden;">
                        <div style="height: 100%; width: ${percentage}%; background: linear-gradient(90deg, var(--primary), var(--secondary)); transition: width 0.3s;"></div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }
};
