module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',

      // takes the release notes from the previous step and creates/updates changelog file.
      ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],

      '@semantic-release/npm',

      // plugin to commit release assets to the project's git repository.
      ["@semantic-release/git", {
        "assets": ["package.json", "CHANGELOG.md", "package-lock.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }],

      // plugin to publish a GitHub release and comment on released Pull Requests/Issues.
      '@semantic-release/github',
    ]
  }
  