// Funções para o modal de certificados
function openModal(certificateFile, title) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalImage').src = certificateFile;
  document.getElementById('certificateModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('certificateModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Funções para o modal de todos os certificados
function showAllCertificates() {
  document.getElementById('allCertificatesModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeAllCertificatesModal() {
  document.getElementById('allCertificatesModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const certificateModal = document.getElementById('certificateModal');
  const allCertificatesModal = document.getElementById('allCertificatesModal');
  
  if (event.target === certificateModal) {
    closeModal();
  }
  
  if (event.target === allCertificatesModal) {
    closeAllCertificatesModal();
  }
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});