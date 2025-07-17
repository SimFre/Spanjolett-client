# Prerequisites

```sh
winget install --id Microsoft.VisualStudio.2022.BuildTools --source winget
```

After installation, open the **Visual Studio Installer**, click **Modify** on
"Build Tools for Visual Studio", and check **Desktop development with C++**.  
Then run:

```sh
# In the project folder.
npm i

# in the src-tauri folder
cargo update
```

