function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {year: 'numeric', month: 'short', day: 'numeric'};
    return date.toLocaleDateString('en-IN', options);
}

function getDaysRemaining(deadline) {
    const now = new Date();
    const end = new Date(deadline);
    const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
    return diff;
}

function getStatusBadge(status) {
    const badges = {
        'APPROVED': 'badge-success',
        'UNDER_REVIEW': 'badge-warning',
        'REJECTED': 'badge-danger',
        'NOT_SUBMITTED': 'badge-gray',
        'ACTIVE': 'badge-success',
        'COMPLETED': 'badge-info'
    };
    return badges[status] || 'badge-gray';
}

function getStatusText(status) {
    const texts = {
        'APPROVED': 'Approved',
        'UNDER_REVIEW': 'Under Review',
        'REJECTED': 'Rejected',
        'NOT_SUBMITTED': 'Not Submitted',
        'ACTIVE': 'Active',
        'COMPLETED': 'Completed'
    };
    return texts[status] || status;
}

function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function showSuccessToast(message) {
    alert('right ' + message);
}

function showErrorToast(message) {
    alert('wrong ' + message);
}

function approveEvidence(evidenceId) {
    const evidence = MOCK_DATA.evidence.find(e => e.id === evidenceId);
    if (evidence) {
        evidence.status = 'APPROVED';
        evidence.reviewComment = 'Evidence approved and meets all requirements.';
        evidence.reviewedAt = new Date().toLocaleString();
        showSuccessToast('Evidence approved successfully!');
        setTimeout(() => location.reload(), 1000);
    }
}

function rejectEvidence(evidenceId) {
    const comment = prompt('Enter rejection reason:');
    if (comment) {
        const evidence = MOCK_DATA.evidence.find(e => e.id === evidenceId);
        if (evidence) {
            evidence.status = 'REJECTED';
            evidence.reviewComment = comment;
            evidence.reviewedAt = new Date().toLocaleString();
            showSuccessToast('Evidence rejected. OEM will be notified.');
            setTimeout(() => location.reload(), 1000);
        }
    }
}

function downloadEvidence(fileName) {
    showSuccessToast('Downloading ' + fileName + '...');
}

function uploadEvidence() {
    const fileInput = document.getElementById('evidenceFile');
    const requirementSelect = document.getElementById('requirementSelect');
    const description = document.getElementById('evidenceDescription');

    if (fileInput && fileInput.files.length > 0 && requirementSelect && requirementSelect.value) {
        showSuccessToast('Evidence uploaded successfully! Auditor will be notified.');
        hideModal('uploadModal');
        setTimeout(() => location.reload(), 1000);
    } else {
        showErrorToast('Please select a file and requirement.');
    }
}