document.getElementById('certForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    let branch = document.getElementById('branch').value;
    let sessionInput = document.getElementById('session').value; 
    let roll = document.getElementById('rollNo').value;

    const parts = sessionInput.split('-');
    let startYear, endYear;

    if (parts.length === 2) {
        startYear = parts[0].slice(-2);
        endYear = parts[1].slice(-2);
    } else if (parts.length === 4) {
        startYear = parts[0].slice(-2);
        endYear = parts[1].slice(-2);
    } else {
        alert('Invalid session format. Use format like 2020-23');
        return;
    }

    const refSession = `${startYear}${endYear}`;

    // Shorten branch name
    let shortbranch;
    if (branch === 'Computer Science & Engineering') shortbranch = 'CSE';
    else if (branch === 'Civil Engineering') shortbranch = 'CIVIL';
    else if (branch === 'Electrical Engineering') shortbranch = 'Electrical';
    else if (branch === 'Electronics Engineering') shortbranch = 'Electronics';
    else if (branch === 'Mechanical Engineering') shortbranch = 'Mechanical';
    else shortbranch = 'OTHER';

    // Fill certificate content
    document.getElementById('certStudent').innerText = document.getElementById('studentName').value;
    document.getElementById('certFather').innerText = document.getElementById('fatherName').value;
    document.getElementById('certSession').innerText = sessionInput;
    document.getElementById('certBranch').innerText = branch;
    document.getElementById('certRoll').innerText = roll;
    document.getElementById('certSemester').innerText = document.getElementById('semester').value;
    document.getElementById('certFee').innerText = document.getElementById('fee').value;
    document.getElementById('certBacklog').innerText = document.getElementById('backlog').value || 'backlog in 4th sem';
    document.getElementById('certDate').innerText = new Date().toLocaleDateString('en-IN');

    document.getElementById('refNo').innerText = `BIT/ADM/DIP/2025/${shortbranch}/${refSession}${roll}`;

    // Show certificate and buttons
    document.getElementById('certificate').style.display = 'block';
    document.getElementById('actions').style.display = 'block';
});


   // button to download the certificate
   document.getElementById('downloadBtn').addEventListener('click', function() {
       downloadPDF();
   });

   function downloadPDF() {
       const element = document.getElementById('certificate');
       const opt = {
         margin:       0.5,
         filename:     'bonafide-certificate.pdf',
         image:        { type: 'jpeg', quality: 0.98 },
         html2canvas:  { scale: 2 },
         jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
       };
     
       html2pdf().set(opt).from(element).save();
     }