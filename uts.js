
  // ===== FUNGSI UNTUK SIDEBAR =====
  document.addEventListener('DOMContentLoaded', function() {
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');


function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

sidebarToggle.addEventListener('click', openSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
  closeSidebar();
    }
});
  });