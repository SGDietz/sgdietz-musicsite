# Codex Handoff — Extend aiASAP CentCom to support SG Dietz brand

## Context for Codex
G owns two brands:
1. **aiASAP** (aiasap.ai) — already has CentCom social posting dashboard. Codex's lane.
2. **SG Dietz** (sgdietz.com) — independent music artist. Site rebuild on Vercel currently in progress in `C:\Users\sgdie\Documents\Claude\projects\sgdietz-site\`. Claude's lane.

G wants the SG Dietz brand to use the same multi-platform posting dashboard (X / YouTube / TikTok / Facebook / Instagram / Threads). Rather than rebuild the connector stack from scratch on the SG Dietz site, the cleaner play is to extend aiASAP CentCom so it can manage **multiple brand profiles** under a single login.

## The ask for Codex
Add a **brand profile** concept to aiASAP CentCom. After login, G picks which brand he's posting as (`aiASAP` or `SG Dietz`), and the dashboard shows that brand's connected accounts, drafts, and post history. Each brand has its own:

- OAuth tokens (separate X / YouTube / TikTok / Meta apps per brand, or shared apps with per-brand auth)
- Account handles (e.g., `@aiASAPai` vs `@SGDietzMusic` for X)
- Artwork / asset library (the "TurboCharge Artwork" panel)
- Draft posts and history
- Post specs (sizes, copy templates) per platform

## Required brand identity for SG Dietz

```
Brand name:        SG Dietz
Also known as:     SG Dietz and his Mismatched Plaids
Positioning:       Every major genre humans have ever made — from one artist.
Genres:            country, hip-hop, metal, pop, dance, mariachi, blues, rock, comedy
Primary domain:    sgdietz.com
Primary email:     SGDietz@pm.me
```

## SG Dietz social account handles (already live)

```
X / Twitter:       @SGDietzMusic    https://x.com/SGDietzMusic
TikTok:            @sgdietzmusic    https://www.tiktok.com/@sgdietzmusic
YouTube:           @SGDietzMusic    https://www.youtube.com/@SGDietzMusic
Instagram:         @sgdietzmusic    https://www.instagram.com/sgdietzmusic/
Facebook:          (G to confirm or create)
Threads:           (G to confirm or create)
```

## SG Dietz streaming presence (link, don't post — these are external)

```
Spotify:           https://open.spotify.com/artist/3aWSqheAiOFLXuHikDWGbP
Apple Music:       https://music.apple.com/us/artist/sg-dietz/1608202132
YouTube Music:     https://music.youtube.com/channel/UCs3H3g89UkHGIyvvuy2bx2A
Pandora:           https://www.pandora.com/artist/sg-dietz/ARJ5Z9Vclzqxz7Z
Deezer:            https://www.deezer.com/us/artist/159395992
Amazon Music:      https://music.amazon.com/artists/B09RQ3C3HF/sg-dietz
```

## SG Dietz catalog (for post drafts referencing tracks)

```
Fiesta Cancion        Spanglish-mariachi      https://album.link/cxsh09rpdt4dw
Bounce                Pop                     https://album.link/vvw0cpvx6zs64
6 Foot Dick           Country comedy          https://album.link/mpdczcbp2mrqq
Destruction Guitars   Acid rock               https://album.link/m5nffjcmcqj04
Mysterioso            Hip-hop instrumental    https://album.link/v2p6h0rpsq0gx
```

YouTube video for Fiesta Cancion: `Fx8Aj5T5CYo` (https://www.youtube.com/watch?v=Fx8Aj5T5CYo)

## Brand visual identity for SG Dietz

```
Palette:           warm earth tones (mariachi-inspired)
                   --bg:      #fdf8f1
                   --bg-alt:  #f4ead9
                   --ink:     #2a1a10
                   --accent:  #c0392b   (mariachi red)
                   --warm:    #e67e22   (terracotta)
                   --gold:    #d4a64a
Typography:        Helvetica Neue / Arial body, Georgia serif headings
Tone:              earnest, motivational, anti-AI-music stance
Banner art:        mariachi-themed; available at sgdietz.com/public/art/banner.jpg
Album covers:      sgdietz.com/public/art/{fiesta-cancion,bounce,6-foot-dick,destruction-guitars,mysterioso}.jpg
```

## Suggested data model change in CentCom

```
brands           id, slug, display_name, tagline, primary_color, logo_url, owner_user_id
brand_accounts   id, brand_id, platform, handle, oauth_token, oauth_refresh, scopes, expires_at
brand_assets     id, brand_id, name, type, url, dimensions, intended_platforms[]
drafts           id, brand_id, body, attachments[], target_platforms[], status, scheduled_at
posts            id, draft_id, platform, external_id, posted_at, status, response_payload
```

Existing aiASAP rows get `brand_id = (aiasap brand id)`. New `SG Dietz` brand row + new connection records.

## What does NOT need to change
- Authentication (still G's single login)
- Posting endpoints / queue / scheduler
- Drafting UI (just gains a brand picker at the top)

## Cross-lane rule for Claude (read this, don't violate)
Claude (working on sgdietz.com static site) will **not** touch aiASAP CentCom code, will **not** read aiASAP repo, and will **not** post to its DB. The SG Dietz public site (sgdietz.com) stays a simple static site — no posting logic. All posting goes through aiASAP CentCom under the SG Dietz brand profile.

## Order of operations
1. Codex extends CentCom with brand-profile model (this brief).
2. Claude finishes deploying sgdietz.com as a static site on Vercel (in progress).
3. G connects SG Dietz social accounts inside the upgraded CentCom.
4. G drafts/posts SG Dietz content from CentCom; sgdietz.com stays the public-facing destination linked from those posts.

## TL;DR for Codex
> Add multi-brand support to aiASAP CentCom. Add SG Dietz as the second brand. SG Dietz brand identity, account handles, catalog, and visuals are above. Don't touch sgdietz.com — Claude owns that.
