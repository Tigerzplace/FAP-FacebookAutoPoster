(() => {
  const nav = document.getElementById("sideNav");
  const views = Array.from(document.querySelectorAll(".view"));
  const navBtns = Array.from(document.querySelectorAll(".nav__item"));

  const pageTitle = document.getElementById("pageTitle");
  const pageSub = document.getElementById("pageSub");

  const titleMap = {
    "view-dashboard": { title: "Dashboard", sub: "Manage your Facebook group automation in one place." },
    "view-content": { title: "Content", sub: "Write posts, set delays, and prepare the next run." },
    "view-groups": { title: "Groups", sub: "Load and select groups for posting." },
    "view-campaigns": { title: "Campaigns", sub: "Campaign dropdown in Groups remains active (v1.7 compatibility)." },
    "view-scheduling": { title: "Scheduling", sub: "UI is ready. Feature unlock comes after image posting." },
    "view-logs": { title: "Logs", sub: "Activity output (mirrored from existing logs)." },
    "view-settings": { title: "Settings", sub: "License, updates, and tool info." },
  };

  function activateView(viewId) {
    views.forEach(v => v.classList.toggle("active", v.id === viewId));
    navBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-target") === viewId));

    const t = titleMap[viewId] || titleMap["view-dashboard"];
    if (pageTitle) pageTitle.textContent = t.title;
    if (pageSub) pageSub.textContent = t.sub;

    const gp = document.getElementById("globalProgress");
    if (gp) {
      gp.classList.toggle("global-progress--hidden", viewId === "view-settings");
    }
  }

  // Sidebar nav
  if (nav) {
    nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".nav__item");
      if (!btn) return;
      const target = btn.getAttribute("data-target");
      if (!target) return;
      activateView(target);
    });
  }

  // License button should also show settings view (but do NOT block your existing handler)
  const myLicense = document.getElementById("myLicense");
  if (myLicense) {
    myLicense.addEventListener("click", () => {
      // Just show Settings view for UX. Your frame.js click handler (if any) will still run.
      activateView("view-settings");
    }, { passive: true });
  }

  // Home button: go back to dashboard view (do NOT block existing behavior)
  const homeBtn = document.getElementById("home");
  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      activateView("view-dashboard");
    }, { passive: true });
  }

  // Load Groups alias button (Groups screen) triggers your real #loadGroups button
  const loadGroupsAlt = document.getElementById("loadGroupsAlt");
  const loadGroupsReal = document.getElementById("loadGroups");
  if (loadGroupsAlt && loadGroupsReal) {
    loadGroupsAlt.addEventListener("click", () => loadGroupsReal.click());
  }

  // Clear Logs alias (Logs view) triggers existing clear button
  const clearTop = document.getElementById("clearLogsBtnTop");
  const clearReal = document.getElementById("clearLogsBtn");
  if (clearTop && clearReal) {
    clearTop.addEventListener("click", () => clearReal.click());
  }

  // Mirror #logBody into long logs panel (no new IDs required by frame.js)
  const logBody = document.getElementById("logBody");
  const longInner = document.getElementById("logsLongInner");

  if (logBody && longInner) {
    const sync = () => { longInner.innerHTML = logBody.innerHTML; };
    const obs = new MutationObserver(sync);
    obs.observe(logBody, { childList: true, subtree: true, characterData: true });
    sync();
  }

  // Lightweight stats updater (best-effort only)
  const safeText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setInterval(() => {
    const totalRows = document.querySelectorAll("#groupsTableBody tr").length;

    // Your group checkboxes appear to be generated with: input[save="groupNames[]"]
    const selected = document.querySelectorAll('input[save="groupNames[]"]:checked').length;

    safeText("statTotalGroups", totalRows ? String(totalRows) : "--");
    safeText("statSelectedGroups", selected ? String(selected) : "--");

    // Campaign count: options under #campaign-items
    const campItems = document.querySelectorAll("#campaign-items > *").length;
    safeText("statCampaigns", campItems ? String(campItems) : "--");
  }, 1200);

  // Default view
  activateView("view-dashboard");
})();
