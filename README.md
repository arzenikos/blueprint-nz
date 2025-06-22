# BluePrintNZ: Astro on Netlify Platform Starter



## Module dependency resolution
```bash
rm -rf node_modules
rm -rf package-lock.json
npm install
```
## Launching the app
```
npm run dev
```

[Or check the Live Demo here!](https://blueprintnz.netlify.app/)


# Setup
## Installing WSL
```
wsl --install
```
```
wsl --set-version Ubuntu 2
```
# Install Node.js on Windows Subsystem for Linux (WSL2)
```
sudo apt update && sudo apt upgrade

sudo apt-get install curl

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

Verify installation
```
command -v nvm
```
List which versions of Node are currently installed (should be none at this point): 
```
nvm ls
```

Source: [Windows Developer Tools](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)



# Git install
On linux cli (e.g. bash)
```
sudo apt install git-all
```

Check
```
git --version
```