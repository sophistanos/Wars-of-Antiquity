# Wars of Antiquity — Development Rules

## Project

This repository contains the official Wars of Antiquity website.

Wars of Antiquity (WoA) is an ancient-world Roblox gaming community.

The website should present WoA as a professional, established ancient-world gaming community.

## Core Development Rule

Make the smallest change necessary to complete the requested task.

Do NOT modify unrelated pages, components, data, styling, configuration, navigation, or functionality.

If a request concerns one section, only modify the files necessary for that section.

## Architecture

Keep website content separate from website presentation.

Use reusable components wherever appropriate.

Keep data centralized.

Do not duplicate the same information in multiple components or pages.

The following information should be stored centrally:

* Nations
* Events
* Staff members
* Site configuration
* External links

## Content Editing

Changing content should not require changing component structure.

For example:

* Changing a nation's description should only require editing nation data.
* Changing an event should only require editing event data.
* Changing a staff member should only require editing staff data.
* Changing the Discord URL should only require editing site configuration.

## Design

The visual identity should be:

* Ancient Mediterranean
* Professional
* Cinematic
* Dark
* Sophisticated
* Bronze/gold accents
* Classical typography
* Modern readable body text

Avoid:

* Generic AI-generated gradients
* Excessive animations
* Excessive gold
* Cartoon-like visuals
* Unnecessary decorative elements
* Generic SaaS design

## Responsive Design

Everything must work on:

* Desktop
* Tablet
* Mobile

Do not create desktop-only layouts.

## Existing Functionality

Before changing an existing component, understand how it is currently used.

Do not rewrite working components unnecessarily.

Do not replace an existing implementation with a completely different architecture unless explicitly requested.

## External Links

Keep important external URLs centralized.

Examples:

* Roblox
* Discord
* The Theatre
* Social media

Do not hardcode the same URL in multiple places.

## Images

Use clearly identifiable placeholders until official WoA assets are provided.

Do not invent official WoA logos, statistics, staff members, or other factual information.

## Data

Never invent:

* Community member counts
* Player counts
* Staff members
* Event results
* Historical claims presented as WoA facts
* Official statistics

Use placeholders where information has not yet been provided.

## Git Safety

Before making a significant change:

1. Inspect the existing implementation.
2. Identify the smallest set of files that need modification.
3. Do not modify unrelated files.
4. Explain which files were changed and why.

Never delete or overwrite unrelated work.

## Verification

After making changes:

* Check for TypeScript errors.
* Check for obvious lint errors.
* Ensure the affected page still works.
* Ensure responsive behavior has not been unnecessarily affected.

## Communication

When asked to make a change, briefly state:

1. What will be changed.
2. Which files are expected to change.
3. Whether any unrelated files will remain untouched.

Do not make additional improvements that were not requested.
