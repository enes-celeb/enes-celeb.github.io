document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        // Aktif menü stilini değiştir
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // İlgili kod bloğunu göster
        const targetId = item.getAttribute('data-target');
        document.querySelectorAll('.code-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});
