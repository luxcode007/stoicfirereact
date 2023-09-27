import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  quoteCard: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorText: {
    marginTop: 10,
    fontSize: 18,
    fontStyle: 'italic',
  },
  // ... add other styles as needed
});
