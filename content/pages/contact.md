---
template: ContactPage
slug: contact
title: Contact Page
featuredImage: https://ucarecdn.com/e22a858a-b420-47af-99f6-ed54b6860333/
subtitle: Drop us a line.
meta:
  description: This is a meta description.
  title: Contact Page

# TODO Remove these template currently breaks without them
address: '001 Info Hwy, USA' 
phone: 012 345 6789
email: example@example.com
locations:
  - lat: '-27.9654732'
    lng: '153.2432449'
    mapLink: ''
---

# We want to hear from you.

This is a project started by a small group. We don't have all the answers, and we're not interested in operating in a vacuum.

* **Are you someone in a marginalized community who has an example** of a type of abuse that you'd like us to speak to? We'd be thrilled to hear from you and to help you further education on this topic.
* **Do you feel like you've been wrongfully forwarded** to a resource on this site, or that it doesn't adequately capture some information? We're open to a dialog; we can't advocate if we refuse to educate. Bring a good faith willingness to engage and we'll work together to move things forward.
* **Do you want to spew rage at us for creating this site?** We suggest taking a deep breath and then counting to ten. You can write something if it makes you feel better, but we're not going to read that garbage.

# Dev Notes (TODO: Remove)

This form is setup to use Netlify's form handling:

- the form action is set to the current absolute url: `action: '/contact/'`
- a name attribute is sent with the form's data `'form-name': 'Contact'`
- netlify data attributes are added to the form `data-netlify data-netlify-honeypot`

Find out more in the [Netlify Docs](https://www.netlify.com/docs/form-handling/).
