# React Native App

This is a React Native application that displays categories, ongoing tasks, and images for specific categories like "Exercise" and "Study".

Components
App
The main component that renders the entire application. It uses several other components and styles to build the user interface.

View
A container component that supports layout with flexbox, style, touch handling, and accessibility controls.

Text
A component for displaying text.

ScrollView
A scrolling container that can hold multiple child components and views. Useful for scenarios where the content is expected to be longer than the screen size.

FlatList
A performant interface for rendering a scrollable list of data. It only renders the elements that are currently visible on the screen.

Image
A component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as camera roll.

StatusBar
A component that controls the app's status bar.

TextInput
A basic component for inputting text into the app via a keyboard.

StyleSheet
A utility that allows you to create style objects. Similar to CSS stylesheets, but tailored for React Native.

Usage

Categories
View, Text, and Image components are used in combination to display categories. An corresponding conditionally displayed image can be assigned to each category.

Ongoing Tasks
The FlatList component is used to represent ongoing tasks. Iterating over a list of tasks, it renders each one using the View and Text components.


