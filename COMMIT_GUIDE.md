# Commit Guide — Osaki Vormir

## Quick Reference

```bash
git add -A
git commit -m "type: description"
git push
```

## Commit Types

| Type | Use for |
|------|---------|
| `feat` | New features, sections, content |
| `fix` | Bug fixes, broken links, typos |
| `refactor` | Code restructuring, no behavior change |
| `style` | CSS, formatting, spacing |
| `content` | Copy changes, text updates |
| `chore` | Config, deps, tooling |
| `remove` | Deleting sections, files, features |

## Rules

- **One change per commit** — don't batch unrelated changes
- **Use present tense** — "add hero section" not "added"
- **No period at end** of subject line
- **Keep subject under 50 chars**
- **Body optional** — only if explanation needed

## Examples

```
feat: add testimonials carousel
content: update hero headline for consulting
remove: delete pricing section
fix: correct navbar link to contact page
style: tighten spacing on mobile hero
```

## Pre-Commit Checklist

- [ ] Astro dev server builds without errors (`npm run build`)
- [ ] Only intended files are staged (`git status`)
- [ ] Commit message follows type prefix

## Repo Info

- **Remote:** `https://github.com/osaki-io/osaki-vormir`
- **Branch:** `master`
- **GH Account:** osaki-io
