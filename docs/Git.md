fix: v2.1.1 — groups auto-select on load, break countdown overlap, reset state, auto-pause display, safer delay tiers

Groups auto-selected on fresh load
- Clicking Load Groups was checking all groups automatically
- Groups now load unchecked — selection is manual as intended
- Loading a saved group list still auto-selects as before

Safety break double-countdown
- After a break ended, two overlapping countdown messages appeared in the
  counter strip at the same time
- Fixed — counter strip now shows one clean message at a time

Reset not clearing all state
- The Reset button was not fully clearing break and failure state
- Resetting mid-break or mid-run could affect the next campaign
- All state is now fully cleared on reset

Auto-pause status display
- When the campaign auto-paused after consecutive failures, the status
  indicator didn't update correctly in all cases
- Fixed — status now updates reliably across all auto-pause scenarios

Delay recommendations tightened
- Smart delay thresholds updated to be more conservative for larger group counts:
  50–150 groups: 1–3 min → 3–20 min
  300–500 groups: 3–20 min → 20–30 min
  500–1000 groups: 20–30 min → 30–60 min
  1000+ groups: 30–60 min → 45–60 min (custom)
  Under 20 groups: new bracket added → 20–60 sec
- Risky delay warning now also triggers for 20–60s and 1–3 min settings
  when posting to larger group counts, not just the shortest preset