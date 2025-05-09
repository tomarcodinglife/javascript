document.getElementById('certForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Reference number generation
    let branch = document.getElementById('branch').value;
    let sessionInput = document.getElementById('session').value; 
    let roll = document.getElementById('rollNo').value;

    const parts = sessionInput.split('-');

    let startYear, endYear;

    if (parts.length === 2) {
        startYear = parts[0].slice(-2); // "20"
        endYear = parts[1].slice(-2);   // "23"
    } else if (parts.length === 4) {
        startYear = parts[0].slice(-2);
        endYear = parts[1].slice(-2);
    } else {
        console.error('Invalid input format');
        return;
    }

    const refSession = `${startYear}${endYear}`;

    // Fill certificate content
    document.getElementById('certStudent').innerText = document.getElementById('studentName').value;
    document.getElementById('certFather').innerText = document.getElementById('fatherName').value;
    document.getElementById('certSession').innerText = sessionInput;
    document.getElementById('certBranch').innerText = branch;
    document.getElementById('certRoll').innerText = document.getElementById('rollNo').value;
    document.getElementById('certSemester').innerText = document.getElementById('semester').value;
    document.getElementById('certFee').innerText = document.getElementById('fee').value;
    document.getElementById('certBacklog').innerText = document.getElementById('backlog').value || 'backlog in 4th sem';
    document.getElementById('certDate').innerText = `Date:${new Date().toLocaleDateString('en-IN')}`;


    document.getElementById('refNo').innerText = `BIT/ADM/DIP/2025/${branch}/${refSession}${roll}`;

    document.getElementById('certificate').style.display = 'block';
});
