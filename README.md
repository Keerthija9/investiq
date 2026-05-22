# InvestIQ

A no-frills investing literacy app for Android. Users take a short reflection quiz, discover their investor persona, and get a curated reading list of free and paid educational resources.

**Built on Expo SDK 54 / React Native 0.81 — works with the latest Expo Go from the Play Store and App Store.**

**No personal data collected. No accounts. No money transactions. Educational only.**

---

## Quick Start

### 1. Prerequisites

Install these on your computer:

- **Node.js 18 or 20** — https://nodejs.org (LTS version)
- **Cursor** (or VS Code) — your editor
- **Expo Go app on your phone** — install from Google Play (Android) or App Store (iOS)

Make sure your phone and computer are on the **same Wi-Fi network**.

### 2. Set up the project

Open a terminal in this folder and run:

```bash
npm install
```

This installs all dependencies (takes 1-3 minutes the first time).

### 3. Run the app on your phone

```bash
npx expo start
```

A QR code appears in your terminal.

- **Android**: Open Expo Go on your phone, tap "Scan QR code", point at the terminal.
- **iOS**: Open the regular Camera app, point at the QR code, tap the notification.

The app loads on your phone in 30-60 seconds. Edit any file and it hot-reloads instantly.

### 4. Useful commands while developing

While `npx expo start` is running, in the terminal:

- Press `r` — reload the app
- Press `j` — open the JavaScript debugger
- Press `m` — toggle the dev menu
- Press `?` — show all commands

---

## Project Structure

```
investiq/
├── App.tsx                          # Main app entry, navigation, state flow
├── app.json                         # Expo configuration
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── babel.config.js                  # Babel config
├── src/
│   ├── theme/theme.ts               # Colors, typography, spacing
│   ├── data/
│   │   ├── quiz.ts                  # 7 quiz questions with scoring
│   │   ├── personas.ts              # 5 investor personas + matching logic
│   │   ├── recommendations.ts       # Curated resources per persona
│   │   ├── glossary.ts              # 60 investing terms
│   │   └── tips.ts                  # 20 rotating daily tips
│   ├── screens/
│   │   ├── WelcomeScreen.tsx
│   │   ├── QuizScreen.tsx
│   │   ├── ResultScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── GlossaryScreen.tsx
│   │   └── AboutScreen.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   └── DisclaimerBanner.tsx
│   └── storage/
│       └── storage.ts               # AsyncStorage helpers
└── assets/                          # Icons & splash (you'll add these)
```

---

## Customizing Content

All content lives as plain TypeScript files — easy to edit with Claude's help or by hand.

- **Add quiz questions**: edit `src/data/quiz.ts`
- **Tweak persona descriptions**: edit `src/data/personas.ts`
- **Add resources**: edit `src/data/recommendations.ts`
- **Add glossary terms**: edit `src/data/glossary.ts`
- **Add daily tips**: edit `src/data/tips.ts`
- **Change colors / fonts**: edit `src/theme/theme.ts`

Save and the app hot-reloads.

---

## Adding App Icon & Splash Screen

You need three image files in `assets/`:

- `icon.png` — 1024×1024 PNG (app icon)
- `adaptive-icon.png` — 1024×1024 PNG (Android adaptive icon foreground)
- `splash.png` — 1284×2778 PNG (splash screen)

**Easiest way**: use https://www.figma.com (free) to design them, or generate placeholder icons at https://icon.kitchen (free, no signup). For the splash screen, just put the logo on a `#0B1F2A` background.

---

## Deploying to Google Play Store

### Step 1: Sign up for Google Play Console

- Go to https://play.google.com/console
- Pay the **one-time $25 registration fee**
- Verify your identity (takes 1-3 days)

### Step 2: Install EAS CLI

```bash
npm install -g eas-cli
eas login
```

Create a free Expo account at https://expo.dev if you don't have one.

### Step 3: Configure the build

```bash
eas build:configure
```

This creates `eas.json`. Open it and make sure the Android build profile produces an **AAB** (Android App Bundle), which is what Google Play requires.

### Step 4: Update `app.json`

Change `com.yourname.investiq` to a unique reverse-domain identifier you own, like `com.yourstudio.investiq`. This becomes your permanent Play Store package name — choose carefully.

### Step 5: Build the AAB

```bash
eas build --platform android --profile production
```

Takes 10-25 minutes on Expo's servers. You'll get a download link for the `.aab` file.

### Step 6: Create the Play Store listing

In Google Play Console:

1. **Create app** — name "InvestIQ", default language English, free app
2. **Store listing** — fill in:
   - Short description (80 chars max)
   - Full description (4000 chars max)
   - App icon (512×512 PNG)
   - Feature graphic (1024×500 PNG)
   - At least 2 phone screenshots (1080×1920+)
3. **Content rating** — fill out the questionnaire (educational app, no violence/sex/etc.)
4. **Target audience** — 13+
5. **Privacy policy URL** — required even for apps that collect no data (see below)
6. **Data safety** — declare "No data collected"
7. **App category** — Finance > Education
8. **Upload your `.aab`** under "Production" or "Internal testing" first to verify

### Step 7: Host a privacy policy

Google Play requires a public URL. Easiest free option:

1. Create a free GitHub account
2. Create a new public repository called `investiq-privacy`
3. Add a `README.md` with this content (edit your contact email):

```markdown
# InvestIQ Privacy Policy

Last updated: [date]

InvestIQ ("we", "our", "the app") is an educational application that does not collect, store, or transmit any personal information.

## Data we collect
We collect no personal data. We have no analytics, no advertising SDKs, no tracking. The app does not require an account, email, or any login.

## Data stored on your device
Your quiz answers and resulting investor profile are stored locally on your device only. They never leave your device.

## Third-party links
The app contains links to third-party educational resources (websites, books, podcasts). When you tap a link, you leave the app and are subject to those services' privacy policies. We do not control or monitor your activity on those sites.

## Children's privacy
This app is intended for users 13 and older. We do not knowingly collect any information from anyone.

## Changes to this policy
We may update this policy from time to time. Updates will be posted at this URL.

## Contact
Questions? Email [your-email@example.com].
```

4. Enable GitHub Pages on the repo (Settings → Pages → Branch: main → Save)
5. Your privacy URL is `https://yourusername.github.io/investiq-privacy/`

### Step 8: Submit for review

Once everything is filled in, submit. Review takes anywhere from a few hours to a few weeks for a brand new developer account. Expect 3-7 days the first time.

---

## Optional Next Steps

Once the basic app is live, you can extend it:

- **Save favorite resources** — track which the user has tapped (already partly wired in `storage.ts`)
- **Push notifications** — daily tip reminders via `expo-notifications`
- **Dark mode** — the theme already has the colors; add a toggle
- **More personas** — split into 7-8 deeper archetypes
- **Multi-language** — externalize strings to JSON files
- **Remote content** — use Firebase Remote Config to update recommendations without an app release

---

## Troubleshooting

**"Project is incompatible with this version of Expo Go"**: this means your `package.json` Expo SDK version doesn't match the Expo Go app's SDK. Run `npx expo install expo@latest --fix` to bump everything, or download an older Expo Go from https://expo.dev/go that matches your SDK.

**Node version error**: SDK 54 requires Node 20.19.4 or higher. Run `node --version` to check; if older, install from https://nodejs.org.

**"Expo Go disconnected" on phone**: make sure phone and computer are on the same Wi-Fi. If still failing, run `npx expo start --tunnel` to use a tunnel that works across networks.

**Fonts not loading**: check internet on the device on first launch. After that they're cached.

**TypeScript errors**: run `npx tsc --noEmit` to see all errors. Most are fixable with auto-suggestions in Cursor.

**Build fails on EAS**: check the logs link from the failed build page. Most issues are missing icon files or `app.json` config.

---

## Important Legal Notes

- The app is educational only — never present it as financial advice
- Keep the disclaimer visible on key screens
- If you ever add features that touch real money, brokerage data, or personalized financial recommendations, you may need licenses depending on your jurisdiction
- For the Play Store description, lead with "educational" and "for learning purposes" framing

Good luck with the launch.
