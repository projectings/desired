// Setup on document load
document.addEventListener('DOMContentLoaded', () => {
    // Setup audio
    app.audioElement = document.getElementById('audio');
    app.audioElement.volume = 0;
  
    // Populate marquee links
    const marquee = document.getElementById('marquee');
    
    links.forEach((link, i) => {
      const a = document.createElement('a');
      a.href = `https://${link.link}`;
      a.target = '_blank';
      a.textContent = link.name;
      marquee.appendChild(a);
      
      if (i !== links.length - 1) {
        const separator = document.createTextNode(' • ');
        marquee.appendChild(separator);
      }
    });
  
    // Document title changer
    let titleCounter = 0;
    
    setInterval(() => {
      document.title = titles[titleCounter % titles.length];
      titleCounter++;
    }, 2000);
  
    // Start intro sequence
    startIntro();
    
    // Setup event listeners
    setupEventListeners();
  });
  
  function setupEventListeners() {
    // Skip intro button
    document.querySelector('.skip').addEventListener('click', skipIntro);
    
    // Prevent right click
    document.addEventListener('contextmenu', event => event.preventDefault());
  } 