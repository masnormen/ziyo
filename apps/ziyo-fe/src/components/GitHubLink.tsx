/* eslint-disable @next/next/no-img-element */
export function GitHubLink() {
  return (
    <a
      href="https://github.com/masnormen/ziyo"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center text-xs font-semibold text-gray-600 hover:text-kiiro-800"
    >
      <img
        src="/github-mark.png"
        alt="GitHub"
        className="mr-1 h-4 w-4 pb-[1px]"
      />
      GitHub
    </a>
  );
}
