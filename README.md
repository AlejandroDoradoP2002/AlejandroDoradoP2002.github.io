# Portfolio Website — Local development and contact form setup

This repository contains a lightweight static portfolio site. I split the site into multiple pages for clarity: `index.html`, `about.html`, `skills.html`, `projects.html`, `lab.html`, `writing.html`, `contact.html`, and `experience.html`.

## What's new
- Pages added: `about.html`, `skills.html`, `contact.html`, `experience.html`
- Navigation updated to point to dedicated pages
- Contact form added to `contact.html` with a lightweight JS handler to submit via [Formspree](https://formspree.io/) or fallback to `mailto:` if not configured
- UI & accessibility improvements for animations, focus states, and keyboard support

## Configure the contact form
Option A — Formspree (recommended, no server required):
1. Sign up at https://formspree.io/ and create a form endpoint (e.g. `https://formspree.io/f/your-id`).
2. Edit `contact.html` and replace the form's `action` attribute with your form endpoint.
3. Test by submitting the form — Formspree will email incoming submissions to the address you configured.

Option B — EmailJS (client-side, requires account):
1. Sign up at https://www.emailjs.com/ and create a service and template.
2. Update `contact.html` and `script.js` to use EmailJS per their documentation (this repo does not include EmailJS integration by default).

Option C — Mailto fallback (no server):
- If no `action` is configured, the site will open the user's email client using a `mailto:` link with pre-filled subject and message.

## Local testing
Use any static HTTP host. For quick local testing with Python:

```powershell
cd 'c:\Users\aleja\Desktop\portfolio'
python -m http.server 8000
```

Then open http://localhost:8000/ in your browser.

## Accessibility notes
- Focus outlines are included for keyboard users
- `prefers-reduced-motion: reduce` is respected — animations and parallax are disabled

## What next
- If you'd like, I can wire EmailJS for serverless client-side email sending, or add a Netlify/AWS Lambda function to send emails. Tell me which option you prefer and I’ll implement it.

---
Generated changes: added new pages and refactored nav links; updated `script.js` for form handling and more accessible interactions. If you want different behavior, tell me and I'll adjust it.