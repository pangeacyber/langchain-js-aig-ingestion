Secure by Design is a set of principles and approaches, rapidly gaining public interest, promoted by a large international coalition of respected government agencies. There are large benefits to this for software developing organizations, developers, and users. This article introduces Secure by Design and describes its importance.
Secure by Design
Software is _Secure by Design_ if security was considered from the very beginning of its development process and security was appropriately implemented at every stage of the product development lifecycle. This includes recognizing the security risks that are specifically relevant to the software, devising approaches to address those risks, and following security best practices. It is also important to keep the end user of the product secure – to consider and address their security needs.
Applying the Secure-by-Design concept to an app establishes a robust security posture, helping prevent and mitigate cyber vulnerabilities, threats, and risks. This [benefits the app’s developers and their organizations](#importance) and, importantly, the security of their customers and their customer’s data.
Secure by Design as a concept can also be applied to existing products through a series of changes, though it is harder to make fundamental architecture or implementation changes. While less ideal, it is still enormously valuable, especially for high-consequence cases.
Shifting the balance
The [US Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov/) (CISA) recognizes the power of having Secure by Design applied to software and knows the huge impact that security failures are currently having on individuals, businesses, governments, etc. In partnership with 18 governmental parties spanning several nations, CISA released a [white paper](https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf), “Shifting the Balance of Cybersecurity Risk: Principles and Approaches for Secure by Design Software”, in April 2023 (revised and expanded upon in October 2023).
Frequently, today’s software development has minimal focus on security due to the pressure of delivering applications and new features quickly. It is not surprising then that the use of software often leads to reduced security, with breaches occurring repeatedly and with customers repeatedly responding to breaches, applying patches, and trying to impose (to the extent they can) security on top of the software they use. Software rushed to delivery but with security issues incur future costs for the developing organization in the form of delivering security patches, security incident response, and (costly) breach mitigations.
CISA’s [“Shifting the Balance of Cybersecurity Risk”](https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf) white paper and associated [“Secure by Design” web content](https://www.cisa.gov/securebydesign) are advocating for shifting away from this “vulnerable by design” reality. The authors want software manufacturers (software developing organizations) to:

- Take ownership of the security outcomes of their customers’ use of their products.
- Recognize that there are business advantages to adopting the proactive Secure-by-Design stance. They further believe security should be a core business goal of software developing organizations and not just a product technical feature, establishing that business goal before development starts. To be effective and sustainable this needs to be led by the organization’s senior leadership.
- Only ship products that are Secure by Design to customers.
- Embrace being “radically transparent” regarding their security efforts and findings. Transparency demonstrates pride in their security efforts. Increased information sharing helps uplevel the industry and helps their customers respond to vulnerabilities.
  Following Secure by Design shifts much of the burden of staying secure to the software developing organization. It yields more secure software and reduces the chance of customers falling victim to vulnerabilities, being less secure due to misconfigurations, being vulnerable due to slow patching, and so on.
  This is sharply different from the current typical state of software development and delivery, but the authors see it compellingly as in everyone’s best interest. This idea is gaining traction. We applaud this effort. A major change to where security is focused and an increased application of security techniques is required to make a tectonic shift away from this present state of security.
  Elements of secure software
  The white paper identifies three high-level facets of secure software:

1.  Application security hardening
2.  Application security features
3.  Secure default settings
    Application hardening bakes security into the application and makes it more challenging for attackers to compromise it. Hardening steps include using memory-safe programming languages (precluding certain classes of exploitable vulnerabilities), carefully handling user inputs, safely storing and using its security keys, and following the organization’s software development life cycle (SDLC) rigorously.
    Adding certain application features enhances customer security. Examples include:

- Employing robust [user authentication](/securebydesign/authn-intro/)
- Supporting strict authorization checks (narrowly and appropriately restricting what each user can do)
- Fully employing security [audit logging](/securebydesign/secure-audit-logging-overview/)
- Protecting data at rest and in transit using encryption
- Augmenting risk-informed decision-making with intelligence about a remote party the application is interacting with (e.g., deciding to not accept logins from IPs associated with malicious activity)
  Secure by default is a manifestation of being Secure by Design. It means that products are configured to be as secure as possible out of the box, without requiring users or admins to make any additional configuration changes. Secure by default products automatically enable essential security features, such as strong authentication and encryption, and do not enable settings that lead to reduced security.
  Context around “Shifting the Balance”
  There had been past work on making software more secure and past initiatives to move the consideration of security earlier in the software development cycle\[[1](https://www.microsoft.com/en-us/securityengineering/sdl/),[2](https://owasp.org/about/),[3](https://www.nist.gov/itl/ssd/software-quality-group/source-code-security-analysis)]. “Shifting the Balance” packages and promotes a vision of a far-left shift in the incorporation of security and a future state where developing organizations, from top leadership on down, see customer’s security (as it relates to their software) as their responsibility.
  The [white paper](https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf) urges software consumers to prioritize Secure-by-Design software (creating “secure by demand” momentum). Thus, some people expect future standard certifications showing that software manufacturers follow the Secure-by-Design approach for their software. Those could be separate certifications or added to existing compliance standards. Currently, [SOC2](https://en.wikipedia.org/wiki/System_and_Organization_Controls) and some other standards lack Secure-by-Design mandates, may allow incomplete company policies relative to evolving threats, and offer limited assurances about certified company software security.
  Secure by Design compared to the typical current approach
  Summarized at a high level are the differences between Secure by Design and the current typical approach to software development in Figure 1 below.

While nothing can prevent all software security vulnerabilities, there will be fewer\[[4](https://www.cisa.gov/sites/default/files/2023-06/principles_approaches_for_security-by-design-default_508c.pdf)] with Secure by Design due to avoided vulnerabilities.
The importance of apps being Secure by Design
As indicated earlier, following Secure-by-Design principles has great value to an app’s customers and end users. It is also beneficial to apps, their developers, and their developing organizations since it prevents problems, earns user trust, expands their possible user base, and improves their efficiency. We elaborate on the benefits of the approach in [“The Developer’s Case for Secure by Design”](/securebydesign/sbd-why-care/).
Some benefits of Secure by Design and risks from current typical approach are summarized in Figure 2:

Implementing Secure by Design
Even after reading the white paper, app developers will need more information about how to make their apps Secure by Design. They need to fully understand what to consider and act upon, as well as be aware of what is available to help them achieve this. That is why [Pangea](/) created the [Secure by Design Education Hub](/securebydesign/), which this article is the lead article on, as a free resource for the community. We want all apps to be secure and hope that our investment in these articles will make a difference, whether you are a Pangea user or not.
Our [“Developing Secure by Design Apps: A comprehensive view” article](/securebydesign/sbd-how/) orients you towards the broad set of practices that feed into being Secure by Design and [“A Taxonomy of Practices for Secure by Design Apps”](/securebydesign/sbd-how-taxonomy/) presents the practices in a structured manner.