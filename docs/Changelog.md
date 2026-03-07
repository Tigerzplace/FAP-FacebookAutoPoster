# Changelog

All notable changes to Facebook Auto Poster (FAP) are documented here.

---

## v2.0 — Image Posting, Smart Delays & Campaign Intelligence

### 🖼️ New: Image Posting
- Attach a photo to any post using drag-and-drop or the file picker.
- Image uploads automatically on selection — no extra step needed.
- Live upload progress and status shown on the image preview card.
- Posts with images and posts with link previews are mutually exclusive — the UI handles this automatically.

### 🎚️ New: Delay Range Slider with Presets
- Replaced the delay dropdowns with a visual range slider for both Range and Fixed modes.
- Preset buttons (1–3 min, 3–20 min, 20–30 min, 30–60 min) apply in one click.
- Custom minute values can still be entered manually.

### 🧠 New: Smart Delay Recommendation
- FAP now analyses your selected group count and recommends the safest delay automatically.
- Six safety tiers are defined based on group count — from under 50 groups up to 2,000+.

### ⚠️ New: Delay Warning Modal
- If you start posting with a delay that is too short for your group count, a blocking warning appears before the first post.
- Shows your current setting, the recommended safe alternative, and two options: **Apply Safe Delay** or **Post Anyway**.
- No more silently proceeding with risky settings.

### ✅ New: Custom Range Validation
- If you enter a custom minute range, FAP validates it before posting starts.
- Posting is blocked with a clear message if the values are invalid.

### ⏱️ New: Estimated Run Time Banner
- Before posting starts, a banner shows the expected total campaign duration based on your group count and delay.
- Updates live as you change your selection.
- Shows how much manual effort FAP is saving you for the current setup.
- Displays a risk warning inline if your combination is flagged.

### 📊 New: Live Post Counter Strip
- A real-time strip appears on the dashboard during every posting run.
- Shows current position, total groups, success count, fail count, last group posted, and countdown to the next post.

### 🏁 New: Post-Run Summary
- After every campaign completes, a summary modal appears automatically.
- Shows total posts sent, success count, fail count, and an animated success-rate bar.
- Includes a scrollable list of up to 15 direct post links so you can verify results instantly.

### 🔁 New: Automatic Retry on Failure
- If a post fails due to a temporary error, FAP retries it once automatically after a short wait.
- Only one retry per post — if it fails again, the group is skipped and the campaign continues.

### 🗂️ Improved: Group List Labels
- Saved group list dropdowns now show the number of groups in each list next to the name.

### 🐛 Fixed: Duplicate Posts Bug
- Fixed an issue where using "All groups" together with a saved group list could cause some groups to be posted to twice.

### ⚡ Improved: First Post Starts Immediately
- The first post in every campaign now begins with no delay.
- Wait time only applies between subsequent posts.

### 📈 Improved: Progress Bar
- The progress bar now shows a percentage label that moves with the fill at all stages.

---

## v1.9 – Scheduled Posts & Smarter Posting Experience

### New: Post Scheduling
- Schedule posts by selecting a date and time.
- Minimum schedule time enforced automatically to avoid Facebook errors.
- Added a **"New"** badge to highlight the scheduling feature.
- Added a **Reset Schedule** button to cancel scheduling and revert to normal posting.
- Success messages clearly distinguish between immediate and scheduled posts.

### Improved: Posting Experience
- Link preview handling updated for better reliability.
- More consistent behaviour across different post types.

### Better UX & Clarity
- Scheduling section layout improved for better visibility.
- Helper text added to explain scheduling requirements.
- UI messages aligned with actual post state to reduce confusion.

### Stability
- Fixed edge cases where scheduling data could affect normal posts.
- Improved internal checks for smooth posting flow.

---

## v1.8 – UI Refactor & UX Stabilization

### UI / Layout
- Rebuilt Dashboard, Content, Groups, and Settings layouts with unified spacing and balanced layout.
- Normalized button styles and textarea focus states.
- Updated brand logo and aligned sizing across all views.

### Progress & Status
- Replaced multiple progress indicators with a single global progress bar.
- Added animated progress sheen and completion confetti.
- Added extension icon badge during active posting.

### Groups UI
- Fixed-height group table with internal scrolling.
- Standardized action button sizes and alignment.

### Modals & UX
- Replaced browser confirm prompts with custom modals for all save/delete actions.
- Fixed dropdown positioning and closing behaviour.

### Cleanup
- Removed legacy UI elements no longer in use.
- Minor accessibility improvements (contrast, hover states).

---

## v1.7 – Link Preview & Single-Instance Stability Fix

- Added manual link preview support with multi-link selection.
- Preview data fetched on demand and reused during posting.
- Preview state preserved in saved campaigns.
- Only one extension instance can be active at a time — duplicates are closed automatically.
- Minor internal stability improvements.

---

## v1.6.1 – Campaign Load Fixes

- Fixed progress bar rendering on campaign load.
- Start Posting button now appears correctly when loading a saved campaign.

---

## v1.6 – Smarter Campaigns, Pause Button, Cleaner UI

### New: Pause / Resume
Pause an active campaign at any time and resume from where you left off.

### New: Post URL Display
Direct Facebook post URL shown in the event log after each successful post.

### New: Save & Load Campaigns
Save your full setup as named campaigns and load in one click.

### New: Extended Wait-Time Options
Flexible fixed and custom wait times. First post starts immediately.

### Improved: Logs
- Auto-scrolling event log.
- Clear Logs button.
- Cleaner log format with clickable group links.
- More accurate success/error notifications.

### Improved: Progress Bar
- Readable at all fill levels.
- Auto-hides when not in use.

---

## v1.5.3.6

- Added Custom Time Range with full validation.
- No delay before first post; no delay after last post.
- Rebuilt posting engine for performance and natural timing.
- Strengthened input validation and safety protections.

---

## v1.5.3.5

- Enhanced reliability of license and update checks.
- Improved background validation and status reporting.

---

## v1.5.3.4

- Fixed encryption compatibility with Unicode and special characters.

---

## v1.5.3.3

- Improved account type detection for user vs page posting.

---

## v1.5.3.2

- Updated posting engine for reliability with latest Facebook changes.
- Automatic link previews with clean post formatting.
- Smarter link handling — single trailing links removed, embedded links preserved.

---

## v1.5.3.1

- Fixed group loading issue.
- Updated posting to align with latest Facebook requirements.

---

## v1.5.3 – Security & Stability

- Added integrity verification for core extension files.
- Console output disabled in production builds.
- Improved license module reliability.
- Fixed media upload permission issues.

---

## v1.5.2.2

- Enhanced link detection.
- Added support for `fb.watch` links with preview.

---

## v1.5.2

- Improved link preview handling for Page posting.
- Better link detection and payload reliability.

---

## v1.5.1

- Fixed user vs page detection issues.
- Prevented duplicate posts when using saved group lists.

---

## v1.5

- Save selected groups as reusable named lists.
- Load and delete saved group lists.

---

## v1.4.9.9

- Fixed login issues for profiles without usernames.
- Special characters handled correctly in posts.

---

## v1.4.9

- Added wait-time range with random delays.
- Page posting support added.

---

## v1.4.8

- Fixed "Type something to post" bug.
- Group posting fixed after Facebook changes.

---

## v1.4.7

- Fixed background rule issues on extension update/install.
- Rules scoped to Facebook URLs only.

---

## v1.4.6

- Introduced Multiple Posts feature.
- Random post selection per group to reduce detection risk.
