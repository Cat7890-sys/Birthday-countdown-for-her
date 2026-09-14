# 🎂 Birthday Countdown & Surprise Celebration

A modern, responsive, and mobile-first one-page birthday countdown website crafted with glowing pink-and-blue gradients, celebratory confetti, gentle ambient music, and a secret memory vault. Prepared especially for **GitHub Pages** using 100% pure HTML, CSS, and JavaScript with **zero backend dependencies**.

---

## 📁 Project Structure

This project is organized cleanly with standard static web files ready for GitHub Pages:

```text
birthday-countdown/
│
├── index.html          # Main HTML webpage structure (zero backend required)
├── style.css           # Styling, glowing gradients, animations, & responsive layout
├── script.js           # Real-time countdown engine, confetti, music player, & memory vault
│
├── images/
│   └── background.jpg  # Personal birthday photo (optional; fallback mesh gradient included)
│
└── audio/
    └── background-music.mp3  # Romantic ambient piano background music (MP3, WAV, or OGG)
```

---

## ⚙️ How to Customize (Takes 1 Minute!)

Open `script.js` in any text editor. At the very top, you will find the **BIRTHDAY CUSTOMIZATION** section:

```javascript
// ============================================================================
// BIRTHDAY CUSTOMIZATION (EDIT THESE VALUES)
// ============================================================================

// 1. Birthday Date & Time (Format: YYYY-MM-DDTHH:MM:SS)
const birthdayDate = "2026-10-05T00:00:00";

// 2. Birthday Person's Name
const birthdayName = "Sarah";

// 3. Personalized Heartfelt Birthday Message
const birthdayMessage = "Happy Birthday to the most wonderful person in my life. Thank you for filling every single day with warmth, laughter, and so much happiness. Being with you is my favorite thing in the world, and I wanted to make this little surprise just to remind you how deeply loved and cherished you are. Here's to you, all our sweetest memories, and all the adventures still ahead of us. I love you endlessly! ❤️✨";

// 4. Background Image Path
const backgroundImage = "images/background.jpg";

// 5. Background Overlay Opacity (0.0 = clear, 1.0 = dark)
const overlayOpacity = 0.65;

// 6. Background Music Path
const backgroundMusic = "audio/background-music.mp3";
```

### 🖼️ How to Replace the Background Image
1. Prepare your favorite photo of the birthday person.
2. Rename the photo to `background.jpg`.
3. Place it inside the `images/` folder, replacing `images/background.jpg`.
4. If you do not provide a photo, the website automatically falls back to the animated pink-and-blue mesh gradient!

### 🎵 How to Change or Add Music
1. Choose an MP3, WAV, or OGG song.
2. Place it in the `audio/` folder (e.g. `audio/background-music.mp3`).
3. If using a different filename, update `const backgroundMusic = "audio/your-song.mp3";` in `script.js`.

---

## 🚀 How to Host on GitHub Pages (Takes Under 2 Minutes!)

Because this website uses **only pure HTML, CSS, and JavaScript**, hosting it on GitHub Pages is completely free and requires **no build step, no Node.js, and no database**:

1. **Create a New GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **New repository**.
   - Enter a repository name (for example, `birthday-surprise` or `for-sarah`).
   - Set the repository to **Public**.
   - Click **Create repository**.

2. **Upload Your Files**:
   - Push or upload the files directly to the root of your repository:
     - `index.html`
     - `style.css`
     - `script.js`
     - `images/` folder (containing `background.jpg`)
     - `audio/` folder (containing `background-music.mp3`)
   - Commit the changes to the `main` branch.

3. **Enable GitHub Pages**:
   - In your repository, click on the **Settings** tab.
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.

4. **Your Live Website**:
   - Within 1–2 minutes, GitHub Pages will deploy your site at:
     ```text
     https://<your-username>.github.io/<repository-name>/
     ```
   - Open the link on any iPhone, Android phone, tablet, or laptop!

---

## 📱 How to Create a Surprise QR Code

1. Copy your GitHub Pages URL (e.g. `https://your-username.github.io/birthday-surprise/`).
2. Go to any free QR code generator (such as [qr-code-generator.com](https://www.qr-code-generator.com/) or Canva).
3. Paste your link and download the QR code image.
4. Print it on a birthday card, tuck it in a gift box, or send it in an envelope for the ultimate romantic surprise!

---

## 🌐 Supabase Online Persistent Storage

The website connects directly to your Supabase project using the public **Publishable key** (`sb_publishable_...`) without requiring any server backend:
- **Table**: `birthday_content`
- **Fields synced**: `birthday_message`, `background_url`, `music_url`, and `updated_at`.
- **Automatic Load**: On page load, the website queries Supabase for the latest saved birthday message.
- **Offline Fallback**: If Supabase is unreachable or offline, the site seamlessly displays the local default message without interruption.
- **GitHub Pages Ready**: Fully compatible with GitHub Pages static hosting.

---

## 🛠️ Built-in Customization & Testing Panel

While previewing, click the discreet **⚙️ gear icon** at the bottom-right corner:
- **⚡ Test 10s Countdown**: Fast-forwards time to 10 seconds remaining so you can watch the countdown hit zero and see the celebration transition!
- **🎉 Test Celebration Mode**: Triggers the celebration view, confetti, and photo burst instantly.
- **🎁 Unlock Vault Now**: Opens the secret memories & love notes before the final 24 hours.
- **Live Sliders**: Adjust overlay darkness, glow, and color balance in real time.
- **Copy JS Config**: Copies your adjustments ready to paste into `script.js`.

GitHub Pages deployment test.
