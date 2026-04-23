# Facebook Auto Poster v2.0 — User Tutorial

A step-by-step guide to installing, configuring, and using the Facebook Auto Poster (FAP) Chrome extension.

> 📺 **Prefer to watch?** The complete v2.0 video tutorial covers everything in this guide:  
> 👉 [Watch on YouTube — FAP v2.0 Full Tutorial](https://www.youtube.com/watch?v=XR7HbUYs6fo)

---

## Table of Contents

1. [Installation](#1-installation)
2. [First Launch](#2-first-launch)
3. [Loading Your Groups](#3-loading-your-groups)
4. [Selecting Groups](#4-selecting-groups)
5. [Composing Your Post](#5-composing-your-post)
6. [Adding Images](#6-adding-images)
7. [Link Previews](#7-link-previews)
8. [Wait Time Settings](#8-wait-time-settings)
9. [Starting a Posting Campaign](#9-starting-a-posting-campaign)
10. [Pause & Resume](#10-pause--resume)
11. [Post-Run Summary](#11-post-run-summary)
12. [Saving & Loading Campaigns](#12-saving--loading-campaigns)
13. [Scheduling Posts](#13-scheduling-posts)
14. [Multiple Posts Feature](#14-multiple-posts-feature)
15. [Dashboard & Logs](#15-dashboard--logs)
16. [Saved Group Lists](#16-saved-group-lists)
17. [Posting as a Page](#17-posting-as-a-page)
18. [Safety Tips & Best Practices](#18-safety-tips--best-practices)
19. [Troubleshooting](#19-troubleshooting)

---

## 1. Installation

### Step 1: Download the Extension

Download or clone the FAP extension folder to your computer.

> 📺 **Video:** Prefer to follow along visually? The [v2.0 tutorial on YouTube](https://www.youtube.com/watch?v=XR7HbUYs6fo) walks through installation from scratch at the start of the video.

[Mediafire Download link](https://www.mediafire.com/folder/bax3fo6zffjjw/Version_2)

### Step 2: Open Chrome Extensions Page

Navigate to `chrome://extensions` in your Chrome browser.

```
📸 Screenshot: Chrome address bar showing chrome://extensions
```

### Step 3: Enable Developer Mode

Toggle the **Developer mode** switch in the top-right corner of the extensions page.

```
📸 Screenshot: Developer mode toggle in ON position
```

### Step 4: Load the Extension

Click **"Load unpacked"** and select the FAP extension folder (the one containing `manifest.json`).

```
📸 Screenshot: Load unpacked button highlighted, folder selection dialog
```

### Step 5: Verify Installation

You should see "Facebook Auto Poster" appear in your extensions list with the FAP icon. Pin it to your toolbar for easy access.

```
📸 Screenshot: FAP extension card in chrome://extensions showing version 2.0
📸 Screenshot: FAP icon pinned in Chrome toolbar
```

---

## 2. First Launch

### Step 1: Log into Facebook

Make sure you're logged into your Facebook account in the same Chrome profile where FAP is installed.

### Step 2: Click the FAP Icon

Click the FAP icon in your Chrome toolbar. The extension will:
1. Close the popup
2. Replace your current tab with the FAP dashboard

```
📸 Screenshot: FAP icon in toolbar
📸 Screenshot: FAP dashboard after loading
```

### Step 3: License Activation

If this is your first time, you may see a license prompt. Follow the on-screen instructions or visit [tigerzplace.com](https://tigerzplace.com/how-to-buy-tool-license/) for licensing.

---

## 3. Loading Your Groups

### Step 1: Click "Load Groups"

On the FAP dashboard, click the **"Load Groups"** button. FAP fetches all Facebook groups you've joined.

```
📸 Screenshot: Load Groups button location on dashboard
```

### Step 2: Wait for Groups to Load

FAP reads your groups from Facebook. This may take a few seconds depending on how many groups you're in.

```
📸 Screenshot: Loading indicator while groups are being fetched
```

### Step 3: Browse Your Groups

Once loaded, a searchable table shows all your groups with checkboxes.

```
📸 Screenshot: Group list table with group names, checkboxes, and search bar
```

---

## 4. Selecting Groups

### Search & Filter

Use the **search bar** above the group list to filter groups by name.

```
📸 Screenshot: Search bar with a keyword typed, filtered results
```

### Select Individual Groups

Click the checkbox next to each group you want to post to.

### Select All Groups

Use the **"Select All"** checkbox at the top to select or deselect all visible groups at once.

```
📸 Screenshot: Select All checkbox with groups checked
```

### Load a Saved Group List

If you've previously saved a group list, select it from the dropdown to auto-check those groups. The dropdown shows the group count next to each list name. See [Saved Group Lists](#16-saved-group-lists) for details.

---

## 5. Composing Your Post

### Write Your Message

Type your post content in the text area. You can include regular text, emojis, links, and hashtags.

```
📸 Screenshot: Post text area with sample message
```

### Character Support

FAP supports full Unicode — emojis, special characters, and non-English text all work correctly.

---

## 6. Adding Images

### Step 1: Click the Image Upload Area

In the image upload section, click to browse or drag-and-drop an image file.

```
📸 Screenshot: Image upload area / dropzone
```

### Step 2: Preview Your Image

After selecting an image, you'll see a preview thumbnail in the media tray.

```
📸 Screenshot: Image preview card in media tray
```

### Step 3: Remove Image (Optional)

Click the remove/clear button on the image card to remove it before posting.

> **Note:** Image posts and link preview posts are mutually exclusive. Selecting an image disables link previews and vice versa.

---

## 7. Link Previews

When your post contains one or more URLs, FAP can fetch and display a Facebook-style link preview card.

### Step 1: Write a Post with a URL

Include a link in your post text.

```
📸 Screenshot: Post text area with a URL typed in
```

### Step 2: Select Which Link to Preview

If your post contains multiple URLs, use the dropdown to choose which one to preview.

```
📸 Screenshot: Link selection dropdown showing multiple detected URLs
```

### Step 3: Fetch the Preview

Click **"Fetch Preview"** to load the link preview from Facebook.

```
📸 Screenshot: Fetch Preview button, then the rendered preview card (title, description, image)
```

### Step 4: Clear Preview (Optional)

Click **"Clear Preview"** to remove the preview and post without one.

> **Note:** Link previews are saved with campaigns. Loading a campaign restores the preview without refetching.

---

## 8. Wait Time Settings

Wait times control the delay between each group post. This is the most important safety setting.

### Delay Range Slider

v2.0 introduces a **dual-handle range slider** for setting your min and max delay visually. Use the preset buttons to jump to common ranges, or switch to **Custom mode** to enter exact minute values.

```
📸 Screenshot: Dual-handle delay slider with preset buttons (1-3min, 3-20min, etc.)
```

### Smart Delay Recommendation

When you select groups, FAP automatically recommends the safest delay tier for your group count. The recommendation appears in the delay section — apply it with one click.

```
📸 Screenshot: Smart delay recommendation showing recommended tier and group count
```

### Smart Delay Warning Modal

If you start posting with a delay that's too short for your group count, a blocking warning modal appears. It shows:
- Your current (risky) delay
- The recommended safe delay
- Two buttons: **Apply Safe Delay** and **Post Anyway**

```
📸 Screenshot: Smart delay warning modal with risk alert, current vs recommended delay, and action buttons
```

### Estimated Run Time Banner

Before posting starts, a banner displays the estimated total campaign duration. It also shows your **active effort saved** (compared to doing it manually), and a **risk warning pill** if your combo is flagged.

```
📸 Screenshot: Estimate banner showing run time, effort saved, and optional risk pill
```

### Recommended Delay Tiers

| Groups Count | Recommended Delay |
|---|---|
| Under 50 | 1–3 Minutes |
| 50–100 | 1–3 Minutes |
| 100–300 | 3–20 Minutes |
| 300–500 | 3–20 Minutes |
| 500–1,000 | 20–30 Minutes |
| 1,000–2,000 | 30–60 Minutes |
| 2,000+ | Custom 45–60 Minutes |

---

## 9. Starting a Posting Campaign

### Step 1: Verify Your Setup

Before starting, confirm:
- ✅ Groups are selected
- ✅ Post message is written
- ✅ Delay is configured
- ✅ (Optional) Image or link preview is set

### Step 2: Click "Start"

Click the **"Start"** button to begin posting.

> **Note:** The first post begins immediately with no pre-delay. Configured delays only apply between subsequent posts.

```
📸 Screenshot: Start button location
```

### Step 3: Monitor with the Live Counter Strip

Once posting begins, the live counter strip appears on the dashboard showing:
- Current post number out of total
- ✓ Success count and ✗ Fail count
- Name of the group just posted to
- Countdown to the next post

```
📸 Screenshot: Live counter strip during active posting
```

### Step 4: Monitor the Progress Bar

The progress bar fills with a percentage label that tracks the fill across all stages.

```
📸 Screenshot: Progress bar at 60% with label visible
```

### Step 5: View Post URLs in the Log

After each successful post, the event log shows a **clickable direct link** to the Facebook post.

```
📸 Screenshot: Event log entry with clickable post URL
```

---

## 10. Pause & Resume

### Pause

During an active campaign, click the **"Pause"** button. The current post completes, then the loop halts.

```
📸 Screenshot: Pause button during active posting
```

### Resume

Click **"Resume"** (same button) to continue posting from exactly where you stopped.

```
📸 Screenshot: Resume button in paused state
```

> **Tip:** Pausing is useful if you want to wait for better engagement hours or need to step away temporarily.

---

## 11. Post-Run Summary

When a campaign finishes, a **post-run summary modal** automatically appears. It shows:
- Total posts sent
- Success count and fail count
- An animated **success rate bar** (animates on load)
- A scrollable list of up to 15 direct post links with group names and timestamps

```
📸 Screenshot: Post-run summary modal with success rate bar and post links list
```

Click any post link in the summary to open it directly on Facebook. Close the modal to return to the dashboard.

---

## 12. Saving & Loading Campaigns

Campaigns save your complete setup so you can reuse it later.

### Save a Campaign

1. Set up everything (groups, message, previews, delay settings)
2. Enter a campaign name
3. Click **"Save Campaign"** — a confirmation preview shows your full setup before saving

```
📸 Screenshot: Campaign name input, Save button, and confirmation preview
```

### Load a Campaign

1. Select a saved campaign from the dropdown
2. FAP restores: selected groups, post text, link previews, and all delay settings
3. Click **"Start"** to run it

```
📸 Screenshot: Campaign dropdown with saved campaigns listed
```

### Delete a Campaign

Click the delete icon next to a campaign name to remove it.

---

## 13. Scheduling Posts

Schedule posts to be published at a specific future date and time.

### Step 1: Set the Date

Select a date using the date picker.

### Step 2: Set the Time

Choose a time from the time dropdown. Available times update based on the selected date.

```
📸 Screenshot: Schedule date picker and time dropdown
```

### Step 3: Post as Scheduled

When you start the campaign, posts are submitted to Facebook as scheduled posts rather than immediate posts. Facebook publishes them at your chosen time.

> **Note:** Scheduled posts rely on Facebook's scheduling system. The post is submitted now but published later. Minimum scheduling time is enforced to avoid Facebook errors.

### Reset Schedule

Click **"Reset Schedule"** to cancel scheduling and revert to posting immediately.

---

## 14. Multiple Posts Feature

Post different messages to different groups in a round-robin pattern.

### How It Works

1. Enable the **Multiple Posts** option
2. Write multiple post messages (each in its own slider tab)
3. FAP cycles through them — Post 1 → Group 1, Post 2 → Group 2, Post 1 → Group 3, etc.

```
📸 Screenshot: Multiple post slider tabs (Post 1, Post 2, Post 3) with different content
```

### Why Use This

- Avoids posting identical content to every group (reduces spam detection risk)
- Lets you tailor messages for different audiences
- Each post can have its own link preview

---

## 15. Dashboard & Logs

### Live Counter Strip

During posting, the counter strip shows real-time status: position in the run, success/fail counts, current group, and next-post countdown.

```
📸 Screenshot: Live counter strip showing "3 of 15 — ✓ 3  ✗ 0 | Posted in: Group Name | Next in 47s"
```

### Progress Bar

Visual completion with percentage label. Hides when inactive.

### Event Log

Chronological entries for every action:
- Group being posted to
- Success/failure status
- Post URLs (clickable)
- Wait time countdowns
- Errors and warnings

```
📸 Screenshot: Detailed event log with multiple entries
```

### Clear Logs

Click **"Clear Logs"** to reset the event log.

---

## 16. Saved Group Lists

Save frequently-used group selections for quick access.

### Save a Group List

1. Select your desired groups
2. Enter a name for the list (e.g., "Marketing Groups", "Local Buy/Sell")
3. Click **Save**

### Load a Group List

Select a saved list from the dropdown — the dropdown shows the number of groups in each list. The corresponding groups will be auto-checked.

### Delete a Group List

Click the delete button next to any saved list to remove it.

```
📸 Screenshot: Saved group lists dropdown with group count labels
```

---

## 17. Posting as a Page

FAP automatically detects whether you're logged in as a personal profile or a Facebook Page.

### How It Works

1. Log into Facebook as your Page (switch to Page mode in Facebook)
2. Launch FAP
3. FAP detects your Page identity and posts on behalf of the Page

```
📸 Screenshot: Profile section showing Page name and avatar
```

### User vs Page Indicators

The dashboard shows your current identity (name and profile picture) so you always know which account is posting.

---

## 18. Safety Tips & Best Practices

### Do's ✅

- **Trust the smart delay recommendation** — it's calculated from your group count against a 6-tier risk curve
- **Use range delays** over fixed delays for more natural timing
- **Start small** — test with 5–10 groups before scaling up
- **Watch the live counter strip** — consecutive failures are an early warning sign
- **Use Multiple Posts** to rotate content and reduce detection risk
- **Save campaigns** — reuse proven setups instead of rebuilding each time

### Don'ts ❌

- **Don't ignore the delay warning modal** — click "Apply Safe Delay" unless you have a specific reason
- **Don't post identical content** to hundreds of groups back to back
- **Don't run FAP 24/7** — take breaks between campaigns
- **Don't share your license** — it's tied to your extension ID

### If You Get Restricted

1. Stop posting immediately
2. Wait 24–48 hours before trying again
3. When you resume, use longer delays and fewer groups
4. Rotate your post content more aggressively

---

## 19. Troubleshooting

### FAP won't load / shows blank page

- Make sure you're logged into Facebook in the same browser profile
- Try refreshing the page or relaunching FAP
- Check `chrome://extensions` for any error messages on the FAP card

### "Login check failed" error

- Your Facebook session may have expired
- Go to facebook.com, confirm you're logged in
- Relaunch FAP

### Groups not loading

- Facebook may have updated their page structure — check if you can access `facebook.com/groups` normally
- Try logging out and back into Facebook
- Reload the extension from `chrome://extensions`

### Posts failing

- Check the event log for specific error messages
- Your `session` token may have expired — relaunch FAP to refresh tokens
- Facebook may be rate-limiting you — increase wait times
- Some groups may have posting restrictions or require admin approval

### Delay warning modal keeps appearing

- This means your selected delay is too short for your group count
- Click **"Apply Safe Delay"** to let FAP set the recommended tier automatically

### Post-run summary shows 0 successful posts

- Check the event log for errors — `session` expiry and rate-limiting are the most common causes
- Relaunch FAP and try with a smaller group selection first

### Extension shows wrong version

- Go to `chrome://extensions` and click the refresh icon on FAP
- The version is read dynamically from `manifest.json`

### Need more help?

- Visit [tigerzplace.com](https://tigerzplace.com/how-to-post-in-multiple-facebook-groups/) for the full guide
- Contact support via the [Tigerzplace Facebook page](https://www.facebook.com/tigerzplace)
