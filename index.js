const details = {
  'phone': '+254 724530004',
  'linkedIn_link': 'https://www.linkedin.com/company/haki-tech',
  'instagram_link': 'https://www.instagram.com/haki_tech',
  'x_link': 'https://x.com/haki_tech',
}

// Render Footer
function renderFooter() {
  const footers = document.querySelectorAll("footer");
  footers.forEach(footer => {
    footer.innerHTML = `
      <div class="flex flex-1 flex-col" style="max-width:95vw; margin:0 auto;">
        <p id="contacts" class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center"> Contact Us </p>
        <footer class="flex flex-col gap-6 px-5 py-10 text-center @container border-t border-solid border-t-[#2c3135]">
        <div class="flex flex-wrap justify-center items-center gap-4">
          <!-- Twitter/X -->
          <a href="${details['x_link']}" class="text-gray-800 dark:text-white">
            <svg class="w-[16px] h-[16px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="${details['instagram_link']}" class="text-gray-800 dark:text-white">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="${details['linkedIn_link']}" class="text-gray-800 dark:text-white">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/${details['phone']}" class="text-gray-800 dark:text-white">
            <svg class="w-[21px] h-[21px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
              <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
            </svg>
          </a>
          <!-- Mobile/Phone -->
          <a href="tel:${details['phone']}" class="text-gray-800 dark:text-white">
            <svg class="w-[21px] h-[21px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
            </svg>
          </a>
          </div>
        <p class="text-base font-normal leading-normal">&copy; 2024 Haki Tech. All rights reserved.</p>
        </footer>
      </div>
      `;
  });
}

function renderToggleTheme(){
  const toggleButton = document.getElementById('toggle_theme');
  if (toggleButton) {
    toggleButton.innerHTML = `
      <label class="switch">
          <input id="checkbox" type="checkbox" />
          <span class="slider">
              <!-- Moon SVG for Dark Mode (unchecked) -->
              <svg class="moon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
              </svg>
              <!-- Sun SVG for Light Mode (checked) -->
              <svg class="sun" className="w-[21px] h-[21px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
              </svg>
          </span>
      </label>
    `;
  }
}

// Quotation modal
function showModal() {
  modal = document.createElement('div');
  modal.id = 'out-of-view-modal';
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.zIndex = 1000;
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.innerHTML = `
    <div style="background:#fff; padding:24px 32px; border-radius:8px; min-width:300px; position:relative;">
      <span id="closeModal" style="position:absolute; top:6px; right:12px; cursor:pointer; font-size:20px;">&times;</span>
      <h2
        class="text-center text-lg pt-5"
      >Coming soon! Please contact us using the listed links at the bottom of the page for more information. Thank you for choosing us!</h2>
    </div>
  `;
  document.body.appendChild(modal);
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.removeChild(modal);
  };
  document.getElementById('closeModal').onclick = closeModal;
  document.getElementById('out-of-view-modal').onclick = closeModal;
}

// On DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  renderToggleTheme();

  // Light/Dark mode toggle based on checkbox
  const checkbox = document.getElementById('checkbox');
  const root = document.documentElement;


  // This logic now assumes: UNCHECKED = DARK, CHECKED = LIGHT
  function setMode(isLight) {
    const theme = isLight ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // On load, set mode from localStorage or system preference
  (() => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    const isLight = savedTheme === 'light';
    checkbox.checked = isLight;
    root.setAttribute('data-theme', savedTheme);
  })();

  // On toggle, change the theme
  checkbox.addEventListener('change', (e) => {
    const isLight = e.target.checked;
    setMode(isLight);
  });

  const showQuotesButton = document.getElementById('show-quotes');
  if (showQuotesButton) {
    showQuotesButton.addEventListener('click', showModal);
  }
});
