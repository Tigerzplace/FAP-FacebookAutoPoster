## Facebook Auto Poster v2.1

**Safe Posting Foundation**

This release adds account protection systems for large campaigns. Three new features
work together to reduce risk when posting to many groups in a single run.

---

### What's New

**Safety Break** — Automatically pause after every N posts for a set duration. Configure
it in Delay Settings: choose how many posts trigger a break (10 / 25 / 50 / 100 or
custom) and how long the break lasts (2m / 5m / 10m / 15m or custom). When a break
fires, the normal inter-post delay is replaced by the break timer — no double-wait. The
live counter strip shows a countdown, and posting resumes automatically.

**Session Skip List** — Groups that are inaccessible (left, restricted, or non-existent)
are now detected and skipped for the remainder of the campaign. FAP no longer wastes a
retry on a group it can't reach. These groups are logged clearly and counted in the
failure total on the summary screen.

**Consecutive Failure Warning** — If five posts in a row fail, the campaign automatically pauses and a warning is logged explaining why.
You can verify your account by posting manually to any group, then click. Resume to continue — or stop the campaign entirely.

**Token Auto-Recovery** — When your session token expires during a campaign, FAP now catches this and retries the post
automatically with the updated token. Previously a token expiry mid-run would cause all
remaining posts to fail.

**Campaign Stop on Serious Signals** — If Facebook returns a spam block or account
checkpoint signal, the campaign stops immediately rather than continuing to post into a
restricted state.

---

### What's Improved

**Smarter retry logic** — Posts are now retried based on what actually failed. Transient
errors retry after 8 seconds as before. Token expiry retries immediately with a fresh
token. Permanent errors (no access, permission denied) skip retry entirely.

---

### Upgrade Notes

Drop-in update — no migration needed. Load unpacked the new version over your existing
installation. All saved campaigns, group lists, and settings are fully preserved.

---

### Files Changed
- `scripts/core/api.js`
- `scripts/core/frame.js`
- `pages/frame.html`