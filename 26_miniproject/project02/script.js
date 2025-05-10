document.getElementById('generate-btn').addEventListener('click', () => {
  const name = document.getElementById('student-name').value;
  const father = document.getElementById('fathers-name').value;
  const session = document.getElementById('session').value;
  const branch = document.getElementById('branch-select').value;
  const roll = document.getElementById('roll-no').value;
  const semester = document.getElementById('semester').value;
  const fee = document.getElementById('fee').value;
  const backlog = document.getElementById('backlog').value;
  const isLate = document.getElementById('is-late').value;

  document.getElementById('certStudent').innerText = name;
  document.getElementById('certFather').innerText = father;
  document.getElementById('certSession').innerText = session;
  document.getElementById('certBranch').innerText = branch;
  document.getElementById('certRoll').innerText = roll;
  document.getElementById('certSemester').innerText = semester;
  document.getElementById('certFee').innerText = fee;

  // Show backlog line only if selected
  if (isLate === 'yes') {
      document.getElementById('certBacklog').innerText = backlog || 'backlog in 4th sem';
      document.getElementById('backlog-line').style.display = 'block';
  } else {
      document.getElementById('backlog-line').style.display = 'none';
  }

  // Set reference number
  const refSession = session.split('-').map(s => s.slice(-2)).join('');
  document.getElementById('refNo').innerText = `BIT/ADM/DIP/2025/${branch}/${refSession}`;

  // Set current date
  document.getElementById('certDate').innerText = new Date().toLocaleDateString('en-GB');

  // Show certificate and enable download button
  const certificateDiv = document.getElementById('certificate');
  certificateDiv.style.display = 'block';
  const downloadButton = certificateDiv.querySelector('#download-btn');
  downloadButton.classList.remove('hidden');
});

document.getElementById('download-btn').addEventListener('click', () => {
  const cert = document.getElementById('certificate');

  // Ensure certificate is visible
  cert.style.display = 'block';

  // Small delay to allow DOM to paint before capturing
  setTimeout(() => {
      const opt = {
          margin:     0.5,
          filename:   'bonafide_certificate.pdf',
          image:      { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF:      { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(cert).save();
      console.error("errpr", err);
  }, 500);
});