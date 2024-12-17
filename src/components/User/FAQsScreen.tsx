import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";

const FAQsScreen = ({ navigation }: any) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "1.  Recognizing the signs of domestic violence.",
      details: [
        {
          q: "What is domestic violence?",
          a: "Domestic violence is controlling or coercive behavior by one family member that is intended to harm or threaten another family member.",
        },
        {
          q: "What are the common signs of domestic violence?",
          a: "Some signs include controlling words, isolating behavior, using physical or verbal force to hurt others, financial control, and threats of violence.",
        },
        {
          q: "Why is it difficult for a person experiencing domestic violence to leave a relationship?",
          a: "Many factors such as fear, financial dependence, social and emotional pressure, and lack of support can make it difficult.",
        },
      ],
    },
    {
      id: 2,
      question: "2.  How to get help.",
      details: [
        {
          q: "Where can I get help?",
          a: "There are many organizations that provide support, such as hotlines, social centers, and nonprofits. Seek support from friends or family as well.",
        },
        {
          q: "How can I prepare an escape plan?",
          a: "Save important documents, arrange for safe housing, and make a list of emergency phone numbers.",
        },
        {
          q: "Can I get a protection order?",
          a: "Yes, you can get a protection order from the government to prevent further harm.",
        },
      ],
    },
    {
      id: 3,
      question: "3.  Rights and legality.",
      details: [
        {
          q: "What are my rights as a victim?",
          a: "You have the right to be safe and to request a protection order, report to the authorities, and access legal assistance.",
        },
        {
          q: "Where can I report domestic violence?",
          a: "You can report to your local police department or call the domestic violence hotline for more information.",
        },
      ],
    },
    {
      id: 4,
      question: "4.  Psychological support and other resources.",
      details: [
        {
          q: "What can I do to lessen the emotional impact?",
          a: "See a mental health professional, join a support group, or practice stress-reducing techniques like journaling.",
        },
        {
          q: "What resources are available?",
          a: "Articles, videos, and nonprofits can help you better understand the issue and how to deal with it.",
        },
      ],
    },
  ];

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderDetails = (details: any) => (
    <View style={styles.detailsContainer}>
      {details.map((item: any, index: number) => (
        <View key={index} style={styles.detailItem}>
          <Text style={styles.detailQuestion}>{`Q: ${item.q}`}</Text>
          <Text style={styles.detailAnswer}>{`A: ${item.a}`}</Text>
        </View>
      ))}
    </View>
  );

  const renderItem = ({ item, index }: any) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemHeader}
        onPress={() => toggleExpand(index)}
      >
        <Text style={styles.itemQuestion}>{item.question}</Text>
        {/* <Icon
          name={expandedIndex === index ? "expand-less" : "expand-more"}
          size={24}
          color="#000"
        /> */}
      </TouchableOpacity>
      {expandedIndex === index && renderDetails(item.details)}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/djiinlgh2/image/upload/v1732079773/designuxui/tllkupjkhwzixcdyaajp.png",
        }}
        style={styles.headerbg}
        resizeMode="cover"
      >

      </ImageBackground>

      <View style={styles.body}>
        <FlatList
          data={faqData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerbg: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  body: {
    marginHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: '#F9F9F9',
    overflow: 'hidden',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemQuestion: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  detailItem: {
    marginBottom: 12,
  },
  detailQuestion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  detailAnswer: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default FAQsScreen;
