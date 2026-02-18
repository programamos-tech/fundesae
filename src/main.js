const contracts = [
    { title: "SERVIMAG ESP - Magangué", description: "Supervisión del contrato de operación con inversión No. 098 de 2007 para la prestación de los servicios públicos domiciliarios de acueducto y alcantarillado - Operador Veolia S.A. ESP.", period: "2019 - 2034" },
    { title: "Contrato Regional Bajo Sinú", description: "Supervisión del contrato de operación para la prestación de los servicios de acueducto, alcantarillado y aseo en Lorica, San Antero, Purísima, Momil, Chima y San Andrés de Sotavento - Operador Aqualia Latinoamérica S.A. ESP.", period: "2011 - 2039" },
    { title: "Municipio de Moñitos (Córdoba)", description: "Fortalecimiento y apoyo en la elaboración del informe integral de supervisión del contrato No. SC-28-2008 de acueducto, alcantarillado y aseo.", period: "2024" },
    { title: "E.S.E. Hospital La Divina Misericordia", description: "Actualización del Manual de Gestión Documental y Archivo del Municipio de Magangué (Bolívar).", period: "2021" },
    { title: "E.S.E. Hospital San Vicente de Paul", description: "Asesoría para la elaboración del programa de prevención de emergencia y atención de desastre archivístico en Lorica (Córdoba).", period: "2019" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Asesoría integral en servicios públicos, reporte y cargue al SUI, y capacitación al comité técnico de estratificación.", period: "2019" },
    { title: "Municipio de Magangué (Bolívar)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto y alcantarillado para el fortalecimiento institucional.", period: "2018" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Asesoría integral en servicios públicos para la administración y operación de acueducto, alcantarillado y aseo.", period: "2018" },
    { title: "Municipio de Magangué (Bolívar)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto y alcantarillado para el fortalecimiento institucional.", period: "2017" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Asesoría integral en servicios públicos, campañas de reciclaje (Decreto 596 de 2017).", period: "2017" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Implementación de los proyectos ambientales escolares (PRAES) en las IED del Municipio.", period: "2017" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Esquema organizacional en el proceso de certificación para la administración de recursos del SGP-APSB.", period: "2016" },
    { title: "Municipio de Magangué (Bolívar)", description: "Reestructuración de pasivos, recuperación de administración de recursos SGP-APSB y verificación de aseguramiento del servicio.", period: "2016" },
    { title: "Municipio de Pinillos (Bolívar)", description: "Esquema organizacional en el proceso de certificación para la administración de recursos SGP-APSB.", period: "2016" },
    { title: "SERVIMAG ESP (Magangué)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto y alcantarillado.", period: "2016" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Formulación del esquema de diagnósticos de estratificación urbana, centros poblados y rural dispersa.", period: "2016" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto, alcantarillado y aseo.", period: "2014" },
    { title: "Municipio de San Antonio de Palmito (Sucre)", description: "Implementación del Modelo Estándar de Control Interno MECI 100:2005.", period: "2014" },
    { title: "Municipio de Tiquisio (Bolívar)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto, alcantarillado y aseo.", period: "2013" },
    { title: "Municipio de Pueblo Nuevo (Córdoba)", description: "Asesoría integral en servicios públicos domiciliarios de acueducto, alcantarillado y aseo.", period: "2013" },
    { title: "Municipio de Pueblo Nuevo (Córdoba)", description: "Diseño e implantación de esquemas organizacionales para la operación de sistemas de acueductos en zona rural.", period: "2012" },
    { title: "Municipio de Moñitos (Córdoba)", description: "Cargue al SUI y asesoría en el proceso de certificación SGP-APSB.", period: "2012" },
    { title: "Municipio de Pueblo Nuevo (Córdoba)", description: "Procedimientos para cumplimiento ante el SUI en cumplimiento a la normatividad de Superservicios.", period: "2012" },
    { title: "Municipio de Tuchín (Córdoba)", description: "Supervisión del Contrato de Operación de los servicios públicos domiciliarios.", period: "2011 - 2013" },
    { title: "Municipio de Tuchín (Córdoba)", description: "Asesoría en la elaboración e implementación de Proyectos Ambientales Escolares PRAES.", period: "2011" },
    { title: "Municipio de Tuchín (Córdoba)", description: "Formulación del plan de saneamiento y manejo de vertimiento PSMV.", period: "2011" }
];

const contractsList = document.getElementById('contracts-list');
if (contractsList) {
    contractsList.innerHTML = contracts.map(contract => `
        <div class="contract-item">
            <div class="contract-header">
                <h4 class="contract-title">${contract.title}</h4>
                <span class="contract-period">${contract.period}</span>
            </div>
            <p class="contract-description">${contract.description}</p>
        </div>
    `).join('');
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Ajustar layout para tablet vertical y móviles
function adjustResponsiveLayout() {
    const isTabletVertical = window.innerWidth >= 768 && window.innerWidth <= 1024 && window.innerHeight > window.innerWidth;
    const isMobile = window.innerWidth <= 768;
    
    if (isTabletVertical || isMobile) {
        // Encontrar todos los divs con grid en la sección nosotros
        const nosotrosSection = document.getElementById('nosotros');
        if (nosotrosSection) {
            const gridDivs = nosotrosSection.querySelectorAll('.container > div[style*="grid"]');
            gridDivs.forEach(div => {
                div.style.display = 'flex';
                div.style.flexDirection = 'column';
                div.style.gap = '2rem';
                div.style.gridTemplateColumns = 'none';
            });
            
            // Asegurar orden correcto
            const visionBoxes = nosotrosSection.querySelectorAll('.vision-box');
            visionBoxes.forEach(box => {
                box.style.order = '1';
                box.style.width = '100%';
            });
            
            const imageContainers = nosotrosSection.querySelectorAll('.section-image-container');
            imageContainers.forEach(container => {
                container.style.order = '2';
                container.style.width = '100%';
            });
        }
    }
}

// Ejecutar al cargar y al redimensionar
adjustResponsiveLayout();
window.addEventListener('resize', adjustResponsiveLayout);

// Ajustar título del hero para que siempre tenga 2 líneas en móviles
function adjustHeroTitle() {
    const heroH1 = document.querySelector('.hero h1');
    if (!heroH1) return;
    
    if (window.innerWidth <= 768) {
        // Guardar el texto original si no está guardado
        if (!heroH1.dataset.originalText) {
            heroH1.dataset.originalText = heroH1.textContent.trim().replace(/\s+/g, ' ');
        }
        
        const text = heroH1.dataset.originalText;
        // Dividir específicamente: "EL FORTALECIMIENTO" y "SOCIAL Y AMBIENTAL"
        const line1 = "EL FORTALECIMIENTO";
        const line2 = "SOCIAL Y AMBIENTAL";
        
        heroH1.innerHTML = `${line1}<br>${line2}`;
        heroH1.style.fontSize = 'clamp(1.2rem, 5vw, 1.6rem)';
        heroH1.style.lineHeight = '1.15';
        
        // Verificar y ajustar si es necesario
        setTimeout(() => {
            const height = heroH1.offsetHeight;
            const lineHeight = parseFloat(window.getComputedStyle(heroH1).lineHeight);
            const maxHeight = lineHeight * 2.2; // Permitir un poco de margen
            
            if (height > maxHeight) {
                let currentSize = parseFloat(window.getComputedStyle(heroH1).fontSize);
                const reduction = (height - maxHeight) / 20;
                const newSize = Math.max(currentSize - reduction, 1.1);
                heroH1.style.fontSize = newSize + 'rem';
            }
        }, 50);
    } else {
        // Restaurar texto original en desktop
        if (heroH1.dataset.originalText) {
            heroH1.textContent = heroH1.dataset.originalText;
            heroH1.style.fontSize = '';
            heroH1.style.lineHeight = '';
        }
    }
}

// Ejecutar al cargar y al redimensionar
adjustHeroTitle();
window.addEventListener('resize', () => {
    adjustResponsiveLayout();
    adjustHeroTitle();
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Cerrar menú al hacer clic en un enlace
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(closeMobileMenu, 300); // Delay para permitir el scroll suave
    });
});

// Cerrar menú al hacer clic fuera del menú
mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
    }
});

// Cerrar menú con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Report Modal
const reportBtn = document.getElementById('report-btn');
const reportModal = document.getElementById('report-modal');
const reportModalClose = document.getElementById('report-modal-close');
const reportForm = document.getElementById('report-form');

function openReportModal() {
    reportModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReportModal() {
    reportModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (reportBtn) {
    reportBtn.addEventListener('click', openReportModal);
}

if (reportModalClose) {
    reportModalClose.addEventListener('click', closeReportModal);
}

// Cerrar modal al hacer clic fuera
reportModal.addEventListener('click', (e) => {
    if (e.target === reportModal) {
        closeReportModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && reportModal.classList.contains('active')) {
        closeReportModal();
    }
});

// Manejar envío del formulario
if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(reportForm);
        const type = formData.get('type');
        const location = formData.get('location');
        const description = formData.get('description');
        const contact = formData.get('contact')?.trim() || '';
        
        // Mapear tipos
        const typeMap = {
            'queja': 'Queja',
            'reclamo': 'Reclamo',
            'solicitud': 'Solicitud',
            'denuncia': 'Denuncia Ambiental'
        };
        
        // Crear mensaje para WhatsApp
        const contactInfo = contact ? `*Contacto:* ${contact}` : `*Contacto:* Reporte anónimo`;
        
        const message = `*Reporte Ambiental - ${typeMap[type]}*\n\n` +
                       `*Tipo:* ${typeMap[type]}\n` +
                       `*Ubicación:* ${location}\n` +
                       `*Descripción:* ${description}\n` +
                       `${contactInfo}\n\n` +
                       `_Reporte enviado desde el sitio web de FUNDESAE_`;
        
        // Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = '573002061711';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Mostrar notificación de éxito
        showNotification('¡Reporte enviado exitosamente!', 'success');
        
        // Cerrar modal después de un breve delay
        setTimeout(() => {
            closeReportModal();
            reportForm.reset();
        }, 300);
        
        // Abrir WhatsApp después de cerrar el modal
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 600);
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Crear contenido
    const icon = type === 'success' ? 'check_circle' : 'error';
    notification.innerHTML = `
        <i class="material-icons">${icon}</i>
        <span>${message}</span>
    `;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}
