import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const ForumScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://res.cloudinary.com/djiinlgh2/image/upload/v1732079773/designuxui/tllkupjkhwzixcdyaajp.png" }} // Thay bằng link ảnh background của bạn
        style={styles.headerbg}
        resizeMode="cover"
      >
      </ImageBackground>

      <ScrollView style={styles.posts}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732091492/designuxui/ujtjx5aznrhctgssuhm1.png',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.postAuthor}>Rentaro Kageru</Text>
              <Text style={styles.postDate}>October 25, 2024</Text>
            </View>
          </View>
          <Text style={styles.postContent}>
            Sis, do you have any experiences when walking alone? Tell me, my
            first time working, I’m afraid to go home alone at night.
          </Text>
          <TouchableOpacity>
            <Text style={styles.commentLink}>Write A Comment</Text>
          </TouchableOpacity>
        </View>

        {/* Comment Section */}
        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732091492/designuxui/dz6m06jqgm9y1pedfqs4.png',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.commentAuthor}>Kageyama Tobio</Text>
              <Text style={styles.commentDate}>October 25, 2024</Text>
            </View>
          </View>
          <Text style={styles.commentContent}>
            Wow, keep up the good work! I used to be catcalled by people while
            walking, but I didn’t respond, I just kept walking. Don’t put on a
            scared face, stay calm.
          </Text>
          <TouchableOpacity>
            <Text style={styles.replyLink}>Reply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732088265/designuxui/llpy9ixjqjwhqaujevja.png',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.commentAuthor}>Kageyama Tobio</Text>
              <Text style={styles.commentDate}>October 25, 2024</Text>
            </View>
          </View>
          <Text style={styles.commentContent}>
            At that time the way home was quite dark, the lighting was very
            minimal and the road was damaged, all the way. I always prayed,
            stayed focused and my cellphone was always on…… even though my mind
            was not calm because I was afraid of muggers hehehe.
          </Text>
          <TouchableOpacity>
            <Text style={styles.replyLink}>Reply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/djiinlgh2/image/upload/v1732082801/designuxui/gzyhih8cavkxab6wqmut.png',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.commentAuthor}>Nishinouya Yuu</Text>
              <Text style={styles.commentDate}>October 25, 2024</Text>
            </View>
          </View>
          <Text style={styles.commentContent}>
            There is, Mom! Back when I was in college, I was busy organizing. I
            went home at night, huh… while on the way, suddenly someone was
            stalking me, because I was scared. Finally, I pretended to call a
            friend, then I stopped at a food stall, calmed down by the seller…
          </Text>
          <TouchableOpacity>
            <Text style={styles.replyLink}>Reply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Share your story</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  headerbg: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  headerRow: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginLeft: 15,
    position: 'absolute',
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
  },
  menuButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 70,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerHeader: {
    paddingLeft: 20,
    marginTop: 55,
  },
  banner: {
    backgroundColor: '#F9A825',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#000',
  },
  posts: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  post: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  postDate: {
    fontSize: 12,
    color: '#777',
  },
  postContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  commentLink: {
    color: '#F9A825',
    fontWeight: 'regular',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  comment: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  commentDate: {
    fontSize: 12,
    color: '#777',
  },
  commentContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  replyLink: {
    color: '#F9A825',
    fontWeight: 'regular',
    textDecorationLine: 'underline',
  },
  footerButton: {
    backgroundColor: '#F57C00',
    padding: 16,
    alignItems: 'center',
    borderRadius: 10,
    margin: 16,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default ForumScreen;
