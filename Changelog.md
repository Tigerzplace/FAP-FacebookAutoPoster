# Changelog

All notable changes to Facebook Auto Poster (FAP) are documented in this file.

---

## v1.7 – Link Preview & Single-Instance Stability Fix

- Added manual link preview support with multi-link selection
- Preview data is fetched on demand and reused during posting
- Per-post preview state is preserved in saved campaigns
- Ensured only one extension instance (frame) can be open at a time
- Minor internal stability improvements

---

## v1.6.1 – Campaign Load Fixes & Posting Stability Improvements

- Fixed progress bar text rendering and initialization issues
- Start Posting button now appears correctly when loading a saved campaign
- Improved usage reporting for posted content reliability

---

## v1.6 – Smarter Campaigns, Pause Button, Cleaner UI, Stability & UX Upgrade

### New: Pause / Resume Button
- Pause an active posting campaign at any time
- Useful for reviewing logs or making quick adjustments before continuing

### New: Post URL Display
- Direct Facebook post URL is shown after each successful post
- Quickly verify or open posts without searching manually

### New: Save & Load Campaigns
- Save group selections and post settings as named campaigns
- Load campaigns in one click without reconfiguring settings
- Ideal for recurring promotions and multiple niches

### New: Extended Wait-Time Options (Safer Posting)
- Flexible fixed and custom wait times
- Configurable min/max delay window for multi-post campaigns
- First post starts immediately
- Smarter waiting logic avoids unnecessary delays while remaining FB-safe

### Improved: Logs & Toastr Notifications
- Log auto-scrolls to latest entry
- Clear Logs button added
- Cleaner log format: `[time] STATUS message`
- Group links are clickable again
- More accurate success/error toast messages

### Improved: Progress Bar & Mode B UX
- Progress text remains readable at all fill levels
- Progress bar auto-hides when not needed
- Smoother and more informative Mode B posting flow

### Minor Fixes & Optimizations
- More reliable storage for saved group lists and campaigns
- Better handling of edge cases across different environments
- Performance and stability tweaks throughout the posting engine

---

## v1.5.3.6

- Added Custom Time Range (Minutes) with full validation
- Improved wait-time logic:
  - No delay before first post
  - No delay after last post
- Rebuilt posting engine for performance and natural timing
- Cleaned UI and improved custom minutes input panel
- Strengthened input validation and FB safety protections
- Removed duplicate logs and fixed early wait calculation bug
- Reorganized timing code and removed unused variables
- Improved logging clarity and debugging
- Minor UI refinements

---

## v1.5.3.5

**Update: Improved Extension Stability & Communication Layer**

- Enhanced reliability of license and update checks
- Optimized data handling between extension and server
- Improved background validation and logging flow
- Better status reporting for posting and activity events
- Minor performance and security improvements

---

## v1.5.3.4

### Fix: Unicode Handling in Custom Encryption

- Added UTF-8 encoding/decoding support
- Ensured encryption/decryption compatibility with Unicode characters
- Prevented `InvalidCharacterError`
- Improved robustness through multi-language testing

---

## v1.5.3.3

### Account Type Detection Improvements

- Added regex-based JSON extraction for ACCOUNT_ID, USER_ID, NAME
- Detects PAGE_MESSAGING_MAILBOX_ID to identify Page posting
- Automatically sets `profileData.type` to `page` or `user`

---

## v1.5.3.2

- Updated API for improved reliability with Facebook changes
- Automatic link previews with clean post formatting
- Faster posting by applying wait time only between posts
- Real-time progress bar updates
- Smart link handling:
  - Single trailing links removed
  - Embedded or multiple links preserved

---

## v1.5.3.1

- Fixed group loading issue
- User posting updated to latest Facebook API

---

## v1.5.3

### Security & Stability Enhancements

#### Integrity Check
- SHA-256 integrity verification for core JS files
- Extension reloads automatically if tampering is detected

#### Debug Mode Control
- Added `DEBUG_MODE` flag
- Disables console output in production

#### License Module Update
- Improved reliability and integration with auto-purchase flow

#### CORS Fix
- Fixed media upload CORS issues via header updates

#### Background Script Improvements
- Dynamic extension ID retrieval
- Origin header set only for extension-initiated requests
- Scoped rules to Facebook domains only

#### Performance
- Optimized `loginCheck` for faster profile handling

---

## v1.5.2.2

- Enhanced link detection
- Added support for `fb.watch` links with preview

---

## v1.5.2.1

### Fix: PreviewData JSON Handling

- Handles multiple JSON responses
- Selects valid response containing `data`
- Improved error handling and logging
- Accurate payload construction for Facebook and external links

---

## v1.5.2

- Improved link preview handling for Page posting
- Supports Facebook and external links
- Enhanced regex for link detection
- Improved error handling and debugging logs
- Payload construction aligned with Facebook requirements

---

## v1.5.1

- Fixed user/page detection issues
- Prevented double posting when using saved group lists
- Selected groups are now respected correctly

---

## v1.5

- Save selected groups as reusable lists
- Load groups directly from saved lists
- Added option to delete saved group lists

---

## v1.4.9.9

- Fixed login issues for profiles without usernames
- Special characters (&, <, >, etc.) are now handled correctly

---

## v1.4.9.8

- Minor bug fixes
- Updated all help resource links
- License checking optimized for faster validation

---

## v1.4.9.7

- Fixed issue where user was not detected as logged in

---

## v1.4.9

- Added wait-time range support with random delays
- Page posting support added (tested – 28 Aug 2023)

---

## v1.4.8.1

- Fixed typos in `frame.js`
- Correct handling of `&` and message encoding

---

## v1.4.8

- Fixed “Type something to post” bug
- Group posting fixed after Facebook changes

---

## v1.4.7

- Fixed DynamicRules issues in `background.js`
- Old rules are now removed on update/install
- Scoped origin rules to Facebook URLs only

---

## v1.4.6

- Introduced Multiple Posts feature
- Randomized post selection across groups to reduce blocking

