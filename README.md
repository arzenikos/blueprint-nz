# BluePrintNZ: Astro on Netlify Platform Starter
[Live Demo available here!](https://blueprintnz.netlify.app/)

## Launching the app locally
Requirement:


## Checking out the most recent branch
```

```

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


# Starter
Install node & npm via nvm: need to update & manage packagess like package.json
```
$ # Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.16.0".
nvm current # Should print "v22.16.0".

# Verify npm version:
npm -v # Should print "10.9.2".

````

cd to the cloned repo and run
```
$ npm i
```

/*
Currently: this is where it was stored

$ export NVM_DIR="$HOME/.nvm"

Arsenie@DESKTOP-I6TUJ7K MINGW64 /
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm


$ source ~/.bashrc   # or source ~/.zshrc
bash: /c/Users/Arsenie/.bashrc: No such file or directory

$ nvm use 22
Now using node v22.16.0 (npm v10.9.2)
$ which node
/c/Users/Arsenie/.nvm/versions/node/v22.16.0/bin/node

$ which npm
/c/Users/Arsenie/.nvm/versions/node/v22.16.0/bin/npm
*/
