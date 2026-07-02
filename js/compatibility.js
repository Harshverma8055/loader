document.addEventListener('DOMContentLoaded', () => {
  const brandSelect = document.getElementById('tractor-brand');
  const hpSelect = document.getElementById('tractor-hp');
  const checkBtn = document.getElementById('check-compatibility');
  
  const resultPlaceholder = document.getElementById('result-placeholder');
  const resultActive = document.getElementById('result-active');
  
  const resultLoaderName = document.getElementById('result-loader-name');
  const resultLoaderFit = document.getElementById('result-loader-fit');
  const specHeight = document.getElementById('spec-height');
  const specCapacity = document.getElementById('spec-capacity');
  const specSteel = document.getElementById('spec-steel');
  const specBrake = document.getElementById('spec-brake');
  const resultBtn = document.getElementById('result-whatsapp-btn');

  // Loader Database matching rules
  const loaderSpecs = {
    '30-40': {
      name: 'Madina Light Utility Loader',
      height: '10.5 Feet (Max Reach)',
      capacity: '1,000 kg (1.0 Ton Tested)',
      steel: '6mm Premium Carbon Steel',
      chassis: 'Basic Chassis Bracket Rails',
      message: 'Perfect for light handling, manure loading, and leveling.'
    },
    '41-50': {
      name: 'Madina Standard 12-Ft Hydraulic Loader',
      height: '12.0 Feet (Dumping Height)',
      capacity: '1,500 kg (1.5 Tons Tested)',
      steel: '8mm Reinforced structural steel',
      chassis: 'Full Chassis Tie-Bar Framing',
      message: 'Designed for average agricultural loading, fodder storage, and soil handling.'
    },
    '51-60': {
      name: 'Madina Heavy-Duty 14-Ft Loader',
      height: '14.0 Feet (Extra High Reach)',
      capacity: '2,000 kg (2.0 Tons Tested)',
      steel: '8mm / 10mm Dual Reinforced Steel',
      chassis: 'Extended Side Arm Brace & Tie-Bar',
      message: 'Excellent configuration for Brick Kilns, Sand Loading, and tall transport trucks.'
    },
    '60+': {
      name: 'Madina High-Reach 24-Ft Loader',
      height: '24.0 Feet (Ultra High Reach)',
      capacity: '2.5 Tons Safe Working Load',
      steel: '10mm & 12mm Triple Reinforced',
      chassis: 'Double Reinforced Heavy Steel Box Frame',
      message: 'Engineered for extreme workloads, elevated silos, and high-clearance block kiln logistics.'
    }
  };

  if (checkBtn) {
    checkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const brand = brandSelect.value;
      const hpRange = hpSelect.value;
      
      if (!brand || !hpRange) {
        alert('Please select both your Tractor Brand and Horsepower to check compatibility.');
        return;
      }
      
      const spec = loaderSpecs[hpRange];
      if (spec) {
        // Display loader details
        resultLoaderName.textContent = spec.name;
        resultLoaderFit.textContent = `Optimized mounting bracket setup for ${brand} (${hpRange} HP class)`;
        specHeight.textContent = spec.height;
        specCapacity.textContent = spec.capacity;
        specSteel.textContent = spec.steel;
        specBrake.textContent = spec.chassis;
        
        // WhatsApp URL construction
        const phoneNumber = '919414308945'; // Madina Sales representative number
        const encodedText = encodeURIComponent(
          `Hello Madina Engineering Works, I am looking for a tractor mounted hydraulic loader compatible with my tractor.\n\n` +
          `• Brand: ${brand}\n` +
          `• Horsepower Class: ${hpRange} HP\n` +
          `• Recommended Model: ${spec.name}\n` +
          `Please provide a quotation and nearest installation details.`
        );
        
        resultBtn.href = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        resultBtn.target = '_blank';
        resultBtn.rel = 'noopener noreferrer';
        resultBtn.innerHTML = `<span>Enquire price for ${brand} (${hpRange} HP)</span>`;
        
        // Hide placeholder and reveal result
        resultPlaceholder.style.display = 'none';
        resultActive.style.display = 'flex';
      }
    });
  }
});
