


const maKwa = {
	tikDayBas: 0,
	raka: self.chrome.runtime.id,
	expire: "Your license is expired.",
	sahida: atob(ultaKa("=4CZlRXY2lGdjFGIzlGIlNnblNWasBic19WW")),
	ogora: "raka + atob(ultaKa('==gO')) + sahida",
	// ogora: raka + atob(ultaKa("==gO")) + sahida,
	// ogora: self.chrome.runtime.id + atob(ultaKa("==gO")) + atob(ultaKa("=4CZlRXY2lGdjFGIzlGIlNnblNWasBic19WW")),
	nshta: atob(ultaKa("uQWZ0FmdpR3YhBCdv5GIzlGIlNnblNWasBic19WW")),
	walakna: atob(ultaKa("==gLlNnblNWasBSe1JGIvRHIlNWYsBneyV2ZpR3Lt92YuImZABCdjFGdu92Q")),
	walaLink: atob(ultaKa("whGcuEmcvd2bvUGb1R2bt9VZz5WZjlGbvMHbv9Gdv02bj5SZjFGbwpncldWa09yL6MHc0RHa")),
	tazaLink: atob(ultaKa("942bpNnclZnJwFmZ9w2bvR3PwhGcuUGdhRGc19SZz5WZjlGbvMHbv9Gdv02bj5SZjFGbwpncldWa09yL6MHc0RHa")),
	chrtaWalam: atob(ultaKa("=U2cuV2YpxWLs92b01Se1JWLvRXL39Gav02bj5SZjFGbwpncldWa09yL6MHc0RHa"))
};


if (karKom) {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  console.info = () => {};
  console.debug = () => {};
}



function activateLicenseUI(msg) {
  hideElement("statusLoader");
  document.getElementById("trigger").classList.toggle("drawn");
  setElementHTML("license-info", `<h3 style=\"color:green\">${DOMPurify.sanitize(msg)}</h3>`);
  // setTimeout(() => $('a[href="#Home"]').click(), 1000);

}

function handleLicenseNotActivated(msg) {
  hideElement("statusLoader");
  toastr.error(msg);
  setElementHTML("license-info", `<h3 style="color:red">${DOMPurify.sanitize(msg)}</h3>`);
  document.getElementById("extension-id").innerText = extension_id;
  setTimeout(showPurchase, 5000);
}

function handleError(msg) {
  toastr.error(msg);
  setElementHTML("license-info", `<h3 style="color:red">${DOMPurify.sanitize(msg)}</h3>`);
}

function handleXHRError(status) {
  toastr.error(status);
  log('error', `XHR request error: ${status}`, null, 'getLicenseFromServer');
  setElementHTML("license-info", `<h3 style="color:red">${DOMPurify.sanitize(status)}</h3>`);
}


function showPurchase() {
  showElement("purchase-license");
  hideElement("check-license");
  hideElement("license-info");

  const purchaseLinkElement = document.getElementById("purcahse_link");
  if (purchaseLinkElement) {
      purchaseLinkElement.href = maKwa.chrtaWalam;
      log('info', "Purchase link set", purchaseLinkElement.href, 'showPurchase');
  } else {
      log('error', "Element with id 'purchase_link' not found", null, 'showPurchase');
  }
}


async function getHash() {
  const response = await fetch(chrome.runtime.getURL(`../js/frame.js`));
  const text = await response.text();
  const currentHash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  const hashArray = Array.from(new Uint8Array(currentHash));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  console.log(hashHex);
}

async function checkYeKa() {
  if (!karKom){
    return;
  }
  const fileHash = "013cda7724ce0c4550be85e9bf35447f00899ead3f0990e3586f40823dfdc704";  // The original hash of your file
  const response = await fetch(chrome.runtime.getURL("../js/frame.js"));
  const text = await response.text();
  const currentHash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  const hashArray = Array.from(new Uint8Array(currentHash));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  if (hashHex !== fileHash) {
      // console.error("Extension seems corrupted, try installing fresh verison");
      chrome.runtime.reload();
  }
}

checkYeKa();


///////////////////////////////////////////////////////////


// const manifestData = chrome.runtime.getManifest();
// const extension_version = manifestData.version;
// const extension_id = chrome.runtime.id;
// const extension_short_name = chrome.runtime.getManifest().short_name;



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
    // this is for decryption part.
    const key = ultaKa(id.substring(position));
    return key;
  }
}

function halfAlgoKey() {
  const id = extension_id;
  const middle = Math.floor(id.length / 2);
  const key = ultaKa(id.substring(middle));
  return key;
}

function customEncrypt(data, key) {
  // Encode the data using base64
  const utf8Bytes = new TextEncoder().encode(data);
  // return btoa(String.fromCharCode(...utf8Bytes));
  let encodedData = btoa(String.fromCharCode(...utf8Bytes));
  
  // Convert key to a series of numerical shifts based on character codes
  let shifts = Array.from(key).map(
    (char) => char.charCodeAt(0) % encodedData.length
  );

  // Shuffle the encoded data using the shifts
  let shuffledData = shuffle(encodedData, shifts);

  return shuffledData;
}

function customDecrypt(encryptedData, key) {
  // Convert key to a series of numerical shifts based on character codes


  let shifts = Array.from(key).map(
    (char) => char.charCodeAt(0) % encryptedData.length
  );

  // Unshuffle the encrypted data using the shifts
  let unshuffledData = unshuffle(encryptedData, shifts);


  const binaryStr = atob(unshuffledData);
  const utf8Bytes = Uint8Array.from(binaryStr, char => char.charCodeAt(0));
  let decodedData = new TextDecoder().decode(utf8Bytes);

  // Decode the base64 data
  //let decodedData = atob(unshuffledData);
  
  return decodedData;
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
  data = customEncrypt(data, halfAlgoKey());
  return data;
}

function d2layer(encryptedData) {
  const dataWithPosition = customDecrypt(encryptedData, halfAlgoKey());
  // console.log(`dataWithPosition: ${dataWithPosition}`);
  const [data, position] = dataWithPosition.split(":");
  // console.log(`data: ${data}`);
  const decryptedData = JSON.parse(
    customDecrypt(data, RandomAlgoKey(position))
  );
  return decryptedData;
}

function generateUniqueVarNames(numberOfNames) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minLength = 7;
  const maxLength = 11;

  function generateName() {
    const length =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let varName = `${extension_short_name}_`; // short_name = FAP_
    for (let i = 0; i < length; i++) {
      varName += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return varName;
  }

  const namesArray = [];
  for (let i = 0; i < numberOfNames; i++) {
    namesArray.push(generateName());
  }
  return namesArray;
}
// Function to fetch license from server using POST method
async function getLicenseFromServer(checkFor = 'license', store = 1) {
  return new Promise((resolve, reject) => {

    
    const xhr = new XMLHttpRequest();

    xhr.open("POST", maKwa.walaLink, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Prepare data to be sent
    const data = {
      id: `${encodeURIComponent(extension_id)}`,
      version: `${encodeURIComponent(extension_version)}`,
      check: checkFor,
      short_name: `${extension_short_name}`,
    };
    const params = `ogora=${encodeURIComponent(e2layer(data))}`;

    log("info", "Requesting server for:", checkFor, "getLicenseFromServer");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const decryptedData = d2layer(xhr.responseText);
            //console.log("arzan saman: " + decryptedData.arzisama.sumra);
            log("info", "decryptedData_license_info_status:", decryptedData.ijazat.status, "getLicenseFromServer");

            if (!decryptedData.ijazat.status) {
              log("info", "Data saving is skipped because status is:", decryptedData.ijazat.status, "getLicenseFromServer");
              log("info", "Reason:", decryptedData.ijazat.reason, "getLicenseFromServer");
              eventText = decryptedData.ijazat.reason;
              eventLog();
              return wala(0, decryptedData);
            }

            if (store) {
              storeDataInIndexedDB(xhr.responseText)
                .then((savedResponse) => resolve(savedResponse))
                .catch((error) => reject(error));
            } else {
              resolve(xhr.responseText);
            }
          } catch (error) {
            reject("Error parsing response: " + error);
          }
        } else {
          handleXHRError(xhr.status);
          reject(new Error(`XHR request failed with status ${xhr.status}`));
        }
      }
    };
    log('info', 'Sending request', maKwa.walaLink, 'getLicenseFromServer');
    xhr.send(params);
  });
}

async function getDynamicDBDetails() {
  if (!indexedDB.databases) {
    throw new Error("IndexedDB databases API not supported in this browser.");
  }

  const databases = await indexedDB.databases();
  const matchingDBs = databases.filter((db) => db.name.startsWith(DBPrefix));

  log("info", "Database count: ", matchingDBs.length, "getDynamicDBDetails");

  if (!matchingDBs.length) {
    log("info", "No databases found, requesting server:", null, "getDynamicDBDetails");
    const license = await getLicenseFromServer();
    if (license) {
      return getDynamicDBDetails();
    } else {
      throw new Error("getDynamicDBDetails failed");
    }
  } else {

    if (matchingDBs.length === 0) {
      log("info", "No databases found starting with DBPrefix:", DBPrefix, "getDynamicDBDetails");
      return null; // or handle accordingly
    }

    const dbName = matchingDBs[0].name; // Get the first matching database name
    log("info", "Database Found: ", dbName, "getDynamicDBDetails");

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onerror = (event) => {
        log("error", "Database error: ", event.target.errorCode, "getDynamicDBDetails");
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
          log("info", "Data fetched successfully: ", decryptedData, "fetchDataFromIndexedDB");
          // Check and decrement sumra, then delete or update DB accordingly
          let temp = decryptedData.arzisaman.sumra - 1;
          decryptedData.arzisaman.sumra = temp;
          log("info", "arzan saman need to -- and then again save: ", decryptedData.arzisaman.sumra, "fetchDataFromIndexedDB");

          if (decryptedData.arzisaman.sumra <= 0) {
            deleteAllDatabases();
          } else {
            storeDataInIndexedDB(e2layer(decryptedData), true);
          }
          resolve(decryptedData);
        } else {
          log("warn", "No data found for the given key: ", keyName, "fetchDataFromIndexedDB");
          resolve(null); // Resolve with null if no data is found
        }
        db.close(); // Close the database connection after fetching
      };

      getRequest.onerror = (event) => {

        log("info", "Error fetching data: ", event.target.errorCode, "fetchDataFromIndexedDB");
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
      log("info", "Database error: ", event.target.errorCode, "storeDataInIndexedDB");
      reject(event.target.errorCode);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction([storeName], "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const addRequest = objectStore.put({ key: keyName, value: fetched_data });

      addRequest.onsuccess = () => {
        log("info", `Data stored successfully from server with key: `, keyName, "storeDataInIndexedDB");
        resolve(fetched_data);
        db.close(); // Close the database connection after storing
      };

      addRequest.onerror = (event) => {
        log("error", `Error storing data: `, event.target.errorCode, "storeDataInIndexedDB");
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
            log("info", `Successfully deleted database: ${dbName}`, null, "deleteAllDatabases");
          };
          

          deleteRequest.onerror = (event) => {
            log("error", `Error deleting database ${dbName}: `, event.target.errorCode, "deleteAllDatabases");
          };

          deleteRequest.onblocked = () => {
            log("error",`Delete operation blocked for database: ${dbName}. Please close all open tabs or reload the page.`, null, "deleteAllDatabases");
          };
        };

        openRequest.onerror = (event) => {
          log("error",`Error opening database ${dbName}: `, event.target.errorCode, "deleteAllDatabases");

        };
      } else {
        log("info",`Database ${dbName} does not match the DBPrefix ${DBPrefix}, skipping.`, null, "deleteAllDatabases");
      }
    }
  } catch (error) {
    log("error","Failed to retrieve databases: ", error, "deleteAllDatabases");
  }
}

async function wala(ret = 0, fetched = 0) {

  log("info","Checking license with ret:", ret , "wala");
  try {
    const resp = fetched === 0 ? await fetchDataFromIndexedDB() : fetched;
    if (resp) {

      log("info","status:", resp.ijazat.status, "wala");
      shtaAoKna = resp
      if (!resp.ijazat.status) {
        log("info","reason:", resp.ijazat.reason, "wala");
        handleLicenseNotActivated(resp.ijazat.reason);
      }else {

        if (ret){return resp;}

        toastr.success(resp.ijazat.reason);
        activateLicenseUI(resp.ijazat.reason);

      }
    
    } else {
      log("error","No response from DB", resp, "wala");
      handleError(resp);
    }
  } catch (error) {
    log("error","Error fetching data:", error, "wala");
    throw error; // Throw error to handle it in the calling function
  }
}

async function queryServer(checkFor = 'update') {
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", maKwa.walaLink, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Prepare data to be sent
    const data = {
      id: `${encodeURIComponent(extension_id)}`,
      version: `${encodeURIComponent(extension_version)}`,
      check: checkFor,
      short_name: `${extension_short_name}`,
    };
    const params = `ogora=${encodeURIComponent(e2layer(data))}`;

    log("info", "Requesting server for:", checkFor, "queryServer");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const decryptedResponse = d2layer(xhr.responseText);
            log("info", "Decreypted Response From Server:", decryptedResponse, "queryServer");
            const reason = decryptedResponse?.ijazat?.reason ?? null;
            if (reason != null){
              toastr.info(decryptedResponse.ijazat.reason);
            }
            resolve (decryptedResponse);
          } catch (error) {
            reject("Error parsing response: " + error);
          }
        } else {
          handleXHRError(xhr.status);
          reject(new Error(`XHR request failed with status ${xhr.status}`));
        }
      }
    };
    log('info', 'Sending request', maKwa.walaLink, 'queryServer');
    xhr.send(params);
  });
}

async function updatesChecking() {
  hideElement("check_license_button");
  hideElement("check_updates_button");
  showElement("statusLoader");
  try {
  const response = await queryServer('update');
  hideElement("statusLoader");
  if(response){
    if (response.status){
      document.getElementById("trigger").classList.toggle("drawn");
      setElementHTML("license-info", `
        <h3 style="color:green">New version ${DOMPurify.sanitize(response.status)} is available!</h3>
        <h2><a href='${DOMPurify.sanitize(encodeURIComponent(response.download_link))}' target='_blank'> Download </a></h2>
    `);
    }else {
      setElementHTML("license-info", `<h3 style="color:red">${DOMPurify.sanitize(response.reason)}</h3>`);
    }
  }else {
      log("error","queryServer error:", resp, "updatesChecking");
      handleError(resp);
    }
  } catch (error) {
    log("error","Error fetching data:", error, "updatesChecking");
    throw error; // Throw error to handle it in the calling function
  }
}