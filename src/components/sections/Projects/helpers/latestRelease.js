// One request per repo per page load: the card in both languages and the
// PDF share it. Resolves to the tag ("v0.0.22") or null when GitHub doesn't
// answer, so the caller keeps the version from the data
const requests = new Map();

export const fetchLatestRelease = (repo) => {
  if (!requests.has(repo)) {
    requests.set(
      repo,
      fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
        // A slow answer must not hold up the PDF download
        signal: AbortSignal.timeout?.(5000),
      })
        .then((response) => (response.ok ? response.json() : null))
        .then((release) => release?.tag_name ?? null)
        .catch(() => null),
    );
  }
  return requests.get(repo);
};

export const releasesUrl = (repo) => `https://github.com/${repo}/releases/latest`;
