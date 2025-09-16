

// let timerInterval;
// let totalSeconds = 0;
// let initialTotal = 0; // For blackout logic reference
// let isRunning = false;
// let bellTime = 10;
// let flashInterval;
// let bellInterval;
// let audioContext;

// // Initialize audio context for fallback beep
// function initAudio() {
//     try {
//         audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     } catch (e) {
//         console.log('Web Audio API not supported');
//     }
// }

// // Create a simple beep sound using Web Audio API
// function createBeep(frequency = 800, duration = 200) {
//     if (!audioContext) return;
    
//     const oscillator = audioContext.createOscillator();
//     const gainNode = audioContext.createGain();
    
//     oscillator.connect(gainNode);
//     gainNode.connect(audioContext.destination);
    
//     oscillator.frequency.value = frequency;
//     oscillator.type = 'sine';
    
//     gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
//     gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
    
//     oscillator.start(audioContext.currentTime);
//     oscillator.stop(audioContext.currentTime + duration / 1000);
// }

// // Play bell sound with fallback
// function playBellSound() {
//     const bellSound = document.getElementById('bell-sound');
//     if (bellSound && bellSound.src) {
//         bellSound.play().catch(() => {
//             // Fallback to Web Audio API beep
//             createBeep();
//         });
//     } else {
//         // Fallback to Web Audio API beep
//         createBeep();
//     }
// }

// // Function to set the initial timer values
// function setTimer() {
//     const minutes = parseInt(document.getElementById('minutes').value) || 0;
//     const seconds = parseInt(document.getElementById('seconds').value) || 0;
//     totalSeconds = minutes * 60 + seconds;
//     initialTotal = totalSeconds; // Store original duration for blackout logic
//     updateTimerDisplay();
// }

// // Function to start the timer countdown
// function startTimer() {
//     if (!isRunning && totalSeconds > 0) {
//         isRunning = true;
//         bellTime = parseInt(document.getElementById('bell-seconds').value); // Get the bell time
//         timerInterval = setInterval(countDown, 1000);
        
//         // Initialize audio on first user interaction
//         if (!audioContext) {
//             initAudio();
//         }
//     }
// }

// // Function to pause the timer
// function pauseTimer() {
//     clearInterval(timerInterval);
//     isRunning = false;
// }

// // Function to reset the timer
// function resetTimer() {
//     clearInterval(timerInterval);
//     clearInterval(flashInterval);
//     clearInterval(bellInterval);
//     totalSeconds = initialTotal;
//     isRunning = false;
//     updateTimerDisplay();
//     stopFlashing();
// }

// // Function to add 1 minute to the timer
// function addTime() {
//     totalSeconds += 60;
//     initialTotal += 60; // keep blackout logic consistent
//     updateTimerDisplay();
// }

// // Function to subtract 1 minute from the timer
// function subtractTime() {
//     totalSeconds = Math.max(0, totalSeconds - 60);
//     initialTotal = Math.max(0, initialTotal - 60);
//     updateTimerDisplay();
// }

// // Function to update the displayed timer + blackout logic
// function updateTimerDisplay() {
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     const timerDisplay = document.getElementById('timer-display');

//     if (totalSeconds > 0) {
//         timerDisplay.style.fontSize = "450px"; 
//         timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     } else {
//         timerDisplay.style.fontSize = "200px";
//         timerDisplay.textContent = "Time's Up!";
//     }

//     // Blackout logic
//     const body = document.body;
//     if (totalSeconds <= initialTotal - 60 && totalSeconds > 300) {
//         // After first minute until last 5 minutes → blackout
//         body.classList.add("blackout");
//     } else {
//         // First minute & last 5 minutes → show timer
//         body.classList.remove("blackout");
//     }
// }

// // Function to handle the countdown logic
// function countDown() {
//     if (totalSeconds > 0) {
//         totalSeconds--;
//         updateTimerDisplay();
        
//         // Trigger the bell and flashing together when the time reaches the bellTime
//         if (totalSeconds === bellTime) {
//             startBellAndFlashing();
//         }

//         // Ensure the flashing continues until the timer reaches zero
//         if (totalSeconds <= 5) {
//             startFlashing();
//         }

//     } else {
//         resetTimer();
//         document.getElementById('timer-display').textContent = "Time's Up!";
//     }
// }

// // Function to start the bell and flashing simultaneously
// function startBellAndFlashing() {
//     // Start the bell sound every second for the remaining time until zero
//     bellInterval = setInterval(() => {
//         if (totalSeconds > 0) {
//             playBellSound();
//         } else {
//             clearInterval(bellInterval);
//         }
//     }, 1000);

//     // Start flashing the background
//     startFlashing();
// }

// // Manual bell play function with synchronized flashing for 10 seconds
// function playBellNow() {
//     if (!audioContext) {
//         initAudio();
//     }
    
//     let duration = 10; // Duration for the bell and flash
//     playBellSound();

//     bellInterval = setInterval(() => {
//         if (duration > 1) { 
//             playBellSound();
//             duration--;
//         } else {
//             clearInterval(bellInterval);
//             stopFlashing();
//         }
//     }, 1000);

//     startFlashing();
// }

// // Function to start flashing background color
// function startFlashing() {
//     if (!flashInterval) {
//         flashInterval = setInterval(() => {
//             document.body.style.backgroundColor = 
//                 document.body.style.backgroundColor === 'red' ? 'black' : 'red';
//         }, 500);
//     }
// }

// // Stop flashing and reset background color
// function stopFlashing() {
//     clearInterval(flashInterval);
//     flashInterval = null;
//     document.body.style.backgroundColor = 'black';
// }

// // Initialize audio context when the page loads
// document.addEventListener('DOMContentLoaded', function() {
//     // Audio context will be initialized on first user interaction due to browser policies
// });




