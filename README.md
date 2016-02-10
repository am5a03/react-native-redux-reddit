# Readme

- This is a toy project that trying to integrate [redux](https://github.com/rackt/redux) into react native

- Largely base on the [redux author's reddit example](http://rackt.org/redux/docs/advanced/ExampleRedditAPI.html)

- A very simple reddit client that fetching the 'funny' section, supporting infinite scrolling

# Setup

- Clone repo

- npm install

- Android
	- react-native run-android
- iOS
	- Edit `./node_modules/react-native/packager/react-native-xcode.sh`, scroll to bottom to find ```--entry-file```, modify it to `src/index.ios.js`
	- Import `RedditReactReduxNative.xcodeproj` to xcode to compile

