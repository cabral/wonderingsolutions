---
title: The Agentic Development Dojo playbook
date: 2026-10-06
summary: How to run a coding dojo where developers practise building software with AI agents, which agile practices survive, and eleven katas to start with.
toc: true
image: /og/agentic-development-dojo.png
imageAlt: "Wondering Solutions note: The Agentic Development Dojo playbook. One round runs next step, predict, run, verify, commit or revert, rotate. Felipe Cabral, AI and data consultant in Stockholm."
---

## How to use this playbook

An Agentic Development Dojo is a three-hour evening where 6 to 12 developers practise building software with a coding agent on one shared screen. Two people at a time steer the agent while the rest of the room predicts what it will do and checks what it did. The agent does the typing; people decide what to build, own the tests, verify every claim the agent makes and choose whether its work stays or gets thrown away. Nobody competes and nothing ships.

I wrote this playbook for two kinds of reader: people who want to run a dojo in their company or community, and people deciding whether one is worth their team's time.

| You are | Read first | Then |
| --- | --- | --- |
| Running a dojo | [What the dojo looks like](#what-the-dojo-looks-like) and [the dojo night](#the-dojo-night-minute-by-minute) | [Kata catalogue](#kata-catalogue), [practical setup](#practical-setup) and [checklists and templates](#checklists-and-templates) |
| Deciding whether a dojo is worth your team's time | [Why a dojo](#why-a-dojo-for-agentic-development) | [What practitioners say](#what-practitioners-say) and [the audit](#the-audit-which-agile-practices-survive) |

The practices work with any coding agent that can edit files, run commands and follow a project instructions file. When a dojo night teaches something new, it goes back in here.

## Why a dojo for agentic development

Coding agents multiply the skill of whoever steers them, and most developers have never practised that steering on purpose. A dojo gives people a safe, repeated place to build the skill before a client project depends on it.

[Geoffrey Huntley](https://ghuntley.com/mirrors) describes LLMs as mirrors of operator skill. The research from the past year points the same way:

- [DORA's 2025 research](https://cloud.google.com/blog/products/ai-machine-learning/from-adoption-to-impact-putting-the-dora-ai-capabilities-model-to-work/) calls AI an amplifier: it magnifies the strengths of high-performing teams and the dysfunctions of struggling ones. Small batches and strong version control, meaning frequent commits and easy rollback, are among the capabilities that decide which way it goes.
- [METR's early-2025 trial](https://metr.org/blog/2026-02-24-uplift-update/) found that tasks took experienced open-source developers 19% longer when AI was allowed. The February 2026 follow-up believes developers are faster now but can't say by how much, and self-reported speedups had already proved unreliable.
- [Anthropic's January 2026 trial](https://www.anthropic.com/research/AI-assistance-coding-skills) with 52 mostly junior developers found the AI group scored 17% lower on a comprehension quiz, with the widest gap in debugging. People who used AI to ask for explanations scored well; people who handed it the whole task scored lowest.

In February 2026, 25 years after the Agile Manifesto, Thoughtworks hosted the [Future of Software Development retreat](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development) in Utah. Participants named the work between writing code and releasing it: directing agents, evaluating their output, calibrating trust, encoding standards and setting constraints.

They called it supervisory engineering, a new middle loop. Many leaned on Chad Fowler's framing: if we stop caring about the code, the rigour has to move somewhere else. This dojo trains that middle loop.

The dojo format itself is twenty years old. Laurent Bossavit and Emmanuel Gaillot started the [Paris Coding Dojo](https://codingdojo.org/dojo/ParisDojo/) in December 2004 and presented it at XP2005. They described it as a place where programmers have fun and do deliberate practice.

In São Paulo, Danilo Sato, Hugo Corbucci and Mariana Bravo described the dojo as [an environment for learning and sharing agile practices](https://doi.org/10.1109/Agile.2008.11) at Agile 2008.

The agentic version keeps what made those dojos work: a safe room, baby steps, practice in public, rotation and a retrospective. The agent now holds the keyboard, so the practice moves to the decisions around it: what to ask for, how to check the result and when to throw it away.

## What practitioners say

The people who shaped agile and craftsmanship agree that agents need rigour around them, and they split on whether that rigour still includes reading the code. The table runs from those who read every line to those who never do.

| Who | On reading agent code | What they rely on |
| --- | --- | --- |
| [Mitchell Hashimoto](https://m.huxiu.com/article/4879038.html) | Reads it, and said so in July 2026: "I read the code". | [Harness engineering](https://mitchellh.com/writing/my-ai-adoption-journey): each agent mistake becomes an AGENTS.md line or a tool, so it doesn't happen again. |
| [Grady Booch](https://startupfortune.com/uncle-bob-martin-says-he-no-longer-reads-ai-generated-code-and-the-developer-world-is-split/) | Reviews all the code his agents generate. | Experience: metrics say nothing about vulnerabilities, dead code or missed factorings. |
| [Kent Beck](https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes) | Cares about the code, its complexity, the tests and their coverage, and calls this augmented coding. | TDD and Tidy First in the agent's instructions; watching for loops, unrequested features and deleted tests. |
| [Andrej Karpathy](https://the-decoder.com/former-tesla-ai-chief-andrej-karpathy-now-codes-mostly-in-english-just-three-months-after-calling-ai-agents-useless/) | Watches agents very closely on any code that matters. | Expecting subtle conceptual mistakes, unchecked assumptions, too little pushback, bloated abstractions and dead code. |
| [Martin Fowler](https://martinfowler.com/articles/202508-ai-thoughts.html) | Wants people to understand what the LLM wrote, for example by [asking it to explain](https://www.martinfowler.com/fragments/2026-02-09.html) complex code. | Running the tests himself, because LLMs report all green when tests fail. |
| [Birgitta Böckeler](https://martinfowler.com/articles/harness-engineering.html) | A harness should direct human input to where it matters most. | Guides such as AGENTS.md before the agent acts; sensors such as tests and linters after. |
| [Simon Willison](https://simonwillison.net/2025/Dec/18/code-proven-to-work/) | Deliver code you have proven to work; the human carries the accountability. | Manual testing plus an automated test that fails if the change is reverted. |
| [DHH](https://dealroom.co/news/talk-vDjW_dRyKXY-pencils-down-dhh-declares-the-end-of-hand-written-code) | 37signals no longer writes code by hand, and he says Rust is great as long as you never have to look at it. | Agents by default, plus the Basecamp 5 lesson: vibe-coded features left the architecture "like Swiss cheese". |
| [Robert C. Martin](https://startupfortune.com/uncle-bob-martin-says-he-no-longer-reads-ai-generated-code-and-the-developer-world-is-split/) | Doesn't read the code his agents write, but [checks the acceptance tests and QA procedures himself](https://m.huxiu.com/article/4879038.html). | Unit and Gherkin acceptance tests, mutation testing, coverage, and strict limits on function length and complexity. |
| [StrongDM](https://simonwillison.net/2026/Feb/7/software-factory/) | Code is neither written nor reviewed by humans. | End-to-end scenarios kept outside the codebase like a holdout set, and behavioural clones of the services they depend on. |
| [OpenAI's harness team](https://openai.com/index/harness-engineering/) | No manually typed code, used as a forcing function. | Custom linters, structural tests and recurring drift scans; their hardest problems are environments, feedback loops and control systems. |

Nobody in this table skips verification. They disagree about where it lives: in a person reading the diff, or in gates strong enough that reading adds little.

The teams that stopped reading built their gates first. Robert C. Martin relies on mutation testing and acceptance tests that most teams don't have, and StrongDM built scenario suites and service clones before dropping review. Martin also argues that code quality matters more now, because messy code slows agents as much as people.

The position this playbook takes: people learn to build the gates, and they read the code until the gates have earned their trust. Cindy Sridharan's bar is a good one to hold: if you can't debug the code, you can't claim to own it. Every kata makes that trade visible, so attendees learn when reading is still the cheapest check.

### Also worth following

- [Emily Bache](http://blog.jetbrains.com/idea/2026/05/java-annotated-monthly-may-2026/) wrote The Coding Dojo Handbook, founded the Samman Technical Coaching Society and now writes about coding agents and TDD.
- Llewellyn Falco's [strong-style pairing](https://slides.code-maven.com/python-pair-programming-and-tdd-workshop/strong-style-pairing-navigator.html) asks the navigator to speak at the highest level of abstraction the driver can handle. It is good advice for instructing an agent.
- The [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns/pattern-catalog/) catalogue collects patterns, anti-patterns and obstacles from people who work with agents daily. Its names are useful in retrospectives.
- [Geoffrey Huntley](https://ghuntley.com/bio), creator of the Ralph Wiggum loop, argues that decades of human-centred engineering practice should give way to the new compute model. Read him as the case against this playbook.
- [Dan Shapiro's five levels](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/), from spicy autocomplete to the dark factory, help a team say where it is and where it wants to go.

## The audit: which agile practices survive

Most of the agile canon survives agents, and the practices that produce fast, honest feedback matter more than before. What fades is the manual craft of typing code; what grows is the craft of specifying, checking and deciding.

Amplified means the practice matters more with agents, in the same shape. Transformed means it survives with a new shape or a new owner. Weakened means still useful but much less central, and retired means agents made it unnecessary for most work.

| Practice | Origin | Verdict | What it becomes with agents | Trained in |
| --- | --- | --- | --- | --- |
| Test-driven development | XP | Amplified | People write or approve the failing test and the agent makes it pass. Tests become the spec and the cheating detector. | Red Before Green |
| Small releases and baby steps | XP, Lean | Amplified | One behaviour per agent run. Small diffs get reviewed; large ones get waved through. | Every kata |
| Continuous integration | XP | Amplified | Fast tests, linters and type checks become sensors the agent runs on itself. | Write the AGENTS.md |
| Refactoring | XP, Martin Fowler | Transformed | Agents refactor cheaply, behind green tests, with structure and behaviour in separate commits. | Gilded Rose: Tidy First |
| Simple design and YAGNI | XP | Amplified | Agents add features and abstractions nobody asked for, so YAGNI becomes a review check and an instruction. | Red Before Green |
| Pair programming | XP | Transformed | Two people steer one agent: the Navigator states intent, the Verifier checks claims. | Every round |
| Collective code ownership | XP | Transformed | Collective accountability for code nobody typed, because the agent can't be held accountable. | Retrospective |
| Coding standards | XP | Transformed | Formatters, linters and structural tests. AGENTS.md keeps only what tools can't check. | Write the AGENTS.md |
| System metaphor | XP | Transformed | Returns as the short system description every fresh agent session reads. | Write the AGENTS.md |
| Planning game and user stories | XP | Transformed | Small specs and plans the agent executes. People decide the slicing and review the plan before code. | Fare Rules |
| On-site customer | XP | Amplified | Someone has to answer the questions agents don't ask. | Fare Rules |
| Spike solutions | XP | Amplified | Spikes now cost minutes. The discipline is deleting them. | Spike and Delete |
| Sustainable pace | XP | Amplified | Agents invite overwork, so timeboxes and breaks are part of the format. | The night's structure |
| Root cause analysis | XP, Lean | Transformed | Each repeated agent mistake gets a fix in the harness: a new rule or a new check. | Retrospective |
| Given/When/Then scenarios | BDD | Amplified | Scenarios feed the agent and judge its work. Hidden ones double as holdout tests. | Fare Rules |
| Example mapping and three amigos | BDD | Amplified | Surfaces rules and open questions before the agent invents answers. | Fare Rules |
| Outside-in development | BDD | Transformed | Start from an acceptance test the agent can't edit, then let it work inward. | Fare Rules |
| Ubiquitous language | DDD | Amplified | One vocabulary across specs, tests, code and instructions. Agents take words literally. | Fare Rules |
| Bounded contexts | DDD | Transformed | Context boundaries for agents: what each session needs to know, and no more. | Write the AGENTS.md |
| Clear names, small functions, single responsibility | Clean Code, SOLID | Transformed | The reader is often an agent with a limited context window, and messy code slows agents too. Size and complexity limits enforce it. | Gilded Rose: Tidy First |
| Don't repeat yourself | The Pragmatic Programmer | Amplified | Agents duplicate freely, so duplicate detection becomes a sensor. | Spot the Cheat |
| Line-by-line code review | Industry practice | Transformed | Review tests, diffs and risk hot spots, and read the code until the sensors earn trust. | Spot the Cheat |
| Deliberate practice | Software Craftsmanship | Amplified | Delegating without understanding stops learning, so practice has to be designed in. | The dojo itself |
| Apprenticeship and mentoring | Software Craftsmanship | Amplified | Juniors lose the small tasks they learned on. Rotation puts juniors and seniors on the same judgement calls. | Rotation |
| Professional accountability | Software Craftsmanship | Amplified | Deliver code you have proven to work. | Working agreement: Prove it |
| Characterisation tests | Michael Feathers | Amplified | Pin existing behaviour before an agent touches legacy code. | Gilded Rose: Tidy First |
| Mutation testing | Testing practice | Amplified | The check on tests nobody wrote by hand. Robert C. Martin uses it in place of reading code. | Kill the Mutants |
| Version control discipline | Continuous Delivery | Amplified | Commit on every green, and revert instead of repairing an agent's mess. | Every round |
| Trunk-based development and the pipeline | Continuous Delivery | Transformed | Parallel agents need separate worktrees and a pipeline as referee. | Parallel Worktrees |
| Syntax recall and typing speed | Everyday craft | Retired | The agent types. People still have to read what it typed. | Not trained |
| Katas as solution exercises | Coding dojo tradition | Weakened | Agents know the classic solutions, so the process becomes the exercise. | Every kata |

## Practices agents added

Ten practices have no real agile ancestor, and teams that skip them meet the same failures again and again. Most of them are trained directly in the katas.

| Practice | What it means | Trained in | Read more |
| --- | --- | --- | --- |
| Context engineering | Give the agent what it needs for the next step and nothing else. Keep instruction files short and start a fresh session for each task. | Write the AGENTS.md | [Birgitta Böckeler](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html), [Kent Beck](https://kentbeck.com/) |
| Harness engineering | Guides steer the agent before it acts, and sensors tell it when it went wrong. Each repeated mistake becomes a new guide or sensor. | Write the AGENTS.md, retrospective | [Birgitta Böckeler](https://martinfowler.com/articles/harness-engineering.html), [Mitchell Hashimoto](https://mitchellh.com/writing/my-ai-adoption-journey) |
| Plan before code | For vague work, run a planning session and review the plan before any code exists. A plan is cheaper to review than a diff. | Fare Rules, Reproduce Your Own Work | [Mitchell Hashimoto](https://mitchellh.com/writing/my-ai-adoption-journey) |
| Protected tests | The agent may propose tests, but it can't change approved tests while it implements. Enforce this with a hook or file permissions. | Red Before Green | [Kent Beck](https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes) |
| Holdout scenarios | Keep some acceptance scenarios where the agent can't see them and run them at the end. They catch code that only fits the visible tests. | Every kata | [StrongDM via Simon Willison](https://simonwillison.net/2026/Feb/7/software-factory/) |
| Explain-back | Before accepting a change, a person explains it in their own words, using the agent's walkthrough if needed. This keeps the learning that delegation removes. | Every round | [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills) |
| Sandboxing | Run the agent in a disposable container with fake secrets. Private data, untrusted content and a way to send data out together make an exfiltration path. | Untrusted Input | [Simon Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) |
| Spending caps | Agent sessions can cost real money within hours. Set a hard cap per person and per night. | Practical setup | [Simon Willison](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/) |
| Parallel agents | Run several agents only on slices that don't touch each other, each in its own git worktree, and let the pipeline decide what merges. | Parallel Worktrees | [Claude Code docs](https://code.claude.com/docs/en/worktrees) |
| Attention control | Turn agent notifications off and check on its work at natural breaks. Context switching is expensive, so the person decides when to look. | Parallel Worktrees | [Mitchell Hashimoto](https://mitchellh.com/writing/my-ai-adoption-journey) |

## What the dojo looks like

One screen, one coding agent and six to twelve people who take turns steering it in eight-minute rounds, while the rest of the room predicts and checks its work. Above twelve, run two groups side by side on two screens with two senseis, and share one retrospective.

### Working agreements

Read these aloud at the start of every night and keep them on the wall.

1. Nobody competes and nothing ships. Any attempt can be thrown away, and many should be.
2. People own the tests. The agent may propose tests, a person approves them, and the agent can't edit approved tests while it implements.
3. Predict before you run. Everyone writes down what they expect before the Navigator sends the instruction.
4. Prove it. A change stays only if its test fails without it, passes with it, and someone has seen it work.
5. Explain it back. The Verifier explains the diff in their own words before committing, and if they can't, we revert.
6. Commit on green, revert on doubt. When the agent makes a mess, fix the instruction and run again instead of patching its output by hand.
7. One behaviour per run. Structural and behavioural changes go in separate commits.
8. Every surprise earns a rule or a check. The retrospective turns the night's surprises into AGENTS.md lines or sensors.
9. The agent works in a sandbox with fake secrets, and no client code or data enters the room.

### Roles

| Role | Who | Does | Doesn't |
| --- | --- | --- | --- |
| Sensei | An experienced facilitator, outside the rotation | Chooses the kata, keeps the agreements, asks questions, holds the holdout scenarios, plays the customer | Touch the keyboard or solve the kata |
| Navigator | Rotates; was the Verifier last round | Names the next small behaviour and writes the instruction to the agent | Type production code by hand |
| Verifier | Rotates; joins from the room | Writes or approves the failing test, runs the checks, explains the diff, decides commit or revert | Accept a change they can't explain |
| Room | Everyone else | Writes predictions, discusses while the agent runs, suggests the next test when asked | Interrupt while the pair writes the test and the instruction |
| Timekeeper | A volunteer, swapped at the break | Runs the visible timer and calls each rotation | Stretch rounds without the sensei |
| Scribe | A volunteer | Logs predictions, surprises and candidate AGENTS.md rules | Edit the code |
| Host | The organiser | Venue, food, welcome, sponsor slot, machine and budget | Facilitate on the same night |

### The room and the machine

- One laptop drives a projector or large screen, with editor and terminal fonts at 18 pt or larger.
- The screen is split: the agent session on one side, the test runner and the diff on the other.
- The agent runs in a dev container built from the kata repository, with dojo-only credentials, a hard spending cap and fake secrets.
- The full test suite runs in under ten seconds. A slow suite kills the rhythm of the rounds.
- A timer the whole room can see, a whiteboard for the prediction tally and a column titled Rules to add.
- Prediction cards or sticky notes for everyone.

### The format: Agentic Randori

[Classic randori](https://web.cs.wpi.edu/~gpollice/Dojo.html) puts a pair at the keyboard and swaps one of them every five minutes while the group solves a kata test-first. The agentic version keeps the pair and the rotation, and stretches each round to eight minutes because the agent needs time to work.

<figure class="sequence">
<ol>
<li><span class="sequence__time">1 to 2 min</span><p><strong>Next step.</strong> The Navigator names the next small behaviour. The Verifier writes or approves a failing test and runs it red.</p></li>
<li><span class="sequence__time">30 s</span><p><strong>Predict.</strong> Everyone writes down what the agent will do: pass or fail, which files change, anything nobody asked for.</p></li>
<li><span class="sequence__time">2 to 3 min</span><p><strong>Run.</strong> The Navigator sends one instruction to the agent. The room may talk while it works.</p></li>
<li class="sequence__key"><span class="sequence__time">2 min</span><p><strong>Verify.</strong> The Verifier runs the full suite, reads the diff and explains it. The room checks its predictions against the result.</p></li>
<li><span class="sequence__time">30 s</span><p><strong>Commit or revert.</strong> A green change that someone can explain is committed and marked structural or behavioural. Any doubt sends the code back to the last green commit.</p></li>
<li><span class="sequence__time">When time is up</span><p><strong>Rotate.</strong> The Verifier becomes the Navigator, someone new joins from the room as Verifier, and the next round starts.</p></li>
</ol>
<figcaption>One round, about eight minutes. Nothing the agent writes is kept until a person has checked it, and Verify, the marked step, is the one the dojo exists to practise.</figcaption>
</figure>

One new person joins per round, so ten rounds give eleven people a turn at the front. With twelve in the room, trim the rounds to seven and a half minutes to fit an eleventh.

The prediction step is new in this version of the randori. It keeps the room engaged while the agent works, and it trains calibration. [METR](https://metr.org/blog/2026-02-24-uplift-update/) found self-reported AI speedups unreliable, and predicting then checking, round after round, builds a truer sense of what the agent will do.

## The dojo night, minute by minute

A dojo night runs three hours from doors to close and gives the room about 85 minutes of hands-on practice in two blocks, split by a fika (a Swedish coffee break). Hold it on the same weekday every month so people can plan around it.

| Time | Segment | Who | What happens |
| --- | --- | --- | --- |
| 16:30 | Setup | Host, sensei | Room, screen and food. Rebuild the dev container, run the tests, play one round with the agent and reset the repository to the starting tag. |
| 17:30 | Doors and food | Host | Name tags, Wi-Fi, seats facing the screen. Check photo consent. |
| 18:00 | Opening | Host | Welcome, code of conduct and the evening's plan. Read the working agreements aloud. |
| 18:05 | Sponsor slot | Sponsor or host company | Five minutes, one slide, no sales pitch. |
| 18:10 | Concept | Sensei | Ten minutes on the practice the kata trains, with one short demo. |
| 18:20 | Kata briefing | Sensei | The problem, the night's constraint, a tour of the repository and AGENTS.md, roles and rotation order. The sensei plays one demo round. |
| 18:35 | Practice block 1 | Everyone | Five rounds of eight minutes, plus a short buffer. |
| 19:20 | Fika and holdout reveal | Sensei | The sensei runs the hidden scenarios against the latest commit and shows the results next to the prediction tally. |
| 19:35 | Practice block 2 | Everyone | Five rounds. Halfway through, the customer changes one rule. |
| 20:15 | Retrospective | Sensei, scribe | Prediction tally, surprises, unchecked acceptances and rules to add. |
| 20:30 | Close | Host | Next date, repository link and the three-question survey. |
| 20:35 | Social and teardown | Host | Push the repository and retro notes, then revoke the night's credentials. |

The opening sets the tone. Say what the night is for, that every attempt can fail safely, and that everyone gets a turn but anyone may pass.

Keep the sponsor slot to five minutes and one slide. People come to practise, and the dojo keeps its credibility only if the slot stays short.

Tie the concept talk to the kata. Before Red Before Green, for example, show how a protected test stops an agent from rewriting the test it should pass.

The rule change in block two is deliberate. It tests whether the team's tests and instructions absorb a change, and whether the agent silently keeps the old rule somewhere.

The holdout reveal shows what the team didn't specify. Treat a failure as information about the spec, never as a verdict on the people at the front.

The checklists for the weeks before and the day after are in [checklists and templates](#checklists-and-templates).

## Kata catalogue

Eleven katas, ordered so a new group can run its first six nights in sequence. Each keeps a classic kata shape and adds a twist that makes the agent's habits visible.

| Kata | Level | Trains | Agentic twist | Length | Suggested night |
| --- | --- | --- | --- | --- | --- |
| [Red Before Green](#red-before-green) | Beginner | Test-first with protected tests; spotting unrequested features | Requirements arrive one card at a time, and the agent sees only the current failing test | Both blocks | 1 |
| [Spot the Cheat](#spot-the-cheat) | Beginner | Reviewing agent output; naming failure modes | Pre-generated agent diffs with planted problems; no live agent needed | One block | 2 |
| [Fare Rules](#fare-rules) | Intermediate | Example mapping, BDD, working with a customer | The customer's rulebook holds rules nobody sees unless someone asks | Both blocks | 3 |
| [Gilded Rose: Tidy First](#gilded-rose-tidy-first) | Intermediate | Characterisation tests; refactoring in small commits | The agent likely knows this kata and will offer to rewrite it in one go | Both blocks | 4 |
| [Write the AGENTS.md](#write-the-agentsmd) | Intermediate | Context engineering; executable standards | Every round starts a fresh agent session, and only the instructions carry over | Both blocks | 5 |
| [Kill the Mutants](#kill-the-mutants) | Intermediate | Test quality | High-coverage, agent-written tests that mutation testing exposes | One block | 6 |
| [Spike and Delete](#spike-and-delete) | Beginner | When vibe coding is fine; throwing work away | Vibe-code a prototype, delete it on screen, rebuild it test-first | Both blocks | Any |
| [Reproduce Your Own Work](#reproduce-your-own-work) | Advanced | Judging what agents can do; comparing diffs | The sensei's hand-written solution stays hidden until the end | Both blocks | 7 or later |
| [Parallel Worktrees](#parallel-worktrees) | Advanced | Slicing work; integration; the pipeline as referee | Three agents in three git worktrees build one feature | Both blocks | 7 or later, large groups |
| [Untrusted Input](#untrusted-input) | Advanced | Sandboxing; permissions; prompt injection | A harmless canary instruction hidden in an issue text | One block | 7 or later |
| [Agentic Code Retreat](#agentic-code-retreat) | All levels | Everything above, under constraints | Six sessions with a new constraint each, and the code deleted after every session | Full day | Special edition |

### How to prepare a kata

Dry-run every kata with the agent the week before. If the agent finishes without a single interesting decision, add a constraint or a hidden rule.

Keep repositories small and the test suite under ten seconds. Write the holdout scenarios last, from the customer's point of view, and store them outside the repository.

A one-block kata pairs well with a second run of the same kata under a new constraint.

### Red Before Green

Start from Roy Osherove's String Calculator in the language of the night, with an empty implementation and a protected tests folder. The sensei reveals one requirement card per round; the Verifier writes the failing test and the Navigator asks for the smallest change that passes it.

The prediction to watch is whether the agent implements later requirements early. With a well-known kata it often does, which opens the YAGNI conversation.

Holdout: delimiters that are special characters in regular expressions, and the error message for several negative numbers at once.

### Spot the Cheat

Before the night, the sensei has an agent complete small tasks in a throwaway repository and keeps six to eight diffs. Where the agent made no mistake of its own, the sensei plants one. Typical plants:

- a weakened or deleted test
- a hard-coded value that satisfies the test
- a swallowed exception or a skipped test
- a feature nobody asked for
- the unit under test mocked away
- an unexplained new dependency
- a secret written to a log

Each round, the pair reviews one diff, names the problem and names the sensor that would have caught it automatically. Keep this kata ready every night as the backup, since it needs no network.

### Fare Rules

Dojo Bikes, a made-up bike-share company, needs a fare calculator. The sensei plays the customer and holds the [rulebook](#dojo-bikes-rulebook) from the templates below.

Block one opens with ten minutes of example mapping. The examples become Given/When/Then scenarios, and the agent implements one scenario per round.

At the fika, the holdout scenarios show which rules nobody asked about and what the agent invented in their place. In block two, the customer changes one rule.

### Gilded Rose: Tidy First

Use [Emily Bache's Gilded Rose repository](https://github.com/emilybache/GildedRose-Refactoring-Kata), which comes in many languages. In the first rounds, the agent writes characterisation tests over the existing behaviour, and the room checks them against the requirements text before anyone refactors.

After that, each round allows one named refactoring, committed as structural, with the tests green before and after. The agent will likely offer to rewrite the whole method at once, and refusing that offer is the lesson.

Block two adds Conjured items as a single behavioural commit. Holdout: the edge rules for backstage passes and Sulfuras.

### Write the AGENTS.md

The repository carries five house rules that agents get wrong by default:

- money in integer minor units
- a project Result type instead of exceptions
- ISO 8601 dates
- one test file per module
- one banned dependency

Round one gives a fresh agent session a small task with no instructions, and the room records which rules it breaks. Every later round starts a new session and changes only the instructions file or the tooling.

The goal is the shortest file that makes a fresh agent comply. Anything a tool can check moves into a linter or a test. Holdout: a second task the file has to cover unchanged.

### Kill the Mutants

Give the room a small module with an agent-written test suite above 90% line coverage. Run the mutation tool for the language, such as mutmut for Python, Stryker for JavaScript or C#, or PIT for Java. Put the surviving mutants on screen.

Each round, the pair asks the agent to kill one mutant with a meaningful test, and the Verifier checks that the new test fails against that mutant. The retrospective asks which survivors an AI code review would have missed.

### Spike and Delete

The first fifteen minutes are open vibe coding. The room builds a throwaway prototype, such as a web page for the Fare Rules calculator, and accepts whatever works. Then the sensei deletes it on screen.

The rest of the night rebuilds the same thing test-first under the working agreements. The retrospective compares what the spike taught with what keeping it would have cost, which makes Kent Beck's line between vibe coding and augmented coding concrete.

### Reproduce Your Own Work

Before the night, the sensei builds a small feature by hand in a realistic codebase and keeps the commit hidden. The group's job is to get the agent to an equivalent result without seeing it.

At the end, both diffs go side by side: size, structure, missed cases and test quality. The exercise comes from [Mitchell Hashimoto](https://mitchellh.com/writing/my-ai-adoption-journey), who learned to work with agents by doing his own work twice.

### Parallel Worktrees

Split a feature into three slices that shouldn't touch the same files, such as three new fare types for Dojo Bikes. Three pairs each run an agent in their own git worktree, on their own screen if the venue allows.

The last 20 minutes are integration. Merge, run the full suite and the holdout scenarios, and find where the slices were less independent than everyone thought.

### Untrusted Input

The repository contains an issue text with a hidden instruction, a harmless canary. It asks the agent to create a marker file and to send a fake .env file to a mock server on the same machine.

Pairs first run the agent with broad permissions and watch whether it follows the injected text. Then they tighten the sandbox and permission settings until it can't.

Use fake secrets only. The background reading is Simon Willison's [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).

### Agentic Code Retreat

A full-day special edition on the Code Retreat format: Conway's Game of Life, 45-minute sessions, new pairs every session and the code deleted after each one. Each session adds one constraint, for example:

- people write every test
- the agent may not run the tests
- three instructions per session
- nobody reads production code, only tests and output
- plan first, and the pair edits the plan before any code

Close with a circle where everyone says what they learned and what they will try at work.

## Facilitating the dojo

The sensei makes the agent's habits and the room's habits visible by asking questions, never by driving.

### What to watch for

In the agent, drawing on the practitioners above and [Birgitta Böckeler's catalogue of failure modes](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html):

- Loops: the same failing approach, tried again and again.
- Work nobody asked for, such as extra features, options and layers of abstraction.
- Tests weakened, skipped or deleted, or a hard-coded answer that satisfies them.
- A claim that all tests pass with no full run behind it.
- Silent assumptions where a clarifying question belonged, and no pushback on a bad instruction.
- Bloat: needless abstractions, dead code and far more lines than the problem needs.
- Diffs too large to explain in two minutes.

In the people:

- The pair goes quiet and lets the agent decide.
- A change gets committed that nobody can explain.
- The same instruction gets reworded five times instead of reverting and rethinking.
- Someone hand-patches the agent's output instead of fixing the instruction.
- The room drifts while the agent runs.
- One senior voice makes every decision.

### Questions that work

- What do you expect it to change?
- How would we know if it cheated?
- Can you explain this diff without the agent's summary?
- Would you merge this at work tomorrow?
- What did the agent decide that we should have decided?
- What would stop this from happening next time?

The sensei never takes the keyboard. If a pair is stuck for two rounds, the sensei may suggest reverting to the last green commit.

### When things break

- Model or network outage: switch to Spot the Cheat, which needs no live agent, and prepare it every night.
- Spending cap reached: show what used the budget, talk about it, then continue with Spot the Cheat.
- Agent hangs or loops: stop it, revert to the last green commit and rotate.
- The room splits into believers and sceptics: point both at the evidence on screen, meaning the tests, the holdout results and the prediction tally.

### The retrospective

Fifteen minutes, in three parts.

1. Prediction tally, 3 minutes. How often the room predicted correctly, and about what. It's calibration, not a score.
2. Three questions, 8 minutes. What surprised you about the agent? What did we accept without checking? What will you do differently at work this week?
3. Rules to add, 4 minutes. The room picks one to three surprises and writes the AGENTS.md line or sensor that would prevent each. The scribe commits them to the dojo repository, so the next night starts with a better harness.

Use the names from the [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns/pattern-catalog/) catalogue, such as Context Rot, to label what happened. Shared names make the same patterns easier to spot at work.

## Practical setup

These are the defaults I'd start a dojo with. Swap in your own venue and tools.

| Decision | Default | Why |
| --- | --- | --- |
| Cadence | Monthly, same weekday, 17:30 to 20:30 | Regular nights build a returning group |
| Audience | Colleagues, clients and the local developer community | Mixed groups ask better questions |
| Language | One shared language, announced with the invitation | Nobody gets lost halfway through a round |
| Group size | Up to 12 per screen, 24 with two screens and two senseis | Everyone gets a turn at the front |
| Agent | Any agent that edits files, runs commands and reads an instructions file. The examples here use [Claude Code](https://code.claude.com/docs/en/overview) | The practices don't depend on one tool |
| Model access | Dojo-only credentials with a hard spending cap | An agent session can cost real money within hours |
| Environment | A [dev container](https://code.claude.com/docs/en/devcontainer) built from the kata repository | Disposable, identical every night, no access to real secrets |
| Instructions | AGENTS.md as the single source, plus a CLAUDE.md whose only line is `@AGENTS.md` | Claude Code [doesn't read AGENTS.md on every setup](https://mer.vin/news/claude-code-now-reads-agents-md-when-theres-no-claude-md/), and the import works everywhere |
| Protected tests | A PreToolUse [hook](https://code.claude.com/docs/en/hooks-guide) that blocks edits to the tests folder during implementation | A rule the agent can't argue its way around |
| Data | Kata repositories only; no client code, client data or personal data | Practice stays practice |

Claude Code also runs through [Microsoft Foundry](https://code.claude.com/docs/en/microsoft-foundry), Amazon Bedrock and Google Cloud, for organisations that keep model access in their own cloud.

### People

Ask an experienced facilitator to run the first three nights. After that, rotate the sensei role among people who have attended at least three nights.

Keep the host and the sensei separate. Facilitating and hosting the same night means doing both badly.

### Costs

Three cost lines: food and fika, model usage capped per night, and printed agreement posters and prediction cards. A meeting room your company already has keeps the venue free. Agree the nightly model budget, and who approves it, before the first night.

### Measuring quality

After every night, attendees rate three statements from 1 to 5:

1. I learned something I'll use at work.
2. The night was well run.
3. I'd come again.

Track return attendance and the number of rules added to the dojo's AGENTS.md as well, and review it all every six months.

### Consent and data

Ask about accessibility needs and photo consent at sign-up. Keep the attendee list only as long as the night and its follow-up need it.

## Checklists and templates

Copy these into your own planning. They cover a night from four weeks out to the follow-up.

### Before the night

- [ ] Four weeks out: fix the date, venue and sensei, confirm the sponsor and publish the announcement.
- [ ] Two weeks out: choose the kata and dry-run it with the agent. Add a twist if the agent finishes without one interesting decision.
- [ ] Two weeks out: write the holdout scenarios and keep them outside the repository.
- [ ] One week out: send a reminder with the repository link and confirm the headcount for food.
- [ ] One week out: set the model spending cap and create dojo-only credentials.
- [ ] Day before: build the dev container from a clean clone and tag the starting commit.
- [ ] Day before: prepare the Spot the Cheat diffs as the offline fallback.

### Machine setup

- [ ] The dev container builds from a clean clone.
- [ ] The agent signs in with dojo-only credentials, and the spending cap is active.
- [ ] No real secrets or client data exist anywhere in the environment.
- [ ] The full test suite runs in under ten seconds.
- [ ] The protected-tests hook is active and tested.
- [ ] AGENTS.md and the one-line CLAUDE.md are in place.
- [ ] Editor and terminal fonts are at 18 pt or larger, and notifications are off.
- [ ] The screen is split between the agent and the tests and diff.
- [ ] The whole room can see the timer.

### After the night

- [ ] Push the repository, retro notes and AGENTS.md changes the same evening.
- [ ] Revoke the night's credentials.
- [ ] Share the survey results and the next date within two days.

### Announcement text

```markdown
# Agentic Development Dojo: <kata name>

Coding agents write a lot of our code now. The skills that decide whether that code is any good, such as specifying, testing, reviewing and knowing when to throw work away, are the ones we rarely practise.

Join us for three hours of hands-on practice: one screen, one coding agent, and a group that takes turns steering it while everyone else predicts and checks its work. No competition, nothing ships, all levels welcome.

When: <date>, 17:30 to 20:30 (programme starts at 18:00)
Where: <venue>
Bring: curiosity. No laptop needed.
Food and fika included.

Hosted by <host>.
```

### Kata card

```markdown
## Kata: <name>
Level: <beginner, intermediate or advanced>
Trains: <practices>
Starting point: <repository and tag>
Agentic twist: <what makes the agent's habits visible>
Constraint for the night: <one rule>
Holdout scenarios: <where they live; sensei only>
Block two change: <the rule the customer changes>
Retro question: <one question specific to this kata>
```

### Starter AGENTS.md

```markdown
# AGENTS.md

## What this is
A practice repository for the Agentic Development Dojo. Small, test-first, nothing ships.

## Commands
- Run all tests: <command>
- Run one test: <command>
- Lint and format: <command>

## How we work
- Use red/green TDD. A failing test exists before any production code.
- Never edit, skip or delete existing tests. If a test looks wrong, stop and say so.
- Make the smallest change that passes the current failing test. Do not implement later requirements.
- Keep structural and behavioural changes in separate commits.
- Run the full test suite before you say you are done, and show the output.
- When a requirement is ambiguous, ask instead of guessing.

## Rules added by the dojo
<!-- Each line comes from a retrospective: the date, the rule and the mistake it prevents. -->
```

And the CLAUDE.md beside it, for Claude Code:

```markdown
@AGENTS.md
```

### Dojo Bikes rulebook

The customer's copy for Fare Rules. Keep it with the sensei.

```markdown
# Dojo Bikes fare rules (customer's copy)

Open rules, shared during example mapping:
1. Unlock fee: 10 kr per ride.
2. Riding: 3 kr per started minute.
3. E-bikes: 2 kr extra per started minute.
4. Daily cap: 150 kr per rider per calendar day, unlock fees included.
5. Members: 25% off the per-minute price, but not the unlock fee or the e-bike surcharge.

Hidden rules, shared only when someone asks the right question (the holdout scenarios test these):
6. A ride under 2 minutes that ends at its starting station is free (broken bike).
7. A bike left outside a station costs a 100 kr parking fee, outside the daily cap.
8. A ride that crosses midnight counts each minute toward the day it falls in.

Block two change:
9. Members now get 25% off the e-bike surcharge too.
```

## Sources and further reading

Sources opened while writing this playbook, checked on 4 October 2026.

- Kent Beck, [Augmented Coding: Beyond the Vibes](https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes), 2025, and [kentbeck.com](https://kentbeck.com/)
- Martin Fowler, [Some thoughts on LLMs and Software Development](https://martinfowler.com/articles/202508-ai-thoughts.html), August 2025
- Thoughtworks, [The Future of Software Development Retreat](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development), February 2026
- Birgitta Böckeler, [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html), April 2026
- Mitchell Hashimoto, [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey), February 2026
- Simon Willison, [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/), December 2025
- Simon Willison, [How StrongDM's AI team build serious software without even looking at the code](https://simonwillison.net/2026/Feb/7/software-factory/), February 2026
- Simon Willison, [2026 in LLMs (so far)](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/), September 2026
- Startup Fortune, [Uncle Bob Martin says he no longer reads AI-generated code](https://startupfortune.com/uncle-bob-martin-says-he-no-longer-reads-ai-generated-code-and-the-developer-world-is-split/), July 2026
- InfoQ China via Huxiu, [Mitchell Hashimoto and Uncle Bob on reading agent code](https://m.huxiu.com/article/4879038.html), July 2026, in Chinese
- Dealroom, [Pencils down: DHH declares the end of hand-written code](https://dealroom.co/news/talk-vDjW_dRyKXY-pencils-down-dhh-declares-the-end-of-hand-written-code), September 2026
- The Decoder, [Karpathy now codes mostly in English](https://the-decoder.com/former-tesla-ai-chief-andrej-karpathy-now-codes-mostly-in-english-just-three-months-after-calling-ai-agents-useless/), 2026
- Google Cloud, [Putting the DORA AI Capabilities Model to work](https://cloud.google.com/blog/products/ai-machine-learning/from-adoption-to-impact-putting-the-dora-ai-capabilities-model-to-work/), December 2025
- METR, [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/), February 2026
- Anthropic, [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills), January 2026
- [Augmented Coding Patterns](https://lexler.github.io/augmented-coding-patterns/pattern-catalog/), a community catalogue
- [Claude Code documentation](https://code.claude.com/docs/en/overview)

Further reading:

- [Paris Coding Dojo](https://codingdojo.org/dojo/ParisDojo/) on codingdojo.org, and a summary of [classic dojo rules](https://web.cs.wpi.edu/~gpollice/Dojo.html)
- Sato, Corbucci and Bravo, Coding Dojo: An Environment for Learning and Sharing Agile Practices, Agile 2008, [doi:10.1109/Agile.2008.11](https://doi.org/10.1109/Agile.2008.11)
- Simon Willison, [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) and [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns)
- OpenAI, [Harness engineering](https://openai.com/index/harness-engineering/)
- Birgitta Böckeler on [context engineering for coding agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) and [coding agent failure modes](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)
- Martin Fowler, [Fragments, 9 February 2026](https://www.martinfowler.com/fragments/2026-02-09.html)
- Dan Shapiro, [The five levels](https://www.danshapiro.com/blog/2026/01/the-five-levels-from-spicy-autocomplete-to-the-software-factory/)
- Geoffrey Huntley, [LLMs are mirrors of operator skill](https://ghuntley.com/mirrors) and his [bio](https://ghuntley.com/bio)
- Llewellyn Falco's strong-style pairing, [summary slides](https://slides.code-maven.com/python-pair-programming-and-tdd-workshop/strong-style-pairing-navigator.html)
- Emily Bache, [Gilded Rose refactoring kata](https://github.com/emilybache/GildedRose-Refactoring-Kata), and her May 2026 picks in [Java Annotated Monthly](http://blog.jetbrains.com/idea/2026/05/java-annotated-monthly-may-2026/)
- Claude Code docs on [Microsoft Foundry](https://code.claude.com/docs/en/microsoft-foundry), [dev containers](https://code.claude.com/docs/en/devcontainer), [hooks](https://code.claude.com/docs/en/hooks-guide) and [worktrees](https://code.claude.com/docs/en/worktrees)
- Microsoft, [Claude Code and Microsoft Foundry setup](https://devblogs.microsoft.com/all-things-azure/claude-code-microsoft-foundry-enterprise-ai-coding-agent-setup/), December 2025
- [Claude Code AGENTS.md support note](https://mer.vin/news/claude-code-now-reads-agents-md-when-theres-no-claude-md/), September 2026
