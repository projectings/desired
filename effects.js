// Skip the sparkle cursor effect and use cursor.js implementation instead

// Typing effect for intro
function writeLine(text, element, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    
    type();
  }
  
  // Start intro sequence
  function startIntro() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    
    writeLine('Authenticating...', line1, 50, () => {
      setTimeout(() => {
        writeLine('Granting access to [unknown]...', line2, 50, () => {
          setTimeout(() => {
            writeLine('Access granted! [success]', line3, 50, () => {
              setTimeout(() => {
                writeLine('Welcome back! Nice to see you here!', line4, 50, () => {
                  setTimeout(() => {
                    if (!app.skippedIntro) {
                      skipIntro();
                    }
                  }, 1500);
                });
              }, 500);
            });
          }, 500);
        });
      }, 500);
    });
  }
  
  // Skip intro and show main content
  function skipIntro() {
    if (app.skippedIntro) return;
    
    app.skippedIntro = true;
    
    const mainElement = document.getElementById('main');
    mainElement.classList.add('hidden');
    
    // Hide skip intro button
    const skipButton = document.querySelector('.top-right');
    skipButton.classList.add('hidden');
    
    // Remove the element completely after animation
    setTimeout(() => {
      mainElement.style.display = 'none';
    }, 500);
    
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.marquee-container').style.visibility = 'visible';
    document.querySelector('.marquee-wrapper').style.visibility = 'visible';
    document.querySelector('.background').style.display = 'block';
    
    // Animate in elements
    setTimeout(() => {
      startMarquee();
      typeBrandText();
      fadeInAudio();
    }, 200);
  }
  
  // Fixed marquee effect
  function startMarquee() {
    const marqueeElement = document.getElementById('marquee');
    marqueeElement.innerHTML = ''; // Clear previous content
    
    // Create the content string with all links
    let contentHTML = '';
    links.forEach((link, i) => {
      contentHTML += `<a href="https://${link.link}" target="_blank">${link.name}</a>`;
      if (i !== links.length - 1) {
        contentHTML += ' • ';
      }
    });
    
    // Fill the marquee with repeated content
    const contentSpan = document.createElement('div');
    contentSpan.className = 'marquee-content';
    contentSpan.innerHTML = contentHTML + ' • ' + contentHTML + ' • ' + contentHTML;
    marqueeElement.appendChild(contentSpan);
    
    // Start scrolling animation
    let position = 0;
    const scrollSpeed = app.marquee.speed;
    
    // Calculate when to reset (after one set of links scrolls past)
    const linkSetWidth = marqueeElement.scrollWidth / 3;
    
    const marqueeInterval = setInterval(() => {
      position++;
      
      if (position >= linkSetWidth) {
        position = 0;
      }
      
      contentSpan.style.transform = `translateX(-${position}px)`;
    }, scrollSpeed);
  }
  
  // Type brand description
  function typeBrandText() {
    const brand = document.getElementById('brand');
    let index = 0;
    let charIndex = 0;
    
    function typeNextWord() {
      if (index >= app.brandDescription.length) {
        index = 0;
        brand.textContent = '';
      }
      
      const word = app.brandDescription[index];
      
      if (charIndex < word.length) {
        brand.textContent += word.charAt(charIndex);
        charIndex++;
        setTimeout(typeNextWord, 100);
      } else {
        charIndex = 0;
        index++;
        setTimeout(() => {
          brand.textContent = '';
          typeNextWord();
        }, 1000);
      }
    }
    
    typeNextWord();
  }
  
  // Fade in audio
  function fadeInAudio() {
    if (!app.audioElement) return;
    
    app.audioElement.play();
    
    let volume = 0;
    const interval = setInterval(() => {
      volume += 0.01;
      if (volume >= app.musicVolume) {
        volume = app.musicVolume;
        clearInterval(interval);
      }
      app.audioElement.volume = volume;
    }, app.musicFadeIn / 100);
  }