import { ArrowDownRight, ArrowUpRight, Play, Sparkles } from 'lucide-react';

const songs = [
  { title: 'Fiesta Cancion', genre: 'Spanglish / Mariachi', image: '/art/fiesta-cancion.jpg', href: 'https://album.link/cxsh09rpdt4dw', no: '01' },
  { title: 'Bounce', genre: 'Electric pop', image: '/art/bounce.jpg', href: 'https://album.link/vvw0cpvx6zs64', no: '02' },
  { title: '6 Foot Dick', genre: 'Country comedy', image: '/art/6-foot-dick.jpg', href: 'https://album.link/mpdczcbp2mrqq', no: '03' },
  { title: 'Destruction Guitars', genre: 'Acid rock / metal', image: '/art/destruction-guitars.jpg', href: 'https://album.link/m5nffjcmcqj04', no: '04' },
  { title: 'Mysterioso', genre: 'Hip-hop instrumental', image: '/art/mysterioso.jpg', href: 'https://album.link/v2p6h0rpsq0gx', no: '05' },
];

const platforms = [
  ['Spotify', 'https://open.spotify.com/artist/3aWSqheAiOFLXuHikDWGbP'],
  ['Apple Music', 'https://music.apple.com/us/artist/sg-dietz/1608202132'],
  ['YouTube', 'https://www.youtube.com/@SGDietzMusic'],
  ['Pandora', 'https://www.pandora.com/artist/sg-dietz/ARJ5Z9Vclzqxz7Z'],
  ['Instagram', 'https://www.instagram.com/sgdietzmusic/'],
  ['TikTok', 'https://www.tiktok.com/@sgdietzmusic'],
];

const genres = ['Country', 'Hip Hop', 'Rock', 'Pop', 'R&B', 'Jazz', 'Blues', 'Classical', 'Electronic', 'Folk', 'Metal', 'Punk', 'Reggae', 'Latin', 'Mariachi', 'Gospel', 'Soul', 'Funk', 'Dance', 'Comedy', 'No Rules'];

function GenreGroup({ duplicate = false }: { duplicate?: boolean }) {
  return <div className="ticker-group" aria-hidden={duplicate || undefined}>
    {genres.map((genre) => <span className={genre === 'No Rules' ? 'no-rules' : undefined} key={genre}>{genre}<b aria-hidden="true">✦</b></span>)}
  </div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="sigil" href="#top" aria-label="SG Dietz home">SG DIETZ</a>
        <nav aria-label="Primary navigation"><a href="#music">Music</a><a href="#story">Story</a><a href="#contact">Contact</a></nav>
        <a className="listen-small" href="#music">Enter the noise <ArrowDownRight size={16} /></a>
      </header>
      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> One artist, every genre, the mismatched plaids.</p>
          <h1><span>SG</span> DIETZ</h1>
          <p className="hero-manifesto">Music for the Masses</p>
          <div className="hero-actions">
            <a className="primary" href="#music"><Play size={17} fill="currentColor" /> Hear the tracks</a>
            <a className="text-link" href="#story">Read the story <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>MISMATCHED</span><strong>PLAIDS</strong><small>EST. 2022</small></div>
        <p className="side-note">BALTIMORE · NASHVILLE · ANYWHERE LOUD</p>
      </section>
      <section className="ticker" aria-label="Genres"><div className="ticker-track"><GenreGroup /><GenreGroup duplicate /></div></section>
      <section className="releases" id="music">
        <div className="section-head">
          <p className="kicker">THE TRACKS / VOL. I</p>
          <h2>Five tracks.<br /><em>Five different worlds.</em></h2>
          <p>Every lyric, melody, and arrangement came from a human mind and a human life.</p>
        </div>
        <div className="song-stack">
          {songs.map((song) => (
            <a className="song" href={song.href} target="_blank" rel="noreferrer" key={song.title}>
              <span className="song-no">{song.no}</span><div className="cover-wrap"><img src={song.image} alt={song.title + ' cover art'} /></div>
              <div className="song-copy"><h3>{song.title}</h3><p>{song.genre}</p></div>
              <span className="play-disc"><Play size={18} fill="currentColor" /></span><ArrowUpRight className="launch" />
            </a>
          ))}
        </div>
      </section>
      <section className="film">
        <p className="film-headline">The Party Song of the Year is Here!</p>
        <div className="film-copy"><h2>Fiesta<br /><span>Cancion</span></h2><p className="film-subline">Spanglish Mariachi Party Fun</p></div>
        <div className="video-shell"><iframe src="https://www.youtube.com/embed/Fx8Aj5T5CYo?rel=0" title="Fiesta Cancion music video by SG Dietz" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
      </section>
      <section className="story" id="story">
        <div className="story-number">57</div>
        <div className="story-copy">
          <p className="kicker">THE LONG WAY AROUND</p><h2>Life Begins at Middle Age</h2><p className="lead">You don’t age out of a dream. You either start or you let the clock wind down, and your dream fades.</p>
          <div className="columns">
            <p>I’m a recording artist starting in middle age and going all in. Before the music, I built a twelve-person landscaping company, became a master stone mason, made fine art, and kept following the noise in my head.</p>
            <p>The Mismatched Plaids are the sound of refusing to pick one identity. Country can collide with hip-hop. Mariachi can crash into pop. Comedy can stand beside metal. The clash is the point.</p>
          </div>
        </div>
        <blockquote>“I don’t chase trends.<br />I follow where the music takes me.”</blockquote>
      </section>
      <section className="manifesto"><p><span className="terrifyingly">Terrifyingly</span><span className="original">Original.</span></p></section>
      <section className="connect" id="contact">
        <p className="kicker signal-kicker"><Sparkles className="signal-icon" size={56} />FIND THE SIGNAL</p>
        <div className="listen-block">
          <h2>Listen Everywhere</h2>
          <div className="platforms">{platforms.map(([name, href]) => <a href={href} target="_blank" rel="noreferrer" key={name}>{name}<ArrowUpRight size={18} /></a>)}</div>
        </div>
        <div className="direct-block">
          <h2><em>Reach Me Directly</em></h2>
          <a className="x-profile-card" href="https://x.com/SGDietzX" target="_blank" rel="noreferrer" aria-label="SG Dietz on X, @SGDietzX">
            <img className="x-avatar" src="https://dietzx.ai/g-portrait-047.png" alt="G in a black coat with a flared collar" />
            <span className="x-identity"><strong>SG Dietz</strong><small>@SGDietzX</small></span>
            <span className="x-invite">Step Into My World</span>
            <span className="x-mark" aria-hidden="true">𝕏</span>
            <span className="x-arrow" aria-hidden="true"><ArrowUpRight size={24} /></span>
          </a>
          <p className="availability">Open for music collaboration, stonework, and creative work.</p>
        </div>
      </section>
      <footer>
        <span className="corporate-line">©2026 DietzX llc. All Rights Reserved. · <a href="tel:+18552532727">855-253-2727</a> · <a href="https://dietzx.ai" target="_blank" rel="noreferrer">DietzX.ai</a></span>
        <nav className="legal-links" aria-label="Legal"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a><a href="/cookies">Cookie Notice</a><a href="/accessibility">Accessibility</a></nav>
        <a href="#top">BACK TO THE TOP ↑</a>
      </footer>
    </main>
  );
}
