#!/usr/bin/env node
/**
 * Privacy Policy + Terms of Service for All American Gutters (A2P / SMS compliant).
 * Patches Sanity `legalPage` documents by slug.
 *
 * Run: cd astro-site && node scripts/patch-aagf-legal-pages.mjs
 */

import { createClient } from '@sanity/client'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  exitOrSkipIfNoSanityWriteCreds,
  getSanityPatchCredentials,
  loadPatchDotEnv,
  tryPublishDraft,
} from './patch-env.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

loadPatchDotEnv(root)

const { projectId, dataset, token } = getSanityPatchCredentials()

const SITE_URL = 'https://aaguttersflorida.com/'
const BRAND = 'All American Gutters'
const LEGAL_ENTITY = 'Bluebird Miami, LLC'
const PHONE = '(561) 274-9477'
const EMAIL = 'info@aaguttersflorida.com'
const ADDRESS = '36 SW 8th Ct, Deerfield Beach, FL 33441'

const PRIVACY_POLICY = `Privacy Policy
Last Updated: June 2026

Who We Are
Our website address is:
${SITE_URL}

${BRAND} is the public-facing brand providing gutter installation, repair, cleaning, replacement, guards, and related home services in South Florida.

${BRAND} operates as a subsidiary of ${LEGAL_ENTITY}. ${LEGAL_ENTITY} is responsible for tax reporting, EIN registration, financial administration, and messaging operations associated with ${BRAND}.

This Privacy Policy explains how information is collected, used, and protected when you visit our website or communicate with us.

Information We Collect
We may collect information when you:
- Call, email, text, or chat with us
- Submit a contact or estimate request on our website
- Schedule a consultation through our website or third-party scheduling tools
- Opt in to receive SMS or email communications from us

Information may include your name, phone number, email address, property address or city, project details, IP address, browser type, and pages visited on our site.

Cookies & Analytics
Our website may use cookies and similar technologies to remember preferences, measure traffic, and improve performance. You can control cookies through your browser settings.

Third-party tools on our site (such as analytics, call tracking, chat widgets, or scheduling platforms) may collect usage data according to their own privacy policies.

Who We Share Your Data With
We do not sell, rent, or trade personal information.

Data may be shared only with trusted service providers necessary to:
- Operate our website
- Communicate with customers
- Schedule appointments
- Deliver requested services
- Send SMS or email messages you have opted in to receive

This may include website hosting providers, CRM platforms, scheduling tools, email platforms, and SMS delivery providers strictly for operational purposes.

How Long We Retain Your Data
We retain customer and lead information for as long as needed to provide services, maintain business records, comply with legal obligations, and resolve disputes.

Your Data Rights
You may request access to, correction of, or deletion of your personal information by contacting us using the information below. Certain records may be retained where required for legal, administrative, or security purposes.

SMS / Text Messaging Privacy Policy
${LEGAL_ENTITY} (${BRAND})

If you provide your phone number through our website, contact forms, scheduling tools, chat widgets, phone calls, or direct communication, you may receive SMS or MMS text messages from ${LEGAL_ENTITY} on behalf of ${BRAND}.

Types of Messages
Messages may include:
- Appointment confirmations and reminders
- Estimates and service updates
- Customer support communications
- Follow-ups related to inquiries or services requested
- Promotional or informational messages related to our services

Consent
By submitting your phone number and opting in through our website, scheduling tools, or other communication channels, you expressly consent to receive text messages from ${LEGAL_ENTITY} on behalf of ${BRAND}.

Consent to receive text messages is not a condition of purchase.

Message Frequency
Message frequency may vary based on your interaction with our business.

Opt-Out
You may opt out at any time by replying STOP to any message.
Once opted out, you will no longer receive SMS messages unless you re-subscribe.

Help
Reply HELP for assistance or contact us at ${PHONE} or ${EMAIL}.

Fees & Carriers
Message and data rates may apply depending on your carrier and plan.
Carriers are not responsible for delayed or undelivered messages.

Mobile Data Use
We do not share, sell, rent, or disclose mobile phone numbers or SMS consent data to third parties or affiliates for their own marketing purposes.
Messaging data is used solely for service-related communication and processed only through trusted providers for message delivery.

Policy Relationship
This Privacy Policy should be read in conjunction with our Terms of Service at ${SITE_URL}terms-of-service/

Updates to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.

Contact Us
${BRAND}
${ADDRESS}
Phone: ${PHONE}
Email: ${EMAIL}
Website: ${SITE_URL}`

const TERMS_OF_SERVICE = `Terms of Service
Last Updated: June 2026

These Terms of Service ("Terms") govern your use of the website ${SITE_URL.replace(/\/$/, '')} and any services provided by ${BRAND}, a subsidiary of ${LEGAL_ENTITY} ("Company," "we," "us," or "our").

By using this website, calling us, submitting a form, requesting services, or opting in to receive communications from us, you agree to these Terms.

Company Information
Legal Entity: ${LEGAL_ENTITY}
Brand: ${BRAND}
Website: ${SITE_URL}
Mailing Address: ${ADDRESS}
Phone: ${PHONE}
Email: ${EMAIL}
Service Area: South Florida (Broward and Palm Beach counties and surrounding areas)

Services
${BRAND} provides gutter installation, repair, cleaning, replacement, guards, downspout work, and related home services. All services are subject to availability and may vary by location.

SMS Messaging & A2P Compliance
Opt-In Consent
By submitting your phone number through our website forms, scheduling tools, chat widgets, or other opt-in methods, you expressly consent to receive SMS text messages from ${LEGAL_ENTITY} on behalf of ${BRAND}.

These messages may include, but are not limited to:
- Appointment confirmations and reminders
- Service updates
- Estimates and order notifications
- Account-related messages
- Customer service communications

Message frequency may vary.

Message Rates & Carriers
Standard message and data rates may apply depending on your mobile carrier and plan. Carriers are not liable for delayed or undelivered messages.

Opt-Out Instructions
You may opt out of SMS messages at any time by replying STOP to any message.
For assistance, reply HELP or contact us at ${PHONE} or ${EMAIL}.

Opting out will stop future SMS communications unless you re-opt in.

No Third-Party Message Sharing
We do not sell, rent, or share your phone number with third parties for their own marketing purposes. SMS consent is used solely for communications related to services you request from ${BRAND} / ${LEGAL_ENTITY}.

Website Use
You agree to use this website only for lawful purposes. You may not:
- Attempt to gain unauthorized access to the website or systems
- Use the website in a way that disrupts service or security
- Submit false or misleading information

Intellectual Property
All content on this website, including text, images, logos, and designs, is the property of ${LEGAL_ENTITY} or its licensors and may not be used without written permission.

Limitation of Liability
To the fullest extent permitted by law, ${LEGAL_ENTITY} and ${BRAND} shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.

Warranties & Service Estimates
All estimates are non-binding unless stated otherwise in writing. Actual pricing may vary based on job conditions, materials, and scope of work discovered during service.

Privacy
Your use of this website is also governed by our Privacy Policy at ${SITE_URL}privacy-policy/, which explains how we collect, use, and protect your personal information.

Modifications
We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated effective date.

Governing Law
These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles.

Contact Information
If you have questions about these Terms or our services, contact us at ${PHONE}, ${EMAIL}, or through ${SITE_URL}contact-us/`

const PAGES = [
  { slug: 'privacy-policy', title: 'Privacy Policy', content: PRIVACY_POLICY },
  { slug: 'terms-of-service', title: 'Terms of Service', content: TERMS_OF_SERVICE },
]

async function main() {
  exitOrSkipIfNoSanityWriteCreds(projectId, token, 'patch-aagf-legal-pages')

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  for (const page of PAGES) {
    const doc = await client.fetch(`*[_type == "legalPage" && slug.current == $slug][0]._id`, {
      slug: page.slug,
    })
    if (!doc) {
      console.warn(`No legalPage found for slug "${page.slug}" — skipping.`)
      continue
    }
    await client
      .patch(doc)
      .set({ title: page.title, content: page.content })
      .commit()
    console.log(`Patched legalPage ${page.slug} (${doc}).`)
    if (await tryPublishDraft(client, doc)) {
      console.log(`Published legalPage ${page.slug}.`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
