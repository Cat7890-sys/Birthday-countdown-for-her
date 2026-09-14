/**
 * ============================================================================
 * BIRTHDAY COUNTDOWN & CELEBRATION
 * ============================================================================
 * Hosted easily on GitHub Pages!
 * Fully responsive on mobile (iOS / Android), tablet, and desktop.
 */

// ============================================================================
// ⚙️ BIRTHDAY CUSTOMIZATION (EDIT THESE VALUES FOR YOUR CELEBRATION)
// ============================================================================

/**
 * 1. Target Birthday Date & Time
 * Format: "YYYY-MM-DDTHH:MM:SS" (e.g., "2026-09-25T00:00:00")
 * Change this to the exact date and time of the birthday!
 */
const birthdayDate = "2026-10-05T00:00:00";

/**
 * 2. Birthday Person's Name
 * Displayed dynamically in the title and celebration screen.
 */
const birthdayName = "Sarah";

/**
 * 3. Personalized Heartfelt Birthday Message
 * Appears when the countdown reaches zero.
 */
const birthdayMessage = "Happy Birthday to the most wonderful person in my life. Thank you for filling every single day with warmth, laughter, and so much happiness. Being with you is my favorite thing in the world, and I wanted to make this little surprise just to remind you how deeply loved and cherished you are. Here's to you, all our sweetest memories, and all the adventures still ahead of us. I love you endlessly! ❤️✨";

/**
 * 4. Background Image
 * Place your personal birthday photo in: images/background.jpg
 * If left empty or file is missing, a beautiful pink-and-blue mesh gradient is used automatically.
 */
const backgroundImage = "images/background.jpg";

/**
 * 5. Background Overlay Opacity (0.0 = completely clear, 1.0 = dark & opaque)
 * Default: 0.65 provides optimal text contrast over photos.
 */
const overlayOpacity = 0.65;

/**
 * 6. Background Music Path
 * Place your audio file in: audio/background-music.mp3
 * Supports MP3, WAV, and OGG formats!
 */
const backgroundMusic = "audio/background-music.mp3";

/**
 * 7. Loop Music Setting
 * If true, repeats automatically.
 */
const loopMusic = true;

/**
 * 8. Curated Nostalgic Memories (Displayed on the last day / celebration)
 */
const defaultMemories = [
  {
    title: "Our Golden Hour Laughs",
    date: "A Summer Evening",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80",
    caption: "One of my absolute favorite evenings with you—we couldn't stop laughing."
  },
  {
    title: "Midnight Drive With You",
    date: "Starry Road Trip",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=80",
    caption: "Windows down, your hand in mine, favorite songs playing under the starry sky."
  },
  {
    title: "Sunday Mornings & Big Dreams",
    date: "Our Quiet Moments",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80",
    caption: "Coffee, warm cuddles, and talking for hours about our future together."
  },
  {
    title: "My Favorite Smile",
    date: "Every Single Day",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80",
    caption: "Watching you shine and smile is the best feeling in the world. I'm so proud of you."
  }
];

/**
 * 9. Initial Pre-Loaded Heartfelt Guestbook Wishes
 */
const defaultGuestbookMessages = [
  {
    id: "wish-love",
    author: "With all my heart ❤️",
    role: "Forever Yours 💌",
    avatar: "❤️",
    message: "Happy Birthday, beautiful! I put together this surprise because you deserve the world and so much more. Thank you for making my life so incredibly bright. I love you with all my heart, today and every day! ❤️✨",
    sticker: "💖",
    date: "Today",
    likes: 35,
    likedByUser: true,
    type: "text"
  },
  {
    id: "wish-1",
    author: "Jessica M.",
    role: "Best Friend 👯‍♀️",
    avatar: "JM",
    message: "Happy Birthday to my absolute favorite human! Thank you for always being there with late-night taco runs, endless belly laughs, and unconditional love. This is YOUR year to shine! 💖✨",
    sticker: "💖",
    date: "Today",
    likes: 16,
    likedByUser: false,
    type: "text"
  },
  {
    id: "wish-2",
    author: "Liam & David",
    role: "College Crew 🎓",
    avatar: "LD",
    message: "Happiest of birthdays, Sarah! Can't wait to celebrate tonight with the whole gang. Raising a giant toast to you and many more epic road trips ahead! 🥂🎉",
    sticker: "🥂",
    date: "Today",
    likes: 12,
    likedByUser: false,
    type: "text"
  },
  {
    id: "wish-3",
    author: "Auntie Clara",
    role: "Family Love 💕",
    avatar: "AC",
    message: "Wishing my wonderful niece the sweetest birthday celebration! Watching you grow into such a kind, brilliant person brings all of us so much pride. Big hugs! 🎂❤️",
    sticker: "🎂",
    date: "Today",
    likes: 24,
    likedByUser: false,
    type: "text"
  }
];

/**
 * 10. Curated Default Celebration Burst Photos
 * Pre-loaded high-resolution, joyful photos so the celebration works out of the box!
 */
const defaultBurstPhotos = [
  {
    id: "sample-1",
    name: "Golden Joy",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&auto=format&fit=crop&q=80",
    caption: "My favorite smile in the whole world ✨",
    timestamp: 1710000001
  },
  {
    id: "sample-2",
    name: "Birthday Cheers",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&auto=format&fit=crop&q=80",
    caption: "Celebrating the most wonderful girl today and always ❤️",
    timestamp: 1710000002
  },
  {
    id: "sample-3",
    name: "Starlit Road Trip",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop&q=80",
    caption: "Adventures with you are my absolute favorite 🌌",
    timestamp: 1710000003
  },
  {
    id: "sample-4",
    name: "Cozy Dreams",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop&q=80",
    caption: "Warm coffee, cozy moments, and endless love ☕",
    timestamp: 1710000004
  },
  {
    id: "sample-5",
    name: "Pure Happiness",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=700&auto=format&fit=crop&q=80",
    caption: "Your laugh is my absolute favorite sound in the world 🎊",
    timestamp: 1710000005
  },
  {
    id: "sample-6",
    name: "Kindred Heart",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&auto=format&fit=crop&q=80",
    caption: "To the love of my life, I adore you endlessly ❤️",
    timestamp: 1710000006
  }
];

// ============================================================================
// CORE APPLICATION LOGIC
// ============================================================================

// State
let targetDate = new Date(birthdayDate);
let currentName = birthdayName;
let currentMessage = birthdayMessage;
let currentBgImage = backgroundImage;
let currentOverlayOpacity = overlayOpacity;

let countdownInterval = null;
let isCelebrationActive = false;

// Photo Burst & Celebration Customization State
let currentPhotos = [];
let burstConfig = {
  burstStyle: "mixed",           // "burst" | "float" | "fall" | "pop" | "mixed"
  photoShape: "polaroid",        // "polaroid" | "rounded" | "circle" | "square" | "mixed"
  photoSize: "medium",           // "small" | "medium" | "large"
  burstSpeed: "normal",          // "slow" | "normal" | "fast" | "explosive"
  burstDuration: "12",           // "5" | "8" | "12" | "infinite"
  photoRotation: "medium",       // "none" | "subtle" | "medium" | "wild"
  photoBorderColor: "gradient",  // "gradient" | "pink" | "light-pink" | "hot-pink" | "blue" | "light-blue" | "purple"
  photoBorderThickness: "2",     // "1" | "2" | "4" | "6"
  photoCornerRadius: 16,
  photoGlowIntensity: 0.8,
  confettiAmount: "normal",      // "low" | "normal" | "high"
  confettiSpeed: "normal",       // "slow" | "normal" | "fast"
  gradientPreset: "dusk",
  colorPinkIntensity: 1.0,
  colorBlueIntensity: 1.0,
  colorPurpleIntensity: 1.0,
  headline: "Happy Birthday, My Love ❤️"
};

let photoBurstActiveTimeout = null;
let heroPhotosTimerTimeout = null;

// Background Audio State
let isMusicPlaying = false;
let isMusicMuted = false;
let userExplicitlyPaused = false;
let audioContext = null;
let synthInterval = null;

// Guestbook State
let guestbookMessages = [];
let currentGuestbookFilter = "all";
let selectedSticker = "💖";
let modalMediaStream = null;
let modalMediaRecorder = null;
let modalRecordedChunks = [];
let modalRecordedBlobUrl = null;

// DOM Elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const daysBox = document.getElementById("daysBox");
const hoursBox = document.getElementById("hoursBox");
const minutesBox = document.getElementById("minutesBox");
const secondsBox = document.getElementById("secondsBox");

const countdownScreen = document.getElementById("countdownScreen");
const celebrationScreen = document.getElementById("celebrationScreen");

const heroPersonName = document.getElementById("heroPersonName");
const celebrationTitle = document.getElementById("celebrationTitle");
const celebrationMsg = document.getElementById("celebrationMsg");
const targetDateDisplay = document.getElementById("targetDateDisplay");

const bgImageEl = document.getElementById("bgImage");
const bgOverlayEl = document.getElementById("bgOverlay");

// Music Elements
const bgAudio = document.getElementById("bgAudio");
const musicPlayBtn = document.getElementById("musicPlayBtn");
const musicBtn = musicPlayBtn; // Alias for backwards-compatibility
const musicMuteBtn = document.getElementById("musicMuteBtn");
const musicBtnLabel = document.getElementById("musicBtnLabel");
const soundBars = document.getElementById("soundBars");
const autoplayMusicPrompt = document.getElementById("autoplayMusicPrompt");

// Sections
const lastDaySection = document.getElementById("lastDaySection");
const guestbookSection = document.getElementById("guestbookSection");
const guestbookGallery = document.getElementById("guestbookGallery");
const guestbookCount = document.getElementById("guestbookCount");
const openSignGuestbookBtn = document.getElementById("openSignGuestbookBtn");
const guestbookFilterTabs = document.getElementById("guestbookFilterTabs");

// Sign Guestbook Modal
const signGuestbookModal = document.getElementById("signGuestbookModal");
const closeSignGuestbookBtn = document.getElementById("closeSignGuestbookBtn");
const modeTextBtn = document.getElementById("modeTextBtn");
const modeVideoBtn = document.getElementById("modeVideoBtn");
const textWishForm = document.getElementById("textWishForm");
const videoWishForm = document.getElementById("videoWishForm");
const wishAuthorName = document.getElementById("wishAuthorName");
const wishAuthorRole = document.getElementById("wishAuthorRole");
const wishMessageText = document.getElementById("wishMessageText");
const stickerPicker = document.getElementById("stickerPicker");

// Modal Video Elements
const modalVideoAuthorName = document.getElementById("modalVideoAuthorName");
const modalVideoAuthorRole = document.getElementById("modalVideoAuthorRole");
const modalRecIndicator = document.getElementById("modalRecIndicator");
const modalVideoPreview = document.getElementById("modalVideoPreview");
const modalRecStartBtn = document.getElementById("modalRecStartBtn");
const modalRecStopBtn = document.getElementById("modalRecStopBtn");
const modalPostVideoWishBtn = document.getElementById("modalPostVideoWishBtn");

// Dev Modal Elements
const devModal = document.getElementById("devModal");
const devToggleBtn = document.getElementById("devToggleBtn");
const closeDevModalBtn = document.getElementById("closeDevModal");
const devDateInput = document.getElementById("devDateInput");
const devNameInput = document.getElementById("devNameInput");
const devHeadlineInput = document.getElementById("devHeadlineInput");
const devMessageInput = document.getElementById("devMessageInput");
const devBgInput = document.getElementById("devBgInput");
const devOpacityInput = document.getElementById("devOpacityInput");
const devOpacityVal = document.getElementById("devOpacityVal");
const applyDevBtn = document.getElementById("applyDevBtn");
const copyConfigBtn = document.getElementById("copyConfigBtn");

// Photo Burst & Pinned Hero Elements
const photoBurstOverlay = document.getElementById("photoBurstOverlay");
const replayBurstBtn = document.getElementById("replayBurstBtn");
const heroPhotosPinnedContainer = document.getElementById("heroPhotosPinnedContainer");
const heroTimerProgress = document.getElementById("heroTimerProgress");
const heroPhotosPinnedCards = document.getElementById("heroPhotosPinnedCards");

// Customize Panel - Photos Tab
const panelPhotoCount = document.getElementById("panelPhotoCount");
const photoThumbnailsGrid = document.getElementById("photoThumbnailsGrid");
const photoFileInput = document.getElementById("photoFileInput");
const addPhotosBtn = document.getElementById("addPhotosBtn");
const loadSamplePhotosBtn = document.getElementById("loadSamplePhotosBtn");
const clearAllPhotosBtn = document.getElementById("clearAllPhotosBtn");

// Customize Panel - Burst & FX Controls
const burstStyleSelect = document.getElementById("burstStyleSelect");
const photoShapeSelect = document.getElementById("photoShapeSelect");
const photoSizeSelect = document.getElementById("photoSizeSelect");
const burstSpeedSelect = document.getElementById("burstSpeedSelect");
const burstDurationSelect = document.getElementById("burstDurationSelect");
const photoRotationSelect = document.getElementById("photoRotationSelect");
const photoBorderColorSelect = document.getElementById("photoBorderColorSelect");
const photoBorderThicknessSelect = document.getElementById("photoBorderThicknessSelect");
const photoCornerRadiusInput = document.getElementById("photoCornerRadiusInput");
const photoGlowIntensityInput = document.getElementById("photoGlowIntensityInput");
const confettiAmountSelect = document.getElementById("confettiAmountSelect");
const confettiSpeedSelect = document.getElementById("confettiSpeedSelect");

// Customize Panel - Background Tab
const bgFileInput = document.getElementById("bgFileInput");
const uploadBgBtn = document.getElementById("uploadBgBtn");
const bgGradientPresetSelect = document.getElementById("bgGradientPresetSelect");

// Customize Panel - Music Tab
const audioFileInput = document.getElementById("audioFileInput");
const uploadAudioBtn = document.getElementById("uploadAudioBtn");
const uploadedAudioName = document.getElementById("uploadedAudioName");
const devMusicInput = document.getElementById("devMusicInput");
const previewMusicBtn = document.getElementById("previewMusicBtn");
const devMusicVolume = document.getElementById("devMusicVolume");
const devMusicLoop = document.getElementById("devMusicLoop");

// Customize Panel - Colors Tab
const colorPinkIntensity = document.getElementById("colorPinkIntensity");
const colorBlueIntensity = document.getElementById("colorBlueIntensity");
const colorPurpleIntensity = document.getElementById("colorPurpleIntensity");

// Customize Panel - Quick Test & Footer Buttons
const testPhotoBurstActionBtn = document.getElementById("testPhotoBurstActionBtn");
const testBurstModalFooterBtn = document.getElementById("testBurstModalFooterBtn");
const closeDevModalBottomBtn = document.getElementById("closeDevModalBottomBtn");
const customizeNavTabs = document.getElementById("customizeNavTabs");

// Quick Test Buttons
const test10sBtn = document.getElementById("test10sBtn");
const testZeroBtn = document.getElementById("testZeroBtn");
const testLastDayBtn = document.getElementById("testLastDayBtn");
const testGuestbookBtn = document.getElementById("testGuestbookBtn");
const resetCountdownBtn = document.getElementById("resetCountdownBtn");

// Lightbox Elements
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");

// Tab elements in last-day section
const tabMemories = document.getElementById("tabMemories");
const tabVideos = document.getElementById("tabVideos");
const memoriesView = document.getElementById("memoriesView");
const videoBoothView = document.getElementById("videoBoothView");

// Video recorder elements (vault)
const recordVideoBtn = document.getElementById("recordVideoBtn");
const stopVideoBtn = document.getElementById("stopVideoBtn");
const saveVideoBtn = document.getElementById("saveVideoBtn");
const videoPreview = document.getElementById("videoPreview");
const recordingIndicator = document.getElementById("recordingIndicator");
const authorNameInput = document.getElementById("authorNameInput");
const recordedList = document.getElementById("recordedList");

let mediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];
let recordedBlobUrl = null;

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  setupDynamicContent();
  setupBackground();
  startCountdown();
  initParticlesCanvas();
  initConfettiCanvas();
  setupEventListeners();
  renderMemories();
  initBackgroundMusic();
  initGuestbook();
  initPhotoStorageAndBurstSettings();
});

// Subtle Romantic Messages Rotation
const romanticCountdownMessages = [
  "Counting down to your day...",
  "Almost there, beautiful ❤️",
  "Just a little longer...",
  "Every second brings me closer to celebrating you ✨",
  "Can't wait to see you smile ❤️"
];
let romanticMsgIndex = 0;
let romanticMsgInterval = null;

function initRomanticCountdownMessages() {
  const msgEl = document.getElementById("romanticSubtleMsg");
  if (!msgEl) return;

  if (romanticMsgInterval) clearInterval(romanticMsgInterval);

  msgEl.textContent = romanticCountdownMessages[0];

  romanticMsgInterval = setInterval(() => {
    if (isCelebrationActive) {
      clearInterval(romanticMsgInterval);
      return;
    }
    msgEl.classList.add("fade-out");
    setTimeout(() => {
      romanticMsgIndex = (romanticMsgIndex + 1) % romanticCountdownMessages.length;
      msgEl.textContent = romanticCountdownMessages[romanticMsgIndex];
      msgEl.classList.remove("fade-out");
    }, 400);
  }, 4500);
}

function setupDynamicContent() {
  const countdownEyebrow = document.getElementById("countdownEyebrow");
  if (countdownEyebrow) {
    countdownEyebrow.textContent = "Something I Made Just For You ❤️";
  }
  const countdownMainTitle = document.getElementById("countdownMainTitle");
  if (countdownMainTitle) {
    countdownMainTitle.textContent = "Your Special Day Is Almost Here...";
  }

  if (heroPersonName) heroPersonName.textContent = currentName;

  const celebrationEyebrow = document.getElementById("celebrationEyebrow");
  if (celebrationEyebrow) {
    celebrationEyebrow.textContent = burstConfig.headline || "Happy Birthday, My Love ❤️";
  }
  if (celebrationTitle) {
    celebrationTitle.textContent = "Happy Birthday, My Love ❤️";
  }
  const celebrationSurpriseIntro = document.getElementById("celebrationSurpriseIntro");
  if (celebrationSurpriseIntro) {
    celebrationSurpriseIntro.textContent = "I made this little surprise just for you.";
  }
  if (celebrationMsg) celebrationMsg.textContent = currentMessage;

  // Format date readable
  if (targetDateDisplay) {
    try {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      targetDateDisplay.textContent = targetDate.toLocaleDateString(undefined, options);
    } catch {
      targetDateDisplay.textContent = "October 5";
    }
  }

  // Set initial dev form values
  if (devDateInput) {
    try {
      const isoLocal = new Date(targetDate.getTime() - targetDate.getTimezoneOffset() * 60000).toISOString().slice(0, 19);
      devDateInput.value = isoLocal;
    } catch {
      devDateInput.value = birthdayDate;
    }
  }
  if (devNameInput) devNameInput.value = currentName;
  if (devMessageInput) devMessageInput.value = currentMessage;
  if (devBgInput) devBgInput.value = currentBgImage;
  if (devOpacityInput) {
    devOpacityInput.value = String(currentOverlayOpacity);
    if (devOpacityVal) devOpacityVal.textContent = `${Math.round(currentOverlayOpacity * 100)}%`;
  }
}

function setupBackground() {
  if (!bgImageEl || !bgOverlayEl) return;

  // Apply overlay opacity
  document.documentElement.style.setProperty("--overlay-opacity", String(currentOverlayOpacity));

  if (currentBgImage && currentBgImage.trim() !== "") {
    // Pre-test image to avoid broken icon
    const imgTest = new Image();
    imgTest.src = currentBgImage;
    imgTest.onload = () => {
      bgImageEl.style.backgroundImage = `url("${currentBgImage}")`;
      bgImageEl.style.opacity = "1";
    };
    imgTest.onerror = () => {
      // Graceful fallback to pure animated gradient mesh
      bgImageEl.style.opacity = "0";
    };
  } else {
    bgImageEl.style.opacity = "0";
  }
}

// ============================================================================
// COUNTDOWN TIMER ENGINE
// ============================================================================
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);

  initRomanticCountdownMessages();
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  // If countdown reached zero or passed
  if (distance <= 0) {
    triggerCelebration();
    return;
  }

  // If within last 24 hours (last day), unlock heartfelt memory vault & video messages
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  if (distance <= ONE_DAY_MS && lastDaySection && !lastDaySection.classList.contains("unlocked")) {
    unlockLastDaySection();
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update UI with smooth bounce on change
  updateDigit(daysEl, daysBox, days);
  updateDigit(hoursEl, hoursBox, hours);
  updateDigit(minutesEl, minutesBox, minutes);
  updateDigit(secondsEl, secondsBox, seconds);
}

function updateDigit(textEl, boxEl, value) {
  if (!textEl) return;
  const formatted = String(value).padStart(2, "0");
  if (textEl.textContent !== formatted) {
    textEl.textContent = formatted;
    if (boxEl) {
      boxEl.classList.add("tick");
      setTimeout(() => boxEl.classList.remove("tick"), 300);
    }
  }
}

// ============================================================================
// CELEBRATION REVEAL & CONFETTI
// ============================================================================
function triggerCelebration() {
  if (countdownInterval) clearInterval(countdownInterval);
  if (romanticMsgInterval) clearInterval(romanticMsgInterval);

  isCelebrationActive = true;

  // Swap views with smooth animation
  if (countdownScreen) countdownScreen.classList.add("hidden");
  if (celebrationScreen) celebrationScreen.classList.add("active");

  const celebrationEyebrow = document.getElementById("celebrationEyebrow");
  if (celebrationEyebrow) {
    celebrationEyebrow.textContent = burstConfig.headline || "Happy Birthday, My Love ❤️";
  }

  if (celebrationTitle) {
    celebrationTitle.textContent = "Happy Birthday, My Love ❤️";
  }

  const celebrationSurpriseIntro = document.getElementById("celebrationSurpriseIntro");
  if (celebrationSurpriseIntro) {
    celebrationSurpriseIntro.textContent = "I made this little surprise just for you.";
  }

  if (celebrationMsg) {
    celebrationMsg.textContent = currentMessage;
  }

  // Always unlock last-day features on celebration
  unlockLastDaySection();

  // Reveal Guestbook gallery alongside birthday celebration
  if (guestbookSection) {
    guestbookSection.classList.add("active");
    renderGuestbookGallery();
  }

  // Launch celebratory Confetti
  startConfettiAnimation();

  // Trigger Photo Burst feature (with 5-second pinned hero cards)
  triggerPhotoBurst();

  // Keep music playing smoothly; if not yet started and user hasn't explicitly paused, start it
  if (!isMusicPlaying && !userExplicitlyPaused) {
    playMusic();
  }
}

function unlockLastDaySection() {
  if (lastDaySection) {
    lastDaySection.classList.add("unlocked");
  }
}

// ============================================================================
// BACKGROUND MUSIC ENGINE (MP3 / WAV / OGG & Mobile Autoplay Policy Handler)
// ============================================================================

function initBackgroundMusic() {
  if (!bgAudio) return;

  // Configure audio tag with backgroundMusic setting
  bgAudio.src = backgroundMusic;
  bgAudio.loop = Boolean(loopMusic);
  bgAudio.volume = 0.65;

  bgAudio.addEventListener("ended", () => {
    if (!loopMusic) {
      isMusicPlaying = false;
      updateMusicUI(false);
    }
  });

  bgAudio.addEventListener("error", () => {
    console.warn("Notice: Audio file at " + backgroundMusic + " could not be loaded; using soft ambient chimes synthesizer as fallback.");
    if (isMusicPlaying) {
      startAmbientSynth();
    }
  });

  // Attempt initial playback respecting modern browser autoplay policies
  const playPromise = bgAudio.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Autoplay succeeded!
        isMusicPlaying = true;
        updateMusicUI(true);
        hideAutoplayPrompt();
      })
      .catch(() => {
        // Autoplay blocked by mobile browser - show subtle "Tap to play music 🎵" prompt
        isMusicPlaying = false;
        updateMusicUI(false);
        showAutoplayPrompt();

        // Listen for first touch/click anywhere on page to begin playback naturally
        const onFirstUserTap = () => {
          if (!userExplicitlyPaused && !isMusicPlaying) {
            playMusic();
          }
          window.removeEventListener("click", onFirstUserTap);
          window.removeEventListener("touchstart", onFirstUserTap);
        };
        window.addEventListener("click", onFirstUserTap, { once: true });
        window.addEventListener("touchstart", onFirstUserTap, { once: true });
      });
  }
}

function playMusic() {
  userExplicitlyPaused = false;
  hideAutoplayPrompt();

  if (bgAudio) {
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {
          // Fallback to ambient chime synth if browser blocks media element
          startAmbientSynth();
          isMusicPlaying = true;
          updateMusicUI(true);
        });
    } else {
      isMusicPlaying = true;
      updateMusicUI(true);
    }
  } else {
    startAmbientSynth();
    isMusicPlaying = true;
    updateMusicUI(true);
  }
}

function pauseMusic() {
  if (bgAudio) {
    bgAudio.pause();
  }
  stopAmbientSynth();
  isMusicPlaying = false;
  userExplicitlyPaused = true;
  updateMusicUI(false);
  hideAutoplayPrompt();
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function toggleMute() {
  if (!bgAudio) return;
  isMusicMuted = !isMusicMuted;
  bgAudio.muted = isMusicMuted;
  if (musicMuteBtn) {
    musicMuteBtn.textContent = isMusicMuted ? "🔇" : "🔊";
    musicMuteBtn.setAttribute("title", isMusicMuted ? "Unmute music" : "Mute music");
  }
}

function updateMusicUI(playing) {
  if (soundBars) {
    if (playing) {
      soundBars.classList.add("playing");
    } else {
      soundBars.classList.remove("playing");
    }
  }
  if (musicBtnLabel) {
    musicBtnLabel.textContent = playing ? "Playing" : "Music";
  }
  if (musicPlayBtn) {
    musicPlayBtn.setAttribute("title", playing ? "Pause background music" : "Play background music");
  }
  if (musicBtn) {
    if (playing) {
      musicBtn.classList.add("music-playing");
    } else {
      musicBtn.classList.remove("music-playing");
    }
  }
}

function showAutoplayPrompt() {
  if (autoplayMusicPrompt && !userExplicitlyPaused) {
    autoplayMusicPrompt.classList.remove("hidden");
  }
}

function hideAutoplayPrompt() {
  if (autoplayMusicPrompt) {
    autoplayMusicPrompt.classList.add("hidden");
  }
}

// Gentle pentatonic chime sequence (synthesizer fallback)
const CHIME_PENTATONIC = [
  261.63, // C4
  293.66, // D4
  329.63, // E4
  392.00, // G4
  440.00, // A4
  523.25, // C5
  587.33, // D5
  659.25  // E5
];

function playSoftChime(freq, duration = 3.5, gainLevel = 0.08) {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) audioContext = new AudioCtx();
  }
  if (!audioContext) return;
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  try {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioContext.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1200, audioContext.currentTime);

    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel, audioContext.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioContext.destination);

    osc.start();
    osc.stop(audioContext.currentTime + duration);
  } catch {
    // Graceful silent return
  }
}

function startAmbientSynth() {
  if (synthInterval) clearInterval(synthInterval);

  playSoftChime(261.63, 4, 0.06);
  setTimeout(() => playSoftChime(329.63, 4, 0.05), 300);
  setTimeout(() => playSoftChime(392.00, 4, 0.05), 600);

  synthInterval = setInterval(() => {
    if (!isMusicPlaying) return;
    const randomFreq = CHIME_PENTATONIC[Math.floor(Math.random() * CHIME_PENTATONIC.length)];
    playSoftChime(randomFreq, 3.2, 0.07);

    if (Math.random() > 0.5) {
      setTimeout(() => {
        const harmonyFreq = CHIME_PENTATONIC[Math.floor(Math.random() * CHIME_PENTATONIC.length)];
        playSoftChime(harmonyFreq, 3.5, 0.05);
      }, 600);
    }
  }, 2200);
}

function stopAmbientSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

// ============================================================================
// BIRTHDAY GUESTBOOK ENGINE (Text Notes, Video Wishes & Gallery)
// ============================================================================

const GUESTBOOK_STORAGE_KEY = "birthday_guestbook_messages_v1";

function initGuestbook() {
  loadGuestbookMessages();
  renderGuestbookGallery();
  setupGuestbookModal();
}

function loadGuestbookMessages() {
  try {
    const saved = localStorage.getItem(GUESTBOOK_STORAGE_KEY);
    if (saved) {
      guestbookMessages = JSON.parse(saved);
    } else {
      guestbookMessages = [...defaultGuestbookMessages];
      saveGuestbookMessages();
    }
  } catch {
    guestbookMessages = [...defaultGuestbookMessages];
  }
}

function saveGuestbookMessages() {
  try {
    localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(guestbookMessages));
  } catch (err) {
    console.warn("Could not persist guestbook to localStorage:", err);
  }
}

function renderGuestbookGallery(filter = currentGuestbookFilter) {
  if (!guestbookGallery) return;
  currentGuestbookFilter = filter;

  let filtered = guestbookMessages;
  if (filter === "text") {
    filtered = guestbookMessages.filter(m => m.type !== "video");
  } else if (filter === "video") {
    filtered = guestbookMessages.filter(m => m.type === "video");
  }

  if (guestbookCount) {
    guestbookCount.textContent = String(guestbookMessages.length);
  }

  guestbookGallery.innerHTML = "";

  // Prompt card to encourage visitors to sign
  const promptCard = document.createElement("div");
  promptCard.className = "guest-prompt-card";
  promptCard.id = "guestPromptCard";
  promptCard.innerHTML = `
    <div class="guest-prompt-icon">✍️</div>
    <div class="guest-prompt-title">Leave a Birthday Wish</div>
    <div class="guest-prompt-desc">Add a sweet note or video for ${escapeHtml(currentName)}!</div>
  `;
  promptCard.addEventListener("click", openSignGuestbook);
  guestbookGallery.appendChild(promptCard);

  // Render cards
  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "guest-item-card";
    card.id = `guestCard_${item.id}`;

    const isLiked = Boolean(item.likedByUser);
    const stickerHtml = item.sticker ? `<span class="guest-sticker-badge">${escapeHtml(item.sticker)}</span>` : "";

    if (item.type === "video") {
      card.innerHTML = `
        <div class="guest-item-header">
          <div class="guest-avatar">${escapeHtml(item.avatar || "🎥")}</div>
          <div class="guest-author-info">
            <span class="guest-author-name">${escapeHtml(item.author)}</span>
            <span class="guest-role-tag">${escapeHtml(item.role || "Friend 💕")}</span>
          </div>
          ${stickerHtml}
        </div>
        <div class="guest-video-wrapper">
          <video src="${item.videoUrl}" controls playsinline></video>
        </div>
        ${item.message ? `<p class="guest-message-text">${escapeHtml(item.message)}</p>` : ""}
        <div class="guest-item-footer">
          <span>${escapeHtml(item.date || "Today")}</span>
          <button class="guest-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" title="Send love">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span>${item.likes || 0}</span>
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="guest-item-header">
          <div class="guest-avatar">${escapeHtml(item.avatar || "💌")}</div>
          <div class="guest-author-info">
            <span class="guest-author-name">${escapeHtml(item.author)}</span>
            <span class="guest-role-tag">${escapeHtml(item.role || "Friend 💕")}</span>
          </div>
          ${stickerHtml}
        </div>
        <p class="guest-message-text">"${escapeHtml(item.message)}"</p>
        <div class="guest-item-footer">
          <span>${escapeHtml(item.date || "Today")}</span>
          <button class="guest-like-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" title="Send love">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span>${item.likes || 0}</span>
          </button>
        </div>
      `;
    }

    const likeBtn = card.querySelector(".guest-like-btn");
    if (likeBtn) {
      likeBtn.addEventListener("click", () => handleLikeWish(item.id));
    }

    guestbookGallery.appendChild(card);
  });
}

function handleLikeWish(id) {
  const item = guestbookMessages.find(m => m.id === id);
  if (!item) return;

  if (item.likedByUser) {
    item.likes = Math.max(0, (item.likes || 1) - 1);
    item.likedByUser = false;
  } else {
    item.likes = (item.likes || 0) + 1;
    item.likedByUser = true;
  }
  saveGuestbookMessages();
  renderGuestbookGallery(currentGuestbookFilter);
}

function openSignGuestbook() {
  if (signGuestbookModal) {
    signGuestbookModal.classList.add("active");
  }
}

function closeSignGuestbook() {
  if (signGuestbookModal) {
    signGuestbookModal.classList.remove("active");
  }
  stopModalCamera();
}

function setupGuestbookModal() {
  if (openSignGuestbookBtn) {
    openSignGuestbookBtn.addEventListener("click", openSignGuestbook);
  }
  if (closeSignGuestbookBtn) {
    closeSignGuestbookBtn.addEventListener("click", closeSignGuestbook);
  }
  if (signGuestbookModal) {
    signGuestbookModal.addEventListener("click", (e) => {
      if (e.target === signGuestbookModal) closeSignGuestbook();
    });
  }

  // Filter Tabs
  if (guestbookFilterTabs) {
    const tabBtns = guestbookFilterTabs.querySelectorAll(".guestbook-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGuestbookGallery(btn.dataset.filter);
      });
    });
  }

  // Mode Switcher (Text vs Video)
  if (modeTextBtn && modeVideoBtn) {
    modeTextBtn.addEventListener("click", () => {
      modeTextBtn.classList.add("active");
      modeVideoBtn.classList.remove("active");
      if (textWishForm) textWishForm.style.display = "block";
      if (videoWishForm) videoWishForm.style.display = "none";
      stopModalCamera();
    });

    modeVideoBtn.addEventListener("click", () => {
      modeVideoBtn.classList.add("active");
      modeTextBtn.classList.remove("active");
      if (textWishForm) textWishForm.style.display = "none";
      if (videoWishForm) videoWishForm.style.display = "block";
    });
  }

  // Sticker Picker
  if (stickerPicker) {
    const options = stickerPicker.querySelectorAll(".sticker-option");
    options.forEach(btn => {
      btn.addEventListener("click", () => {
        options.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSticker = btn.dataset.sticker || "💖";
      });
    });
  }

  // Text Form Submit
  if (textWishForm) {
    textWishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = wishAuthorName ? wishAuthorName.value.trim() : "Friend";
      const role = wishAuthorRole ? wishAuthorRole.value.trim() : "Loved One 💕";
      const message = wishMessageText ? wishMessageText.value.trim() : "";

      if (!author || !message) return;

      const initials = author.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "❤️";

      const newWish = {
        id: "wish-" + Date.now(),
        author: author,
        role: role,
        avatar: initials,
        message: message,
        sticker: selectedSticker,
        date: "Just now",
        likes: 1,
        likedByUser: true,
        type: "text"
      };

      guestbookMessages.unshift(newWish);
      saveGuestbookMessages();

      // Reset form
      textWishForm.reset();
      closeSignGuestbook();

      // Refresh gallery
      renderGuestbookGallery(currentGuestbookFilter);

      // Micro celebration confetti burst
      startConfettiAnimation();
    });
  }

  // Modal Video Recording
  if (modalRecStartBtn) modalRecStartBtn.addEventListener("click", handleModalRecordStart);
  if (modalRecStopBtn) modalRecStopBtn.addEventListener("click", handleModalRecordStop);
  if (modalPostVideoWishBtn) modalPostVideoWishBtn.addEventListener("click", handleModalPostVideo);
}

// Modal Camera functions
async function startModalCamera() {
  try {
    modalMediaStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
      audio: true
    });
    if (modalVideoPreview) {
      modalVideoPreview.srcObject = modalMediaStream;
      modalVideoPreview.style.display = "block";
      modalVideoPreview.muted = true;
      modalVideoPreview.play();
    }
    return true;
  } catch (err) {
    alert("Camera & microphone permissions are required to record a video wish!");
    return false;
  }
}

function stopModalCamera() {
  if (modalMediaStream) {
    modalMediaStream.getTracks().forEach(t => t.stop());
    modalMediaStream = null;
  }
  if (modalVideoPreview) {
    modalVideoPreview.srcObject = null;
    modalVideoPreview.style.display = "none";
  }
  if (modalRecStopBtn) modalRecStopBtn.style.display = "none";
  if (modalRecStartBtn) modalRecStartBtn.style.display = "inline-flex";
  if (modalRecIndicator) modalRecIndicator.style.display = "none";
}

async function handleModalRecordStart() {
  const ok = await startModalCamera();
  if (!ok) return;

  modalRecordedChunks = [];
  try {
    modalMediaRecorder = new MediaRecorder(modalMediaStream);
    modalMediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) modalRecordedChunks.push(e.data);
    };
    modalMediaRecorder.onstop = () => {
      const blob = new Blob(modalRecordedChunks, { type: "video/webm" });
      modalRecordedBlobUrl = URL.createObjectURL(blob);
      if (modalVideoPreview) {
        modalVideoPreview.srcObject = null;
        modalVideoPreview.src = modalRecordedBlobUrl;
        modalVideoPreview.muted = false;
        modalVideoPreview.controls = true;
        modalVideoPreview.play();
      }
      if (modalPostVideoWishBtn) modalPostVideoWishBtn.style.display = "block";
      if (modalMediaStream) {
        modalMediaStream.getTracks().forEach(t => t.stop());
        modalMediaStream = null;
      }
    };

    modalMediaRecorder.start();
    if (modalRecStartBtn) modalRecStartBtn.style.display = "none";
    if (modalRecStopBtn) modalRecStopBtn.style.display = "inline-flex";
    if (modalRecIndicator) modalRecIndicator.style.display = "inline-flex";
  } catch (err) {
    alert("Video recording is not supported in this browser.");
  }
}

function handleModalRecordStop() {
  if (modalMediaRecorder && modalMediaRecorder.state !== "inactive") {
    modalMediaRecorder.stop();
  }
  if (modalRecStopBtn) modalRecStopBtn.style.display = "none";
  if (modalRecStartBtn) modalRecStartBtn.style.display = "inline-flex";
  if (modalRecIndicator) modalRecIndicator.style.display = "none";
}

function handleModalPostVideo() {
  if (!modalRecordedBlobUrl) return;
  const author = (modalVideoAuthorName && modalVideoAuthorName.value.trim()) || "A Loving Friend";
  const role = (modalVideoAuthorRole && modalVideoAuthorRole.value.trim()) || "Friend 💕";
  const initials = author.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "🎥";

  const newWish = {
    id: "wish-" + Date.now(),
    author: author,
    role: role,
    avatar: initials,
    videoUrl: modalRecordedBlobUrl,
    message: "Recorded a video wish for your special day! 🎥❤️",
    sticker: "🎉",
    date: "Just now",
    likes: 1,
    likedByUser: true,
    type: "video"
  };

  guestbookMessages.unshift(newWish);
  saveGuestbookMessages();

  // Reset
  if (modalVideoAuthorName) modalVideoAuthorName.value = "";
  if (modalVideoAuthorRole) modalVideoAuthorRole.value = "";
  if (modalPostVideoWishBtn) modalPostVideoWishBtn.style.display = "none";
  modalRecordedBlobUrl = null;
  closeSignGuestbook();

  renderGuestbookGallery(currentGuestbookFilter);
  startConfettiAnimation();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// AMBIENT PARTICLES (Stars, Floating Hearts & Glowing Dots)
// ============================================================================
let particles = [];
let particlesAnimationId = null;

function initParticlesCanvas() {
  const canvas = document.getElementById("particlesCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Create subtle particles
  const count = Math.min(Math.floor(window.innerWidth / 18), 50);
  particles = [];

  const types = ["star", "heart", "circle"];
  const colors = ["#ff75a6", "#38bdf8", "#ffffff", "#ffd5e5", "#bfe9ff"];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3.5 + 1.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      fadeSpeed: Math.random() * 0.015 + 0.005,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)],
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.02
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;
      p.angle += p.angularSpeed;

      // Wrap around
      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;

      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.type === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === "star") {
        drawStar(ctx, 0, 0, 4, p.size * 1.8, p.size * 0.8);
      } else if (p.type === "heart") {
        drawHeart(ctx, 0, 0, p.size * 1.4);
      }

      ctx.restore();
    }

    particlesAnimationId = requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function drawHeart(ctx, x, y, size) {
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(
    x, y, 
    x - size / 2, y, 
    x - size / 2, y + topCurveHeight
  );
  // bottom left curve
  ctx.bezierCurveTo(
    x - size / 2, y + (size + topCurveHeight) / 2, 
    x, y + (size + topCurveHeight) / 2, 
    x, y + size
  );
  // bottom right curve
  ctx.bezierCurveTo(
    x, y + (size + topCurveHeight) / 2, 
    x + size / 2, y + (size + topCurveHeight) / 2, 
    x + size / 2, y + topCurveHeight
  );
  // top right curve
  ctx.bezierCurveTo(
    x + size / 2, y, 
    x, y, 
    x, y + topCurveHeight
  );
  ctx.closePath();
  ctx.fill();
}

// ============================================================================
// CELEBRATION CONFETTI ENGINE (Pink, Light Pink, Blue, Light Blue, Purple, White)
// ============================================================================
let confettiPieces = [];
let confettiAnimationId = null;

function initConfettiCanvas() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  function resizeConfetti() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeConfetti();
  window.addEventListener("resize", resizeConfetti);
}

function startConfettiAnimation() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Confetti Color Palette specified in user requirements
  const colors = [
    "#ff2a7a", // Pink
    "#ff75a6", // Light pink
    "#00d2ff", // Blue
    "#38bdf8", // Light blue / Sky blue
    "#8b5cf6", // Purple
    "#ffffff"  // White
  ];

  confettiPieces = [];
  
  // Dynamic piece count based on burstConfig setting
  let countFactor = 1.0;
  if (burstConfig.confettiAmount === "low") countFactor = 0.5;
  if (burstConfig.confettiAmount === "high") countFactor = 2.0;
  const pieceCount = Math.min(Math.floor((window.innerWidth / 4) * countFactor), 350);

  // Dynamic speed based on burstConfig setting
  let speedMultiplier = 1.0;
  if (burstConfig.confettiSpeed === "slow") speedMultiplier = 0.55;
  if (burstConfig.confettiSpeed === "fast") speedMultiplier = 1.6;

  for (let i = 0; i < pieceCount; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.8,
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: (Math.random() * 4 + 2.5) * speedMultiplier,
      speedX: (Math.random() * 3 - 1.5) * speedMultiplier,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() - 0.5) * 8 * speedMultiplier,
      flutterSpeed: Math.random() * 0.1 + 0.05,
      flutterPhase: Math.random() * Math.PI * 2
    });
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of confettiPieces) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.flutterPhase) * 1.5;
      p.flutterPhase += p.flutterSpeed;
      p.angle += p.angularSpeed;

      // Wrap to top with fresh blast
      if (p.y > canvas.height + 20) {
        p.y = -20;
        p.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    confettiAnimationId = requestAnimationFrame(renderConfetti);
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  renderConfetti();
}

// ============================================================================
// MEMORIES REEL & POLAROIDS
// ============================================================================
function renderMemories() {
  const container = document.getElementById("memoriesGrid");
  if (!container) return;

  container.innerHTML = "";
  defaultMemories.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.innerHTML = `
      <div class="polaroid-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="polaroid-caption">${item.caption}</div>
      <div class="polaroid-date">${item.date}</div>
    `;
    card.addEventListener("click", () => openLightbox(item.image, `${item.title} — ${item.caption}`));
    container.appendChild(card);
  });
}

function openLightbox(imgSrc, caption) {
  if (!lightboxModal) return;
  lightboxImg.src = imgSrc;
  lightboxCaption.textContent = caption;
  lightboxModal.classList.add("active");
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("active");
}

// ============================================================================
// HEARTFELT VIDEO MESSAGE BOOTH (Camera & Audio Recording)
// ============================================================================
async function startCamera() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" },
      audio: true
    });
    if (videoPreview) {
      videoPreview.srcObject = mediaStream;
      videoPreview.style.display = "block";
      videoPreview.muted = true;
      videoPreview.play();
    }
    return true;
  } catch (err) {
    alert("Camera & microphone access is needed to record a video message! Please check permissions in your browser.");
    return false;
  }
}

function stopCamera() {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
  if (videoPreview) {
    videoPreview.style.display = "none";
    videoPreview.srcObject = null;
  }
}

async function handleRecordStart() {
  const ready = await startCamera();
  if (!ready) return;

  recordedChunks = [];
  try {
    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      recordedBlobUrl = URL.createObjectURL(blob);
      if (videoPreview) {
        videoPreview.srcObject = null;
        videoPreview.src = recordedBlobUrl;
        videoPreview.muted = false;
        videoPreview.controls = true;
      }
      if (saveVideoBtn) saveVideoBtn.style.display = "inline-flex";
      stopCamera();
    };

    mediaRecorder.start();
    if (recordVideoBtn) recordVideoBtn.style.display = "none";
    if (stopVideoBtn) stopVideoBtn.style.display = "inline-flex";
    if (recordingIndicator) recordingIndicator.style.display = "inline-flex";
  } catch (err) {
    alert("MediaRecorder is not supported in this browser.");
  }
}

function handleRecordStop() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  if (stopVideoBtn) stopVideoBtn.style.display = "none";
  if (recordVideoBtn) recordVideoBtn.style.display = "inline-flex";
  if (recordingIndicator) recordingIndicator.style.display = "none";
}

function handleSaveVideo() {
  if (!recordedBlobUrl) return;
  const author = (authorNameInput && authorNameInput.value.trim()) || "A Loving Friend";

  const card = document.createElement("div");
  card.className = "message-video-card";
  card.innerHTML = `
    <video src="${recordedBlobUrl}" controls></video>
    <div class="message-meta">
      <span class="author-name">💌 ${author}</span>
      <a href="${recordedBlobUrl}" download="birthday-wish-${author}.webm" class="footer-link" style="color: var(--color-blue-baby); font-size:0.75rem;">Download</a>
    </div>
  `;
  if (recordedList) {
    recordedList.prepend(card);
  }

  // Reset recorder UI
  if (saveVideoBtn) saveVideoBtn.style.display = "none";
  if (authorNameInput) authorNameInput.value = "";
  if (videoPreview) {
    videoPreview.style.display = "none";
    videoPreview.src = "";
  }
}

// ============================================================================
// EVENT LISTENERS & CUSTOMIZATION
// ============================================================================
function setupEventListeners() {
  // Main music play/pause toggle button
  if (musicPlayBtn) {
    musicPlayBtn.addEventListener("click", () => toggleMusic());
  } else if (musicBtn) {
    musicBtn.addEventListener("click", () => toggleMusic());
  }

  // Music mute/unmute button
  if (musicMuteBtn) {
    musicMuteBtn.addEventListener("click", () => toggleMute());
  }

  // Mobile autoplay tap-to-play pill
  if (autoplayMusicPrompt) {
    autoplayMusicPrompt.addEventListener("click", () => {
      playMusic();
    });
  }

  // Celebrate More Confetti button
  const celebrateMoreBtn = document.getElementById("celebrateMoreBtn");
  if (celebrateMoreBtn) {
    celebrateMoreBtn.addEventListener("click", () => startConfettiAnimation());
  }

  // Expose key handlers to window for backwards compatibility
  window.startConfettiAnimation = startConfettiAnimation;
  window.toggleMusic = toggleMusic;
  window.playMusic = playMusic;
  window.pauseMusic = pauseMusic;
  window.toggleMute = toggleMute;

  // Lightbox close
  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Tabs for last day section
  if (tabMemories && tabVideos) {
    tabMemories.addEventListener("click", () => {
      tabMemories.classList.add("active");
      tabVideos.classList.remove("active");
      if (memoriesView) memoriesView.style.display = "grid";
      if (videoBoothView) videoBoothView.style.display = "none";
    });

    tabVideos.addEventListener("click", () => {
      tabVideos.classList.add("active");
      tabMemories.classList.remove("active");
      if (memoriesView) memoriesView.style.display = "none";
      if (videoBoothView) videoBoothView.style.display = "flex";
    });
  }

  // Video recording actions
  if (recordVideoBtn) recordVideoBtn.addEventListener("click", handleRecordStart);
  if (stopVideoBtn) stopVideoBtn.addEventListener("click", handleRecordStop);
  if (saveVideoBtn) saveVideoBtn.addEventListener("click", handleSaveVideo);

  // Dev modal triggers
  if (devToggleBtn) {
    devToggleBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.add("active");
    });
  }
  if (closeDevModalBtn) {
    closeDevModalBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.remove("active");
    });
  }
  if (devModal) {
    devModal.addEventListener("click", (e) => {
      if (e.target === devModal) devModal.classList.remove("active");
    });
  }

  // Dev overlay opacity live slider
  if (devOpacityInput) {
    devOpacityInput.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (devOpacityVal) devOpacityVal.textContent = `${Math.round(val * 100)}%`;
      document.documentElement.style.setProperty("--overlay-opacity", String(val));
    });
  }

  // Apply dev changes
  if (applyDevBtn) {
    applyDevBtn.addEventListener("click", () => {
      if (devDateInput && devDateInput.value) {
        targetDate = new Date(devDateInput.value);
      }
      if (devNameInput && devNameInput.value) {
        currentName = devNameInput.value.trim();
      }
      if (devMessageInput && devMessageInput.value) {
        currentMessage = devMessageInput.value.trim();
      }
      if (devBgInput) {
        currentBgImage = devBgInput.value.trim();
      }
      if (devOpacityInput) {
        currentOverlayOpacity = parseFloat(devOpacityInput.value);
      }

      setupDynamicContent();
      setupBackground();
      
      // Reset view to countdown if celebration was active
      if (countdownScreen) countdownScreen.classList.remove("hidden");
      if (celebrationScreen) celebrationScreen.classList.remove("active");
      if (guestbookSection) guestbookSection.classList.remove("active");
      isCelebrationActive = false;

      startCountdown();

      if (devModal) devModal.classList.remove("active");
    });
  }

  // Quick Test 10s button
  if (test10sBtn) {
    test10sBtn.addEventListener("click", () => {
      targetDate = new Date(Date.now() + 10000);
      if (countdownScreen) countdownScreen.classList.remove("hidden");
      if (celebrationScreen) celebrationScreen.classList.remove("active");
      if (guestbookSection) guestbookSection.classList.remove("active");
      isCelebrationActive = false;
      startCountdown();
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Quick Test Zero / Celebration
  if (testZeroBtn) {
    testZeroBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Quick Test Last Day Vault
  if (testLastDayBtn) {
    testLastDayBtn.addEventListener("click", () => {
      unlockLastDaySection();
      if (devModal) devModal.classList.remove("active");
      if (lastDaySection) {
        lastDaySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Quick Test Guestbook Section
  if (testGuestbookBtn) {
    testGuestbookBtn.addEventListener("click", () => {
      if (guestbookSection) {
        guestbookSection.classList.add("active");
        renderGuestbookGallery();
        guestbookSection.scrollIntoView({ behavior: "smooth" });
      }
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Reset Countdown
  if (resetCountdownBtn) {
    resetCountdownBtn.addEventListener("click", () => {
      targetDate = new Date(birthdayDate);
      currentName = birthdayName;
      currentMessage = birthdayMessage;
      currentBgImage = backgroundImage;
      currentOverlayOpacity = overlayOpacity;
      setupDynamicContent();
      setupBackground();
      if (countdownScreen) countdownScreen.classList.remove("hidden");
      if (celebrationScreen) celebrationScreen.classList.remove("active");
      if (guestbookSection) guestbookSection.classList.remove("active");
      isCelebrationActive = false;
      startCountdown();
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Copy Clean Config Snippet
  if (copyConfigBtn) {
    copyConfigBtn.addEventListener("click", () => {
      const codeSnippet = `// Paste into top of script.js:
const birthdayDate = "${devDateInput ? devDateInput.value : birthdayDate}";
const birthdayName = "${devNameInput ? devNameInput.value : birthdayName}";
const birthdayMessage = "${devMessageInput ? devMessageInput.value.replace(/"/g, '\\"') : birthdayMessage}";
const backgroundImage = "${devBgInput ? devBgInput.value : backgroundImage}";
const overlayOpacity = ${devOpacityInput ? devOpacityInput.value : overlayOpacity};
const backgroundMusic = "${backgroundMusic}";
const loopMusic = ${loopMusic};`;

      navigator.clipboard.writeText(codeSnippet).then(() => {
        const originalText = copyConfigBtn.textContent;
        copyConfigBtn.textContent = "Copied to Clipboard! ✓";
        setTimeout(() => {
          copyConfigBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // ============================================================================
  // WIRE UP PHOTO BURST & CUSTOMIZE CELEBRATION CONTROLS
  // ============================================================================

  // Tab Navigation in Customize Modal
  if (customizeNavTabs) {
    const tabButtons = customizeNavTabs.querySelectorAll(".customize-tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTabId = btn.getAttribute("data-tab");
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const panes = document.querySelectorAll(".customize-pane");
        panes.forEach(p => {
          if (p.id === targetTabId) {
            p.classList.add("active");
          } else {
            p.classList.remove("active");
          }
        });
      });
    });
  }

  // Photo Upload Actions
  if (addPhotosBtn && photoFileInput) {
    addPhotosBtn.addEventListener("click", () => photoFileInput.click());
  }

  if (photoFileInput) {
    photoFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handlePhotoFiles(Array.from(e.target.files));
        photoFileInput.value = "";
      }
    });
  }

  if (loadSamplePhotosBtn) {
    loadSamplePhotosBtn.addEventListener("click", () => {
      loadSamplePhotos();
    });
  }

  if (clearAllPhotosBtn) {
    clearAllPhotosBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all uploaded celebration photos?")) {
        clearAllPhotos();
      }
    });
  }

  // Replay Photo Burst Button (in Celebration Screen)
  if (replayBurstBtn) {
    replayBurstBtn.addEventListener("click", () => {
      triggerPhotoBurst();
      startConfettiAnimation();
    });
  }

  // Test Photo Burst Buttons (in Modal)
  if (testPhotoBurstActionBtn) {
    testPhotoBurstActionBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  if (testBurstModalFooterBtn) {
    testBurstModalFooterBtn.addEventListener("click", () => {
      triggerCelebration();
      if (devModal) devModal.classList.remove("active");
    });
  }

  if (closeDevModalBottomBtn) {
    closeDevModalBottomBtn.addEventListener("click", () => {
      if (devModal) devModal.classList.remove("active");
    });
  }

  // Burst & FX Live Setting Listeners
  if (burstStyleSelect) {
    burstStyleSelect.addEventListener("change", (e) => {
      burstConfig.burstStyle = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoShapeSelect) {
    photoShapeSelect.addEventListener("change", (e) => {
      burstConfig.photoShape = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoSizeSelect) {
    photoSizeSelect.addEventListener("change", (e) => {
      burstConfig.photoSize = e.target.value;
      saveBurstSettings();
    });
  }
  if (burstSpeedSelect) {
    burstSpeedSelect.addEventListener("change", (e) => {
      burstConfig.burstSpeed = e.target.value;
      saveBurstSettings();
    });
  }
  if (burstDurationSelect) {
    burstDurationSelect.addEventListener("change", (e) => {
      burstConfig.burstDuration = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoRotationSelect) {
    photoRotationSelect.addEventListener("change", (e) => {
      burstConfig.photoRotation = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoBorderColorSelect) {
    photoBorderColorSelect.addEventListener("change", (e) => {
      burstConfig.photoBorderColor = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoBorderThicknessSelect) {
    photoBorderThicknessSelect.addEventListener("change", (e) => {
      burstConfig.photoBorderThickness = e.target.value;
      saveBurstSettings();
    });
  }
  if (photoCornerRadiusInput) {
    photoCornerRadiusInput.addEventListener("input", (e) => {
      burstConfig.photoCornerRadius = parseInt(e.target.value, 10);
      saveBurstSettings();
    });
  }
  if (photoGlowIntensityInput) {
    photoGlowIntensityInput.addEventListener("input", (e) => {
      burstConfig.photoGlowIntensity = parseFloat(e.target.value);
      saveBurstSettings();
    });
  }
  if (confettiAmountSelect) {
    confettiAmountSelect.addEventListener("change", (e) => {
      burstConfig.confettiAmount = e.target.value;
      saveBurstSettings();
    });
  }
  if (confettiSpeedSelect) {
    confettiSpeedSelect.addEventListener("change", (e) => {
      burstConfig.confettiSpeed = e.target.value;
      saveBurstSettings();
    });
  }

  // Background Customization Listeners
  if (uploadBgBtn && bgFileInput) {
    uploadBgBtn.addEventListener("click", () => bgFileInput.click());
  }

  if (bgFileInput) {
    bgFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          currentBgImage = event.target.result;
          if (devBgInput) devBgInput.value = "Custom Uploaded Photo";
          setupBackground();
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    });
  }

  if (bgGradientPresetSelect) {
    bgGradientPresetSelect.addEventListener("change", (e) => {
      burstConfig.gradientPreset = e.target.value;
      applyGradientPreset(e.target.value);
      saveBurstSettings();
    });
  }

  // Music Customization Listeners
  if (uploadAudioBtn && audioFileInput) {
    uploadAudioBtn.addEventListener("click", () => audioFileInput.click());
  }

  if (audioFileInput) {
    audioFileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (uploadedAudioName) uploadedAudioName.textContent = file.name;
        const objectUrl = URL.createObjectURL(file);
        if (bgAudio) {
          bgAudio.src = objectUrl;
          playMusic();
        }
      }
    });
  }

  if (previewMusicBtn) {
    previewMusicBtn.addEventListener("click", () => {
      toggleMusic();
      previewMusicBtn.textContent = isMusicPlaying ? "⏸ Pause Preview" : "▶ Play Preview";
    });
  }

  if (devMusicVolume) {
    devMusicVolume.addEventListener("input", (e) => {
      const vol = parseFloat(e.target.value);
      if (bgAudio) bgAudio.volume = vol;
    });
  }

  if (devMusicLoop) {
    devMusicLoop.addEventListener("change", (e) => {
      if (bgAudio) bgAudio.loop = e.target.checked;
    });
  }

  // Headline Listener
  if (devHeadlineInput) {
    devHeadlineInput.addEventListener("input", (e) => {
      burstConfig.headline = e.target.value;
      const celebrationEyebrow = document.getElementById("celebrationEyebrow");
      if (celebrationEyebrow) celebrationEyebrow.textContent = e.target.value;
      saveBurstSettings();
    });
  }

  // Color Intensity Sliders
  if (colorPinkIntensity) {
    colorPinkIntensity.addEventListener("input", (e) => {
      burstConfig.colorPinkIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
  if (colorBlueIntensity) {
    colorBlueIntensity.addEventListener("input", (e) => {
      burstConfig.colorBlueIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
  if (colorPurpleIntensity) {
    colorPurpleIntensity.addEventListener("input", (e) => {
      burstConfig.colorPurpleIntensity = parseFloat(e.target.value);
      applyThemeIntensities();
      saveBurstSettings();
    });
  }
}

// ============================================================================
// PHOTO STORAGE (INDEXEDDB WITH LOCALSTORAGE FALLBACK)
// ============================================================================
const DB_NAME = "BirthdayCelebrationDB";
const DB_VERSION = 1;
const PHOTO_STORE = "celebration_photos";

function openPhotoDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      resolve(null); // Fallback to localStorage
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(null);
  });
}

async function initPhotoStorageAndBurstSettings() {
  // 1. Load Burst Config from localStorage
  try {
    const savedConfig = localStorage.getItem("birthday_burst_settings_v1");
    if (savedConfig) {
      burstConfig = Object.assign(burstConfig, JSON.parse(savedConfig));
    }
  } catch (err) {
    console.warn("Could not load burst settings from localStorage:", err);
  }

  // Sync inputs with burstConfig
  syncInputsWithBurstConfig();

  // 2. Load Photos from IndexedDB or LocalStorage
  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readonly");
      const store = tx.objectStore(PHOTO_STORE);
      const req = store.getAll();
      req.onsuccess = () => {
        if (req.result && req.result.length > 0) {
          currentPhotos = req.result;
        } else {
          // Seed with default high quality photos
          currentPhotos = [...defaultBurstPhotos];
          seedDefaultPhotosToDB(db, currentPhotos);
        }
        renderPhotoThumbnails();
      };
      req.onerror = () => {
        fallbackLoadLocalStoragePhotos();
      };
    } catch {
      fallbackLoadLocalStoragePhotos();
    }
  } else {
    fallbackLoadLocalStoragePhotos();
  }

  applyGradientPreset(burstConfig.gradientPreset || "dusk");
  applyThemeIntensities();
}

function fallbackLoadLocalStoragePhotos() {
  try {
    const raw = localStorage.getItem("birthday_burst_photos_v1");
    if (raw) {
      currentPhotos = JSON.parse(raw);
    } else {
      currentPhotos = [...defaultBurstPhotos];
      localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
    }
  } catch {
    currentPhotos = [...defaultBurstPhotos];
  }
  renderPhotoThumbnails();
}

function seedDefaultPhotosToDB(db, photos) {
  try {
    const tx = db.transaction(PHOTO_STORE, "readwrite");
    const store = tx.objectStore(PHOTO_STORE);
    photos.forEach(p => store.put(p));
  } catch (e) {
    console.warn("Could not seed IndexedDB photos:", e);
  }
}

function saveBurstSettings() {
  try {
    localStorage.setItem("birthday_burst_settings_v1", JSON.stringify(burstConfig));
  } catch (e) {
    console.warn("Could not save burst config:", e);
  }
}

function syncInputsWithBurstConfig() {
  if (burstStyleSelect) burstStyleSelect.value = burstConfig.burstStyle;
  if (photoShapeSelect) photoShapeSelect.value = burstConfig.photoShape;
  if (photoSizeSelect) photoSizeSelect.value = burstConfig.photoSize;
  if (burstSpeedSelect) burstSpeedSelect.value = burstConfig.burstSpeed;
  if (burstDurationSelect) burstDurationSelect.value = burstConfig.burstDuration;
  if (photoRotationSelect) photoRotationSelect.value = burstConfig.photoRotation;
  if (photoBorderColorSelect) photoBorderColorSelect.value = burstConfig.photoBorderColor;
  if (photoBorderThicknessSelect) photoBorderThicknessSelect.value = burstConfig.photoBorderThickness;
  if (photoCornerRadiusInput) photoCornerRadiusInput.value = burstConfig.photoCornerRadius;
  if (photoGlowIntensityInput) photoGlowIntensityInput.value = burstConfig.photoGlowIntensity;
  if (confettiAmountSelect) confettiAmountSelect.value = burstConfig.confettiAmount;
  if (confettiSpeedSelect) confettiSpeedSelect.value = burstConfig.confettiSpeed;
  if (devHeadlineInput) devHeadlineInput.value = burstConfig.headline;
  if (bgGradientPresetSelect) bgGradientPresetSelect.value = burstConfig.gradientPreset;
  if (colorPinkIntensity) colorPinkIntensity.value = burstConfig.colorPinkIntensity;
  if (colorBlueIntensity) colorBlueIntensity.value = burstConfig.colorBlueIntensity;
  if (colorPurpleIntensity) colorPurpleIntensity.value = burstConfig.colorPurpleIntensity;
}

// Render Thumbnail Gallery in Customize Panel
function renderPhotoThumbnails() {
  if (panelPhotoCount) panelPhotoCount.textContent = String(currentPhotos.length);
  if (!photoThumbnailsGrid) return;

  photoThumbnailsGrid.innerHTML = "";

  if (currentPhotos.length === 0) {
    photoThumbnailsGrid.innerHTML = `
      <div class="thumb-card-empty">
        <p>📷 No celebration photos uploaded yet.</p>
        <p style="font-size: 0.8rem; margin-top: 0.35rem; color: rgba(255,255,255,0.7);">
          Click <strong>"+ Add Photos"</strong> to upload memories, or click <strong>"Load Sample Photos"</strong> to restore the festive presets!
        </p>
      </div>
    `;
    return;
  }

  currentPhotos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "thumb-card";

    // Badges for top 3 main hero cards that pin for 5 seconds
    let badgeHtml = "";
    if (index === 0) badgeHtml = `<span class="thumb-badge">★ #1 Hero (Pinned)</span>`;
    else if (index === 1) badgeHtml = `<span class="thumb-badge">★ #2 Hero (Pinned)</span>`;
    else if (index === 2) badgeHtml = `<span class="thumb-badge">★ #3 Hero (Pinned)</span>`;

    card.innerHTML = `
      <img src="${photo.src}" class="thumb-img" alt="${photo.name || 'Photo'}" loading="lazy" />
      ${badgeHtml}
      <button type="button" class="thumb-remove-btn" title="Remove photo" aria-label="Remove photo">&times;</button>
    `;

    // Click photo to preview in lightbox
    const imgEl = card.querySelector(".thumb-img");
    imgEl.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption || photo.name || "Celebration Photo");
    });

    // Remove photo button
    const removeBtn = card.querySelector(".thumb-remove-btn");
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deletePhoto(photo.id);
    });

    photoThumbnailsGrid.appendChild(card);
  });
}

// Photo file processing
async function handlePhotoFiles(files) {
  for (const file of files) {
    if (!file.type.startsWith("image/")) continue;

    try {
      const dataUrl = await readFileAsOptimizedDataURL(file);
      const newPhoto = {
        id: "photo-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7),
        name: file.name,
        src: dataUrl,
        caption: file.name.replace(/\.[^/.]+$/, ""),
        timestamp: Date.now()
      };

      currentPhotos.push(newPhoto);
      await savePhotoRecord(newPhoto);
    } catch (err) {
      console.error("Failed reading photo file:", err);
    }
  }

  renderPhotoThumbnails();
}

function readFileAsOptimizedDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Max dimension 1000px for optimal speed and storage safety
        const maxDim = 1000;
        let w = img.width;
        let h = img.height;

        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function savePhotoRecord(photo) {
  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).put(photo);
    } catch {
      // Fallback
    }
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {
    // If storage quota exceeded in localStorage, IndexedDB still holds the record
  }
}

async function deletePhoto(id) {
  currentPhotos = currentPhotos.filter(p => p.id !== id);
  renderPhotoThumbnails();

  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).delete(id);
    } catch {
      // Ignore
    }
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {}
}

async function clearAllPhotos() {
  currentPhotos = [];
  renderPhotoThumbnails();

  const db = await openPhotoDB();
  if (db) {
    try {
      const tx = db.transaction(PHOTO_STORE, "readwrite");
      tx.objectStore(PHOTO_STORE).clear();
    } catch {}
  }
  try {
    localStorage.removeItem("birthday_burst_photos_v1");
  } catch {}
}

async function loadSamplePhotos() {
  currentPhotos = [...defaultBurstPhotos];
  renderPhotoThumbnails();

  const db = await openPhotoDB();
  if (db) {
    seedDefaultPhotosToDB(db, currentPhotos);
  }
  try {
    localStorage.setItem("birthday_burst_photos_v1", JSON.stringify(currentPhotos));
  } catch {}
}

// Apply Color Atmosphere Presets
function applyGradientPreset(preset) {
  const root = document.documentElement;
  switch (preset) {
    case "sunset":
      root.style.setProperty("--color-pink-primary", "#ff1e78");
      root.style.setProperty("--color-blue-primary", "#9333ea");
      root.style.setProperty("--color-blue-deep", "#3b0764");
      break;
    case "cyber":
      root.style.setProperty("--color-pink-primary", "#ff007f");
      root.style.setProperty("--color-blue-primary", "#00ffff");
      root.style.setProperty("--color-blue-deep", "#0a0a23");
      break;
    case "pastel":
      root.style.setProperty("--color-pink-primary", "#f472b6");
      root.style.setProperty("--color-blue-primary", "#60a5fa");
      root.style.setProperty("--color-blue-deep", "#1e293b");
      break;
    case "midnight":
      root.style.setProperty("--color-pink-primary", "#e11d48");
      root.style.setProperty("--color-blue-primary", "#6366f1");
      root.style.setProperty("--color-blue-deep", "#09090b");
      break;
    case "dusk":
    default:
      root.style.setProperty("--color-pink-primary", "#ff2a7a");
      root.style.setProperty("--color-blue-primary", "#00d2ff");
      root.style.setProperty("--color-blue-deep", "#0e1533");
      break;
  }
}

function applyThemeIntensities() {
  const root = document.documentElement;
  const p = burstConfig.colorPinkIntensity || 1.0;
  const b = burstConfig.colorBlueIntensity || 1.0;
  root.style.setProperty("--pink-intensity", String(p));
  root.style.setProperty("--blue-intensity", String(b));
}

// ============================================================================
// PHOTO BURST ENGINE (Burst outward from center, rotate, scale, and glow)
// ============================================================================

function stopPhotoBurst() {
  if (photoBurstActiveTimeout) {
    clearTimeout(photoBurstActiveTimeout);
    photoBurstActiveTimeout = null;
  }
  if (heroPhotosTimerTimeout) {
    clearTimeout(heroPhotosTimerTimeout);
    heroPhotosTimerTimeout = null;
  }
  if (photoBurstOverlay) {
    photoBurstOverlay.innerHTML = "";
    photoBurstOverlay.classList.remove("active");
  }
}

function triggerPhotoBurst() {
  stopPhotoBurst();

  // If no photos have been uploaded or loaded, skip photo animation and let confetti shine alone
  if (!currentPhotos || currentPhotos.length === 0) {
    if (heroPhotosPinnedContainer) {
      heroPhotosPinnedContainer.style.display = "none";
    }
    return;
  }

  if (!photoBurstOverlay) return;
  photoBurstOverlay.classList.add("active");

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Decide photos to display
  let photosToDisplay = [...currentPhotos];
  // If user only uploaded 1 or 2 photos, clone to make a balanced festive burst of at least 4 items
  if (photosToDisplay.length === 1) {
    photosToDisplay = [photosToDisplay[0], photosToDisplay[0], photosToDisplay[0], photosToDisplay[0]];
  } else if (photosToDisplay.length === 2) {
    photosToDisplay = [photosToDisplay[0], photosToDisplay[1], photosToDisplay[0], photosToDisplay[1]];
  }

  const count = photosToDisplay.length;

  // Speed mapping
  let speedDurationSec = 1.2;
  if (burstConfig.burstSpeed === "slow") speedDurationSec = 1.8;
  else if (burstConfig.burstSpeed === "fast") speedDurationSec = 0.8;
  else if (burstConfig.burstSpeed === "explosive") speedDurationSec = 0.5;

  // Rotation ranges
  let maxRotation = 25;
  if (burstConfig.photoRotation === "none") maxRotation = 0;
  else if (burstConfig.photoRotation === "subtle") maxRotation = 12;
  else if (burstConfig.photoRotation === "wild") maxRotation = 45;

  // Size mapping
  let sizePx = 180;
  if (burstConfig.photoSize === "small") sizePx = Math.min(vw * 0.35, 130);
  else if (burstConfig.photoSize === "large") sizePx = Math.min(vw * 0.5, 230);
  else sizePx = Math.min(vw * 0.42, 180);

  // Distribute burst items in a balanced outward spiral from screen center
  photosToDisplay.forEach((photo, index) => {
    const item = document.createElement("div");
    item.className = "burst-photo-item";

    // Shape assignment
    let shape = burstConfig.photoShape;
    if (shape === "mixed") {
      const shapes = ["polaroid", "rounded", "circle", "square"];
      shape = shapes[index % shapes.length];
    }
    item.classList.add(`shape-${shape}`);

    // Border glow assignment
    const borderTheme = burstConfig.photoBorderColor || "gradient";
    item.classList.add(`border-glow-${borderTheme}`);

    // Dimensions
    item.style.width = `${sizePx}px`;
    item.style.height = shape === "circle" ? `${sizePx}px` : `${Math.round(sizePx * 1.25)}px`;

    // Position & angle math: outward burst from (50vw, 50vh)
    const angle = (index / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
    const minRadius = Math.min(vw, vh) * 0.22;
    const maxRadius = Math.min(vw, vh) * 0.44;
    const radius = minRadius + (index % 2) * (maxRadius - minRadius) * 0.85 + (Math.random() - 0.5) * 40;

    const targetX = Math.round(Math.cos(angle) * radius);
    const targetY = Math.round(Math.sin(angle) * radius);
    const targetRot = Math.round((Math.random() - 0.5) * 2 * maxRotation);

    const floatDx = Math.round((Math.random() - 0.5) * 35);
    const floatDy = Math.round((Math.random() - 0.5) * 35);

    // CSS variables for keyframes
    item.style.setProperty("--target-x", `${targetX}px`);
    item.style.setProperty("--target-y", `${targetY}px`);
    item.style.setProperty("--target-rot", `${targetRot}deg`);
    item.style.setProperty("--float-dx", `${floatDx}px`);
    item.style.setProperty("--float-dy", `${floatDy}px`);
    item.style.setProperty("--burst-border-width", `${burstConfig.photoBorderThickness || 2}px`);
    item.style.setProperty("--burst-radius", `${burstConfig.photoCornerRadius || 16}px`);
    item.style.setProperty("--burst-glow", `${burstConfig.photoGlowIntensity || 0.8}`);

    // Place element in the exact viewport center
    item.style.left = "50vw";
    item.style.top = "50vh";

    // Style animation
    let animName = "photoBurstOut";
    const userStyle = burstConfig.burstStyle;
    if (userStyle === "float") animName = "photoFloatGentle";
    else if (userStyle === "fall") animName = "photoFallDown";
    else if (userStyle === "pop") animName = "photoPopIn";
    else if (userStyle === "mixed") {
      const anims = ["photoBurstOut", "photoFloatGentle", "photoPopIn", "photoFallDown"];
      animName = anims[index % anims.length];
    }

    const staggerDelay = index * 0.08;
    item.style.animation = `${animName} ${speedDurationSec}s cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}s forwards, photoFloatGentle 4s ease-in-out ${speedDurationSec + staggerDelay}s infinite alternate`;

    // Inner Image
    item.innerHTML = `<img src="${photo.src}" class="burst-photo-img" alt="${photo.name || 'Photo'}" />`;

    // Click to view in Lightbox
    item.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption || photo.name || "Birthday Memory");
    });

    photoBurstOverlay.appendChild(item);
  });

  // Display 3 Main Hero Photos (Pastes on screen for 5s after burst, then settles)
  showHeroPinnedPhotos();

  // Overlay duration
  if (burstConfig.burstDuration !== "infinite") {
    const durSec = parseInt(burstConfig.burstDuration, 10) || 12;
    photoBurstActiveTimeout = setTimeout(() => {
      if (photoBurstOverlay) {
        photoBurstOverlay.style.transition = "opacity 1.5s ease";
        photoBurstOverlay.style.opacity = "0";
        setTimeout(() => {
          photoBurstOverlay.innerHTML = "";
          photoBurstOverlay.style.opacity = "1";
          photoBurstOverlay.style.transition = "";
          photoBurstOverlay.classList.remove("active");
        }, 1500);
      }
    }, durSec * 1000);
  }
}

// ============================================================================
// PINNED 3 MAIN HERO PHOTOS (Pastes on screen for 5 seconds after burst)
// ============================================================================
function showHeroPinnedPhotos() {
  if (!heroPhotosPinnedContainer || !heroPhotosPinnedCards) return;
  if (!currentPhotos || currentPhotos.length === 0) return;

  // Reset container state
  heroPhotosPinnedContainer.classList.remove("settled");
  heroPhotosPinnedContainer.style.display = "block";

  // Pick top 3 hero photos
  const heroList = [
    currentPhotos[0],
    currentPhotos[1] || currentPhotos[0],
    currentPhotos[2] || currentPhotos[0]
  ];

  heroPhotosPinnedCards.innerHTML = "";

  const roles = ["hero-left", "hero-center", "hero-right"];
  const badges = ["✨ My Favorite Smile", "❤️ The One I Adore ✨", "🥰 Forever With You"];

  heroList.forEach((photo, idx) => {
    const card = document.createElement("div");
    card.className = `hero-pinned-card ${roles[idx]}`;
    card.innerHTML = `
      <img src="${photo.src}" class="hero-pinned-img" alt="${photo.name || 'Hero Photo'}" />
      <span class="hero-pinned-badge">${badges[idx]}</span>
    `;

    // Click opens Lightbox
    card.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption || photo.name || "Hero Birthday Moment");
    });

    heroPhotosPinnedCards.appendChild(card);
  });

  // Re-trigger the 5-second shrink animation on timer bar
  if (heroTimerProgress) {
    heroTimerProgress.style.animation = "none";
    // Trigger reflow
    void heroTimerProgress.offsetWidth;
    heroTimerProgress.style.animation = "heroTimerShrink 5s linear forwards";
  }

  // After 5 seconds, paste settles smoothly into the celebration layout
  if (heroPhotosTimerTimeout) clearTimeout(heroPhotosTimerTimeout);
  heroPhotosTimerTimeout = setTimeout(() => {
    if (heroPhotosPinnedContainer) {
      heroPhotosPinnedContainer.classList.add("settled");
    }
  }, 5000);
}

