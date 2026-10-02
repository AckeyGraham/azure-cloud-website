# Azure-Cloud

A responsive website for Azure-Cloud, an Azure consultancy based in Scotland. It is built with plain HTML, CSS and JavaScript, with no build step or framework dependencies.

## Preview locally

Open `index.html` in a browser, or serve this directory with any static web server.

## Publish with GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then save.

The site will be published at the Pages URL shown in repository settings. If you use a custom domain, configure it in Pages settings and add the DNS records GitHub provides.

## Connect the contact form

The contact page uses Formspree to receive submissions from this static site; no email credentials are exposed in the browser. Its endpoint is configured in `contact.html`.

Set the notification recipient in the Formspree account associated with the endpoint, then submit a test enquiry and confirm it arrives.

Review Formspree’s current plan, privacy and data-retention terms before using it to collect personal information. The site loads its heading fonts from Google Fonts and uses system font fallbacks if they are unavailable.