import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  StyleSheet 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockArticles = [
  { id: '1', title: 'React Native là gì?', author: 'John Doe', date: '2021-09-01' },
  { id: '2', title: 'Làm quen với Redux', author: 'Jane Smith', date: '2021-09-05' },
  { id: '3', title: 'Giới thiệu về JavaScript', author: 'Alice Johnson', date: '2021-09-10' },
  { id: '4', title: 'Hướng dẫn CSS Flexbox', author: 'Bob Brown', date: '2021-09-12' },
  { id: '5', title: 'Học lập trình web từ đâu?', author: 'Charlie Davis', date: '2021-09-15' },
  { id: '6', title: 'TypeScript cho người mới', author: 'David Wilson', date: '2021-09-18' },
  { id: '7', title: 'Node.js cơ bản', author: 'Emma Martinez', date: '2021-09-20' },
  { id: '8', title: 'GraphQL vs REST API', author: 'Frank Garcia', date: '2021-09-22' },
  { id: '9', title: 'Testing với Jest', author: 'Grace Lee', date: '2021-09-25' },
  { id: '10', title: 'Git và GitHub', author: 'Henry Taylor', date: '2021-09-28' },
  { id: '11', title: 'MongoDB căn bản', author: 'Ivy Anderson', date: '2021-10-01' },
  { id: '12', title: 'Docker cho developer', author: 'Jack Thomas', date: '2021-10-05' },
  { id: '13', title: 'CI/CD Pipeline', author: 'Kate White', date: '2021-10-08' },
  { id: '14', title: 'AWS Services tổng quan', author: 'Leo Harris', date: '2021-10-12' },
  { id: '15', title: 'Microservices Architecture', author: 'Mia Clark', date: '2021-10-15' },
  { id: '16', title: 'Web Security Best Practices', author: 'Noah Lewis', date: '2021-10-18' },
  { id: '17', title: 'Performance Optimization', author: 'Olivia Walker', date: '2021-10-20' },
  { id: '18', title: 'Design Patterns', author: 'Paul Hall', date: '2021-10-25' },
  { id: '19', title: 'Agile Development', author: 'Quinn Allen', date: '2021-10-28' },
  { id: '20', title: 'Clean Code Principles', author: 'Ryan Young', date: '2021-11-01' },
  { id: '21', title: 'Responsive Web Design', author: 'Sarah King', date: '2021-11-05' },
  { id: '22', title: 'OAuth 2.0 Authentication', author: 'Tom Scott', date: '2021-11-08' },
  { id: '23', title: 'Serverless Computing', author: 'Uma Patel', date: '2021-11-12' },
  { id: '24', title: 'Machine Learning Basics', author: 'Victor Chen', date: '2021-11-15' },
  { id: '25', title: 'Blockchain Technology', author: 'Wendy Brown', date: '2021-11-18' },
  { id: '26', title: 'Progressive Web Apps', author: 'Xavier Moore', date: '2021-11-22' },
  { id: '27', title: 'WebAssembly Introduction', author: 'Yara Ahmed', date: '2021-11-25' },
  { id: '28', title: 'API Rate Limiting', author: 'Zack Miller', date: '2021-11-28' },
  { id: '29', title: 'Database Indexing', author: 'Anna Cooper', date: '2021-12-01' },
  { id: '30', title: 'Code Review Best Practices', author: 'Ben Rogers', date: '2021-12-05' },
  { id: '31', title: 'DevOps Culture', author: 'Cathy Turner', date: '2021-12-08' },
  { id: '32', title: 'Load Balancing Strategies', author: 'Dan Phillips', date: '2021-12-12' },
  { id: '33', title: 'Caching Techniques', author: 'Eva Martinez', date: '2021-12-15' },
  { id: '34', title: 'Message Queues', author: 'Fred Campbell', date: '2021-12-18' },
  { id: '35', title: 'System Design Principles', author: 'Gina Parker', date: '2021-12-22' },
];

export default function BlogManager() {
  const [articles, setArticles] = useState(mockArticles.slice(0, 0));
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const articlesPerPage = 5;

  useEffect(() => {
    loadInitialArticles();
  }, []);

  const loadInitialArticles = () => {
    setLoading(true);
    setTimeout(() => {
      const initialArticles = mockArticles.slice(0, articlesPerPage);
      setArticles(initialArticles);
      setPage(1);
      setLoading(false);
    }, 1000);
  };

  const loadMoreArticles = () => {
    if (loadingMore || articles.length >= mockArticles.length) return;

    setLoadingMore(true);
    setTimeout(() => {
      const startIndex = page * articlesPerPage;
      const endIndex = startIndex + articlesPerPage;
      const newArticles = mockArticles.slice(startIndex, endIndex);
      
      setArticles(prev => [...prev, ...newArticles]);
      setPage(prev => prev + 1);
      setLoadingMore(false);
    }, 1500);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Danh sách bài viết</Text>
      <Text style={styles.headerSubtitle}>Số lượng bài viết: {articles.length}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!loadingMore) return null;
    
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#4CAF50" />
        <Text style={styles.footerText}>Đang tải thêm...</Text>
      </View>
    );
  };

  const renderArticle = ({ item }: { item: typeof mockArticles[0] }) => (
    <View style={styles.articleCard}>
      <Text style={styles.articleTitle}>{item.title}</Text>
      <Text style={styles.articleAuthor}>Tác giả: {item.author}</Text>
      <Text style={styles.articleDate}>Ngày đăng: {item.date}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Đang tải dữ liệu...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReached={loadMoreArticles}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    padding: 16,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'white',
  },
  articleCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  articleAuthor: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 4,
  },
  articleDate: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
});