# InvestIQ — Google Play upload guide

## Your build (ready)

- **AAB download:** https://expo.dev/artifacts/eas/t13R6jQySfpb6fFHdVbuHY.aab
- **Package name:** `com.investiq.app` (must match exactly in Play Console)
- **Version:** 1.0.0

---

## Step 1 — Privacy policy URL (required)

Host `docs/privacy-policy.html` at any public URL. Options:

1. **GitHub Pages:** Push repo to GitHub → Settings → Pages → use URL like  
   `https://YOUR_USERNAME.github.io/investiq/privacy-policy.html`
2. **Google Sites:** Create a free page and paste the policy text.
3. **Notion:** Publish a page and use the public link.

Use that URL in Play Console **App content → Privacy policy**.

---

## Step 2 — Create the app in Play Console

1. https://play.google.com/console — pay $25 one-time if new.
2. **Create app** → name: **InvestIQ** → Free → Create.
3. **App access:** All functionality available without restrictions (unless you add login later).
4. **Ads:** No, app does not contain ads.
5. **Content rating:** Complete questionnaire (educational app, no gambling).
6. **Target audience:** Choose age band (e.g. 18+ or general).
7. **News app:** No.
8. **COVID / government / financial** declarations as prompted (educational, not a broker).

### Data safety (important)

| Question | Answer |
|----------|--------|
| Collects data? | No (or only data stored on device, not transmitted) |
| Personal info shared? | No |
| Encryption in transit | N/A (no network collection) |
| Delete data | User can clear via "Retake the quiz" or uninstall |

Declare **quiz persona** and **saved glossary terms** as stored on device only, not collected/transmitted.

---

## Step 3 — Store listing (copy/paste)

**App name:** InvestIQ

**Short description (80 chars max):**
```
Learn investing basics with a personalized literacy guide. No accounts, no ads.
```

**Full description:**
```
InvestIQ helps you build investing literacy at your own pace.

Take a short quiz to discover your learning persona, then explore curated topics, a glossary of key terms, and practical reading suggestions—all tailored to how you like to learn.

FEATURES
• Personality-style quiz to match your investing learning style
• Home feed with topics matched to your persona
• Glossary with save/bookmark terms for later
• Clear disclaimers: educational only, not financial advice

PRIVACY FIRST
• No account required
• No ads or tracking
• Quiz results and bookmarks stay on your device only

IMPORTANT
InvestIQ is for education only. It is not a broker, financial advisor, or investment recommendation service. Always do your own research and consult a licensed professional before investing.

Free to use. Start learning today.
```

**Category:** Education (or Books & Reference)

**Contact email:** keerthijavegi@gmail.com

---

## Step 4 — Upload the AAB

1. Play Console → **Testing** → **Internal testing** → **Create new release**
2. **Upload** the `.aab` from the link above
3. Release name: `1.0.0 (4)` or similar
4. Save → **Review release** → **Start rollout to Internal testing**
5. **Testers** tab → create email list → add your Gmail → save
6. Open the opt-in link on your phone → install from Play Store

When satisfied: **Promote release** to **Production** → submit for review.

---

## Step 5 — Graphics you still need

Play Console requires screenshots (min. 2 phone screenshots). Capture from Expo Go or a device:

- Welcome / quiz screen
- Home or glossary screen
- Result / persona screen

Optional: **Feature graphic** 1024×500 px.

Replace placeholder icons in `/assets` before a public marketing launch.

---

## Automated submit (later)

After the Play Console app exists, set up a [Google Play service account](https://docs.expo.dev/submit/android/) and run:

```bash
npm run submit:android
```
