/* ========================================================================
   🔹 CONFIGURATION & INITIALIZATION
   ------------------------------------------------------------------------
   - maKwa: Encrypted links and constants
   - Console cleanup (for production)
   - UI feedback functions
   ======================================================================== */

const maKwa = {
  tikDayBas: 0,
  raka: self.chrome.runtime.id,
  expire: "Your license is expired.",
  sahida: atob(ultaKa("=4CZlRXY2lGdjFGIzlGIlNnblNWasBic19WW")),
  ogora: "raka + atob(ultaKa('==gO')) + sahida",
  nshta: atob(ultaKa("uQWZ0FmdpR3YhBCdv5GIzlGIlNnblNWasBic19WW")),
  walakna: atob(
    ultaKa("==gLlNnblNWasBSe1JGIvRHIlNWYsBneyV2ZpR3Lt92YuImZABCdjFGdu92Q")
  ),
  walaLink: atob(
    ultaKa(
      "=AHaw5SYy92Zv9SZyF2dlxGZklWbvMHbv9Gdv02bj5SZjFGbwpncldWa09yL6MHc0RHa"
    )
  ),
  tazaLink: atob(
    ultaKa(
      "942bpNnclZnJwFmZ9w2bvR3PwhGcuUGdhRGc19SZz5WZjlGbvMHbv9Gdv02bj5SZjFGbwpncldWa09yL6MHc0RHa"
    )
  ),
  chrtaWalam: atob(
    ultaKa("=U2cuV2YpxWLs92b01Se1JWLvRXL39Gav02bj5SZjFGbwpncldWa09yL6MHc0RHa")
  ),
};

// Disable console logs when karKom is true
if (karKom) {
  console.log =
    console.error =
    console.warn =
    console.info =
    console.debug =
      () => {};
}

/* ========================================================================
     🔹 UI HANDLING AND ERROR MANAGEMENT
     ------------------------------------------------------------------------
     - activateLicenseUI(), handleLicenseNotActivated(), handleError()
     - showPurchase() & XHR error handlers
     ======================================================================== */

function activateLicenseUI(msg) {
  hideElement("statusLoader");
  document.getElementById("trigger").classList.toggle("drawn");
  setElementHTML(
    "license-info",
    `<h3 style=\"color:green\">${DOMPurify.sanitize(msg)}</h3>`
  );
}

function handleLicenseNotActivated(msg) {
  hideElement("statusLoader");
  toastr.error(msg);
  setElementHTML(
    "license-info",
    `<h3 style="color:red">${DOMPurify.sanitize(msg)}</h3>`
  );
  document.getElementById("extension-id").innerText = extension_id;
  setTimeout(showPurchase, 5000);
}

function handleError(msg) {
  toastr.error(msg);
  setElementHTML(
    "license-info",
    `<h3 style="color:red">${DOMPurify.sanitize(msg)}</h3>`
  );
}

function handleLicenseError(status) {
  toastr.error(status);
  log("error", `XHR request error: ${status}`, null, "getLicenseFromServer");
  setElementHTML(
    "license-info",
    `<h3 style="color:red">${DOMPurify.sanitize(status)}</h3>`
  );
}

function showPurchase() {
  showElement("purchase-license");
  hideElement("check-license");
  hideElement("license-info");

  const purchaseLinkElement = document.getElementById("purcahse_link");
  if (purchaseLinkElement) {
    purchaseLinkElement.href = maKwa.chrtaWalam;
    log("info", "Purchase link set", purchaseLinkElement.href, "showPurchase");
  } else {
    log(
      "error",
      "Element with id 'purchase_link' not found",
      null,
      "showPurchase"
    );
  }
}

/* ========================================================================
     🔹 INTEGRITY CHECKS & FILE HASH VALIDATION
     ------------------------------------------------------------------------
     - getHash(): Compute SHA-256 for files
     - checkYeKa(): Validate integrity, reload if tampered
     ======================================================================== */

async function getHash() {
  const response = await fetch(chrome.runtime.getURL(`../js/frame.js`));
  const text = await response.text();
  const currentHash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text)
  );
  const hashArray = Array.from(new Uint8Array(currentHash));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

async function checkYeKa() {
  if (!karKom) return;

  const fileHash =
    "c35c35675a09d46cfd8aa7de6c67be596ed90ebfd885bdbd0ef8206cc29a35e7"; // Original hash
  const response = await fetch(chrome.runtime.getURL("../js/frame.js"));
  const text = await response.text();
  const currentHash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text)
  );
  const hashArray = Array.from(new Uint8Array(currentHash));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (hashHex !== fileHash) {
    chrome.runtime.reload();
  }
}
checkYeKa();

/* ========================================================================
   🔹 HELPER: GET CLIENT IP (cached)
   ------------------------------------------------------------------------
   - Fetches external IPv4 or IPv6 address using public API
   - Caches result in memory for reuse
   ======================================================================== */

let cachedIP = null;

async function getClientIP() {
  if (cachedIP) return cachedIP;
  try {
    const res = await fetch("https://api64.ipify.org?format=json");
    const data = await res.json();
    cachedIP = data.ip || "::1";
    return cachedIP;
  } catch (error) {
    log("error", "Failed to fetch client IP:", error, "getClientIP");
    return "::1";
  }
}

/* ========================================================================
   🔹 UNIVERSAL SERVER HANDLER (AUTO-DATA + PROFILE SUPPORT)
   ------------------------------------------------------------------------
   - Accepts: checkFor ('license' | 'update' | 'usage' | 'profile')
   - Builds payload automatically based on checkFor
   - If `profileData` exists, appends it to the payload
   - Encrypts, sends, decrypts, returns result
   ======================================================================== */

async function talkToServer(checkFor = "license", extra = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const ua = navigator.userAgent || "Extension/Unknown";
      const ip = await getClientIP();
      /* ------------------------------------------------------------
           1️⃣  BASE PAYLOAD (shared for all types)
        ------------------------------------------------------------ */
      let data = {
        id: extension_id,
        version: extension_version,
        check: checkFor,
        tool_name: extension_short_name,
        platform: "facebook",
        meta: {
          request_ts: new Date().toISOString(),
          client_version: extension_version,
        },
      };

      /* ------------------------------------------------------------
           2️⃣  TYPE-SPECIFIC LOGIC
        ------------------------------------------------------------ */
      switch (checkFor) {
        case "license":
          data.event = "license_check";
          data.summary = `License validation request from v${extension_version}`;
          data.status = "ok";
          break;

        case "update":
          data.event = "update_check";
          data.summary = `Version check request from v${extension_version}`;
          data.status = "ok";
          break;

        case "usage":
          data = {
            ...data,
            event: extra.event || "usage_log",
            summary: extra.summary || "No summary",
            status: extra.status || "ok",
            meta: { ...data.meta, ...(extra.meta || {}) },
            account_info: extra.account_info || {},
            content: extra.content || null,
            content_hash: extra.content_hash || null,
            content_type: extra.content_type || "json",
          };
          break;

        case "profile":
          data.event = "profile_check";
          data.summary = "Fetching profile linked to this extension";
          break;

        default:
          log(
            "error",
            `Invalid checkFor value: ${checkFor}`,
            null,
            "talkToServer"
          );
          return reject(new Error("Invalid check type"));
      }

      /* ------------------------------------------------------------
           3️⃣  APPEND ACCOUNT / PROFILE DATA IF AVAILABLE
        ------------------------------------------------------------ */
      if (
        typeof profileData !== "undefined" &&
        profileData &&
        Object.keys(profileData).length > 0
      ) {
        data.account_info = {
          platform_id: profileData.ID || null,
          username: profileData.name || null,
          display_name: profileData.name || null,
          profile_url: profileData.ID
            ? `https://fb.com/${profileData.ID}`
            : null,
          profile_pic: profileData.dp || null,
          fb_dtsg: profileData.fb_dtsg || null,
          type: profileData.type || "user",
        };
      }

      /* ------------------------------------------------------------
           4️⃣  ENCRYPT AND SEND
        ------------------------------------------------------------ */
      const encrypted = e2layer(data);
      const params = `ogora=${encodeURIComponent(encrypted)}`;
      const xhr = new XMLHttpRequest();
      xhr.open("POST", maKwa.walaLink, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              const decrypted = d2layer(xhr.responseText);
              log(
                "info",
                `Decrypted ${checkFor} response:`,
                decrypted,
                "talkToServer"
              );
              resolve(decrypted);
            } catch (err) {
              log(
                "error",
                `Decryption failed for ${checkFor}:`,
                err,
                "talkToServer"
              );
              reject("Decryption failed: " + err);
            }
          } else {
            handleLicenseError(xhr.status);
            reject(new Error(`XHR ${checkFor} failed: ${xhr.status}`));
          }
        }
      };

      xhr.onerror = (e) => {
        log("error", `XHR network error for ${checkFor}:`, e, "talkToServer");
        reject(new Error("Network error"));
      };

      log(
        "info",
        `Sending '${checkFor}' request`,
        maKwa.walaLink,
        "talkToServer"
      );

      xhr.send(params);
    } catch (e) {
      log("error", `Exception during ${checkFor} request:`, e, "talkToServer");
      reject(e);
    }
  });
}


/* ========================================================================
     🔹 ENCRYPTION / DECRYPTION ENGINE
     ------------------------------------------------------------------------
     - Utility functions: ultaKa(), RandomAlgoKey(), halfAlgoKey()
     - Core: customEncrypt(), customDecrypt(), shuffle(), unshuffle()
     - Layer wrappers: e2layer(), d2layer()
     ======================================================================== */

function ultaKa(str) {
  return str.split("").reverse().join("");
}

function RandomAlgoKey(position = 0) {
  const id = extension_id;
  const idLength = id.length;
  const max = idLength - 2;

  if (!position) {
    const position = Math.floor(Math.random() * (max - 2 + 1)) + 2;
    const key = ultaKa(id.substring(position));
    return [key, position];
  } else {
    return ultaKa(id.substring(position));
  }
}

function halfAlgoKey() {
  const id = extension_id;
  const middle = Math.floor(id.length / 2);
  return ultaKa(id.substring(middle));
}

function customEncrypt(data, key) {
  const utf8Bytes = new TextEncoder().encode(data);
  let encodedData = btoa(String.fromCharCode(...utf8Bytes));
  let shifts = Array.from(key).map(
    (char) => char.charCodeAt(0) % encodedData.length
  );
  return shuffle(encodedData, shifts);
}

function customDecrypt(encryptedData, key) {
  let shifts = Array.from(key).map(
    (char) => char.charCodeAt(0) % encryptedData.length
  );
  let unshuffledData = unshuffle(encryptedData, shifts);
  const binaryStr = atob(unshuffledData);
  const utf8Bytes = Uint8Array.from(binaryStr, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(utf8Bytes);
}

function shuffle(data, shifts) {
  let array = data.split("");
  for (let i = 0; i < shifts.length; i++) {
    let shift = shifts[i];
    array = array.slice(shift).concat(array.slice(0, shift));
  }
  return array.join("");
}

function unshuffle(data, shifts) {
  let array = data.split("");
  for (let i = shifts.length - 1; i >= 0; i--) {
    let shift = shifts[i];
    array = array.slice(-shift).concat(array.slice(0, -shift));
  }
  return array.join("");
}

function e2layer(data) {
  const [key, position] = RandomAlgoKey();
  data = customEncrypt(JSON.stringify(data), key);
  data = `${data}:${position}`;
  return customEncrypt(data, halfAlgoKey());
}

function d2layer(encryptedData) {
  const dataWithPosition = customDecrypt(encryptedData, halfAlgoKey());
  const [data, position] = dataWithPosition.split(":");
  return JSON.parse(customDecrypt(data, RandomAlgoKey(position)));
}

/* ========================================================================
     🔹 INDEXEDDB LICENSE STORAGE HANDLERS
     ------------------------------------------------------------------------
     - Dynamic DB fetch, store, and delete logic
     - Handles caching of encrypted license data
     ======================================================================== */

function generateUniqueVarNames(numberOfNames) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minLength = 7;
  const maxLength = 11;

  function generateName() {
    const length =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let varName = `${extension_short_name}_`;
    for (let i = 0; i < length; i++) {
      varName += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return varName;
  }

  return Array.from({ length: numberOfNames }, generateName);
}

/* ========================================================================
     🔹 SERVER COMMUNICATION: LICENSE, UPDATE, AND VALIDATION
     ------------------------------------------------------------------------
     - getLicenseFromServer(): initial license validation
     - queryServer(): check for update
     - wala(): local validation from IndexedDB
     ======================================================================== */

/* ========================================================================
   🔹 LICENSE CHECK WRAPPER (Promise style, uses talkToServer)
   ------------------------------------------------------------------------
   - Keeps full backward compatibility
   - Uses talkToServer() for encryption, transport, and decryption
   - Returns a Promise that resolves or rejects as before
   ======================================================================== */

async function getLicenseFromServer(checkFor = "license", store = 1) {
  return new Promise(async (resolve, reject) => {
    try {
      // 🔸 1. Call unified handler
      const decryptedData = await talkToServer(checkFor);

      log(
        "info",
        "License check response:",
        decryptedData,
        "getLicenseFromServer"
      );

      // 🔸 2. Validate response
      if (!decryptedData?.ijazat?.status) {
        const reason =
          decryptedData?.ijazat?.reason || "License validation failed";
        log("info", "License invalid:", reason, "getLicenseFromServer");

        eventText = reason;
        eventLog();

        // handle invalid license (as before)
        wala(0, decryptedData);
        return reject(reason);
      }

      // 🔸 3. Cache data locally if required
      if (store) {
        try {
          await storeDataInIndexedDB(e2layer(decryptedData));
          log(
            "info",
            "License data cached successfully",
            null,
            "getLicenseFromServer"
          );
        } catch (storeErr) {
          log(
            "error",
            "Failed to store license data:",
            storeErr,
            "getLicenseFromServer"
          );
        }
      }

      // 🔸 4. Resolve as success
      resolve(decryptedData);
    } catch (error) {
      // 🔸 5. Handle any network/decryption failure
      handleLicenseError(error.message || error);
      log("error", "License request failed:", error, "getLicenseFromServer");
      reject(error);
    }
  });
}

/* ========================================================================
     🔹 INDEXEDDB OPERATIONS
     ------------------------------------------------------------------------
     - getDynamicDBDetails(), fetchDataFromIndexedDB()
     - storeDataInIndexedDB(), deleteAllDatabases()
     ======================================================================== */
async function getDynamicDBDetails() {
  if (!indexedDB.databases) {
    throw new Error("IndexedDB databases API not supported in this browser.");
  }

  const databases = await indexedDB.databases();
  const matchingDBs = databases.filter((db) => db.name.startsWith(DBPrefix));

  log("info", "Database count: ", matchingDBs.length, "getDynamicDBDetails");

  if (!matchingDBs.length) {
    log(
      "info",
      "No databases found, requesting server:",
      null,
      "getDynamicDBDetails"
    );
    const license = await getLicenseFromServer();
    if (license) {
      return getDynamicDBDetails();
    } else {
      throw new Error("getDynamicDBDetails failed");
    }
  } else {
    if (matchingDBs.length === 0) {
      log(
        "info",
        "No databases found starting with DBPrefix:",
        DBPrefix,
        "getDynamicDBDetails"
      );
      return null; // or handle accordingly
    }

    const dbName = matchingDBs[0].name; // Get the first matching database name
    log("info", "Database Found: ", dbName, "getDynamicDBDetails");

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onerror = (event) => {
        log(
          "error",
          "Database error: ",
          event.target.errorCode,
          "getDynamicDBDetails"
        );
        reject(event.target.errorCode);
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        const storeNames = Array.from(db.objectStoreNames);

        if (!storeNames.length) {
          db.close(); // Close the database connection
          reject(new Error("No object stores found."));
          return;
        }

        const storeName = storeNames[0]; // Get the first store name
        log("info", "Store found: ", storeName, "getDynamicDBDetails");

        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const cursorRequest = objectStore.openCursor();

        cursorRequest.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            resolve({ dbName, storeName, keyName: cursor.primaryKey });
          } else {
            reject(new Error("No keys found in the object store."));
          }
          db.close(); // Close the database connection after cursor operation
        };

        cursorRequest.onerror = (event) => {
          db.close(); // Ensure the database connection is closed on error
          reject(event.target.errorCode);
        };
      };

      request.onupgradeneeded = (event) => {
        console.log(`Database ${dbName} upgrade needed`);
      };
    });
  }
}
// Fetch data from IndexedDB
async function fetchDataFromIndexedDB() {
  const { dbName, storeName, keyName } = await getDynamicDBDetails();

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = (event) => {
      console.error("Database error:", event.target.errorCode);
      reject(event.target.errorCode);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([storeName], "readonly");
      const objectStore = transaction.objectStore(storeName);
      const getRequest = objectStore.get(keyName);

      getRequest.onsuccess = () => {
        const result = getRequest.result;
        if (result) {
          const decryptedData = d2layer(result.value);
          log(
            "info",
            "Data fetched successfully: ",
            decryptedData,
            "fetchDataFromIndexedDB"
          );
          // Check and decrement sumra, then delete or update DB accordingly
          let temp = decryptedData.arzisaman.sumra - 1;
          decryptedData.arzisaman.sumra = temp;
          log(
            "info",
            "arzan saman need to -- and then again save: ",
            decryptedData.arzisaman.sumra,
            "fetchDataFromIndexedDB"
          );

          if (decryptedData.arzisaman.sumra <= 0) {
            deleteAllDatabases();
          } else {
            storeDataInIndexedDB(e2layer(decryptedData), true);
          }
          resolve(decryptedData);
        } else {
          log(
            "warn",
            "No data found for the given key: ",
            keyName,
            "fetchDataFromIndexedDB"
          );
          resolve(null); // Resolve with null if no data is found
        }
        db.close(); // Close the database connection after fetching
      };

      getRequest.onerror = (event) => {
        log(
          "info",
          "Error fetching data: ",
          event.target.errorCode,
          "fetchDataFromIndexedDB"
        );
        db.close(); // Ensure db is closed even on error
        reject(event.target.errorCode);
      };
    };

    request.onupgradeneeded = (event) => {
      event.target.result.createObjectStore(storeName, { keyPath: "key" });
    };
  });
}
// Store data to IndexedDB
async function storeDataInIndexedDB(fetched_data, dynamic = false) {
  let dbName, storeName, keyName;

  if (dynamic) {
    // Fetch dynamic database details if the second argument is passed
    ({ dbName, storeName, keyName } = await getDynamicDBDetails());
  } else {
    // Generate unique variable names if only one argument is passed
    [dbName, storeName, keyName] = generateUniqueVarNames(3);
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = (event) => {
      log(
        "info",
        "Database error: ",
        event.target.errorCode,
        "storeDataInIndexedDB"
      );
      reject(event.target.errorCode);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([storeName], "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const addRequest = objectStore.put({ key: keyName, value: fetched_data });

      addRequest.onsuccess = () => {
        log(
          "info",
          `Data stored successfully from server with key: `,
          keyName,
          "storeDataInIndexedDB"
        );
        resolve(fetched_data);
        db.close(); // Close the database connection after storing
      };

      addRequest.onerror = (event) => {
        log(
          "error",
          `Error storing data: `,
          event.target.errorCode,
          "storeDataInIndexedDB"
        );
        db.close(); // Ensure db is closed even on error
        reject(event.target.errorCode);
      };
    };

    request.onupgradeneeded = (event) => {
      event.target.result.createObjectStore(storeName, { keyPath: "key" });
    };
  });
}

async function deleteAllDatabases() {
  if (!indexedDB.databases) {
    throw new Error("IndexedDB databases API not supported in this browser.");
  }

  try {
    // Retrieve the list of all databases
    const databases = await indexedDB.databases();
    log("info", `Database count: `, databases.length, "deleteAllDatabases");

    // If no databases are found, log a message and return
    if (databases.length === 0) {
      log("info", `No databases found to delete.`, null, "deleteAllDatabases");
      return;
    }

    // Loop through each database and delete it if it starts with the DBPrefix
    for (const dbInfo of databases) {
      const dbName = dbInfo.name;

      if (dbName && dbName.startsWith(DBPrefix)) {
        log("info", `Deleting database: ${dbName}`, null, "deleteAllDatabases");

        // Open and close the database before deletion to ensure no active connection
        const openRequest = indexedDB.open(dbName);
        openRequest.onsuccess = (event) => {
          const db = event.target.result;
          db.close(); // Close the database connection

          // Now proceed to delete the database
          const deleteRequest = indexedDB.deleteDatabase(dbName);

          deleteRequest.onsuccess = () => {
            log(
              "info",
              `Successfully deleted database: ${dbName}`,
              null,
              "deleteAllDatabases"
            );
          };

          deleteRequest.onerror = (event) => {
            log(
              "error",
              `Error deleting database ${dbName}: `,
              event.target.errorCode,
              "deleteAllDatabases"
            );
          };

          deleteRequest.onblocked = () => {
            log(
              "error",
              `Delete operation blocked for database: ${dbName}. Please close all open tabs or reload the page.`,
              null,
              "deleteAllDatabases"
            );
          };
        };

        openRequest.onerror = (event) => {
          log(
            "error",
            `Error opening database ${dbName}: `,
            event.target.errorCode,
            "deleteAllDatabases"
          );
        };
      } else {
        log(
          "info",
          `Database ${dbName} does not match the DBPrefix ${DBPrefix}, skipping.`,
          null,
          "deleteAllDatabases"
        );
      }
    }
  } catch (error) {
    log("error", "Failed to retrieve databases: ", error, "deleteAllDatabases");
  }
}

/* ========================================================================
     🔹 LICENSE VALIDATION LOGIC
     ------------------------------------------------------------------------
     - wala(): main offline check function
     - Triggers activation UI or license expired UI
     ======================================================================== */

async function wala(ret = 0, fetched = 0) {
  log("info", "Checking license with ret:", ret, "wala");
  try {
    const resp = fetched === 0 ? await fetchDataFromIndexedDB() : fetched;
    if (resp) {
      log("info", "status:", resp.ijazat.status, "wala");
      shtaAoKna = resp;
      if (!resp.ijazat.status) {
        handleLicenseNotActivated(resp.ijazat.reason);
      } else {
        if (ret) return resp;
        toastr.success(resp.ijazat.reason);
        activateLicenseUI(resp.ijazat.reason);
      }
    } else {
      handleError(resp);
    }
  } catch (error) {
    log("error", "Error fetching data:", error, "wala");
    throw error;
  }
}

/* ========================================================================
   🔹 UPDATE CHECK & VERSION VALIDATION (Promise-based)
   ------------------------------------------------------------------------
   - Uses talkToServer('update') internally
   - Keeps backward-compatible Promise resolve/reject flow
   - Handles toastr messages and logging as before
   ======================================================================== */

async function queryServer(checkFor = "update") {
  return new Promise(async (resolve, reject) => {
    try {
      // 🔸 1. Send update request via unified handler
      const decryptedResponse = await talkToServer(checkFor);

      log(
        "info",
        "Decrypted update response:",
        decryptedResponse,
        "queryServer"
      );

      // 🔸 2. Display feedback
      const reason = decryptedResponse?.ijazat?.reason ?? null;
      if (reason) toastr.info(reason);

      // 🔸 3. Handle invalid response
      if (!decryptedResponse?.ijazat?.status) {
        log(
          "info",
          "Update check failed:",
          reason || "Unknown reason",
          "queryServer"
        );
        return reject(reason || "Update check failed");
      }

      // 🔸 4. Resolve successful response
      resolve(decryptedResponse);
    } catch (error) {
      // 🔸 5. Error handling
      handleLicenseError(error.message || error);
      log("error", "Update check request failed:", error, "queryServer");
      reject(error);
    }
  });
}

async function updatesChecking() {
  hideElement("check_license_button");
  hideElement("check_updates_button");
  showElement("statusLoader");

  try {
    const response = await queryServer("update");
    hideElement("statusLoader");

    if (response && response.ijazat) {
      const { status, reason, latest, download } = response.ijazat;

      if (status) {
        // ✅ update is available
        document.getElementById("trigger").classList.toggle("drawn");
        setElementHTML(
          "license-info",
          `
            <h3 style="color:green">${DOMPurify.sanitize(reason)}</h3>
            <h2><a href='${DOMPurify.sanitize(
              download
            )}' target='_blank'> Download </a></h2>
          `
        );
      } else {
        // no update or invalid response
        setElementHTML(
          "license-info",
          `
            <h3 style="color:red">${DOMPurify.sanitize(
              reason || "No update available"
            )}</h3>
          `
        );
      }
    } else {
      handleError("Invalid response structure");
      log("error", "Malformed update response:", response, "updatesChecking");
    }
  } catch (error) {
    log("error", "Error fetching data:", error, "updatesChecking");
    handleError(error);
  }
}

/* ========================================================================
   🔹 USAGE LOGGING HELPERS (Job Start / Job Done)
   ------------------------------------------------------------------------
   - Sends structured usage logs to middleware via talkToServer()
   - Automatically attaches UA, IP, and profileData (Terms.js)
   ======================================================================== */

/**
 * Log the start of a posting/scraping job.
 * @param {string} summary - Short summary of the event.
 * @param {object} meta - Optional metadata (e.g., total groups, target count).
 */
async function usageJobStart(summary = "Job started", meta = {}) {
  try {
    const payload = {
      event: "job_start",
      summary,
      status: "running",
      meta: { ...meta, start_ts: new Date().toISOString() },
      content_type: "text",
    };

    const response = await talkToServer("usage", payload);
    log(
      "info",
      "Usage: job_start sent successfully",
      response,
      "usageJobStart"
    );
  } catch (err) {
    log("error", "Usage: job_start failed", err, "usageJobStart");
  }
}

/* ========================================================================
   🔹 UNIVERSAL USAGE LOGGER
   ------------------------------------------------------------------------
   - Handles all usage events in one function
   - Supports job_start, job_done, scrape_done, error, etc.
   - Automatically includes UA, IP, profile, and group info (if available)
   ======================================================================== */

async function sendUsage({
  event = "usage_log",
  summary = null,
  status = null,
  meta = null,
  content = null,
  postedPosts = null,
} = {}) {
  try {
    // 🔸 Extract group details if provided
    let groupsList = [];
    if (selectedGroups && selectedGroups.length > 0) {
      groupsList = Array.from(selectedGroups)
        .map((el) => el.value || el.id || el.getAttribute("data-id") || "")
        .filter((id) => id.trim() !== "")
        .map((id) => ({ id, url: `https://facebook.com/groups/${id}` }));
    }

    // 🔸 Build full usage payload
    const payload = {
      event: event,
      summary: summary || "No summary provided",
      status: status || "ok",
      meta: {
        ...(meta || {}),
        timestamp: new Date().toISOString(),
        // groups: groupsList.length ? groupsList : null,
        posts: Array.isArray(postedPosts) ? postedPosts : [],
      },
      content: content || null,
      content_hash: content ? await generateSHA256(content) : null,
      content_type: "text",
    };

    // 🔸 Send to middleware using existing talkToServer
    const response = await talkToServer("usage", payload);

    log(
      "info",
      `Usage event '${event}' sent successfully`,
      response,
      "sendUsage"
    );
    return response;
  } catch (error) {
    log("error", "Failed to send usage event:", error, "sendUsage");
    return null;
  }
}

/* ------------------------------------------------------------------------
     🔹 HELPER: SHA256 hashing for content comparison
     ------------------------------------------------------------------------ */
async function generateSHA256(text) {
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text)
  );
  const array = Array.from(new Uint8Array(buffer));
  return array.map((b) => b.toString(16).padStart(2, "0")).join("");
}
