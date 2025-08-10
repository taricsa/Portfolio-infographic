export default function Instructions() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Instructions: How to customize your Professional Infographic</h1>
      <p className="text-white/80">
        Edit the JSON files in the <code>data/</code> folder. Each section below links to the relevant file and provides guidance.
      </p>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Career Goal (Candidate–Market Fit)</h2>
        <p className="text-white/80">
          Use the CMF guidance: pick a specific role + level, domain, company type, stage/size, and one cultural attribute.
          People can expand from narrow statements but rarely reduce from broad ones. Keep it focused and test it with your network.
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Examples: “Director of Product in HealthTech, Series B/C, mission‑driven”</li>
          <li>Bad: “People‑centric role with cross‑functional responsibility”</li>
        </ul>
        <p className="text-sm text-white/60">Edit: <code>data/site.json</code> → <code>careerGoal</code></p>
      </section>

      <nav className="text-sm text-white/80">
        <ul className="flex flex-wrap gap-3">
          <li><a className="underline underline-offset-2 hover:text-white" href="#two-pager">Mnookin Two‑Pager</a></li>
        </ul>
      </nav>

      <section id="two-pager" className="space-y-4">
        <h2 className="text-2xl font-semibold">Mnookin Two‑Pager Template and Examples</h2>
        <p className="text-white/80">Supplement to Never Search Alone by Phyl Terry. This helps you draft: loves/hates, must‑nots, must‑haves, strengths/weaknesses, and career goals. Treat it as a draft and iterate during your Listening Tour.</p>

        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Suggestions for use</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6">{`
Don’t let the perfect be the enemy of the good. JUST START!
Spend 15–30 minutes listing loves & hates → call it a draft.
Share the draft with your JSC for feedback; iterate.
Transform loves/hates into draft must‑haves and must‑nots.
Share, update, and start your Listening Tour. Share highlights verbally; avoid mass emailing the doc.
Update after each meeting; when changes slow, you’re converging on CMF.
Keep momentum; lean on your JSC throughout.
`}</pre>
          </div>
        </details>

        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Your Two‑Pager: sections & exercises</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6">{`
Four sections
1) What you love and hate doing
2) Your must‑nots
3) Your must‑haves
4) Your strengths and weaknesses
5) Your career goals (short‑term and long‑term)

Exercise (1): Love/Hate
• Pair with a JSC partner; interview each other about what you hate (jobs, industries, functions, work patterns). Partner takes notes.
• Review your list; add anything missing.
• Invert to Love: flip each hate into a positive (e.g., hate frequent travel → love low‑travel roles). Be honest: inverse might be “fine” not “love”.

Exercise (2): Must‑Nots
• Pair with a different JSC partner; interview each other about what you don’t want (e.g., micromanagement, >10 directs, etc.).
• Use the “bad bosses” prompt if stuck.
• Review lists together; inverting the negative often surfaces clarity.

Exercise (3): Must‑Haves
• With same partner from #2, review Must‑Nots and invert to candidate Must‑Haves.
• Separately refine; then present to partner for discussion and edits.

Exercise (4): Strengths & Weaknesses
• List what you are particularly good at (even if you don’t love it) and where you are weak or want to improve.

Exercise (5): Career Goals
• From the above, write your short‑term goal (next role) and long‑term goal (eventual path). It’s a draft—your Listening Tour will refine it.
`}</pre>
          </div>
        </details>

        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Templates</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6">{`
Option A (unstructured): narrative bullet lists for each section.

Option B (tabular prompts):
• What I hate doing
• What I love doing (mark which are strengths)
• My must‑nots
• My must‑haves
• Career goals: Short term
• Career goals: Long term
`}</pre>
          </div>
        </details>

        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Examples (long form)</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6">{`
The following are excerpted, anonymized examples across roles (IC → exec). Use them for inspiration only; keep your own two‑pager specific.

Individual Contributor — Product Manager (long reflective draft)
• Strengths (vision, discovery, learning, org builder) with quotes from managers
• Areas struggled (e.g., product‑market fit, delivery/process)
• Must‑haves (resources, scale, learning leader, mission, product culture)

Product/Content Marketing Manager — snapshot
• Love/Hate lists; Must‑haves/Must‑nots; Career goals

Manager/Director — Director/VP of Product
• Behavioral profiles; Love/Hate; Must‑haves/Must‑nots; Warning signs; CMF

IT Program Manager — culture‑heavy two‑pager
• Love: process optimization, team support, reducing waste
• Must‑haves: support from above, good communication, work‑life balance

Community Manager — VIA strengths + two‑pager
• Short/Long‑term goals; Love/Hate; Must‑haves/Must‑nots; strengths inventory

VP/GM/SVP — deeply specified Must‑haves/Must‑nots and “What I do/How I do it”
• Emphasis on empowered teams, product/design thinking, data, customer focus

EVP, Client Services — pivot from agency to B2C leadership
• Career goals; Love/Good at; Hate/Bad at; robust Must‑haves/Must‑nots

CEO — Consumer Internet
• Goals include personal constraints; Love/Hate; CEO‑level Must‑haves/Must‑nots
`}</pre>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Who I Am</h2>
        <p className="text-white/80">Write a 2–3 sentence summary highlighting craft, scope/level, and measurable impact.</p>
        <p className="text-sm text-white/60">Edit: <code>data/resume-context.json</code> → <code>summary</code></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Core Strengths</h2>
        <p className="text-white/80">Add 2–6 strengths. Make titles concise; use descriptions to show how they drive outcomes.</p>
        <p className="text-sm text-white/60">Edit: <code>data/strengths.json</code></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Proven Impact (KPIs)</h2>
        <p className="text-white/80">Show objective metrics (%, growth, revenue, users). Add a short label and optional note for context.</p>
        <p className="text-sm text-white/60">Edit: <code>data/metrics.json</code></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Ideal Industry Focus</h2>
        <p className="text-white/80">Pick 2–4 industries aligned with your CMF. Explain your impact thesis in one sentence each.</p>
        <p className="text-sm text-white/60">Edit: <code>data/industries.json</code></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">The Culture I Want to Build</h2>
        <p className="text-white/80">List 4–6 must‑haves and 4–6 must‑nots. Keep them succinct and opinionated.</p>
        <p className="text-sm text-white/60">Edit: <code>data/values.json</code></p>
      </section>

      <nav className="text-sm text-white/80">
        <ul className="flex flex-wrap gap-3">
          <li><a className="underline underline-offset-2 hover:text-white" href="#why">Why CMF</a></li>
          <li><a className="underline underline-offset-2 hover:text-white" href="#examples">Examples</a></li>
          <li><a className="underline underline-offset-2 hover:text-white" href="#worksheet">Worksheet</a></li>
        </ul>
      </nav>

      <section id="why" className="space-y-2">
        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Why Candidate–Market Fit (CMF)?</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6 text-white/80">{`
Candidate-Market Fit Template and Examples
Supplement to the book Never Search Alone
By Phyl Terry
All Rights Reserved


One of the most important yet difficult things you are going to do in the Never Search Alone process is craft your Candidate-Market Fit Statement. 

All of your Listening Tour conversations are aimed at helping you to eventually craft a narrow, focused CMF.

The crafting will be difficult, not because it’s a complicated process, but because every electron in your body will scream that you need to stay open to all sorts of options rather than narrow down to a focused clear statement. 

Here’s a key insight behind this recommendation: people can be expansive (i.e., move broadly up from a focused statement), but have real trouble being reductive (i.e., they have trouble narrowing down from a broad statement). 

In other words, people are reductive but not expansive.

Phyl 



Table of Contents

Table of Contents	2
Why? One Key Reason: Reductive but not expansive	3
Read/Watch	3
Examples of Effective Candidate-Market Fit Statements	4
Examples of Ineffective Candidate-Market Fit Statements	4
Before and After Candidate-Market Fit Statement	5
Paired Candidate-Market Fit Exercise	5
Candidate-Market Fit worksheet	6
Think about, get feedback on, and iterate your CMF.	6
Examples of Effective CMF Statements	7
     Individual Contributor	7
Entry-level engineer	7
Product Manager	7
Project manager	7
UX/Product Designer	7
     Manager + Director	8
Program Manager	8
Director of Content Design	8
Director/VP of Product	8
     VP, GM, SVP, C-Suite	8
VP, Product Strategy & Operations	8
VP, Marketing	8
VP, Marketing	8
CTO/VP, Engineering	8
Chief Product Officer	8
Examples of Ineffective or “Too Broad” CMF Statements	9


Why Effective Candidate-Market Fit Statements Help?

Bring more, not less, offers
Turn your whole network into “Listening Posts”
Why? One Key Reason: Reductive but not expansive 

Recruiters, people in your network, hiring managers, and just about every single human being who might help you can expand from a narrow statement, but they can not narrow from an expansive statement 


If you create a generic or too-broad Candidate-Market Fit (CMF), your network won’t know what to do with it, which means you’ll get less referrals, less interviews, and less offers.


Hiring managers are less likely to see you as a good fit.


Recruiters won't think of you for a job.

if you say ‘I can do a number of different roles,’ no one knows what to do to help you or to match you to a role they are trying to fill.

Ironically, however, if you focus on a very specific and clear niche, then all of the above can make the leap from that to other adjacent possibilities. 
Read/Watch

Never Search Alone
Re-read chapter 10 


Videos
Watch this interview with “Anonymous Alan” beginning at about minute 8:30 – he talks eloquently about “expansive vs. reductive” from his own job search experience


Watch this in-depth interview with two different job seekers – and how they found their too-broad statements to be useless (and how once they narrowed down, found people could be “expansive”)


`}</pre>
          </div>
        </details>
      </section>

      <section id="examples" className="space-y-2">
        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Examples (Effective and Ineffective)</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6 text-white/80">{`
Examples of Effective Candidate-Market Fit Statements
The more constrained your CMF the more roles you will find and be approached about–including roles that are adjacent to the specific role you identified in your CMF. 

You are NOT reducing your opportunities by focusing. It’s the other way around.

I’m looking for a director of product role in a healthcare startup in B or C stage. 
I want a group product manager role in a large tech company focused on consumer applications.
More examples using a simple CMF template:

Role and level 
Company domain or focus
Company type
Company stage or size
One Cultural Attribute
CPO
Healthcare tech
Startup
B or C stage
Mission-driven
Senior Product Manager
Healthcare tech
Growth
500+ employees
Empowered Teams approach
Group Product Manager
Healthcare technology for children
Enterprise
Fortune 1000
Customer-obsessed
Product Manager
Blockchain or Web3 B2C apps
Startup
Seed or series A
Roll-up-your-
sleevesteam
Chief Data Officer
Financial Services
Enterprise
Fortune 500
Data-based decision making
Program Manager
Nonprofit
Large
$250M+ operating budget
Decentralized decision-making
Entry-level consultant
Healthcare
Boutique consultancy
~50 consultants
Focused on developing talent


Examples of Ineffective Candidate-Market Fit Statements
CMF: “I want to work in a people-centric organization where I have cross-functional responsibility.”

Why it’s ineffective:
WAY too generic and i don’t know what to do with that
What jobs would you refer to this?
Yes there are multiple things you can do.
Before and After Candidate-Market Fit Statement 

Example 1: Anonymous “Paige” from this video

Before: Generic/Too-Broad
Seeking a leadership role at a mission-driven company where responsibilities include driving revenue growth and/or directing client success strategy. Examples: Scaling and building client partnerships: onboarding, enablement, & operations Sales leadership: team building, performance optimization, & manager development Cross-functional program/product execution, stakeholder engagement, and implementation

After: Much more focused
Seeking a leadership role at a mission-driven edtech company – later than early stage – directing strategic client accounts or partnerships

Example 2: VP of Product

Before: Generic/Too-Broad
Find a Senior Product role in leadership, strategy, and operations, driving substantive growth and innovation in product and technology, customer experience, design, and data science in a rapid growth environment, with a strong focus on customers, outcomes, people, and culture.

After: Much more focused
Find a VP of Product role in a series D start-up or rapid growth mid sized corp focusing on data monetization and SaaS solutions.

Paired Candidate-Market Fit Exercise 

Pair up to write your CMF(s).
Partner with a member of your JSC.
Schedule time to work on both of your CMFs. I recommend at least an hour, and often more.
Focus on one of you at a time:
Review your Listening Tour insights, especially advice on the right level for you at this point in your career, the company sizes that make the most sense for your skill level, and where your focus is currently (e.g, ‘take the next step in my current path’ vs ‘switch industries, which might mean taking a lower-level role.’)
Have your partner create the first drafts of your CMF statement(s) using the template below. 
Create several options for your CMF. Each should be very specific. Even if you feel like there are lots of things you can do, you’ll see that the list isn’t actually endless. 

Candidate-Market Fit worksheet
I’m looking for a:
Role and level
Company domain or focus
Company type
Company stage or size 
One Cultural Attribute





My Final Candidate-Market Fit Statement


 

Think about, get feedback on, and iterate your CMF.
Don’t try to finalize your CMF immediately. After your working session with your JSC partner, give yourself a week to mentally try the variations on for size, review them with key people, and fine-tune one or two of them. The right CMF for you will become clear pretty quickly. 

Getting feedback on your CMF
Show your CMF to your council and to your trusted advisors:
Is it specific enough?
Is it consistent with what you learned from your listening tour?
Are there opportunities in these types of companies? 
Is this the right level for you? 
Does this niche make sense for you? 
How hard is it to break into this niche/company type?

Troubleshooting your CMF
Does your statement reflect the intersection of your strengths, what you want, and what you learned in your Listening Tour about your market fit? For example, if you are planning to switch specialties or industries, you probably need to take a step down in title. 
Does this statement convey “I can do more than one thing”? If so, it’s not specific enough.
Does this statement convey “I can absolutely nail something specific.” Can you imagine someone reading your CMF and saying ‘“This is exactly who I need!” If so, good job!
Is the role or focus relatively new or unusual in the world of work or for you? Just because you want to be in charge of Employee Happiness doesn’t mean that Employee Happiness roles exist, or, if they do, that you are considered qualified for them.
Does this statement match up with the way companies describe roles? Remember, you are trying to fit your skills to the market. It’s critical you express where you fit in using the language of the market you’re targeting.
And, finally, is the best focus given market conditions and your strengths?

		Examples of Effective CMF Statements
Individual Contributor
Entry-level engineer
I'm seeking a junior or associate software engineering role in an edTech startup (Series A-C) with a collaborative engineering team.

Product Manager
Seeking an Ops-centric Product Management role in the restaurant tech industry with a minimum of 500 employees.
Project manager
Seeking a senior project management role focusing on business transformation initiatives at a mission driven, innovative private sector manufacturing company with 500+ employees. 
UX/Product Designer
Find a Junior UX/Product Design position in a Fin-Tech B2C company (Series C or later) with 100+ employees.
Manager + Director
Program Manager
Seeking a senior level Program Manager role in operations (ideally CS or CX) at a customer-obsessed IT/Tech company with a fail-fast, collaborative culture with 100+ employees.
Director of Content Design
Find a Director or Head of position to lead content design for a large-enterprise tech company with an established content design team that is looking to scale the practice.
Director/VP of Product
Find a Senior Director or VP of Product role in an earlier-stage (no more than 150-200 employees, seed to series B-ish) consumer-oriented or multi-sided digital product company that has a compelling premise and good growth trajectory.
VP, GM, SVP, C-Suite
VP, Product Strategy & Operations
Find a VP of Product Strategy & Operations role in a customer-obsessed, growth stage fintech company looking to scale.
VP, Marketing
Looking for a VP of Marketing role in a tech focused B2B, SaaS focused early-stage startup (A-C stage) where I’m responsible for building the marketing function and the marketing team.
VP, Marketing
Seeking a VP of Marketing role with a financially viable growth stage private organization within the consumer goods vertical.
CTO/VP, Engineering
Find a Chief Technology Officer, VP of Software Engineering, or Head of Engineering role in a Series B+ or privately-funded company in the healthcare space. 
Chief Product Officer
Find a Chief Product Officer role with a strategy-driven, venture-backed series A+ company in a B2B/B2E technology market looking to accelerate growth.

Examples of Ineffective or “Too Broad” CMF Statements

Marketing, Event Strategy, or Partnerships
Targeting a full-time role in Marketing, Event Strategy, or Partnerships at a mission-driven Series B+ or privately-funded company in sustainability, education, or women’s & children’s wellness.
Issues: Doesn’t include the level of role being sought, or the size of the company, and is targeting several very different areas (marketing, event strategy, or partnerships) instead of one focused area. 

Marketing Copywriter
Find a full-time Marketing Copywriter and/or Content Marketing Strategist role in a mid- to large-sized organization with a remote-first or hybrid environment where I can utilize both my creative writing and technical skills (SEO, email marketing, etc.) in a content strategy role.
Issues: This is still too broad because it includes two different roles and two different size companies. Also, it doesn’t specify the industry or the culture of the organization.

Director of Marketing
Find a Director of Marketing, or Director of Product Marketing position in a Cybersecurity company that can leverage my marketing expertise to drive a full marketing funnel strategy and spearhead collaboration between all cross-functioning teams.
Issues: This is good and more specific than the examples above. And while marketing and product marketing are cousins, they are different jobs. Pick one. Remember your network, hiring managers and recruiters want specificity.  Further, it doesn’t include size or stage of company or mention any desired attribute of the company culture.  

Analyst
Seeking an entry-level opportunity as a Cyber Security Analyst where I can utilize my problem-solving, analytical, and critical thinking skills to be able to perform processes, walkthroughs, control testing, and analyze operating systems to detect vulnerabilities. Seeking an opportunity with an organization with growth and advancement potential.
Issues: This is better. They are looking for one clear role. Two issues: 1) it’s too wordy and 2) it doesn’t include the size, stage, or industry for the company. 
`}</pre>
          </div>
        </details>
      </section>

      <section id="worksheet" className="space-y-2">
        <details className="group rounded-xl border border-white/10 bg-white/5 p-4">
          <summary className="cursor-pointer list-none text-lg font-semibold">Worksheet + Iterate Your CMF</summary>
          <div className="mt-3 text-sm text-white/80">
            <pre className="whitespace-pre-wrap leading-6 text-white/80">{`
Paired Candidate-Market Fit Exercise 

Pair up to write your CMF(s).
Partner with a member of your JSC.
Schedule time to work on both of your CMFs. I recommend at least an hour, and often more.
Focus on one of you at a time:
Review your Listening Tour insights, especially advice on the right level for you at this point in your career, the company sizes that make the most sense for your skill level, and where your focus is currently (e.g, ‘take the next step in my current path’ vs ‘switch industries, which might mean taking a lower-level role.’)
Have your partner create the first drafts of your CMF statement(s) using the template below. 
Create several options for your CMF. Each should be very specific. Even if you feel like there are lots of things you can do, you’ll see that the list isn’t actually endless. 

Candidate-Market Fit worksheet
I’m looking for a:
Role and level
Company domain or focus
Company type
Company stage or size 
One Cultural Attribute





My Final Candidate-Market Fit Statement


 

Think about, get feedback on, and iterate your CMF.
Don’t try to finalize your CMF immediately. After your working session with your JSC partner, give yourself a week to mentally try the variations on for size, review them with key people, and fine-tune one or two of them. The right CMF for you will become clear pretty quickly. 

Getting feedback on your CMF
Show your CMF to your council and to your trusted advisors:
Is it specific enough?
Is it consistent with what you learned from your listening tour?
Are there opportunities in these types of companies? 
Is this the right level for you? 
Does this niche make sense for you? 
How hard is it to break into this niche/company type?

Troubleshooting your CMF
Does your statement reflect the intersection of your strengths, what you want, and what you learned in your Listening Tour about your market fit? For example, if you are planning to switch specialties or industries, you probably need to take a step down in title. 
Does this statement convey “I can do more than one thing”? If so, it’s not specific enough.
Does this statement convey “I can absolutely nail something specific.” Can you imagine someone reading your CMF and saying ‘“This is exactly who I need!” If so, good job!
Is the role or focus relatively new or unusual in the world of work or for you? Just because you want to be in charge of Employee Happiness doesn’t mean that Employee Happiness roles exist, or, if they do, that you are considered qualified for them.
Does this statement match up with the way companies describe roles? Remember, you are trying to fit your skills to the market. It’s critical you express where you fit in using the language of the market you’re targeting.
And, finally, is the best focus given market conditions and your strengths?
`}</pre>
          </div>
        </details>
      </section>
    </main>
  )
}


