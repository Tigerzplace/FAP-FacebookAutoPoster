# Facebook Auto Poster (FAP) – Post to Multiple Facebook Groups in One Go

Facebook Auto Poster (FAP) is a Chrome extension that helps you post to **multiple Facebook groups** in a safe, controlled, and time-saving way.

Instead of copy-paste spam or risky bots, FAP keeps you in control: you choose the groups, write the post once, configure safe wait times, and let the tool handle the rest while you watch detailed logs.

👉 **Tool page & full overview:** [tigerzplace.com/auto-post-to-multiple-facebook-groups/](https://tigerzplace.com/auto-post-to-multiple-facebook-groups/)

📺 **Prefer video?** Watch the complete v2.0 walkthrough:  
👉 [FAP v2.0 — Full Tutorial on YouTube](https://www.youtube.com/watch?v=XR7HbUYs6fo)

---

---

## ✨ Key Features

- **Post to Multiple Groups at Once**  
  Load your joined groups and send a single post to many groups automatically. The first post starts immediately — no pre-delay.  
  → [How to post in multiple Facebook groups at once (safely)](https://tigerzplace.com/how-to-post-in-multiple-facebook-groups-at-once-safely/)

- **Image Posting**  
  Attach a photo to any post. FAP handles the full upload pipeline automatically — drag and drop or click to browse, see a live upload progress bar and preview card, and the image is attached to every group post in the campaign. Supports JPEG, PNG, and WebP.

- **Dual-Handle Delay Slider with Presets**  
  Configure your wait time using a visual range slider. Drag the min/max handles to set a delay window, or click a preset button (1–3 min, 3–20 min, 20–30 min, etc.) to apply it instantly. Custom minute values can also be entered directly.

- **Smart Delay Recommendation & Warning**  
  FAP analyses your group count and recommends the safest delay tier. If you start with a delay that is too short for your group count, a blocking warning modal appears showing your risky setting, the recommended safe alternative, and two choices: **Apply Safe Delay** or **Post Anyway**.

- **Live Post Counter Strip**  
  A persistent strip visible on the dashboard during posting shows current post index, total groups, live success/fail counts, name of the last posted group, and a countdown timer to the next post.

- **Estimated Run Time Banner**  
  Before posting starts, a banner shows the expected total campaign duration based on your group count and delay. Includes an **ℹ️ popover** showing how much manual clicking effort FAP is saving you. A **risk pill** appears inline if your combo is flagged.

- **Post-Run Summary Modal**  
  After every campaign completes, a modal shows total posts, success count, fail count, an animated success-rate bar, and a scrollable list of up to 15 direct post links.

- **Retry on Failure**  
  If a post fails due to a transient Facebook error, FAP automatically retries once after 8 seconds before marking the group as failed. For image posts, a fresh upload is triggered before the retry.

- **Pause / Resume Campaigns**  
  Pause an active campaign at any time. The current post finishes, then the loop holds until you resume.

- **Post URL Display in Logs**  
  After each successful post, FAP shows the **direct Facebook post URL** in the event log so you can quickly open, verify, or share it.

- **Post Scheduling**  
  Schedule posts to be published at a specific future date and time. FAP submits the post to Facebook's scheduling system; Facebook publishes it at your chosen time.  
  → [How to schedule posts to Facebook groups automatically](https://tigerzplace.com/schedule-posts-to-facebook-groups/)

- **Save & Load Campaigns**  
  Save your full setup (groups, messages, link previews, delay settings) as named campaigns. Load them in one click — perfect for recurring promotions and weekly routines.

- **Manual Link Preview (Multi-Link Support)**  
  If your post contains one or more links, choose which one to use for the Facebook-style preview card. Preview data is fetched on demand, reused during posting, and saved with campaigns.

- **Multiple Posts Feature**  
  Write multiple post variations. FAP cycles through them across groups — Post 1 → Group 1, Post 2 → Group 2, etc. — reducing detection risk from identical content.

- **Saved Group Lists**  
  Save sets of groups (e.g., "Marketing Groups", "Local Buy/Sell") as named lists. Dropdowns show the group count next to each list name.

- **Single Instance Protection**  
  Prevents multiple extension windows from conflicting. If FAP is opened again, the previous instance is automatically closed.

---

## 🧩 How It Works (High-Level)

1. **Load Groups** — FAP reads your joined Facebook groups and displays them in a searchable table.
2. **Select Groups** — Choose specific groups or load a saved group list / campaign.
3. **Compose Your Post** — Write your message. Optionally attach an image or set a link preview.
4. **Configure Delay** — Use the slider or presets to set your delay range. FAP recommends the safest tier for your group count.
5. **Start Campaign** — Click **Start**. FAP posts to each group one by one. The first post begins immediately.
6. **Monitor Live** — Watch the counter strip, event log, and progress bar in real time.
7. **Review Summary** — When posting completes, a summary modal shows your results and all post links.

---

## 🚀 Quick Start

1. **Install the Extension**
   - Download / clone this repository.
   - In Chrome, go to `chrome://extensions`.
   - Enable **Developer mode**.
   - Click **Load unpacked** and select the folder containing `manifest.json`.

2. **Open Facebook in Your Browser**
   - Log in to your Facebook account in the same Chrome profile.

3. **Launch FAP**
   - Click the FAP extension icon. The current tab becomes the FAP dashboard.

4. **Load Groups**
   - Click **Load Groups** to fetch all your joined groups.

5. **Set Up Your Campaign**
   - Select groups (or load a saved list / campaign).
   - Write your post. Optionally attach an image.
   - Set your delay using the slider — or accept the smart recommendation.

6. **Start Posting**
   - Press **Start**. Watch the live counter strip, event log, and progress bar.

7. **Review Results**
   - The post-run summary modal shows your success rate and all post links.

---

## 🧠 Best Practices & Safety Tips

- Use the **smart delay recommendation** — it accounts for your group count.
- **Range delays** are better than fixed — they look more natural to Facebook.
- Use the **Multiple Posts** feature to rotate content across groups.
- Watch the **live counter strip** for consecutive failures — that's an early warning of rate-limiting.
- Start small: test with 5–10 groups before scaling up.
- Take breaks between large campaigns.

> Worried about getting restricted? Read the full safety guide:  
> → [Is Facebook auto posting safe? Avoid bans & account restrictions](https://tigerzplace.com/is-facebook-auto-posting-safe/)  
> → [Facebook posting limits 2026](https://tigerzplace.com/facebook-posting-limits-2026/)

---

## 🆕 What's New in v2.0

**Image Posting** — Attach photos to any post via drag-and-drop or file picker. Full upload pipeline with live progress, preview card, and auto-retry support.

**Dual-Handle Delay Slider** — Replaced dropdown selects with a visual range slider. Preset buttons for common tiers plus custom minute input.

**Smart Delay Recommendation & Warning Modal** — FAP recommends the safest delay tier for your group count. A blocking modal warns you before posting with a risky setting, with a one-click option to apply the safe alternative.

**Live Post Counter Strip** — Persistent real-time strip during posting showing position, success/fail counts, last group posted, and next-post countdown.

**Estimated Run Time Banner** — Pre-posting banner with estimated duration, effort-saved popover, and inline risk pill.

**Post-Run Summary Modal** — Auto-shown after campaign completion with animated success-rate bar and scrollable post link list.

**Retry on Failure** — Automatic single retry after 8 seconds on transient failures, with fresh photo upload on retry for image posts.

**Group List Count Labels** — Saved group list dropdowns now show the group count next to each list name.

**Double-Count Fix** — Fixed a bug where "All" groups + a saved list could cause duplicate posts.

**First Post Starts Immediately** — No pre-delay before the first post; wait time applies only between subsequent posts.

**Progress Bar Percentage Label** — Label tracks the bar fill at all stages and clears on reset.

See the full [Changelog](Changelog.md) for detailed notes on all changes.

---

## 📚 Guides & Resources

Full documentation and tutorials are published on Tigerzplace:

| Guide | Description |
|---|---|
| [▶ FAP v2.0 — Complete Video Tutorial](https://www.youtube.com/watch?v=XR7HbUYs6fo) | Full walkthrough of all v2.0 features — installation to posting |
| [Facebook Auto Poster — Complete 2026 Guide](https://tigerzplace.com/facebook-auto-poster/) | Pillar guide covering all features, use cases, and setup |
| [How to Post in Multiple Facebook Groups at Once](https://tigerzplace.com/how-to-post-in-multiple-facebook-groups-at-once-safely/) | Step-by-step tutorial for bulk group posting safely |
| [How to Schedule Posts to Facebook Groups](https://tigerzplace.com/schedule-posts-to-facebook-groups/) | Scheduling feature walkthrough (v1.9+) |
| [Is Facebook Auto Posting Safe?](https://tigerzplace.com/is-facebook-auto-posting-safe/) | Safety guide — avoid bans, restrictions, and rate limits |
| [Facebook Posting Limits 2026](https://tigerzplace.com/facebook-posting-limits-2026/) | Current Facebook group posting rules and limits |
| [Free Facebook Auto Poster Tools](https://tigerzplace.com/free-facebook-auto-poster/) | Overview of free options and when to upgrade |
| [FAP vs Manual Posting](https://tigerzplace.com/facebook-auto-poster-vs-manual-posting/) | Time savings, ROI, and comparison breakdown |

---

## 📥 Licensing & Support

- Licenses are available via **tigerzplace.com**  
  👉 **https://tigerzplace.com/how-to-buy-tool-license/**
- After purchase, share your **extension ID** and email for activation.
- For support, bug reports, or feature requests:
  - Comment on the Tigerzplace blog post
  - Contact via the Tigerzplace contact page
  - Open an issue on GitHub

---

## ⚖️ Disclaimer

This tool is intended for **legitimate use only**:
- Respect Facebook's Terms of Service.
- Do not use FAP for spam, abuse, or any illegal/unauthorized activities.
- You are solely responsible for how you use the tool and for any consequences related to your Facebook account(s).

---

Made with ❤️ by **Tigerzplace**
