const script = `
(function() {
  try {
    var stored = localStorage.getItem('kyks-theme');
    var theme = stored || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export function ThemeScript() {
	// biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme script prevents FOUC, content is static and not user-controlled
	return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
