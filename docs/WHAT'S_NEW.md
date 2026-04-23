
# Changelog

All notable changes to Facebook Auto Poster (FAP) are documented in this file.


# What's New in v2.1.1

This is a fixes-only update. No new features — just things that were behaving
incorrectly after v2.1.

---

## Groups Load Clean

When you click **Load Groups**, your groups now load unchecked. Previously they were all
auto-selected on load, which could lead to accidental campaigns. You now pick your groups
deliberately before starting.

Loading a **saved group list** still works exactly as before — your saved selection is
auto-checked when you load a list.

## Safety Break Countdown Fixed

After a safety break ended, two overlapping countdowns could appear in the live counter
strip at the same time — the break countdown and the next-post countdown both writing
simultaneously. This is fixed. The counter strip now shows one clean message at a time.

## Reset Button Now Clears All State

The Reset button now fully clears the campaign state, including break status, failure
counters, and any running countdown intervals. Previously, resetting mid-break or
mid-failure-run could leave stale state that affected the next campaign.

## Pause Status Card Fixed

When the campaign auto-paused due to consecutive failures, the status card didn't always
switch to the paused state correctly. This is fixed — the status card now updates
reliably in all auto-pause scenarios.

## Safer Delay Recommendations

The smart delay recommendations and risky delay warnings have been recalibrated with
tighter thresholds. If you're posting to a larger number of groups, FAP will now
recommend a more conservative delay and warn you sooner if your current setting is too
aggressive.

---

**v2.1.1 is a drop-in update.** All saved campaigns, group lists, and settings are
fully preserved.

---

# What's New in v2.1
 
This release is about making long campaigns safer and more reliable. Three new systems
work together to protect your account during large runs.
 
---
 
## Safety Break
 
You can now tell FAP to pause automatically after every N posts, for a set duration.
Enable it in the **Delay Settings** section on the Content tab.
 
When a break triggers, the normal inter-post delay is skipped — the break timer fires
directly instead. No double-wait. The live counter strip shows a countdown during the
break, and posting resumes automatically when it ends.
 
**Break after every:** 10 / 25 / 50 / 100 posts — or set a custom number.
**Break duration:** 2m / 5m / 10m / 15m — or set a custom duration in minutes.
 
The default (25 posts / 5 minutes) is a safe starting point for most campaigns.
 
---
 
## Smarter Failure Handling
 
FAP now reads Facebook's response on every post to understand *why* something failed,
not just *that* it failed.
 
**Groups that can't be posted to are skipped for the rest of the session.** If a group
is inaccessible — because you've left it, lost posting rights, or it no longer exists —
FAP marks it and moves on without wasting a retry on it.
 
**Five consecutive failures trigger a warning.** If five posts in a row fail, 
the campaign automatically pauses and a warning is logged explaining why.
You can verify your account by posting manually to any group, then click
Resume to continue — or stop the campaign entirely.
 
**Serious signals stop the campaign.** If Facebook returns a spam block or account
checkpoint signal, the campaign ends immediately. Better to stop cleanly than to keep
posting into a restricted state.
 
---
 
## Token Auto-Recovery
 
When your session token expires mid-campaign. FAP now catches this, updates the token automatically, and retries the
failed post — all without interrupting the run or asking you to do anything.
 
Previously, a token expiry mid-run would cause the remaining posts to fail silently.
 
---
 
**v2.1 is a drop-in update.** All saved campaigns, group lists, and settings are fully
preserved.
 
---


# What's New in v2.0.2
 
This is a stability and polish update. No new features — just fixes for things that were
behaving unexpectedly after v2.0.
 
---
 
## Start Button Now Appears After Loading a Group List
 
When you loaded a saved group list, all groups were correctly auto-selected — but the
**Start Posting** button stayed hidden until you manually ticked or unticked a checkbox.
That extra step is gone. The button now appears immediately as soon as your groups are
loaded and selected, with no manual interaction needed.
 
## Groups Load Clean
 
When you click **Load Groups**, your groups now load unchecked. Previously they were all
auto-selected on load, which could lead to accidental campaigns. You now pick your groups
deliberately before starting.
 
Loading a **saved group list** still works exactly as before — your saved selection is
auto-checked when you load a list.
 
## Search No Longer Shows False "All Selected"
 
If you searched for a group while all groups were selected, the select-all checkbox would
stay checked even though you were only looking at filtered results. This is fixed — the
checkbox clears whenever you type in the search box.
 
## Campaign Load Now Fully Restores Delay Settings
 
When you load a saved campaign, the delay slider now correctly shows the saved settings —
the slider handles, the fill bar, and the preset button highlights all update to match.
Previously the slider looked like it was in default state even though the correct delay
was loaded.
 
## Reset Button Now Works
 
The **Clear** button (to reset your campaign selection) was missing from the interface
entirely. It's back, and it works correctly from both the save and load flows.
 
## Dropdowns Fixed
 
The Group List and Campaign dropdowns had a positioning issue that caused them to behave
inconsistently — sometimes wrong width, sometimes not closing properly. Both dropdowns now
open correctly, size to fit their content, scroll if the list is long, and close cleanly
when you click outside.
 
## Duplicate Notifications Fixed
 
In a couple of places, error messages were appearing twice for a single event. This is
fixed — you'll see one notification per event, not two.
 
## Better Behaviour on Slow Connections
 
If the extension can't reach the license server (slow internet, temporary outage), it now
quietly retries in the background before showing anything. If the connection fails
completely, you'll see a simple "connection issue" message with a retry button — not a
purchase prompt. An active campaign will also never be stopped due to a connectivity blip
mid-run.
 
## Reliability Improvements
 
This update includes internal hardening to make the extension more reliable and
consistent across all usage flows. Several edge cases that could leave the extension in
an inconsistent state have been addressed.
 
---
 
**v2.0.2 is a drop-in update.** Your saved campaigns, group lists, and settings are
all preserved.

---

**v2.0.2 is a drop-in update.** Your saved campaigns, group lists, and settings are all preserved.

---

## v2.0.1 — Stability & Bug Fixes

### Pause & Resume — More Reliable
- Pausing and cancelling a campaign no longer causes the next campaign to hang silently on start. Previously, abandoning a paused run left the tool frozen waiting for a resume that would never come.
- Clicking **Pause** now stops posting more aggressively. If a post hadn't fired yet, it won't fire — it waits and sends correctly when you resume. Previously a post could slip through in the split second after Pause was clicked.
- The live counter strip now correctly keeps the last group name visible after resuming. Previously it went blank the moment you hit Resume.
- Fixed a rare bug where resuming mid-countdown could cause the same group to be posted to twice.

### Group Selection — Works as Expected
- Loading a saved group list now **automatically selects** all the groups in that list. Previously the list loaded but nothing was checked, so you had to manually tick every group.
- Switching from one saved list to another now **clears the previous selection** first. Previously groups from the old list stayed checked alongside the new ones.
- Loading a saved **campaign** now correctly activates all buttons and the estimate banner straight away, without needing to click anything first.

### Campaign & Group Buttons — Consistent Behaviour
- The **Load Campaign** button now stays visible whenever you have saved campaigns, regardless of whether any groups are currently checked. Previously it would disappear when you unchecked all groups.
- The **Save Selection** and **Save Campaign** buttons now appear and disappear consistently across all ways of selecting groups — manual checkbox, Select All, loading a group list, and loading a campaign.
- Fixed a bug where ticking the **Select All** header checkbox after loading the "All" list would not check anything.

### Visual Improvements
- Groups table has a new cleaner design with a sticky header, styled checkboxes, and row highlight on selection. Full group name visible on hover — no more text cut off at 50 characters.
- An empty state is shown in the Groups tab before you load any groups.
- Dashboard stat cards now show coloured accents and icons. The Status card updates live — Idle / Running / Paused / Done — and resets automatically after a campaign finishes.
- Progress bar is taller and the percentage label tracks the fill correctly at all stages.
- Post-run summary rows now show the group name, post link, and timestamp together so results are easier to scan.

---

## v2.0 — Image Posting, Smart Delays & Campaign Intelligence

### New: Image Posting
- Attach a photo to any post via drag-and-drop or file picker.
- Auto-uploads immediately on file select — no separate upload button needed.
- Live upload progress bar and status badge on the preview card.
- Filename is sanitized automatically to fix Facebook error 1357004 (caused by special characters or `.jpg` extensions in certain cases).
- Image posts and link previews are mutually exclusive — selecting one disables the other.
- A new `imageUpload.js` module handles the full pipeline: file read → blob → `upload.facebook.com` → `photo_id` → GraphQL mutation.
- Added `*://upload.facebook.com/*` to `host_permissions` in `manifest.json` to allow the upload request.

### New: Dual-Handle Delay Slider with Presets
- Replaced the dropdown selects for delay with a visual **dual-handle range slider** for Range mode and a **single-handle slider** for Fixed mode.
- Preset buttons (e.g., 1–3 min, 3–20 min, 20–30 min, 30–60 min) apply a value instantly.
- Custom minute values can still be entered directly in the input fields.

### New: Smart Delay Recommendation Engine
- FAP analyses your selected group count and recommends the safest delay tier across 6 brackets:
  - < 50 groups → 1–3 Minutes
  - 50–100 → 1–3 Minutes
  - 100–300 → 3–20 Minutes
  - 300–500 → 3–20 Minutes
  - 500–1,000 → 20–30 Minutes
  - 1,000–2,000 → 30–60 Minutes
  - 2,000+ → Custom 45–60 Minutes

### New: Smart Delay Warning Modal
- If posting is started with a delay that is too short for the selected group count, a **blocking modal** appears before the first post.
- The modal shows: current (risky) delay, recommended safe delay, and two actions — **Apply Safe Delay** and **Post Anyway**.
- Prevents silent proceeding with unsafe settings.

### New: Custom Range Validation
- Before posting starts, FAP validates custom minute range input (min must be a positive integer less than max).
- Posting is blocked with a clear error message if validation fails.

### New: Estimated Run Time Banner
- A banner displayed before posting shows the expected total campaign duration based on group count and current delay setting.
- Updates live as group selection or delay changes.
- Includes an **ℹ️ info popover** showing the manual effort saved (calculated at ~30 seconds per group for up to 30 groups).
- Appends an inline **risk warning pill** if the current group count + delay combination is flagged as risky.
- Banner hides once posting begins.

### New: Live Post Counter Strip
- A persistent strip appears on the dashboard during an active posting run.
- Shows: `X of Y — ✓ success_count  ✗ fail_count | Posted in: Group Name | Next in Ns`.
- Updates after every post and on every countdown tick.
- Hidden before posting starts and after the run completes.

### New: Post-Run Summary Modal
- After every campaign completes, a summary modal appears automatically showing:
  - Total posts, success count, fail count.
  - An animated **success-rate bar** (animates via CSS transition triggered after render).
  - A scrollable list of up to 15 direct post links with group name, status, and timestamp.
  - "And N more…" if results exceed 15.

### New: Retry on Failure
- If a post fails due to a transient Facebook error, FAP automatically retries **once after 8 seconds**.
- For image posts, `uploadFreshPhoto()` is called before the retry to get a fresh `photo_id`.
- Only one retry attempt per post. If the retry also fails, the group is marked failed and the loop continues.

### Improved: Group List Count Labels
- Saved group list dropdowns now show the number of groups next to each list name (e.g., `Marketing Groups (24)`).

### Fixed: Double-Count for "All" Group List
- Fixed a bug where selecting "All" groups simultaneously with a loaded saved group list could cause groups to be posted to twice. Groups are now deduplicated via a `Set` before the posting loop.

### Improved: First Post Starts Immediately
- The posting loop launches the first post with zero delay (`setTimeout(postToGroups, 0)`).
- The configured wait time applies only between subsequent posts.

### Improved: Progress Bar Percentage Label
- The progress bar now displays a percentage label that tracks with the fill.
- Label clears correctly on reset and hides when the bar is inactive.

### Improved: Log Message Polish
- Log messages throughout the posting flow reviewed and standardized for consistency.

---

## v1.9 – Scheduled Posting, API Alignment & UX Enhancements

### New: Post Scheduling
- Introduced post scheduling with date & time selection.
- Enforced minimum schedule time (now + 35 minutes) to align with Facebook constraints.
- Added a clear **"New"** badge to highlight the scheduling feature in the UI.
- Implemented **Reset Schedule** to instantly clear scheduled date/time and revert to normal posting.
- Differentiated success messages for immediate vs scheduled posts (clear confirmation that a scheduled post is queued, not yet published).

### Posting & API Updates
- Updated link preview handling to align with the latest Facebook post APIs.
- Refactored `generateLinkPreviewFormData` to support scheduled posts reliably.
- Improved cached link preview flow for both scheduled and immediate posting paths.
- Ensured consistent behaviour between manual and scheduled posting.

### UX & Feedback
- Improved scheduling section layout for better visibility and discoverability.
- Added helper text to explain scheduling requirements and limitations.
- Prevented accidental scheduling — users can reset schedule at any time before posting.
- Reduced confusion by aligning UI messages with actual post state.

### Stability & Safeguards
- Added internal guards to ensure scheduling flags reset correctly when disabled.
- Prevented mixed states where scheduled values could affect normal posts.
- Improved overall posting flow reliability in edge cases.

---

## v1.8 – UI Refactor & UX Stabilization

### UI / Layout
- Rebuilt Dashboard, Content, Groups, and Settings layouts using unified card spacing and balanced left/right rails.
- Converted Promo / Tips section into reusable layout blocks across Content and Settings.
- Normalized button styles (primary/ghost) and textarea focus states.
- Updated brand logo asset and aligned sizing across header contexts.

### Progress & Status
- Replaced multiple posting progress indicators with a single global progress bar.
- Added animated progress sheen and completion confetti trigger.
- Added extension icon badge during active posting.

### Groups UI
- Implemented fixed-height group table with internal scrolling.
- Standardized action button sizes and alignment.

### Modals & UX
- Replaced native `confirm()` prompts with custom modals for: Save group list, Delete group list, Save campaign, Delete campaign.
- Fixed dropdown positioning and closing behaviour.

### Cleanup
- Removed legacy elements: `postingStatus`, `empty_message_error`.
- Centralized dashboard CSS into `dashboard.css`.
- Removed duplicate progress update logic.
- Minor accessibility improvements (contrast, hover states).

---

## v1.7 – Link Preview & Single-Instance Stability Fix

- Added manual link preview support with multi-link selection.
- Preview data is fetched on demand and reused during posting.
- Per-post preview state is preserved in saved campaigns.
- Ensured only one extension instance (frame) can be open at a time.
- Minor internal stability improvements.

---

## v1.6.1 – Campaign Load Fixes & Posting Stability Improvements

- Fixed progress bar text rendering and initialization issues.
- Start Posting button now appears correctly when loading a saved campaign.
- Improved usage reporting for posted content reliability.

---

## v1.6 – Smarter Campaigns, Pause Button, Cleaner UI

### New: Pause / Resume Button
Pause an active posting campaign at any time.

### New: Post URL Display
Direct Facebook post URL shown in the event log after each successful post.

### New: Save & Load Campaigns
Save group selections and post settings as named campaigns. Load in one click.

### New: Extended Wait-Time Options
Flexible fixed and custom wait times. First post starts immediately.

### Improved: Logs & Toastr Notifications
- Log auto-scrolls to latest entry.
- Clear Logs button added.
- Cleaner log format: `[time] STATUS message`.
- Group links are clickable.
- More accurate success/error toast messages.

### Improved: Progress Bar
- Progress text remains readable at all fill levels.
- Progress bar auto-hides when not needed.

---

## v1.5.3.6

- Added Custom Time Range (Minutes) with full validation.
- No delay before first post; no delay after last post.
- Rebuilt posting engine for performance and natural timing.
- Strengthened input validation and FB safety protections.
- Removed duplicate logs and fixed early wait calculation bug.

---

## v1.5.3.5

- Enhanced reliability of license and update checks.
- Optimized data handling between extension and server.
- Improved background validation and logging flow.

---

## v1.5.3.4

- Added UTF-8 encoding/decoding support to custom encryption.
- Prevented `InvalidCharacterError` with Unicode characters.

---

## v1.5.3.3

- Added regex-based JSON extraction for ACCOUNT_ID, USER_ID, NAME.
- Detects PAGE_MESSAGING_MAILBOX_ID to identify Page posting.
- Automatically sets `profileData.type` to `page` or `user`.

---

## v1.5.3.2

- Updated API for improved reliability with Facebook changes.
- Automatic link previews with clean post formatting.
- Faster posting by applying wait time only between posts.
- Smart link handling: single trailing links removed, embedded/multiple links preserved.

---

## v1.5.3.1

- Fixed group loading issue.
- User posting updated to latest Facebook API.

---

## v1.5.3 – Security & Stability Enhancements

- SHA-256 integrity verification for core JS files.
- Added `DEBUG_MODE` flag; disables console output in production.
- Improved license module reliability.
- Fixed media upload CORS issues via header updates.
- Dynamic extension ID retrieval in background script.
- Optimized `loginCheck` for faster profile handling.

---

## v1.5.2.2

- Enhanced link detection.
- Added support for `fb.watch` links with preview.

---

## v1.5.2

- Improved link preview handling for Page posting.
- Enhanced regex for link detection.
- Payload construction aligned with Facebook requirements.

---

## v1.5.1

- Fixed user/page detection issues.
- Prevented double posting when using saved group lists.

---

## v1.5

- Save selected groups as reusable lists.
- Load groups directly from saved lists.
- Added option to delete saved group lists.

---

## v1.4.9.9

- Fixed login issues for profiles without usernames.
- Special characters (&, <, >, etc.) handled correctly.

---

## v1.4.9

- Added wait-time range support with random delays.
- Page posting support added.

---

## v1.4.8

- Fixed "Type something to post" bug.
- Group posting fixed after Facebook changes.

---

## v1.4.7

- Fixed DynamicRules issues in `background.js`.
- Old rules removed on update/install.
- Scoped origin rules to Facebook URLs only.

---

## v1.4.6

- Introduced Multiple Posts feature.
- Randomized post selection across groups to reduce blocking.
