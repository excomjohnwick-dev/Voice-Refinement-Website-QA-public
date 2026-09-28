function LegacySite() {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const legacyIndexUrl = `${baseUrl}legacy/index.html`;
  const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  const initialPage = currentPath === '/' ? '' : `?page=${encodeURIComponent(currentPath)}`;

  return (
    <main className="legacy-shell" data-testid="legacy-site-shell">
      <iframe
        className="legacy-frame"
        data-testid="legacy-site-frame"
        title="Amazing Grace Studio"
        src={`${legacyIndexUrl}${initialPage}`}
        allow="autoplay"
        loading="eager"
        referrerPolicy="same-origin"
      />
    </main>
  );
}

export default LegacySite;