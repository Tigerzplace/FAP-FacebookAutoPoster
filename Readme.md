# Facebook Auto Poster (FAP) – Post to Multiple Facebook Groups in One Go

Facebook Auto Poster (FAP) is a Chrome extension that helps you post to **multiple Facebook groups** in a safe, controlled, and time-saving way.

Instead of copy-paste spam or risky bots, FAP keeps you in control: you choose the groups, write the post once, configure safe wait times, and let the tool handle the rest while you watch detailed logs.

For a full step-by-step tutorial, screenshots, and best practices, see the Ultimate Guide on Tigerzplace:  
**How to Post in Multiple Facebook Groups**  
👉 **https://tigerzplace.com/how-to-post-in-multiple-facebook-groups/**

---

## ✨ Key Features

- **Post to Multiple Groups at Once**  
  Load your joined groups and send a single post to many groups automatically.

- **Pause / Resume Campaigns**  
  Need a break or want to tweak something mid-run? Pause an active campaign and resume later without losing progress.

- **Post URL Display in Logs**  
  After each successful post, FAP shows the **direct Facebook post URL** in the event log so you can quickly open, verify, or share it.

- **Save & Load Campaigns**  
  Save your favourite group selection and posting settings as **named campaigns**.  
  Load them in one click—perfect for recurring promotions, niche-specific posts, and weekly routines.

- **Manual Link Preview (Multi-Link Support)**  
  If your post contains one or more links, you can manually choose which link to use for preview.  
  Preview data is fetched only when requested, shown exactly like Facebook, and reused during posting and campaign reloads.

- **Single Instance Protection**  
  Prevents multiple extension windows from running at the same time.  
  If the extension is opened again, the previous instance is automatically closed to avoid conflicts.


- **Extended Fixed & Custom Wait Times**  
  Configure safe custom delay ranges between posts (min/max).  
  The first post starts immediately, and the waiting logic is optimized to avoid unnecessary delays while still reducing the risk of FB blocks.

- **Cleaner Logs & Better Progress Bar**  
  - Auto-scrolling event log so you always see the latest activity  
  - One-line readable log format: `[time] STATUS message`  
  - Clickable group names/links inside the log  
  - Toast notifications mapped correctly to success/error  
  - Progress bar text remains readable at all stages and hides when inactive

- **Saved Group Lists**  
  Save sets of groups (e.g., “Marketing Groups”, “Local Buy/Sell”, “Clients Only”) and reuse them without reselecting every time.

- **Smart Safety Controls**  
  Custom delays, clear status messaging, and a transparent flow that makes it easy to stay under Facebook’s rate limits.

---

## 🧩 How It Works (High-Level)

1. **Load Groups**  
   FAP reads your joined Facebook groups and displays them in a searchable list.

2. **Select Groups**  
   Choose specific groups or load a saved group list / campaign.

3. **Compose Your Post**  
   Write your post once.  
   You can include links, emojis, and rich content. If multiple links are detected, FAP lets you choose which link to use for preview.
   When posting links, avoid changing the message after selecting a preview unless you refresh the preview first.


4. **Configure Wait Times**  
   Decide how long FAP should wait between posts:
   - Fixed wait (e.g., 120 seconds)
   - Custom range (e.g., 60–180 seconds) for more human-like behaviour

5. **Start Campaign**  
   Click **Start**. FAP posts to each selected group one by one, respecting your delay settings.

6. **Monitor Logs & Progress**  
   Watch the event log and progress bar to see:
   - Which group is being posted to
   - Which posts succeeded or failed
   - Direct URLs for each successful post

7. **Pause / Resume Anytime**  
   Use the pause button to temporarily stop, then resume where you left off.

---

## 🚀 Quick Start

1. **Install the Extension**
   - Download / clone this repository.  
   - In Chrome, go to `chrome://extensions`.  
   - Enable **Developer mode**.  
   - Click **Load unpacked** and select the folder containing this project.

2. **Open Facebook in Your Browser**
   - Log in to your Facebook account in the same browser profile.
   - Make sure you’re logged in to the account that will post to the groups.

3. **Launch FAP**
   - Click the extension icon or open the `frame.html` page (depending on your setup).
   - Click **Load Groups** to fetch your joined groups.

4. **Set Up Your Campaign**
   - Select the groups you want to post in (or load a saved group list).
   - Write your post content.
   - Choose your wait-time settings (fixed or custom range).
   - Optional: save this setup as a **Campaign** for quick reuse.

5. **Start Posting**
   - Press **Start**.  
   - Watch the Event Logs and the progress bar to follow the posting flow.

6. **Review Your Posts**
   - Use the post URLs in the logs to open each post directly.
   - Check that everything looks correct inside each group.

---

## 🧠 Best Practices & Safety Tips

- Avoid posting the **exact same message** to dozens of groups in a very short time.
- Use custom wait-time ranges (e.g., 60–180 seconds) instead of ultra-short, fixed delays.
- Mix your content: change text slightly, vary images, and avoid spammy wording.
- Monitor Facebook for any warnings or temporary blocks and adjust your settings accordingly.

For detailed tips, examples, and screenshots, refer to the full guide on Tigerzplace.

---

## 🆕 What’s New in v1.7

- **New:** Manual link preview with multi-link selection  
  - Detects links in your post and lets you choose which one to preview  
  - Preview is fetched only when requested (lighter & safer)  
  - Facebook-style preview card with title, description, and image  

- **New:** Campaign-safe link previews  
  - Selected preview is saved with campaigns  
  - Loading a campaign restores the exact preview without refetching  

- **Improved:** Extension stability  
  - Only one extension instance can be active at a time  
  - Prevents duplicate windows and posting conflicts  

- **Improved:** Internal posting flow and request handling  
  - Cleaner background request routing  
  - Better consistency across long-running campaigns


## 🆕 What’s New in v1.6

- **New:** Pause / Resume button for running campaigns  
- **New:** Direct post URL shown in logs after each successful post  
- **New:** Save and load named Campaigns  
- **New:** Extended fixed/custom wait times with smarter logic  
- **Improved:** Cleaner logs with auto-scroll, Clear Logs button, clickable group links  
- **Improved:** Progress bar readability and behaviour  
- **Improved:** More robust storage and smoother behaviour across different browser setups  
- **Fixed:** Various edge cases and minor bugs from previous versions

---

## 📥 Licensing & Support

- Licenses are available via **tigerzplace.com** (see the “Buy License” section on the site).
👉 **https://tigerzplace.com/how-to-buy-tool-license/**
- After purchase, share your **extension ID** and email so your license can be activated.
- For support, feature requests, or bug reports, you can:
  - Comment on the blog post  
  - Contact via the Tigerzplace contact page  
  - Or open an issue here on GitHub

---


## ⚖️ Disclaimer

This tool is intended for **legitimate use only**:
- Respect Facebook’s Terms of Service.
- Do not use FAP for spam, abuse, or any illegal/unauthorized activities.
- You are solely responsible for how you use the tool and for any consequences related to your Facebook account(s).

---

Made with ❤️ by **Tigerzplace**
