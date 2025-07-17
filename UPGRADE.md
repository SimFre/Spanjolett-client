To upgrade all the packages in your project, you can use the following command
in your terminal: `npm update`

For a full upgrade to the latest versions (including major versions), use:

```
npm install -g npm-check-updates
ncu -u
npm install
```

- npm-check-updates (ncu) updates the version ranges in your package.json file.
- npm install installs the latest versions according to the updated
  package.json.

