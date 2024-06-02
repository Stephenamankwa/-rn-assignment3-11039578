import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, StatusBar, TextInput } from 'react-native';

const categories = [
  { id: '1', title: 'Exercise', image: require('./assets/woman_online.png') },
  { id: '2', title: 'Study', image: require('./assets/woman_desk.png') },
  { id: '3', title: 'Jogging', image: require('./assets/Jogging.jpg') },
  { id: '4', title: 'Soccer', image: require('./assets/Soccer.jpg') }, 
  { id: '5', title: 'Swimming', image: require('./assets/Swimming.jpg') },
{ id: '6', title: 'Teaching', image: require('./assets/Teaching.jpg') }, 
{ id: '7', title: 'Surfing', image: require('./assets/Surfing.jpg') },
{ id: '8', title: 'Presentation', image: require('./assets/Presentation.jpg') },

];

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'working' },
  { id: '5', title: 'UI/UX Design' },
  { id: '6', title: 'Walk ' },
  { id: '7', title: 'Run' },
  { id: '8', title: 'Swim' },
  { id: '9', title: 'Write a journal' },
  { id: '10', title: 'Read a book' },
  { id: '11', title: 'Plan for tasks' },
  { id: '13', title: 'Morning jogs' },
  { id: '14', title: 'Drink water' },
  { id: '15', title: 'Meditation' }


  
];

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hello, Devs</Text>
          <Image
            source={require('./assets/person.png')}
            style={styles.personImage}
          />
        </View>

        <TextInput
          style={styles.search}
          placeholder="Search"
        />

        <Text style={styles.sectionTitleCategories}>Categories</Text>
        <View style={styles.categories}>
          {categories.map(category => (
            <View key={category.id} style={styles.categoryBox}>
              <Text style={styles.categoryText}>{category.title}</Text>
              {category.image && <Image source={category.image} style={styles.categoryImage} />}
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitleOngoing}>Ongoing Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskBox}>
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  scrollView: {
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000'
  },
  personImage: {
    width: 46,
    height: 45,
  },
  search: {
    width: '100%',
    height: 49,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 30,
    elevation: 2,
  },
  sectionTitleCategories: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 15,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  categoryBox: {
    width: '48%',
    padding: 15,
    margin: '1%',
    backgroundColor: '#FBF9F7',
    borderColor: '#E8D1BA',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000'
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  sectionTitleOngoing: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    marginBottom: 15,
  },
  taskBox: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FBF9F7',
    borderColor: '#E8D1BA',
    borderWidth: 1,
    borderRadius: 15,
  },
  taskText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000'
  }
});

export default App;
