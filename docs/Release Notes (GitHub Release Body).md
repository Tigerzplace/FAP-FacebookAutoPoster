## Facebook Auto Poster v2.1.1

**Bug Fixes & Safety Hardening**

---

### What's Fixed

**Groups auto-selected on fresh load** — Clicking Load Groups was checking all groups
automatically. Groups now load unchecked so you make an explicit selection before
starting. Loading a saved group list still auto-selects as before.

**Safety break double-countdown** — After a break ended, two overlapping countdown
messages appeared in the live counter strip simultaneously. Fixed — one clean message
at a time.

**Reset not clearing break state** — The Reset button was not clearing break status,
failure counters, or running countdown intervals. Resetting mid-break or
mid-failure-run could affect the next campaign. All state is now fully cleared on reset.

**Auto-pause status card (catch path)** — When the campaign auto-paused after 5
consecutive failures, the status card didn't update correctly in all cases. Fixed across
both auto-pause paths.

### What's Improved

**Safer delay recommendations** — Smart delay thresholds tightened for mid-to-large
group counts. The risky delay warning now also covers the `20–60s` and `1–3 min` presets
for larger group selections, not just `01–20s`.

---

### Upgrade Notes

Drop-in update — no migration needed. Load unpacked the new version over your existing
installation. All saved campaigns, group lists, and settings are fully preserved.

---

### Files Changed
- `scripts/core/frame.js`